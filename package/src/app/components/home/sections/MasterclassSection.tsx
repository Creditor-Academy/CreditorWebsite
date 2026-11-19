"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Video, Users, BookOpen, Check } from "lucide-react";
import { GrokBotShape } from "../grok-bot-shapes";

export default function MasterclassSection() {
  return (
    <div id="masterclass" className="scroll-mt-20 relative w-full overflow-hidden bg-white">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-50/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-50/50 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative text-slate-800 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Top Grid: Left Content & Right 3D Grok Bot Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column: Heading, Price & Action */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">

              {/* Eyebrow Pill + Thin Line Accent */}
              <div className="flex items-center gap-3.5 mb-5 w-full">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#026fe2] bg-blue-100/70 shadow-2xs">
                  MASTERCLASS MEMBERSHIP
                </span>
                <div className="h-[1.5px] flex-1 max-w-[130px] bg-gradient-to-r from-blue-300 via-blue-200 to-transparent" />
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#102a43] tracking-tight leading-[1.08] mb-4">
                Three steps to <br />
                <span className="text-[#026fe2]">Operate Private.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed mb-6 max-w-xl font-normal">
                Daily live classes, ready-made templates, and an AI guide that answers any time.
              </p>

              {/* Pricing Display */}
              <div className="flex items-baseline gap-2.5 mb-6">
                <span className="text-5xl sm:text-6xl font-black text-[#102a43] tracking-tight leading-none">
                  $69
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  /month
                </span>
                <span className="text-slate-400 line-through text-lg sm:text-xl font-normal ml-3">
                  $147/mo
                </span>
              </div>

              {/* CTA Button & Secondary Link */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-6">
                <Link
                  href="/masterclass-membership"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md shadow-blue-600/25 active:scale-[0.98]"
                >
                  Join Membership
                  <ArrowRight size={17} />
                </Link>

                {/* <a
                  href="#courses"
                  className="text-sm sm:text-base font-semibold text-slate-800 hover:text-[#026fe2] underline underline-offset-4 decoration-slate-400 hover:decoration-[#026fe2] transition-colors"
                >
                  Explore what&apos;s included
                </a> */}
              </div>
            </div>

            {/* Right Column: Freestanding 3D Grok Bot & Floating Bubble Card (Centered) */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">

              {/* Centered Showcase Canvas */}
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] flex flex-col items-center justify-center py-4 sm:py-6">

                {/* Soft Organic Background Blob (Centered behind the Bot) */}
                <div className="w-[300px] sm:w-[350px] h-[280px] sm:h-[330px] bg-gradient-to-br from-blue-100/90 via-sky-100/60 to-indigo-100/40 rounded-[60%_40%_70%_30%/50%_60%_40%_50%] pointer-events-none absolute" />

                {/* Freestanding 3D Masterclass Grok Bot (Centered) */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Radiating Accent Rays above Top-Left of Bot */}
                  <div className="absolute -top-3 left-4 sm:left-6 flex gap-1.5 items-end pointer-events-none">
                    <span className="w-1.5 h-3.5 rounded-full bg-[#026fe2] -rotate-[35deg]" />
                    <span className="w-1.5 h-5 rounded-full bg-[#026fe2] -translate-y-1.5" />
                    <span className="w-1.5 h-3.5 rounded-full bg-[#026fe2] rotate-[35deg]" />
                  </div>

                  <div className="drop-shadow-[0_20px_35px_rgba(234,64,69,0.25)] hover:scale-105 transition-transform duration-300">
                    <GrokBotShape id="masterclass" size={175} animated />
                  </div>
                </div>

                {/* Floating Info Bubble Card (Centered directly under the Bot, below the eyes) */}
                <div className="relative z-20 -mt-6 sm:-mt-7 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-xl w-[260px] sm:w-[280px] flex items-start gap-2.5 sm:gap-3 transition-transform hover:-translate-y-0.5">
                  <Sparkles size={18} className="text-[#026fe2] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[#102a43] font-bold text-xs sm:text-[13px] leading-snug">
                      Masterclass Grok Bot
                    </h5>
                    <p className="text-slate-500 text-[11px] leading-relaxed mt-0.5 font-normal">
                      Get answers, guidance, and support whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: 3 Clean, Unified Bento Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-16 mb-8">

            {/* Card 1: Live Classes */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100 text-[#026fe2] flex items-center justify-center">
                    <Video size={19} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/90 border border-slate-200/80">
                    Weekly Classes
                  </span>
                </div>
                <h4 className="text-[#102a43] font-bold text-base mb-1.5 leading-snug">
                  Live Classes
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Weekly instructor-led sessions, live case studies &amp; real-time Q&amp;A with PaulMichael.
                </p>
              </div>
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                <Check size={13} className="text-[#026fe2] shrink-0" strokeWidth={2.5} />
                <span>Includes full on-demand replay library</span>
              </div>
            </div>

            {/* Card 2: Private Community */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100 text-[#026fe2] flex items-center justify-center">
                    <Users size={19} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/90 border border-slate-200/80">
                    VERIFIED PMA NETWORK
                  </span>
                </div>
                <h4 className="text-[#102a43] font-bold text-base mb-1.5 leading-snug">
                  Private Community
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Connect with sovereign entrepreneurs, exchange verified vendors, and collaborate safely.
                </p>
              </div>
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                <Check size={13} className="text-[#026fe2] shrink-0" strokeWidth={2.5} />
                <span>Private peer discussions &amp; connections</span>
              </div>
            </div>

            {/* Card 3: Exclusive Resources */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100 text-[#026fe2] flex items-center justify-center">
                    <BookOpen size={19} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100/90 border border-slate-200/80">
                    INSTANT DOWNLOADS
                  </span>
                </div>
                <h4 className="text-[#102a43] font-bold text-base mb-1.5 leading-snug">
                  Exclusive Resources
                </h4>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Battle-tested templates, trust documents, bank opening guidelines &amp; step-by-step SOPs.
                </p>
              </div>
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600">
                <Check size={13} className="text-[#026fe2] shrink-0" strokeWidth={2.5} />
                <span>100+ legal templates &amp; practical guides</span>
              </div>
            </div>
          </div>

          {/* Bottom Centered Subtle Notification Banner */}
          {/* <div className="max-w-2xl mx-auto bg-slate-50/90 border border-slate-200/80 rounded-full py-2.5 px-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#026fe2]" />
              <span>Introductory rate: lock in <strong className="text-slate-900 font-bold">$69/month</strong> while available.</span>
            </div>
            <span className="text-slate-400 font-medium text-[11px] shrink-0">Cancel anytime</span>
          </div> */}

        </div>
      </section>
    </div>
  );
}
