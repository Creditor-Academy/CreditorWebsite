"use client";

import React from "react";
import { GROK_BOTS, GrokBotShape } from "../grok-bot-shapes";

export default function GrokBotsBannerSection() {
  return (
    <section
      id="bots"
      className="relative text-white text-center pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f1f3d 0%, #0a1628 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-[#f2b632] uppercase mb-3">
          Become and Operate Private
        </p>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.18] mb-4">
          Learn It. Live It. With a Grok Bot by Your Side.
        </h2>

        {/* Sub-headline description */}
        <p className="text-base sm:text-lg text-[#cbd5e1] max-w-3xl leading-relaxed mb-7 font-normal">
          Welcome to an educational platform where Grok Bots support your learning. Your AI companion sits with you in every course, shifting your focus from taking notes to taking action. It helps you review lessons, organize your notes and plan how you want to apply what you study.
        </p>

        {/* CTA Button */}
        <div className="mb-9">
          <a
            href="#bots-showcase"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
            style={{
              backgroundColor: "#f2b632",
              color: "#0f1b3d",
            }}
          >
            Meet Your Grok Bots
          </a>
        </div>

        {/* 10 Grok Bots Lined Up in a Single Row (Directly on section, matching Official-Grok-Bot-Characters-animated.html) */}
        <div className="w-full min-h-[96px] flex items-end justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 pt-4 pb-2 overflow-visible">
          {GROK_BOTS.map((bot, idx) => (
            <div
              key={bot.id}
              className="group flex flex-col items-center shrink-0 cursor-pointer overflow-visible"
              title={`${bot.name} Grok Bot (${bot.shapeName})`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center overflow-visible">
                <GrokBotShape
                  id={bot.id}
                  size="100%"
                  index={idx}
                  animated
                />
              </div>
            </div>
          ))}
        </div>

        {/* 4 Course Badges Below the Bots (Clickable links to respective sections) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-6">
          {[
            { label: "Masterclass", href: "/masterclass-membership" },
            { label: "Become Private", href: "/services/course-cataloges/become-private" },
            { label: "Operate Private", href: "/services/course-cataloges/operate-private" },
            { label: "Financial Freedom", href: "/services/course-cataloges/financial-freedom" },
          ].map((badge) => (
            <a
              key={badge.label}
              href={badge.href}
              className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border border-[#3b4e78] text-[#e2e8f0] bg-[#14234b]/60 hover:border-[#f2b632] hover:text-[#f2b632] hover:bg-[#14234b]/90 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            >
              {badge.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
