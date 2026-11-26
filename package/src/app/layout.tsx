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
        {/* The home hero image is preloaded by next/image (priority) on the home page only.
            A global preload here downloaded an unused copy on every page. */}
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
        {/* Microsoft Clarity Analytics - Deferred to improve LCP */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "td64021cya");
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
