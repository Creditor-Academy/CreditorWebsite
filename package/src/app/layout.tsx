import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ClientLayoutShell } from "./providers/ClientLayoutShell";
import { MetaPixelHead, MetaPixelNoscript } from "./components/analytics/MetaPixel";
import type { Metadata } from "next";
// Root layout must be a Server Component. Client-only logic moved into ClientLayoutShell.

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap", // Optimize font loading - prevents invisible text during font load
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource hints — keep to ≤4 preconnects to avoid Lighthouse warning */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.lmsathena.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Preload LCP hero image — f_auto,q_auto,w_1920 for fastest delivery */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/jup2hjfk/image/upload/f_auto,q_auto,w_1920/v1784883256/lifestylebg_l9rhch.png"
          fetchPriority="high"
        />
        {/* Google Site Verification */}
        {/* <meta name="google-site-verification" content="pH5h_UHFyDB48WepO74L0KD0hE-6UE7vSYLxpv_9vK4" />
        <meta name="google-site-verification" content="nDoDpJQvkKIVVuuxj-MbkiGSJaM6p9JhM7GFy8SSM8o" /> */}
        <meta name="google-site-verification" content="VQSF1U-8I6_3TYdeghSPDgLE-GTZl-SWEtM3WzerVLg" />
      </head>
      <body className={manrope.className}>
        {/* Meta Pixel Code */}
        <MetaPixelHead />
        <MetaPixelNoscript />
        {/* Google Tag Manager - Deferred to improve LCP */}
        <Script
          id="gtm-head"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TQTBK5CG');
            `,
          }}
        />
        {/* Google Ads - Deferred to improve LCP */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17542559364"
          strategy="lazyOnload"
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQTBK5CG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Microsoft Clarity Analytics - Deferred; gated to public marketing pages,
            logged-out, non-internal (?internal=1), non-India-timezone visitors */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              /* Clarity gate (traffic hygiene). Clarity loads ONLY when the visitor is on a public marketing
                 page of creditoracademy.com, is not logged in, is not flagged internal (?internal=1), is not a
                 headless/prerender browser, and the browser timezone is not India (Asia/Kolkata|Asia/Calcutta).
                 ?internal=1 sets a 2-year flag (cookie on .creditoracademy.com + localStorage); ?internal=0 clears it.
                 dataLayer gets traffic_type: internal|external, and geo_excluded: "IN" for India-timezone browsers.
                 NOTE: the India check is a best-effort browser-timezone check, not IP geolocation. */
              (function (w, d) {
                var CFG = {"id": "td64021cya", "hosts": ["creditoracademy.com", "www.creditoracademy.com"], "cookieDomain": ".creditoracademy.com", "mode": "deny", "exact": [], "prefixes": ["/signup/", "/forgot-password/", "/login/", "/signin/", "/api/", "/dashboard/", "/admin/", "/account/", "/checkout/", "/payment/"], "tokenKeys": ["user", "token", "accessToken"], "tokenCookies": [], "delayMs": 0};
                var KEY = "athena_internal_traffic";
                var pushed = {};
                var loaded = false;
                var timer = null;
                function push(k, v) {
                  if (pushed[k] === v) return;
                  pushed[k] = v;
                  var o = {}; o[k] = v;
                  w.dataLayer = w.dataLayer || [];
                  w.dataLayer.push(o);
                }
                function readFlag() {
                  try { if (w.localStorage.getItem(KEY) === "1") return true; } catch (e) {}
                  return d.cookie.split("; ").indexOf(KEY + "=1") !== -1;
                }
                function writeFlag(on) {
                  var dom = CFG.cookieDomain && ("." + location.hostname).slice(-CFG.cookieDomain.length) === CFG.cookieDomain
                    ? "; domain=" + CFG.cookieDomain : "";
                  try { if (on) w.localStorage.setItem(KEY, "1"); else w.localStorage.removeItem(KEY); } catch (e) {}
                  d.cookie = on
                    ? KEY + "=1; max-age=63072000; path=/; SameSite=Lax" + dom
                    : KEY + "=; max-age=0; path=/; SameSite=Lax" + dom;
                }
                function syncFlag() {
                  var p = null;
                  try { p = new URLSearchParams(location.search).get("internal"); } catch (e) {}
                  if (p === "1") writeFlag(true); else if (p === "0") writeFlag(false);
                  return readFlag();
                }
                function loggedIn() {
                  var i, v;
                  for (i = 0; i < CFG.tokenKeys.length; i++) {
                    try {
                      v = w.localStorage.getItem(CFG.tokenKeys[i]) || w.sessionStorage.getItem(CFG.tokenKeys[i]);
                      if (v && v !== "null" && v !== "undefined") return true;
                    } catch (e) {}
                  }
                  for (i = 0; i < CFG.tokenCookies.length; i++) {
                    if (d.cookie.split("; ").some(function (c) { return c.indexOf(CFG.tokenCookies[i] + "=") === 0 && c.length > CFG.tokenCookies[i].length + 1; })) return true;
                  }
                  return false;
                }
                function indiaTz() {
                  try {
                    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    return tz === "Asia/Kolkata" || tz === "Asia/Calcutta";
                  } catch (e) { return false; }
                }
                function isBot() {
                  return !!navigator.webdriver || /HeadlessChrome|Prerender|Lighthouse|bot|crawler|spider/i.test(navigator.userAgent || "");
                }
                function routeOk(p) {
                  var path = p.length > 1 && p.charAt(p.length - 1) === "/" ? p.slice(0, -1) : p;
                  var i;
                  if (CFG.mode === "allow") {
                    if (CFG.exact.indexOf(path) !== -1) return true;
                    for (i = 0; i < CFG.prefixes.length; i++) if ((path + "/").indexOf(CFG.prefixes[i]) === 0) return true;
                    return false;
                  }
                  for (i = 0; i < CFG.prefixes.length; i++) if ((path + "/").indexOf(CFG.prefixes[i]) === 0) return false;
                  return CFG.exact.indexOf(path) === -1;
                }
                function load() {
                  if (typeof w.clarity === "function" && loaded) { w.clarity("consent", true); return; }
                  loaded = true;
                  (function (c, l, a, r, i, t, y) {
                    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
                  })(w, d, "clarity", "script", CFG.id);
                }
                function evaluate() {
                  var internal = syncFlag() || loggedIn();
                  var india = indiaTz();
                  push("traffic_type", internal ? "internal" : "external");
                  if (india) push("geo_excluded", "IN");
                  var ok = !internal && !india && !isBot() &&
                    CFG.hosts.indexOf(location.hostname) !== -1 && routeOk(location.pathname);
                  if (timer) { clearTimeout(timer); timer = null; }
                  if (!ok) {
                    if (loaded && typeof w.clarity === "function") w.clarity("consent", false);
                    return;
                  }
                  timer = setTimeout(load, CFG.delayMs);
                }
                // Re-check on SPA navigation (pushState/replaceState/back/forward).
                ["pushState", "replaceState"].forEach(function (m) {
                  var orig = history[m];
                  if (typeof orig !== "function") return;
                  history[m] = function () {
                    var r = orig.apply(this, arguments);
                    try { evaluate(); } catch (e) {}
                    return r;
                  };
                });
                w.addEventListener("popstate", function () { try { evaluate(); } catch (e) {} });
                try { evaluate(); } catch (e) {}
              })(window, document);
            `,
          }}
        />

        {/* Google Ads - Deferred to improve LCP */}
        <Script
          id="google-ads-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17542559364');
            `,
          }}
        />
        <ClientLayoutShell>
          {children}
        </ClientLayoutShell>
      </body>
    </html>
  );
}
