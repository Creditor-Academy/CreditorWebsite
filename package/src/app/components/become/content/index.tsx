"use client";

import React from "react";
import { motion } from "framer-motion";
import { GrokBotShape } from "@/app/components/home/grok-bot-shapes";

const trackBots = [
  { id: "spc", name: "Secured Party Creditor", role: "SPC Lessons & Filings" },
  { id: "status-correction", name: "Status Correction", role: "SOV 101 Topics" },
  { id: "taxes", name: "Taxes", role: "Tax Education" },
  { id: "admin-proc", name: "Administrative Procedure", role: "Affidavits & Notices" },
];

export default function WhatYoullLearnSlider() {
  return (
    <div className="w-full py-12 sm:py-16 px-4 bg-whitesmoke dark:bg-slate-900 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="inline-block text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 px-3.5 py-1 rounded-full mb-3 border border-blue-100 dark:border-blue-900">
          AI Grok Bot Companions
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
          Go Private the Easy Way
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          Get access to your Grok Bots for fast, simple answers that walk you through every step and paper you need to get started.
        </p>

        {/* Bouncing Animated Grok Bots */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
          {trackBots.map((bot, idx) => (
            <motion.div
              key={bot.id}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs hover:shadow-md hover:border-blue-300 transition-all p-2 flex items-center justify-center">
                <GrokBotShape id={bot.id} size={48} animated index={idx} />
              </div>
              <div className="text-center">
                <span className="block text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">
                  {bot.name}
                </span>
                <span className="block text-[11px] text-slate-400 font-normal">
                  {bot.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
