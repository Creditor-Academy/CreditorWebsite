import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import HowWeWork from "@/app/components/how-we-work";

export const metadata: Metadata = {
  title: "How Creditor Academy Works (CROA Statement) | Creditor Academy",
  description:
    "Official CROA Statement for Creditor Academy. Learn how our self-help credit education, Masterclass, and consumer protections work.",
};

export default function OurApproachPage() {
  return (
    <main>
      <Herobanner
        bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883934/creditor-website-assets/images/TnC/banner.jpg"
        heading="How Creditor Academy Works"
        desc="CROA Statement & <span>Self-Help Credit Education</span>"
      />
      <HowWeWork />
    </main>
  );
}
