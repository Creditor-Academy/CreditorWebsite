import { Metadata } from "next";
import { Herobanner } from "@/app/components/shared/hero-banner";
import PrivacyPolicy from "@/app/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Creditor Academy",
  description:
    "Official Privacy Policy for Creditor Academy, an educational platform operated by Imperium Group. Learn what personal information we collect, why, and how your privacy is protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Herobanner
        bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883818/creditor-website-assets/images/privacy-policy/newbanner.jpg"
        heading="Privacy Policy"
        desc="Learn How We Protect <span>Your Data & Privacy</span>"
      />
      <PrivacyPolicy />
    </main>
  );
}
