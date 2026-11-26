/**
 * Live Zoom sessions are off unless explicitly enabled.
 * Default is the on-demand recorded webclass, which must not call Zoom.
 *
 * Set NEXT_PUBLIC_WEBINAR_MODE=live and redeploy to turn live sessions back on.
 * Also set ZOOM_ACCESS_TOKEN on the server before enabling live mode.
 */
export function isLiveWebinarMode(): boolean {
  return process.env.NEXT_PUBLIC_WEBINAR_MODE === "live";
}
