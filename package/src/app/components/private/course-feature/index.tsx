"use client";

import React from "react";
import { motion } from "framer-motion";
import { GrokBotShape } from "@/app/components/home/grok-bot-shapes";

const trackBots = [
  { id: "credit-repair", name: "Credit Repair", role: "Credit Education" },
  { id: "business-credit", name: "Business Credit", role: "Business Credit Topics" },
];

export default function FinancialFreedomGrokBotsSection() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 dark:bg-slate-900/60 border-y border-slate-200/70 dark:border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 px-3.5 py-1 rounded-full mb-4 border border-blue-100 dark:border-blue-900">
          AI Grok Bot Companions
        </span>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
          Reach Your Money Goals Faster
        </h2>

        {/* Description Sentence */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
          Unlock your Grok Bots for easy-to-follow tips that help you grow your money, keep it safe, and build real freedom.
        </p>

        {/* Bouncing Animated Grok Bots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
          {trackBots.map((bot, idx) => (
            <motion.div
              key={bot.id}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.25,
              }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <GrokBotShape id={bot.id} size={52} animated index={idx} />
              </div>
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors leading-snug">
                  {bot.name}
                </span>
                <span className="block text-[11px] text-slate-400 font-normal mt-0.5">
                  {bot.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
