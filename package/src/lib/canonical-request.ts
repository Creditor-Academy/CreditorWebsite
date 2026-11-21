import { canonicalBlogPath } from "./canonical-blog-path";

const APEX_HOST = "creditoracademy.com";
const WWW_HOST = "www.creditoracademy.com";
const APEX_ORIGIN = "https://creditoracademy.com";

export type CanonicalRequest = {
  host: string | null;
  forwardedHost: string | null;
  proto: string | null;
  pathname: string;
  search: string;
};

/**
 * Absolute URL to 301 to, or null when the request is already canonical.
 *
 * Blog casing is decided only by `canonicalBlogPath`, which ignores the
 * lowercase route so a case-insensitive host cannot loop /blogs → /blogs.
 * www and http are folded into the same hop when they apply.
 */
export function canonicalRedirectTarget(input: CanonicalRequest): string | null {
  const host = firstHost(input.forwardedHost) || firstHost(input.host);
  const proto = (input.proto || "").split(",")[0].trim().toLowerCase().replace(/:$/, "");
  const blogPath = canonicalBlogPath(input.pathname);
  const pathname = blogPath ?? input.pathname;
  const search = input.search || "";

  const onPublicHost = host === APEX_HOST || host === WWW_HOST;
  if (!onPublicHost) {
    if (!blogPath) return null;
    return `${pathname}${search}`;
  }

  const needsHttps = proto === "http";
  const needsApex = host === WWW_HOST;
  if (!needsHttps && !needsApex && !blogPath) return null;
  return `${APEX_ORIGIN}${pathname}${search}`;
}

function firstHost(value: string | null): string {
  if (!value) return "";
  return value.split(",")[0].trim().split(":")[0].toLowerCase();
}
