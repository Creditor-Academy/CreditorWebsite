/**
 * Sitemap cleanup for next-sitemap (wired in at the bottom of next-sitemap.config.js).
 *
 * Google Search Console (26 Nov 2026) reported these sitemap URLs as
 * "Page with redirect", "Soft 404" or "Duplicate": they should not be in the
 * sitemap. Nothing is deleted from the site; the pages and redirects keep
 * working, they are only left out of sitemap.xml so Google spends its crawl on
 * the real pages.
 *
 * Kept in its own file and applied as a wrapper so it does not touch the same
 * lines as the open PRs that edit the exclude list in next-sitemap.config.js.
 * Entries that are already excluded there are simply excluded twice.
 */

// URLs that only redirect somewhere else (the destination is already listed).
const REDIRECT_ONLY = [
  '/about', // -> /about-us
  '/contact', // -> /contact-us
  '/become', // -> /services/course-cataloges/become-private
  '/operate', // -> /services/course-cataloges/operate-private
  '/private', // -> /services/course-cataloges/financial-freedom
  '/projects', // -> /masterclass-membership
];

// Alternate design drafts (noindex duplicates of the live course pages).
const DRAFTS = ['/become-wonder', '/operate-wonder', '/private-wonder', '/projects-wonder'];

// Cart, checkout and account pages (their canonical points at /services/tradeline-exchange).
const ACCOUNT_PAGES = [
  '/services/tradeline-exchange/cart',
  '/services/tradeline-exchange/checkout',
  '/services/tradeline-exchange/checkout/*',
  '/services/tradeline-exchange/my-account',
];

// Admin / post-registration pages without a canonical.
const NO_INDEX_PAGES = ['/pma-submissions', '/event-registration', '/webinar-recording', '/webinar-recording/*'];

const EXCLUDE = [...REDIRECT_ONLY, ...DRAFTS, ...ACCOUNT_PAGES, ...NO_INDEX_PAGES];

/**
 * /blog/<slug> only redirects (301) to /Blogs/<slug>. The five /blog/* entries
 * came from the template files in markdown/blogs/; four of them have no journal
 * post at all ("Journal Not Found"). The real journal posts are listed under
 * /Blogs/<slug>, so no /blog/* URL belongs in the sitemap.
 */
const isLowercaseBlogAlias = (loc) => /^\/blogs?(\/|$)/.test(loc);

function matches(loc, pattern) {
  if (pattern.endsWith('/*')) return loc.startsWith(pattern.slice(0, -1));
  return loc === pattern;
}

function withSitemapCleanup(config) {
  const exclude = [...new Set([...(config.exclude || []), ...EXCLUDE])];
  const baseTransform = config.transform;
  const baseAdditionalPaths = config.additionalPaths;

  const keep = (loc) => loc && !isLowercaseBlogAlias(loc) && !exclude.some((p) => matches(loc, p));

  return {
    ...config,
    exclude,
    transform: async (cfg, loc) => {
      if (!keep(loc)) return null;
      return baseTransform
        ? baseTransform(cfg, loc)
        : {
            loc,
            changefreq: cfg.changefreq,
            priority: cfg.priority,
            lastmod: cfg.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: cfg.alternateRefs ?? [],
          };
    },
    ...(baseAdditionalPaths
      ? {
          additionalPaths: async (cfg) => {
            const extra = (await baseAdditionalPaths(cfg)) || [];
            return extra.filter((entry) => entry && keep(entry.loc));
          },
        }
      : {}),
  };
}

module.exports = { withSitemapCleanup, EXCLUDE, isLowercaseBlogAlias };
