"use client";

import React from "react";
import { AlertCircle, FileX, Scale, ShieldCheck } from "lucide-react";

export default function GoodToKnowSection() {
  const notices = [
    {
      icon: FileX,
      title: "Never Files, Sends, or Signs",
      desc: "Grok bots are strictly educational assistants. They never file court documents, send certified mail, submit administrative paperwork, or sign any documents on your behalf.",
    },
    {
      icon: Scale,
      title: "No Legal or Financial Advice",
      desc: "Creditor Academy and its bots do not provide legal, tax, financial, or accounting advice. All interactions are provided strictly for study, academic analysis, and research.",
    },
    {
      icon: ShieldCheck,
      title: "Member Responsibility",
      desc: "Every sovereign individual remains entirely self-directed and responsible for verifying documents, conducting lawful due diligence, and making informed decisions.",
    },
  ];

  return (
    <section className="relative bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#102a43] text-xs font-bold uppercase tracking-wider border border-slate-300/80">
            <AlertCircle size={15} className="text-[#026fe2]" />
            Educational Notice
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Good to Know
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Important guidelines regarding the scope and educational nature of our AI study companions.
          </p>
        </div>

        {/* 3 Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {notices.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center mb-4 border border-blue-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[#102a43] mb-2 tracking-tight">
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

        {/* Bottom Disclaimer Line */}
        <div className="mt-8 text-center max-w-2xl mx-auto text-xs text-[#64748b] leading-relaxed">
          Grok is made by xAI. They do not run this site or endorse Creditor Academy. All tools are strictly for autonomous self-education.
        </div>
      </div>
    </section>
  );
}
