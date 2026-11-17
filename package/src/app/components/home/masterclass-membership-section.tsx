"use client";

import React from "react";
import Link from "next/link";
import { Check, Users, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import { GrokBotShape } from "./grok-bot-shapes";

export default function MasterclassMembershipSection() {
  const includeItems = [
    "Live Classes, Monday–Friday",
    "Step-by-Step Private Plan",
    "Connect with a Like-Minded Community",
    "Intro Lessons Across All Premium Courses",
    "Pay-As-You-Go Flexibility",
    "Private Community Groups",
    "Starter Resource Library",
    "Exclusive Member Discounts",
  ];

  const whatYouGetItems = [
    {
      title: "Pay-As-You-Go Learning",
      desc: "Access every course in our library at a member-only rate — only pay for what you need, when you need it.",
    },
    {
      title: "Introductory Access",
      desc: "Try the first module of premium courses for free so you can decide before committing.",
    },
    {
      title: "Private Community Groups",
      desc: "Connect with entrepreneurs and pros, get fast answers, and share wins in exclusive groups.",
    },
    {
      title: "Live Weekly Trainings",
      desc: "Attend live sessions with instructors — ask questions, get critiques, and stay ahead.",
    },
  ];

  return (
    <section
      id="masterclass"
      className="relative text-white py-16 sm:py-20 lg:py-24 overflow-hidden scroll-mt-20"
      style={{
        background: "linear-gradient(135deg, #081e36 0%, #0c2b4d 50%, #071a2e 100%)",
        borderTop: "2px solid #38bdf8",
        boxShadow: "0 -4px 24px rgba(56,189,248,0.3)",
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#38bdf8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header with $69/month very large and bold at the top */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-bold uppercase tracking-wider mb-6 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
            <Users size={15} />
            Masterclass Membership
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Masterclass Membership
          </h2>

          <div className="my-6">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#38bdf8] tracking-tight drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              $69/month
            </span>
            <span className="block text-slate-300 text-sm sm:text-base font-medium mt-2">
              Complete private sovereignty education &amp; daily live instruction
            </span>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="https://creditor-academy.lmsathena.com/signup"
              className="inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-8 py-4 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38bdf8] transition-colors shadow-lg shadow-[#026fe2]/30"
            >
              <span>Join Masterclass — $69/month</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Promo Notice Box */}
        <div className="max-w-3xl mx-auto mb-14 p-5 sm:p-6 rounded-2xl bg-white/5 border border-[#38bdf8]/30 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <ShieldAlert size={22} className="text-[#38bdf8] shrink-0 mt-0.5" />
            <p className="text-slate-200 text-sm sm:text-[15px] leading-relaxed font-medium">
              This promotional entry rate transitions to the standard $147/mo rate shortly. Locking your membership now guarantees authorization at $69/mo indefinitely.
            </p>
          </div>
        </div>

        {/* 2-Column Core Breakdown: 8 Items & Masterclass Bot Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto mb-16">
          {/* Left Column: 8 Included Items with Cyan Check Icons */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                <span>Everything Included with Membership</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {includeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-200 text-xs sm:text-[13.5px] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="https://creditor-academy.lmsathena.com/signup"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38bdf8] transition-colors shadow-md"
              >
                <span>Get Started Instantly — $69/month</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Masterclass Grok Bot Card (Red Squircle) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-md flex flex-col items-center text-center justify-between">
            <div className="flex flex-col items-center">
              <div className="p-2 mb-4 bg-white/5 rounded-2xl border border-white/10">
                <GrokBotShape id="masterclass" size={76} />
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EA4045]/20 text-[#EA4045] border border-[#EA4045]/40 mb-2">
                Red Squircle Character
              </span>

              <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                Masterclass Grok Bot
              </h4>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
                Your dedicated sovereign study companion. Ask clarifying questions regarding daily live lectures, trust indentures, and roadmap progression 24/7.
              </p>
            </div>

            <div className="mt-6 w-full pt-4 border-t border-white/10">
              <span className="text-[11px] text-slate-400 block italic">
                *Education-only AI assistant. Powered by Grok (xAI).
              </span>
            </div>
          </div>
        </div>

        {/* "What You Get" 4 Items Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What You Get
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Engineered for functional transformation and lifelong community backing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatYouGetItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
