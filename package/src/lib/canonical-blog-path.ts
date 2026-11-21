/**
 * Map non-canonical blog URLs onto /blogs.
 *
 * Comparisons are case-sensitive on purpose. Next.js compiles next.config
 * redirects with path-to-regexp `sensitive: false`, so a capitalized /Blogs
 * rule also matches /blogs and redirects forever. This helper is only used
 * from middleware, which sees the request path as sent.
 *
 * /blogs is the canonical route and must return null.
 * /blog is checked as its own prefix so /blogs/post is not treated as /blog.
 */
export function canonicalBlogPath(pathname: string): string | null {
  if (pathname === "/blogs" || pathname.startsWith("/blogs/")) return null;

  if (pathname === "/Blogs" || pathname.startsWith("/Blogs/")) {
    return "/blogs" + pathname.slice("/Blogs".length).toLowerCase();
  }

  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return "/blogs" + pathname.slice("/blog".length).toLowerCase();
  }

  const match = pathname.match(/^\/([^/]+)(\/.*)?$/);
  if (!match) return null;
  const segment = match[1];
  const rest = (match[2] ?? "").toLowerCase();
  const lower = segment.toLowerCase();
  if ((lower === "blogs" || lower === "blog") && segment !== "blogs") {
    return "/blogs" + rest;
  }
  return null;
}
