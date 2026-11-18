import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import CreditorHomepageView from "./components/home/CreditorHomepageView";

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

export default function Home() {
  return <CreditorHomepageView />;
}
