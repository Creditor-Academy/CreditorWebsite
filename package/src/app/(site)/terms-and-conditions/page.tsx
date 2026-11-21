import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import TermsAndCondition from "@/app/components/terms-and-condition";

export const metadata: Metadata = {
  title: "Terms & Conditions | Creditor Academy",
  description:
    "Official Terms of Service for Creditor Academy, an educational platform operated by Imperium Group. Learn about our membership terms, cancellation rights, and educational scope.",
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Herobanner
        bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883934/creditor-website-assets/images/TnC/banner.jpg"
        heading="Terms & Conditions"
        desc="Understand the <span>Rules & Guidelines</span> Before Using Our Services"
      />
      <TermsAndCondition />
    </main>
  );
}
