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
          {/* Card 1 (Left): Creditor Academy (Signature Blue Theme, Atlas Emblem Watermark, Pillar Badges) */}
          <div className="group relative bg-gradient-to-br from-[#0c2e5b] via-[#025ec7] to-[#013f8c] rounded-[32px] p-7 sm:p-8 border border-sky-400/30 shadow-[0_14px_36px_rgba(2,111,226,0.22)] flex flex-col justify-between text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-sky-300/60 hover:-translate-y-1 min-h-[330px] sm:min-h-[360px]">
            {/* Ambient Cyan/Sky Light Glare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-300/20 rounded-full blur-2xl pointer-events-none" />

            {/* Fitted Creditor Academy Emblem in Background - Centered in middle-right open space */}
            <div className="absolute right-1 sm:right-2 top-[50%] -translate-y-1/2 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 opacity-[0.18] pointer-events-none select-none transition-all duration-300 group-hover:opacity-[0.28] group-hover:scale-105 brightness-0 invert">
              <Image
                src="/images/creditor-academy-pma-logo.png"
                alt="Creditor Academy Atlas Emblem"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              {/* Tag / Eyebrow with Brand Logo Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-sky-200 bg-sky-950/50 border border-sky-400/30 uppercase mb-3 backdrop-blur-xs">
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src="/images/creditor-academy-pma-logo.png"
                    alt="Creditor Academy Logo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                PRIVATE EDUCATION ASSOCIATION
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-2">
                Creditor Academy
              </h3>

              {/* Body Text */}
              <p className="text-blue-100/90 text-sm leading-relaxed font-normal max-w-sm mb-4">
                Discover a private learning community offering AI-powered books, premium courses, live instructor-led classes, and exclusive member groups.
              </p>
            </div>

            {/* 3 Relatable Feature Tiles in Single Row */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 mt-auto">
              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-sky-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-sky-400/20 group-hover/tile:bg-sky-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  Private Network
                </span>
              </div>

              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-sky-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-sky-400/20 group-hover/tile:bg-sky-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  Live Classes
                </span>
              </div>

              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-sky-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-sky-400/20 group-hover/tile:bg-sky-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  SOP Templates
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 (Center): Introducing Grok Bot (Centerpiece, Elevated, 3 Animated Grok Bots) */}
          <div className="group relative bg-[#0b162b] rounded-[34px] p-7 sm:p-8 sm:py-9 border border-blue-900/50 shadow-[0_18px_40px_rgba(11,22,43,0.38)] flex flex-col justify-between text-white overflow-hidden transition-all duration-300 md:scale-[1.04] md:-translate-y-1.5 z-10 hover:scale-[1.06] hover:shadow-2xl min-h-[340px] sm:min-h-[370px]">
            {/* Ambient glare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Tag: NOW FEATURING */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-[#38bdf8] bg-sky-950/60 border border-sky-400/30 uppercase mb-3 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                NOW FEATURING
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug mb-2">
                Introducing Grok Bot for the first time.
              </h3>

              {/* Body Text */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal max-w-sm">
                Your course companion for simple explanations, educational guidance, and a more independent learning experience.
              </p>
            </div>

            {/* 3 Animated Grok Bots at the bottom */}
            <div className="relative z-10 flex items-center justify-start gap-4 pt-2 mt-auto">
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

          {/* Card 3 (Right): Athena LMS (Mix of Purple & Blue, Athena Helmet Watermark, LMS Feature Badges) */}
          <div className="group relative bg-gradient-to-br from-[#240e4f] via-[#3a1b78] to-[#121c4e] rounded-[32px] p-7 sm:p-8 border border-purple-400/30 shadow-[0_14px_36px_rgba(58,27,120,0.22)] flex flex-col justify-between text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-300/60 hover:-translate-y-1 min-h-[330px] sm:min-h-[360px]">
            {/* Ambient Purple Light Glare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />

            {/* Fitted Athena Helmet Logo Watermark in Background - Centered in middle-right open space */}
            <div className="absolute right-1 sm:right-2 top-[50%] -translate-y-1/2 w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 opacity-[0.18] pointer-events-none select-none transition-all duration-300 group-hover:opacity-[0.28] group-hover:scale-105 brightness-0 invert">
              <Image
                src="/images/logo-athena-lms.png"
                alt="Athena LMS Helmet Emblem"
                fill
                unoptimized
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              {/* Tag / Eyebrow with Brand Logo Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider text-purple-200 bg-purple-950/50 border border-purple-400/30 uppercase mb-3 backdrop-blur-xs">
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src="/images/logo-athena-lms.png"
                    alt="Athena LMS Logo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                LEARNING PLATFORM
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight mb-2">
                Athena LMS
              </h3>

              {/* Body Text */}
              <p className="text-purple-100/90 text-sm leading-relaxed font-normal max-w-sm mb-4">
                Access your courses, books, recorded lessons, live classes, quizzes, and certificates through one powerful, AI-powered learning platform.
              </p>
            </div>

            {/* 3 Relatable Feature Tiles in Single Row */}
            <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 mt-auto">
              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-purple-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-400/20 group-hover/tile:bg-purple-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  Class Replays
                </span>
              </div>

              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-purple-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-400/20 group-hover/tile:bg-purple-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  AI eBooks
                </span>
              </div>

              <div className="group/tile bg-white/[0.08] hover:bg-white/[0.15] backdrop-blur-md border border-white/15 hover:border-purple-300/40 rounded-2xl py-2.5 px-1.5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:-translate-y-0.5 shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-400/20 group-hover/tile:bg-purple-400/30 flex items-center justify-center mb-1.5 transition-colors">
                  <svg className="w-4 h-4 text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white tracking-tight leading-tight">
                  Certificates
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}