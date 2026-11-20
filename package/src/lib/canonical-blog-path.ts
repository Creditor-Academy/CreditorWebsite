/**
 * Map lowercase blog aliases onto the canonical /Blogs route.
 *
 * Comparisons are case-sensitive on purpose. Next.js compiles next.config
 * redirects with path-to-regexp `sensitive: false`, so a `/blogs` → `/Blogs`
 * rule also matches `/Blogs` and redirects forever. `/Blogs` must fall through.
 *
 * `/blogs` is checked before `/blog` so `/blogs/post` is not treated as `/blog`.
 */
export function canonicalBlogPath(pathname: string): string | null {
  if (pathname === "/blogs" || pathname.startsWith("/blogs/")) {
    return "/Blogs" + pathname.slice("/blogs".length);
  }
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return "/Blogs" + pathname.slice("/blog".length);
  }
  return null;
}
