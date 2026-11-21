import { Herobanner } from "@/app/components/shared/hero-banner";
import BecomeIntro from "@/app/components/become/cards";

import Intro2 from "@/app/components/become/intro";
import Content from "@/app/components/become/content";
import Appoint from "@/app/components/become/appointment";
import CTA from "@/app/components/shared/cta";
// import Event from "@/app/components/home/event";
import Pricing from "@/app/components/shared/plan";
import HowItWorks from "@/app/components/become/works";
import FaqSection from "@/app/components/become/faq";

import WebinarBootcamp from "@/app/components/shared/WebinarBootcamp";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { CourseSchema } from "@/app/components/seo/CourseSchema";
export const metadata: Metadata = pageMetadata("/services/course-cataloges/become-private");

export default function Page() {
    return (
        <main>
            <CourseSchema path="/services/course-cataloges/become-private" />
            <Herobanner
               
                heading="Become Private"
                desc="Study <span>Become Private</span> topics, including status correction and SOV 101. Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation."
                buttonPath="https://creditor-academy.lmsathena.com/signup" // 👈 you now define the path here
            />
            <Intro2 />
            <WebinarBootcamp
                title="Become Private"
                imageSrc="/images/webinar/become/bootcampbecome.webp"
                description="This bootcamp teaches status-correction topics and how the course describes private arrangements. It does not change legal standing."
                features={[
                    { title: "Status Correction", description: "Study how the lessons describe status-correction topics.", iconName: "status" },
                    { title: "Lesson Sequence", description: "Follow the papers and steps in the order the course teaches.", iconName: "crown" },
                    { title: "SOV 101 Topics", description: "Study the ideas introduced in the sovereignty lessons.", iconName: "mindset" }
                ]}
            />
            <Content />
            {/* <BecomeIntro /> */}



            {/* <Pricing /> */}
            <HowItWorks />
            <Appoint />
            {/* <Event /> */}
            {/* <Learn2 /> */}
            {/* <FaqSection /> */}
            <CTA />
        </main>
    );
};
