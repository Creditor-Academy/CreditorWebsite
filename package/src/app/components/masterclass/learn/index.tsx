"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaArrowRight,
  FaLock,
  FaClock,
  FaFileDownload,
  FaHeart,
} from "react-icons/fa";

type Phase = {
  title: string;
  subtitle?: string;
  bullets: string[];
  icon: React.ReactNode;
};

const phases: Phase[] = [
  {
    title: "Phase 1: Trust Formation",
    subtitle: "Set the foundation for private wealth.",
    bullets: [
      "Study Unincorporated Business Trust topics (template included for study)",
      "Learn how the lessons describe business registration",
      "Study asset-organization and tax topics. Tax duties still apply",
      "Study private contracts as they are described in class",
    ],
    icon: <FaLock className="text-lg" aria-hidden />,
  },
  {
    title: "Phase 2: Tier 1 Business Credit Optimization",
    subtitle: "Study how a business credit profile is described.",
    bullets: [
      "Study business identity records (a business identifier, address, phone, and similar items)",
      "Learn how vendor accounts and revolving credit are described",
      "Study how credit files are organized. Results are not promised",
      "Learn how public-facing profiles are discussed in the lessons",
    ],
    icon: <FaClock className="text-lg" aria-hidden />,
  },
  {
    title: "Phase 3: Private Merchant Processing",
    subtitle: "Study how private payment topics are taught.",
    bullets: [
      "Learn how the lessons describe merchant-account concepts",
      "Study online and in-person payment topics",
      "Review payment-flow examples for products and services",
      "Learn the questions the class raises about account holds",
    ],
    icon: <FaFileDownload className="text-lg" aria-hidden />,
  },
];

export default function MasterclassRedesignPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMuted = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const container = "max-w-8xl mx-auto px-10";
  const sectionSpacing = "py-10"; // consistent vertical rhythm
  const primaryGradient = "from-[#60A5FA] to-[#1E3A8A]";

  // --- NEW: use Courses page colors for the "What you'll learn" (phases) section ---
  const phasesWrapper = "bg-lightgray dark:bg-darkblack pt-8 md:pt-16 pb-20 md:pb-40";

  return (
    <main className={`min-h-screen bg-white text-slate-900 antialiased`}> 
      <section className={phasesWrapper}>
        <div className={container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
                >
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-x">
                    Your Step-by-Step Blueprint
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
                    A compact, practical path from <span className="font-semibold text-blue-500 dark:text-blue-400">formation → credit → private payments</span>. Each phase includes <span className="font-semibold text-indigo-500 dark:text-indigo-400">templates, vendor lists, and done-for-you checklists</span>.
                </p>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-8">
            {/* Nav */}
            <div className="lg:w-1/4">
                <div className="sticky top-28 space-y-4">
                {phases.map((p, idx) => (
                    <button
                    key={idx}
                    onClick={() => setActivePhase(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-3
                        ${
                        activePhase === idx
                            ? 'bg-gradient-to-r from-blue-400 to-indigo-500 border border-indigo-300 text-white shadow-lg scale-105'
                            : 'bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white/90 hover:scale-105'
                        }`}
                    >
                    <div
                        className={`p-3 rounded-full transition-colors duration-300 ${
                        activePhase === idx
                            ? 'bg-white text-blue-500'
                            : 'bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-white'
                        }`}
                    >
                        {p.icon}
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold">{`Phase ${idx + 1}`}</div>
                        <div className="text-sm mt-1 opacity-75 text-slate-700 dark:text-white/75">
                        {p.title.split(":")[1].trim()}
                        </div>
                    </div>
                    </button>
                ))}
                </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4">
                <AnimatePresence mode="wait">
                <motion.div
                    key={activePhase}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                    <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-slate-700 dark:to-slate-800 text-indigo-700 dark:text-white text-sm font-medium mb-3">
                        Phase {activePhase + 1}
                        </div>
                        <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white">
                        {phases[activePhase].title}
                        </h3>
                        <p className="text-slate-700 dark:text-white/90">
                        {phases[activePhase].subtitle}
                        </p>
                    </div>
                    <div className="text-6xl font-extrabold text-slate-200">{`0${activePhase + 1}`}</div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {phases[activePhase].bullets.map((b, i) => (
                        <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                        <div className="mt-1 text-blue-500 dark:text-blue-400">
                            <FaCheckCircle />
                        </div>
                        <p className="text-slate-700 dark:text-white/90">{b}</p>
                        </div>
                    ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                    {/* Add CTA buttons if needed */}
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>
            </div>
        </div>
      </section>
      {/* NOTE: footer/copyright removed as requested */}
    </main>
  );
}
