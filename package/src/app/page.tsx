import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import CreditorHomepageView from "./components/home/CreditorHomepageView";
import JsonLdScript from "./components/structured-data/JsonLdScript";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";

export const metadata: Metadata = pageMetadata("/", {
  openGraph: {
    url: siteUrl,
    siteName: "Creditor Academy",
    images: [
      {
        url: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883571/creditor-website-assets/images/hero/Banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    images: ["https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883571/creditor-website-assets/images/hero/Banner.png"],
  },
});

// Profiles listed in the site footer plus the LinkedIn company page (see SOCIAL-AUDIT, 25 Nov 2026).
const SAME_AS = [
  "https://www.youtube.com/@creditoracademy",
  "https://x.com/CreditorAcademy",
  "https://www.tiktok.com/@creditoracademy",
  "https://www.linkedin.com/company/creditor-academy",
  "https://rumble.com/user/CreditorAcademy",
];

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: "Creditor Academy",
  url: siteUrl,
  logo: `${siteUrl}/images/logo/creditor-academy-header-logo.png`,
  email: "counselor@creditoracademy.com",
  telephone: "+1-425-400-9246",
  address: {
    "@type": "PostalAddress",
    streetAddress: "600 1st Ave",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98104",
    addressCountry: "US",
  },
  sameAs: SAME_AS,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Creditor Academy",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export default function Home() {
  return (
    <>
      <JsonLdScript data={organizationLd} />
      <JsonLdScript data={websiteLd} />
      <CreditorHomepageView />
    </>
  );
}
