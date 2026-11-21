import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import SecurityCompliance from "@/app/components/security-compliance";

export const metadata: Metadata = {
  title: "Security and Compliance | Creditor Academy",
  description:
    "Learn how Creditor Academy protects your personal information, our security program, CROA compliance, and safe practices.",
};

export default function SecurityPage() {
  return (
    <main>
      <Herobanner
        bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883934/creditor-website-assets/images/TnC/banner.jpg"
        heading="Security & Compliance"
        desc="How we protect your <span>Data & Legal Rights</span>"
      />
      <SecurityCompliance />
    </main>
  );
}
