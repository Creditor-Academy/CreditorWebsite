import { Herobanner as HeroBanner } from "@/app/components/shared/hero-banner";
import BecomeIntro from "@/app/components/operate/card";
import BusinessCardsGrid from "@/app/components/operate/business";
import Appointment from "@/app/components/operate/Appointment";
import Contact from "@/app/components/shared/cta";
import Pricing from "@/app/components/shared/plan";
import Script from "next/script";
import HowItWorks from "@/app/components/operate/works";
// import Event from "@/app/components/home/event";
import FaqSection from "@/app/components/operate/faq";
import Cards from "@/app/components/operate/cards";

import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
export const metadata: Metadata = pageMetadata("/operate-wonder");

export default function Page() {
    const operate = getAllProjects();
    return (
        <>
            <Script
                id="affiliate-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function() {
      var t = document.createElement("script");
      t.type = "text/javascript", t.async = !0, t.src = 'https://link.msgsndr.com/js/am.js', t.onload = t.onreadystatechange = function() {
          var t = this.readyState;
          if (!t || "complete" == t || "loaded" == t) try {
            affiliateManager.init('psaD1vtsVB3b1PyW2P6i', 'https://backend.leadconnectorhq.com', '.www.creditoracademy.com')
          } catch (t) {}
      };
      var e = document.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(t, e)
  })();`,
                }}
            />

            <main>
                <HeroBanner
                    bannerimage="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883456/creditor-website-assets/images/courses/junior.jpg"
                    heading="Operate Private"
                    desc="Operate Private. This is where you take command of your life. Understand this: ownership means liability. You need to learn how to own nothing, yet control everything. Your houses, your cars, your businesses, your banking, your family—all of it needs to be private."
                    buttonPath="https://creditor-academy.lmsathena.com/signup"
                />
                <BecomeIntro />
                <Cards />
                {/* <Pricing /> */}
                <HowItWorks />
                <Appointment />
                {/* <Event /> */}
                {/* <FaqSection /> */}
                <Contact />
            </main>
        </>
    );
}
