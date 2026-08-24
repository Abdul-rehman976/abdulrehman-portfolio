// ---------------------------------------------------------------------------
// Postbuild step. Runs after `vite build` (see package.json "build" script).
//
// Vite outputs a single dist/index.html for this SPA. That's fine for real
// visitors (React Router handles /projects/:slug entirely client-side), but
// it means every route would otherwise share one <title>/<meta description>
// and crawlers that don't execute JavaScript would see identical content on
// every project page.
//
// This script fixes that without a full SSR migration: for each project it
// writes a real dist/projects/<slug>/index.html file — a copy of the built
// shell with that project's title, meta description, canonical URL, Open
// Graph/Twitter tags, and JSON-LD baked directly into the HTML, plus a
// <noscript> fallback with real visible text. The React app still boots
// from the same bundle and takes over immediately, so interactive users see
// no difference. Vercel serves a matching static file before it falls back
// to the SPA rewrite in vercel.json, so these are served as-is at
// /projects/<slug>.
//
// IMPORTANT: SITE_URL here is a mirror of src/config/site.js. If you change
// one, change the other.
// ---------------------------------------------------------------------------

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const SITE_URL = 'https://abdulrehman-portfolio-oj3a.vercel.app';
const AUTHOR_NAME = 'Abdul Rehman';

async function main() {
  if (!existsSync(DIST)) {
    console.error('[generate-static-pages] dist/ not found — run `vite build` first.');
    process.exit(1);
  }

  const templatePath = path.join(DIST, 'index.html');
  const template = await readFile(templatePath, 'utf8');

  const projectsRaw = await readFile(path.join(ROOT, 'src/data/projects.json'), 'utf8');
  const projects = JSON.parse(projectsRaw);

  await Promise.all(projects.map((p) => writeProjectPage(template, p)));
  await writeSitemap(projects);
  await ensureRobotsTxt();

  console.log(`[generate-static-pages] Prerendered ${projects.length} project pages, sitemap.xml, robots.txt.`);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function replaceTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  // Tag not found (shouldn't happen given our index.html), insert before </head>
  return html.replace('</head>', `${replacement}\n</head>`);
}

async function writeProjectPage(template, project) {
  const url = `${SITE_URL}/projects/${project.slug}`;
  const title = `${escapeHtml(project.title)} | ${AUTHOR_NAME} — Project Case Study`;
  const description = escapeHtml(project.summary);
  const ogImage = `${SITE_URL}/og-image.jpg`;

  let html = template;

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = replaceTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="article" />`
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${ogImage}" />`
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.desc,
      url,
      creator: { '@type': 'Person', name: AUTHOR_NAME, url: SITE_URL },
      keywords: project.stack.join(', '),
      genre: project.tag,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/#portfolio` },
        { '@type': 'ListItem', position: 3, name: project.title, item: url },
      ],
    },
  ];
  const jsonLdScript = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  html = html.replace('</head>', `${jsonLdScript}\n</head>`);

  // Visible fallback for crawlers/readers that don't execute JavaScript.
  const noscript = `<noscript><main><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(
    project.desc
  )}</p><p>Stack: ${escapeHtml(project.stack.join(', '))}</p></main></noscript>`;
  html = html.replace('<div id="root"></div>', `<div id="root"></div>\n  ${noscript}`);

  const outDir = path.join(DIST, 'projects', project.slug);
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), html, 'utf8');
}

async function writeSitemap(projects) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE_URL}/`, priority: '1.0' },
    ...projects.map((p) => ({ loc: `${SITE_URL}/projects/${p.slug}`, priority: '0.7' })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  await writeFile(path.join(DIST, 'sitemap.xml'), xml, 'utf8');
}

async function ensureRobotsTxt() {
  const dest = path.join(DIST, 'robots.txt');
  if (existsSync(dest)) return; // already copied from public/ by Vite
  const content = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  await writeFile(dest, content, 'utf8');
}

main().catch((err) => {
  console.error('[generate-static-pages] Failed:', err);
  process.exit(1);
});
