"use client";

import React from "react";
import Link from "next/link";
import { Check, Calendar, Mail, Shield, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const planFeatures = [
    "Live Classes, Monday–Friday",
    "Step-by-Step Private Plan",
    "Connect with a Like-Minded Community",
    "Intro Lessons Across All Premium Courses",
    "Pay-As-You-Go Flexibility",
    "Private Community Groups",
    "Starter Resource Library",
    "Exclusive Member Discounts",
  ];

  return (
    <section id="pricing" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0] scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            Transparent Membership
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Simple Pricing. Invest in Sovereignty.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Unlock full entry into the Creditor Academy Masterclass ecosystem with flexible monthly authorization.
          </p>
        </div>

        {/* Single Focused Masterclass Card */}
        <div className="max-w-xl mx-auto bg-[#f8fafc] border border-[#e2e8f0] rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Top Pill */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#026fe2] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
              Masterclass Membership
            </span>
            <span className="text-xs font-semibold text-[#64748b]">
              Standard $147/mo rate shortly
            </span>
          </div>

          {/* Pricing Display */}
          <div className="mb-6 pb-6 border-b border-[#e2e8f0]">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#102a43] tracking-tight">
                $69
              </span>
              <span className="text-lg font-semibold text-[#64748b]">
                /month
              </span>
            </div>
            <p className="text-sm text-[#475569] font-medium mt-2 leading-relaxed">
              Lock in your promotional rate now for guaranteed authorization at $69/mo indefinitely.
            </p>
          </div>

          {/* Checklist */}
          <div className="space-y-3.5 mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#102a43]">
              Included in Membership:
            </div>
            {planFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#026fe2]/10 text-[#026fe2] flex items-center justify-center shrink-0">
                  <Check size={13} strokeWidth={2.8} />
                </div>
                <span className="text-sm font-medium text-[#475569]">
                  {feat}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons: ONLY Contact Us and Book Instant Meeting */}
          <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full py-3.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors shadow-sm"
            >
              <Mail size={16} />
              <span>Contact Us</span>
            </a>

            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://scheduler.zoom.us/d/yryit5gx/athena-lms-platform-demo",
                  "_blank"
                )
              }
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] border-2 border-[#026fe2] text-[#026fe2] font-bold rounded-full py-3.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-colors"
            >
              <Calendar size={16} />
              <span>Book Instant Meeting</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
