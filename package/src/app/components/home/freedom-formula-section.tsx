"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, Bot, GraduationCap, KeyRound } from "lucide-react";

export default function FreedomFormulaSection() {
  const steps = [
    {
      step: "01",
      title: "Become a Member",
      desc: "Join the movement. Step inside Creditor Academy and unlock access to a world of private education and financial freedom.",
      icon: UserPlus,
    },
    {
      step: "02",
      title: "Get Access to Your Bots",
      desc: "Engage your dedicated Grok AI bots trained on sovereign frameworks to assist your study, document workflows, and structured learning.",
      icon: Bot,
    },
    {
      step: "03",
      title: "Unlock Courses & Connect",
      desc: "Instantly access premium courses, join daily live masterclasses, and collaborate with a private network of like-minded achievers.",
      icon: GraduationCap,
    },
    {
      step: "04",
      title: "Become Private",
      desc: "Take control of your sovereignty. Apply what you learn to live free, operate privately, and build generational wealth on your own terms.",
      icon: KeyRound,
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            Roadmap to Sovereignty
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            The Freedom Formula
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            A clear, 4-step progressive framework to transition from public exposure to fully insulated private sovereignty.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#026fe2]/50 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black tracking-widest text-[#026fe2] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      STEP {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-[#026fe2] flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#102a43] mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#475569] leading-[1.65] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA Button */}
        <div className="flex justify-center">
          <Link
            href="https://creditor-academy.lmsathena.com/signup"
            className="inline-flex items-center justify-center gap-2.5 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-8 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors shadow-sm"
          >
            <span>Become a Member</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
