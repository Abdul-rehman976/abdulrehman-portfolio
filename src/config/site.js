// ---------------------------------------------------------------------------
// Single source of truth for site-wide SEO values.
//
// IMPORTANT: If you move this site to a custom domain (recommended once you
// have one — e.g. abdulrehman.dev), update SITE_URL below AND the mirrored
// constant in scripts/generate-static-pages.mjs, then redirect the old
// Vercel URL(s) to the new domain with a 301. Keeping this in exactly one
// place (plus its build-script mirror) is what stops the canonical-URL
// confusion flagged in the SEO audit from happening again.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://abdulrehman-portfolio-oj3a.vercel.app';
export const SITE_NAME = 'Abdul Rehman Portfolio';
export const AUTHOR_NAME = 'Abdul Rehman';
export const AUTHOR_EMAIL = 'chabdulrehman976@gmail.com';
export const AUTHOR_LOCATION = { locality: 'Lahore', region: 'Punjab', country: 'PK' };

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/abdul-rehman-328b13396',
  github: 'https://github.com/Abdul-Rehman-gif',
  whatsapp: 'https://wa.me/923134004948',
};

export const DEFAULT_TITLE = 'Abdul Rehman | Frontend Developer & AI Automation';
export const DEFAULT_DESCRIPTION =
  'Abdul Rehman is a frontend developer and CS student in Lahore, Pakistan, building React & Next.js apps and AI automation workflows with n8n.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
