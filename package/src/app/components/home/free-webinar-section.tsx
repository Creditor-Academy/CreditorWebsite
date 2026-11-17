"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Video, ArrowRight } from "lucide-react";

export default function FreeWebinarSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const points = [
    "Step outside the public system entirely",
    "Limit liability and protect your assets",
    "Achieve true financial sovereignty",
  ];

  const faqs = [
    {
      q: "Is this really free?",
      a: "Yes. The introductory webinar is 100% free with zero obligation or credit card required. It is designed to provide immediate foundational clarity on private sovereignty.",
    },
    {
      q: "How long?",
      a: "45 minutes. It is a focused, high-impact master session packed with foundational frameworks and zero fluff.",
    },
    {
      q: "Replay?",
      a: "Limited replay availability. Replays are made available for a brief viewing window following each broadcast before rotating to the next scheduled session.",
    },
    {
      q: "Who is this for?",
      a: "This webinar is engineered for entrepreneurs, business owners, investors, and individuals who want to legally insulate their assets, build independent business credit, and operate in the private domain.",
    },
  ];

  return (
    <section id="webinar" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0] scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            <Video size={15} />
            Free Webinar
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Become and Operate Private
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Discover the exact lawful architecture private individuals use to protect their wealth, eliminate public exposure, and establish sovereign operations.
          </p>
        </div>

        {/* Two Column Layout: Three Points & Action on Left, FAQ Accordion on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Column: Three Points & CTA Button */}
          <div className="lg:col-span-5 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold text-[#102a43] tracking-tight">
              What You Will Learn
            </h3>

            <div className="space-y-4">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#026fe2] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[#102a43] font-medium text-sm sm:text-[15px] leading-snug">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/webinar"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full px-6 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors shadow-sm"
              >
                <span>Claim Your Free Webinar Seat</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-xs text-center text-[#64748b]">
              Instant access • No credit card required • 45 minutes
            </p>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-xl font-bold text-[#102a43] mb-4 tracking-tight">
              Frequently Asked Questions
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#026fe2]/50 shadow-sm ring-1 ring-[#026fe2]/20"
                      : "bg-[#f8fafc] border-[#e2e8f0] hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-bold text-sm sm:text-base transition-colors ${
                        isOpen ? "text-[#026fe2]" : "text-[#102a43]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-blue-50 text-[#026fe2] rotate-180"
                          : "bg-slate-200/70 text-slate-500"
                      }`}
                    >
                      <ChevronDown size={16} strokeWidth={2.2} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-[1.65] border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
