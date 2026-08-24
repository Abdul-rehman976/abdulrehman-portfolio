import { useEffect } from 'react';
import { SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_URL } from '../config/site';

function setMetaByName(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Keeps <title>, meta description/OG/Twitter tags, the canonical link and an
 * optional extra JSON-LD block in sync with the current route.
 *
 * Prerendered static shells (see scripts/generate-static-pages.mjs) already
 * ship the correct tags in the initial HTML for crawlers that don't run JS.
 * This hook is what keeps them correct for real users who navigate between
 * routes client-side without a full page reload, and acts as a safety net
 * everywhere else.
 */
export default function useDocumentHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  jsonLd = null,
  noindex = false,
} = {}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    setMetaByName('description', description);
    setMetaByName('robots', noindex ? 'noindex, follow' : 'index, follow');
    setCanonical(canonicalUrl);

    setMetaByProperty('og:type', path === '/' ? 'website' : 'article');
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', canonicalUrl);
    setMetaByProperty('og:site_name', SITE_NAME);
    setMetaByProperty('og:image', image);

    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', image);

    setJsonLd('route-jsonld', jsonLd);

    // Reset the extra JSON-LD block when leaving the route so it doesn't
    // leak stale structured data onto the next page.
    return () => setJsonLd('route-jsonld', null);
  }, [title, description, path, image, jsonLd, noindex]);
}
