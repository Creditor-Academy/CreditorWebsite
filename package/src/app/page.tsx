import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";

// 14 Ordered Sections (Sections 1 & 14 are Header and Footer in ClientLayoutShell)
// Sections 2 through 13 in exact requested sequence:
import HeroIntroSection from "./components/home/hero-intro-section";
import InstructorSection from "./components/home/instructor-section";
import FeaturedLiveSection from "./components/home/featured-live-section";
import BankingEventSection from "./components/home/banking-event-section";
import FreeWebinarSection from "./components/home/free-webinar-section";
import FreedomFormulaSection from "./components/home/freedom-formula-section";
import MasterclassMembershipSection from "./components/home/masterclass-membership-section";
import LearningPathsSection from "./components/home/learning-paths-section";
import GoodToKnowSection from "./components/home/good-to-know-section";
import PricingSection from "./components/home/pricing-section";
import TestimonialsSection from "./components/home/testimonials-section";
import GetInTouchSection from "./components/home/get-in-touch-section";

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
    images: [
      "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883571/creditor-website-assets/images/hero/Banner.png",
    ],
  },
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased">
      {/* 2. Intro / Hero (white) */}
      <HeroIntroSection />

      {/* 3. Meet Your Instructor (#f8fafc) */}
      <InstructorSection />

      {/* 4. Today's Featured YouTube Live (white) */}
      <FeaturedLiveSection />

      {/* 5. Exclusive Private Banking Event (#f8fafc) */}
      <BankingEventSection />

      {/* 6. Free Webinar, "Become and Operate Private" (white) */}
      <FreeWebinarSection />

      {/* 7. The Freedom Formula (#f8fafc) */}
      <FreedomFormulaSection />

      {/* 8. Masterclass Membership (DARK navy gradient banner with cyan glowing top border) */}
      <MasterclassMembershipSection />

      {/* 9. Three Learning Paths / Premium Courses (white) */}
      <LearningPathsSection />

      {/* 10. Good to Know (#f8fafc) */}
      <GoodToKnowSection />

      {/* 11. Pricing (white) */}
      <PricingSection />

      {/* 12. Testimonials (#f8fafc) */}
      <TestimonialsSection />

      {/* 13. Get in Touch (white) */}
      <GetInTouchSection />
    </main>
  );
}
