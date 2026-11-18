"use client";

import React from "react";
import Image from "next/image";
import { GrokBotShape } from "../grok-bot-shapes";

export default function ThreePillarsSection() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-10">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#026fe2] bg-[#e6f1fc] mb-3 shadow-xs">
            Inside the academy
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102a43] tracking-tight leading-tight">
            Bringing Education, Technology & Community Together          </h2>
        </div>

        {/* 3 Straight Cards: Generous Horizontal Proportions, Center Elevated, Uncropped Fitted Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch pt-2 pb-4">
          {/* Card 1 (Left): Creditor Academy (Straight, Fitted Atlas Watermark) */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[310px] sm:min-h-[330px]">
            {/* Fully Fitted Uncropped Atlas Logo in Background */}
            <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 opacity-[0.10] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.16]">
              <Image
                src="/images/logo-creditor-atlas.png"
                alt="Creditor Academy Atlas Emblem"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              {/* Badge: CA */}
              <div className="w-11 h-11 rounded-2xl bg-[#ebf3fe] text-[#026fe2] flex items-center justify-center font-bold text-base mb-5 shadow-xs">
                CA
              </div>

              {/* Title & Tag */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#102a43] tracking-tight mb-1">
                Creditor Academy
              </h3>
              <p className="text-xs font-bold text-[#026fe2] tracking-wider uppercase mb-3.5">
                PRIVATE EDUCATION ASSOCIATION
              </p>

              {/* Body Text */}
              <p className="text-slate-600 text-sm leading-relaxed font-normal max-w-sm">
                Discover a private learning community offering AI-powered books, premium courses, live instructor-led classes, and exclusive member groups.              </p>
            </div>
          </div>

          {/* Card 2 (Center): Introducing Grok Bot (Straight, Prominently Sized & Elevated) */}
          <div className="group relative bg-[#0b162b] rounded-[34px] p-7 sm:p-8 sm:py-9 border border-blue-900/40 shadow-[0_18px_40px_rgba(11,22,43,0.35)] flex flex-col justify-between text-white overflow-hidden transition-all duration-300 md:scale-[1.04] md:-translate-y-1.5 z-10 hover:scale-[1.06] hover:shadow-2xl min-h-[320px] sm:min-h-[340px]">
            {/* Ambient glare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Tag: NOW FEATURING */}
              <p className="text-xs font-bold tracking-wider text-[#38bdf8] uppercase mb-2.5">
                NOW FEATURING
              </p>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug mb-2">
                Introducing Grok Bot for the first time.
              </h3>

              {/* Body Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal max-w-sm">
                Your course companion for simple explanations, educational guidance, and a more independent learning experience.              </p>
            </div>

            {/* 3 Animated Grok Bots at the bottom */}
            <div className="relative z-10 flex items-center justify-start gap-4 pt-3 mt-auto">
              {/* Bot 1: Green Star (#00C972) */}
              <div
                className="w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                title="Business Credit Grok Bot (Star)"
              >
                <GrokBotShape id="business-credit" size="100%" index={9} animated />
              </div>

              {/* Bot 2: Blue Egg (#3C82F6) */}
              <div
                className="w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                title="Taxes Grok Bot (Egg)"
              >
                <GrokBotShape id="taxes" size="100%" index={3} animated />
              </div>

              {/* Bot 3: Red Squircle (#EA4045) */}
              <div
                className="w-12 h-12 sm:w-13 sm:h-13 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                title="Masterclass Grok Bot (Squircle)"
              >
                <GrokBotShape id="masterclass" size="100%" index={0} animated />
              </div>
            </div>
          </div>

          {/* Card 3 (Right): Athena LMS (Straight, Fitted Athena Helmet Watermark) */}
          <div className="group relative bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[310px] sm:min-h-[330px]">
            {/* Fully Fitted Uncropped Athena Helmet Logo in Background */}
            <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 opacity-[0.10] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.16]">
              <Image
                src="/images/logo-athena-lms.png"
                alt="Athena LMS Helmet Emblem"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              {/* Badge: A */}
              <div className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-base mb-5 shadow-xs">
                A
              </div>

              {/* Title & Tag */}
              <h3 className="text-xl sm:text-[22px] font-bold text-[#102a43] tracking-tight mb-1">
                Athena LMS
              </h3>
              <p className="text-xs font-bold text-[#026fe2] tracking-wider uppercase mb-3.5">
                LEARNING PLATFORM
              </p>

              {/* Body Text */}
              <p className="text-slate-600 text-sm leading-relaxed font-normal max-w-sm">
                Access your courses, books, recorded lessons, live classes, quizzes, and certificates through one powerful, AI-powered learning platform.      </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}