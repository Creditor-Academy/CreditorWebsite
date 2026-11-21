import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import CaliforniaPrivacyNotice from "@/app/components/california-privacy";

export const metadata: Metadata = {
  title: "California Privacy Notice | Creditor Academy",
  description:
    "Official California Consumer Privacy Act (CCPA/CPRA) Notice at Collection and Privacy Rights for Creditor Academy.",
};

export default function CaliforniaPrivacyPage() {
  return (
    <main>
      <Herobanner
        bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883818/creditor-website-assets/images/privacy-policy/newbanner.jpg"
        heading="California Privacy Notice"
        desc="Understand your <span>California Privacy Rights (CCPA/CPRA)</span>"
      />
      <CaliforniaPrivacyNotice />
    </main>
  );
}
