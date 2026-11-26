/**
 * Zoom credentials come only from the server environment.
 * There is no hardcoded fallback token.
 */

export function getZoomAccessTokenFromEnv(): string | null {
  const token = process.env.ZOOM_ACCESS_TOKEN?.trim() ?? "";
  if (!token) {
    console.error(
      "[zoom] ZOOM_ACCESS_TOKEN is not set. Refusing to call Zoom. Set ZOOM_ACCESS_TOKEN in the server environment."
    );
    return null;
  }
  return token;
}

/**
 * Live registration forwards a fresh bearer from the refresh flow when the
 * browser has one. Otherwise the server token is used. Never a source literal.
 */
export function resolveZoomAccessToken(authorizationHeader: string | null): string | null {
  const match = authorizationHeader?.match(/^Bearer\s+(.+)$/i);
  const bearer = match?.[1]?.trim();
  if (bearer) return bearer;
  return getZoomAccessTokenFromEnv();
}
