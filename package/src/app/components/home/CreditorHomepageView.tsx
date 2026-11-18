"use client";

import React from "react";
import HeroSection from "./sections/HeroSection";
import StatsBannerSection from "./sections/StatsBannerSection";
import GrokBotsBannerSection from "./sections/GrokBotsBannerSection";
import GrokBotCompanionsSection from "./sections/GrokBotCompanionsSection";
import ThreePillarsSection from "./sections/ThreePillarsSection";
import InstructorSection from "./sections/InstructorSection";
import FreeWebinarSection from "./sections/FreeWebinarSection";
import FreedomFormulaSection from "./sections/FreedomFormulaSection";
import MasterclassSection from "./sections/MasterclassSection";
import CoursesSection from "./sections/CoursesSection";
import PricingSection from "./sections/PricingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ContactSection from "./sections/ContactSection";

export default function CreditorHomepageView() {
  return (
    <div className="w-full bg-white text-[#475569] font-sans antialiased overflow-x-clip">
      {/* 1. Hero Section (Lifestyle Background + Free Webinar Class Card) */}
      <HeroSection />

      {/* 2. Key Academy Stats Counter Banner (10 Bots, Mon-Fri Classes, Lifetime, 45 min) */}
      <StatsBannerSection />

      {/* 3. Official Grok Bots Banner Section (Dark Navy + 10 Bots + Track Badges) */}
      <GrokBotsBannerSection />

      {/* 3. The 10 Grok Bot Companions Interactive Showcase */}
      {/* <GrokBotCompanionsSection /> */}

      {/* 4. Three Pillars of the Private Education Association (PEA, LMS, Bots) */}
      <ThreePillarsSection />

      {/* 5. Meet Your Instructor (PaulMichael Rowland) */}
      <InstructorSection />

      {/* 6. Become and Operate Private Free Recorded Class & FAQ */}
      <FreeWebinarSection />

      {/* 7. The 4-Step Freedom Formula Sequence */}
      <FreedomFormulaSection />

      {/* 8. Masterclass Membership Section ($69/mo Dome) */}
      <MasterclassSection />

      {/* 9. Explore Our Premium Courses (Become Private, Operate Private, Financial Freedom) */}
      <CoursesSection />

      {/* 10. Simple Pricing & Good To Know Section */}
      <PricingSection />

      {/* 11. Student Voices & Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* 12. Contact & Let's Build Your Next Step */}
      <ContactSection />
    </div>
  );
}
