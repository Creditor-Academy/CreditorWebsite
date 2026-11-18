"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GROK_BOTS, GrokBotShape } from "../grok-bot-shapes";

export default function GrokBotCompanionsSection() {
  const [activeBotId, setActiveBotId] = useState<string>("masterclass");
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [showGuarantee, setShowGuarantee] = useState(false);

  const activeBot = GROK_BOTS.find((b) => b.id === activeBotId) || GROK_BOTS[0];

  const filteredBots =
    selectedTrack === "all"
      ? GROK_BOTS
      : GROK_BOTS.filter((b) => b.category === selectedTrack);

  return (
    <section id="bots-showcase" className="bg-[#f8fafc] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Interactive Companion Selector Box (Matching Attachment Image 2) */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-lg w-full">
          {/* Header with Track Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-sky-50 text-[#026fe2] flex items-center justify-center border border-sky-100 shrink-0">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4M8 16h.01M16 16h.01" />
                </svg>
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#102a43]">
                  The 10 Grok Bot Companions
                </h3>
                <p className="text-xs text-slate-500">
                  Still geometric mascots with official colors and signature Grok eyes (education-only)
                </p>
              </div>
            </div>

            {/* Track Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider mr-1 text-[11px]">
                TRACKS:
              </span>
              {[
                { id: "all", label: "All" },
                { id: "masterclass", label: "Masterclass" },
                { id: "become-private", label: "Become Private" },
                { id: "operate-private", label: "Operate Private" },
                { id: "financial-freedom", label: "Financial Freedom" },
              ].map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedTrack === track.id
                      ? "bg-[#026fe2] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>

          {/* 10 Bot Tab Cards Horizontal Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 py-6 overflow-x-auto scrollbar-none">
            {filteredBots.map((bot, idx) => {
              const isSelected = bot.id === activeBotId;
              return (
                <button
                  key={bot.id}
                  onClick={() => setActiveBotId(bot.id)}
                  className={`relative group flex flex-col items-center p-3 rounded-2xl transition-all duration-200 text-center cursor-pointer border ${
                    isSelected
                      ? "border-[#026fe2] bg-sky-50/50 shadow-sm ring-2 ring-[#026fe2]/20"
                      : "border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-white"
                  }`}
                >
                  {/* Selected Indicator Dot */}
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#026fe2]" />
                  )}

                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 mb-2 transition-transform duration-200 group-hover:scale-110">
                    <GrokBotShape id={bot.id} size={44} index={idx} animated />
                  </div>
                  <span
                    className={`text-xs font-bold truncate max-w-full ${
                      isSelected ? "text-[#026fe2]" : "text-slate-700"
                    }`}
                    title={bot.name}
                  >
                    {bot.displayName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Companion Status & Speech Bubble */}
          <div className="bg-slate-50/80 border border-slate-200/60 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-200/60 shadow-2xs">
                <GrokBotShape id={activeBot.id} size={36} animated />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-[#102a43] text-base">
                    {activeBot.name} Grok Bot
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: activeBot.color }}
                  >
                    {activeBot.shapeName}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-xl">
                  {activeBot.description}
                </p>
              </div>
            </div>

            {/* Speech Bubble / Guarantee Action */}
            <div className="flex items-center gap-4 shrink-0 self-end md:self-center">
              <button
                onClick={() => setShowGuarantee(!showGuarantee)}
                className="text-xs font-semibold text-[#026fe2] hover:underline cursor-pointer"
              >
                {showGuarantee ? "Hide Guarantee" : "Read Education Guarantee"}
              </button>

              {/* Speech Bubble pointing to Paul */}
              <div className="relative bg-white border border-slate-200/90 rounded-2xl px-4 py-2 text-xs font-semibold text-[#102a43] shadow-xs flex items-center gap-2">
                <span>I am ready to help!</span>
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-300">
                  <Image
                    src="https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883584/creditor-website-assets/images/paul/Paul_Photo.png"
                    alt="PaulMichael Rowland"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Educational Guarantee Drawer */}
          {showGuarantee && (
            <div className="mt-4 p-4 rounded-xl bg-sky-50/80 border border-sky-200/70 text-xs text-slate-700 leading-relaxed animate-in fade-in duration-200">
              <b>Creditor Academy Education Guarantee:</b> Grok Bots are interactive AI
              tutors strictly designed for teaching lawful procedures, statutory
              structure, and educational document walkthroughs. Grok Bots do not file,
              sign, send, or submit legal documents on your behalf, nor do they give
              statutory legal counsel. You always remain fully in charge of your private
              standing.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
