"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { GrokBotShape } from "./grok-bot-shapes";

export default function LearningPathsSection() {
  const paths = [
    {
      id: "become-private",
      title: "Become Private",
      subtitle: "Reclaim Your Lawful Identity",
      description:
        "Step out of public corporate jurisdiction. Learn status correction principles, sovereign administrative processes, and lawful standing.",
      gradient: "from-[#3B82F6] via-[#2563EB] to-[#1D4ED8]",
      learnMoreHref: "/services/course-cataloges/become-private",
      bots: [
        {
          id: "spc",
          name: "Secured Party Creditor",
          shape: "teardrop",
          color: "#ED712E",
          desc: "Guides lawful SPC paperwork, filing procedures, and foundational debtor-creditor standing.",
        },
        {
          id: "status-correction",
          name: "Status Correction",
          shape: "dome",
          color: "#F19D38",
          desc: "Assists in understanding political status, nationality declarations, and jurisdictional standing.",
        },
        {
          id: "taxes",
          name: "Taxes",
          shape: "egg",
          color: "#3C82F6",
          desc: "Explains private vs. public tax status, non-resident alien standing, and lawful tax obligations.",
        },
        {
          id: "admin-proc",
          name: "Administrative Procedure",
          shape: "tablet",
          color: "#5BC67A",
          desc: "Assists with commercial notices, affidavits, lawful claims, and default judgments.",
        },
      ],
    },
    {
      id: "operate-private",
      title: "Operate Private",
      subtitle: "Asset Protection & Business",
      description:
        "Build, manage, and scale an independent private empire shielded from public liabilities using trusts and private associations.",
      gradient: "from-[#0284C7] via-[#026FE2] to-[#1E40AF]",
      learnMoreHref: "/services/course-cataloges/operate-private",
      bots: [
        {
          id: "business-trust",
          name: "Business Trust",
          shape: "clover",
          color: "#54B9A6",
          desc: "Assists with Unincorporated Business Trust (UBT) indentures, minutes, and trustee operations.",
        },
        {
          id: "pma",
          name: "Private Membership Association",
          shape: "pebble",
          color: "#885CF5",
          desc: "Assists in drafting PMA bylaws, membership contracts, and private commerce structures.",
        },
        {
          id: "asset-protection",
          name: "Asset Protection",
          shape: "blob",
          color: "#97683D",
          desc: "Helps structure layered holding systems, privacy barriers, and liability insulation.",
        },
      ],
    },
    {
      id: "financial-freedom",
      title: "Financial Freedom",
      subtitle: "Capital & Credit Architectures",
      description:
        "Master the architecture of modern private commerce, commercial banking funding, tier 1-4 business credit, and credit repair.",
      gradient: "from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]",
      learnMoreHref: "/services/course-cataloges/financial-freedom",
      bots: [
        {
          id: "credit-repair",
          name: "Credit Repair",
          shape: "flower",
          color: "#EB4699",
          desc: "Guides factual dispute methodologies, consumer protection statutes, and bureau correction.",
        },
        {
          id: "business-credit",
          name: "Business Credit",
          shape: "star",
          color: "#00C972",
          desc: "Navigates tier 1-4 commercial tradelines, EIN credit building without PG, and merchant funding.",
        },
      ],
    },
  ];

  return (
    <section id="learning-paths" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0] scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            <Layers size={15} />
            Three Learning Paths
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Premium Courses &amp; Learning Paths
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Comprehensive, stage-by-stage curriculum powered by specialized still Grok Bot study companions.
          </p>
        </div>

        {/* Three 3D Gradient Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paths.map((path) => (
            <div
              key={path.id}
              className={`rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between bg-gradient-to-br ${path.gradient} shadow-[0_20px_40px_-12px_rgba(2,111,226,0.45)] border-t border-white/20 transition-all duration-200 hover:-translate-y-1`}
              style={{
                boxShadow:
                  "0 20px 40px -12px rgba(2,111,226,0.45), inset 0 1px 1px rgba(255,255,255,0.2)",
              }}
            >
              <div>
                {/* Header */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/80 bg-black/15 px-3 py-1 rounded-full inline-block backdrop-blur-xs">
                    {path.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2.5 tracking-tight">
                    {path.title}
                  </h3>
                </div>

                <p className="text-white/90 text-xs sm:text-[13.5px] leading-[1.65] font-normal mb-6">
                  {path.description}
                </p>

                {/* Bots Assigned to This Path */}
                <div className="space-y-3 pt-4 border-t border-white/15 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                    Dedicated Grok Bots:
                  </div>

                  {path.bots.map((bot) => (
                    <div
                      key={bot.id}
                      className="bg-black/15 border border-white/10 rounded-xl p-3 flex items-start gap-3 backdrop-blur-xs"
                    >
                      <div className="shrink-0 p-0.5 bg-white/10 rounded-lg">
                        <GrokBotShape id={bot.id} size={36} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white leading-tight">
                            {bot.name}
                          </span>
                          <span className="text-[9px] text-white/70 font-mono capitalize">
                            ({bot.shape})
                          </span>
                        </div>
                        <p className="text-[11px] text-white/85 leading-tight mt-1 font-normal">
                          {bot.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Learn more & Contact Sales */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center gap-2.5">
                <Link
                  href={path.learnMoreHref}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 bg-white text-[#026fe2] hover:bg-slate-50 font-bold text-xs sm:text-sm rounded-full py-2.5 px-4 shadow-sm transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href="#contact"
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 bg-black/20 hover:bg-black/30 border border-white/30 text-white font-bold text-xs sm:text-sm rounded-full py-2.5 px-4 transition-colors"
                >
                  <span>Contact Sales</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
