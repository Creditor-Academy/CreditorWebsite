"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BookOpen,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Sparkles,
  Layers,
  GraduationCap,
  Cpu,
} from "lucide-react";
import { GROK_BOTS, GrokBotShape } from "./grok-bot-shapes";

export default function HeroIntroSection() {
  const pathChips = [
    { label: "Masterclass", href: "#masterclass", color: "bg-[#EA4045]/10 text-[#EA4045] border-[#EA4045]/20 hover:bg-[#EA4045]/15" },
    { label: "Become Private", href: "#learning-paths", color: "bg-[#3B82F6]/10 text-[#2563EB] border-[#3B82F6]/20 hover:bg-[#3B82F6]/15" },
    { label: "Operate Private", href: "#learning-paths", color: "bg-[#0284C7]/10 text-[#026FE2] border-[#0284C7]/20 hover:bg-[#0284C7]/15" },
    { label: "Financial Freedom", href: "#learning-paths", color: "bg-[#1E3A8A]/10 text-[#1D4ED8] border-[#1E3A8A]/20 hover:bg-[#1E3A8A]/15" },
  ];

  return (
    <section className="relative bg-white pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-28 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            1. HERO HEADER AREA
           ========================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow (kept exactly) */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs sm:text-sm font-semibold tracking-wide border border-[#026fe2]/20 shadow-xs">
              <ShieldCheck size={16} className="text-[#026fe2]" />
              Become and Operate Private
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#102a43] leading-[1.14] tracking-tight">
            Welcome to the Creditor Academy Private Education Association
          </h1>

          {/* Lead Subtitle */}
          <p className="text-[#475569] text-base sm:text-lg lg:text-xl font-normal leading-[1.65] max-w-[68ch] mx-auto">
            We exist to make true financial sovereignty accessible. Master private banking, bulletproof asset protection, and legal status correction through structured education and AI-guided mastery.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bots"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-8 py-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Bot size={18} />
              <span>Meet Your Grok Bots</span>
            </a>
            <a
              href="#webinar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#f8fafc] border-2 border-[#026fe2] text-[#026fe2] font-bold rounded-full px-8 py-3.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <BookOpen size={18} />
              <span>Watch the Free Webinar</span>
            </a>
          </div>

          {/* Path Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748b] mr-1">
              Curriculum Tracks:
            </span>
            {pathChips.map((chip) => (
              <a
                key={chip.label}
                href={chip.href}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border transition-transform hover:-translate-y-0.5 ${chip.color}`}
              >
                <Compass size={13} />
                <span>{chip.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* =========================================================
            2. TEN STILL GROK BOT COMPANIONS SHOWCASE DOCK
           ========================================================= */}
        <div id="bots" className="mt-14 sm:mt-16 pt-2 scroll-mt-24">
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#026fe2]">
                <Sparkles size={14} />
                THE 10 GROK BOT COMPANIONS
              </span>
              <p className="text-xs sm:text-sm text-[#64748b] mt-1 font-normal">
                Still geometric avatars reflecting official character identities (education-only)
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3">
              {GROK_BOTS.map((bot) => (
                <div
                  key={bot.id}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#026fe2]/40 transition-colors"
                >
                  <div className="p-1 mb-2">
                    <GrokBotShape id={bot.id} size={44} />
                  </div>
                  <span className="text-[11px] font-bold text-[#102a43] leading-tight line-clamp-1">
                    {bot.name}
                  </span>
                  <span className="text-[10px] text-[#64748b] capitalize mt-0.5 font-medium">
                    {bot.shapeName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            3. CLEAR VISION & FOUNDATION SECTION (THE THREE PILLARS)
           ========================================================= */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-[#e2e8f0]">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers size={14} />
              Our Core Vision &amp; Architecture
            </div>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight mb-4">
              A Clear Blueprint for Private Sovereignty
            </h2>
            <p className="text-[#475569] text-base sm:text-lg leading-[1.65] font-normal">
              Creditor Academy unites lawful frameworks, high-speed modern software, and interactive AI companions to give members absolute control over their financial identity.
            </p>
          </div>

          {/* Three-Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Pillar 01: The Private Realm and Member Authority */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-[#026fe2]/50 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center font-extrabold text-base border border-blue-100">
                    01
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100/60 text-[#026fe2] text-[11px] font-bold uppercase tracking-wider">
                    Sovereignty
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#102a43] leading-snug">
                    The Private Realm &amp; Member Authority
                  </h3>
                  <p className="text-xs font-semibold text-[#026fe2] mt-0.5">
                    What Members Receive
                  </p>
                </div>

                <p className="text-[#475569] text-sm leading-[1.65] font-normal">
                  Through the Creditor Academy Private Education Association, members gain the actionable blueprints, legal frameworks, and private asset structures needed to eliminate conventional liabilities, insulate generational wealth, and operate with true autonomy.
                </p>

                {/* Key Checklist */}
                <div className="pt-2 space-y-2 border-t border-[#e2e8f0]/80">
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Private asset protection &amp; trust structures</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Bulletproof commercial and debt remedy</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Complete operational and personal autonomy</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-semibold text-[#026fe2]">
                <span>Member Blueprints</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Pillar 02: Athena LMS */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-[#026fe2]/50 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center font-extrabold text-base border border-blue-100">
                    02
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100/60 text-[#026fe2] text-[11px] font-bold uppercase tracking-wider">
                    LMS Platform
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#102a43] leading-snug">
                    Delivered on Athena LMS
                  </h3>
                  <p className="text-xs font-semibold text-[#026fe2] mt-0.5">
                    Interactive Learning Portal
                  </p>
                </div>

                <p className="text-[#475569] text-sm leading-[1.65] font-normal">
                  Delivered through the state-of-the-art Athena LMS platform, our curriculum provides seamless on-demand access to video masterclasses, verified document templates, interactive scorecards, and live mentorship from anywhere in the world.
                </p>

                {/* Key Checklist */}
                <div className="pt-2 space-y-2 border-t border-[#e2e8f0]/80">
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>24/7 on-demand high-definition video lessons</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Verified document templates &amp; notice packs</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Live broadcast access &amp; student Q&amp;A sessions</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-semibold text-[#026fe2]">
                <span>Student Portal</span>
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Pillar 03: Now Introducing Grok Bot */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:border-[#026fe2]/50 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center font-extrabold text-base border border-blue-100">
                    03
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100/60 text-[#026fe2] text-[11px] font-bold uppercase tracking-wider">
                    AI Companions
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#102a43] leading-snug">
                    Now Introducing Grok Bot
                  </h3>
                  <p className="text-xs font-semibold text-[#026fe2] mt-0.5">
                    10 Specialized Study Partners
                  </p>
                </div>

                <p className="text-[#475569] text-sm leading-[1.65] font-normal">
                  Now introducing Grok Bot — specialized AI learning companions tailored to guide you through every step of status correction, trust structuring, and private commerce.
                </p>

                {/* Required Disclaimer */}
                <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] text-[#64748b] text-[11px] leading-relaxed">
                  <span className="font-semibold text-[#102a43]">Notice: </span>
                  Grok is made by xAI. They do not run this site or endorse Creditor Academy.
                </div>

                {/* Key Checklist */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Domain-focused bots for each curriculum topic</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>Instant clarification on complex private terms</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#102a43] font-medium">
                    <CheckCircle2 size={15} className="text-[#026fe2] shrink-0 mt-0.5" />
                    <span>100% education-only knowledge guidance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-semibold text-[#026fe2]">
                <span>Meet the Bots</span>
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
