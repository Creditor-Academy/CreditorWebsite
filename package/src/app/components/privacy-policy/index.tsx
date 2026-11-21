"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaUser,
  FaLock,
  FaCreditCard,
  FaBan,
  FaCopyright,
  FaTools,
  FaBalanceScale,
  FaSignOutAlt,
  FaGavel,
  FaSyncAlt,
  FaEnvelope,
  FaBook,
  FaSearch,
  FaCheck,
  FaQuestionCircle,
  FaShieldAlt,
  FaFileContract,
  FaMoneyBillWave,
  FaRobot,
  FaExclamationTriangle,
  FaHandshake,
  FaUserShield,
  FaServer,
  FaGlobe,
  FaSlidersH
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SectionItem {
  icon: React.ReactElement;
  title: string;
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [readSections, setReadSections] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const sectionElements = document.querySelectorAll("[data-section]");

      sectionElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          setActiveSection(index);
          setTimeout(() => {
            setReadSections((prev) => new Set(prev).add(index));
          }, 800);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sectionElement = document.querySelector(`[data-section="${index}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setReadSections((prev) => new Set(prev).add(index));
    }
  };

  const sections: SectionItem[] = [
    { icon: <FaInfoCircle />, title: "Part 1: The Short Version" },
    { icon: <FaLock />, title: "Part 2: What We Collect (Overview & Warning)" },
    { icon: <FaUser />, title: "2.1 Account and Membership" },
    { icon: <FaBook />, title: "2.2 Live Classes, Online Courses and Events" },
    { icon: <FaShieldAlt />, title: "2.3 Consultations & Credit Information" },
    { icon: <FaRobot />, title: "2.3A AI Assistant Chats" },
    { icon: <FaCreditCard />, title: "2.4 Payments & Statements" },
    { icon: <FaGlobe />, title: "2.5 Website, Cookies & Analytics" },
    { icon: <FaEnvelope />, title: "2.6 Marketing and Events" },
    { icon: <FaServer />, title: "2.7 Vendors Who Handle Data For Us" },
    { icon: <FaFileContract />, title: "2.8 How Long We Keep Things" },
    { icon: <FaBan />, title: "Part 3: Things We Never Do" },
    { icon: <FaSlidersH />, title: "Part 4: Your Controls" },
    { icon: <FaBalanceScale />, title: "Part 5: When We Must Disclose Information" },
    { icon: <FaGavel />, title: "Part 6: State & Federal Rules" },
    { icon: <FaEnvelope />, title: "Part 7: Updates and How to Reach Us" }
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = (readSections.size / sections.length) * 100;

  const gradientHeaderColors = [
    "from-blue-600 to-indigo-600",
    "from-amber-500 to-orange-600",
    "from-blue-500 to-sky-600",
    "from-indigo-500 to-indigo-700",
    "from-purple-600 to-pink-600",
    "from-teal-500 to-emerald-600",
    "from-sky-600 to-blue-700",
    "from-slate-700 to-slate-900",
    "from-blue-600 to-purple-600",
    "from-indigo-600 to-blue-600",
    "from-purple-500 to-indigo-600",
    "from-red-500 to-rose-600",
    "from-emerald-500 to-teal-600",
    "from-amber-600 to-red-600",
    "from-blue-700 to-indigo-800",
    "from-teal-600 to-blue-600"
  ];

  return (
    <section className="min-h-screen bg-[#f3f4fd] relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400/10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-400/10 -translate-x-1/2 pointer-events-none" />

      {/* Fixed top progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-sky-500 to-purple-600"
          style={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 py-12 md:py-20 text-gray-800">
        {/* Header Card */}
        <motion.header
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-gray-100"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-blue-500/10 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-purple-500/10 pointer-events-none" />

          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creditor Academy Privacy Policy
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-gray-600">
              Please read this policy carefully. Learn how Creditor Academy protects, uses, and safeguards your
              personal information and credit data.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 shrink-0 text-base" />
                <div className="text-sm text-blue-800">
                  <p>
                    <strong>Effective date:</strong> November 18, 2026 · <strong>Last updated:</strong> November 18, 2026
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Estimated reading time: 14–17 minutes · WCAG 2.2 AA Compliance Target
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Entity Notice (Strict Compliance: Imperium Group DBA Creditor Academy, No Inc/LLC) */}
            <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
              <strong>Seller Entity:</strong> Imperium Group, a business trust, doing business as Creditor Academy · 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States · Contact: counselor@creditoracademy.com · (425) 400-9246 (9:00 AM–5:00 PM Eastern Time).
            </div>
          </div>
        </motion.header>

        {/* Table of Contents Card */}
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaBook className="text-blue-500 text-xl" />
            <h2 className="text-2xl font-semibold">Table of Contents</h2>
          </div>

          {/* Search Box */}
          <div className="mb-6">
            <div
              className={`flex items-center border rounded-xl transition-all duration-200 max-w-md ${
                isSearchFocused
                  ? "ring-2 ring-blue-500 border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <FaSearch className="ml-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sections (e.g. collect, vendor, delete, ai, retention)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full py-3 px-3 bg-transparent outline-none text-sm text-gray-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 text-gray-400 hover:text-gray-600:text-gray-200"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Reading progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Reading progress</span>
              <span className="text-sm text-gray-500 font-mono">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                style={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Sections List in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const originalIndex = sections.findIndex((s) => s.title === section.title);
                const isActive = activeSection === originalIndex;
                return (
                  <button
                    key={originalIndex}
                    onClick={() => scrollToSection(originalIndex)}
                    className={`flex items-center w-full gap-3 py-2.5 px-3.5 rounded-xl transition-all duration-150 text-left text-sm ${
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm font-semibold border-l-4 border-blue-500"
                        : "hover:bg-gray-100:bg-gray-700 text-gray-700"
                    }`}
                    title={section.title}
                  >
                    <span className="text-blue-500 shrink-0 text-base">{section.icon}</span>
                    <span className="flex-1 truncate">{section.title}</span>
                    {readSections.has(originalIndex) && (
                      <FaCheck className="text-green-500 text-xs shrink-0" />
                    )}
                  </button>
                );
              })
            ) : (
              <div className="col-span-full text-center py-4 text-gray-500 text-sm">
                No sections matching &quot;{searchQuery}&quot;
              </div>
            )}
          </div>

          {/* Help note */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-start gap-2.5">
            <FaQuestionCircle className="text-blue-500 mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-gray-600">
              Use the search bar to quickly find specific privacy topics. Green checkmarks indicate sections you&apos;ve already read.
            </p>
          </div>
        </motion.div>

        {/* Section Cards */}
        <div className="space-y-10">
          {/* Section 0: Part 1 The Short Version */}
          <motion.div
            data-section={0}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[0]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaInfoCircle className="text-lg" />
                <h2 className="text-lg font-semibold">Part 1. The Short Version</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 1 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-6 text-sm sm:text-base leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2">1.1 Our main commitments</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong className="text-gray-900">We treat credit information as the most sensitive thing we may hold.</strong> If you choose to share a credit report or identity document with us, it can show your Social Security number, date of birth, past addresses, account numbers and payment history.
                  </li>
                  <li>
                    <strong className="text-gray-900">We use your information to run your membership:</strong> giving you access to live classes and online courses, holding consultations you book, billing you, and helping you when you contact us.
                  </li>
                  <li>
                    <strong className="text-gray-900">We never sell your personal information and never use it for ads.</strong> We do not use advertising pixels, retargeting or advertising cookies.
                  </li>
                  <li>
                    <strong className="text-gray-900">Vendors work for us under contract.</strong> Hosting, payments, email, the online course platform, our AI provider and similar vendors handle data only on our instructions (Part 2.7).
                  </li>
                  <li>
                    <strong className="text-gray-900">You have real control.</strong> You can see, download, fix and delete your information and turn off marketing email (Part 4). Some states give you further legal rights (Part 6).
                  </li>
                  <li>
                    <strong className="text-gray-900">Adults in the United States only.</strong> You must be 18 or older.
                  </li>
                  <li>
                    <strong className="text-gray-900">We treat what you type to an AI Assistant as sensitive.</strong> We don&apos;t use your chats to train AI models, and our AI provider is barred by contract from doing so (Part 2.3A).
                  </li>
                  <li>
                    <strong className="text-gray-900">Questions:</strong> counselor@creditoracademy.com or (425) 400-9246, 9:00 AM–5:00 PM Eastern Time.
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">1.2 Who we are and what we offer</h3>
                <p className="text-gray-700">
                  &quot;Creditor Academy,&quot; &quot;we,&quot; &quot;us,&quot; and &quot;our&quot; mean Imperium Group, a business trust, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States. Creditor Academy controls the personal information described in this policy.
                </p>
                <p className="mt-2 text-gray-700">Creditor Academy provides self-help credit education. We offer:</p>
                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-700">
                  <li><strong>Creditor Academy Masterclass</strong>, a monthly membership with live online classes Monday–Friday at 2:00 PM Pacific Time, plus access to Creditor Academy courses on the Athena LMS learning platform (creditor-academy.lmsathena.com).</li>
                  <li><strong>I Want Remedy Now</strong>, a one-time online course.</li>
                  <li><strong>One-on-one consultations</strong>, billed by the hour.</li>
                  <li><strong>Education-Only AI Assistants</strong>, included with the Masterclass at no extra charge.</li>
                </ul>
                <p className="mt-2 text-sm">
                  Prices are on our <Link href="/pricing-terms" className="text-blue-600 font-semibold hover:underline">Pricing Details</Link> page.
                </p>
                <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs sm:text-sm">
                  <strong>The Creditor Academy Private Membership Association:</strong> Members may also take part in the Creditor Academy Private Membership Association (the &quot;PMA&quot;). Creditor Academy sells and provides all of our Offerings, and your contract for them is with Creditor Academy only. The PMA does not hold member personal information. Only Creditor Academy holds it. If a dispute is referred to the PMA Council, we share only the information needed to resolve it (Part 5). No membership document, PMA document, or other document takes away any right you have under consumer protection or privacy law.
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">1.3 How Creditor Academy works</h3>
                <p className="text-gray-700">
                  Creditor Academy teaches. You do your own disputes. Our staff and our AI Assistants do not dispute on your behalf, do not write your letters, do not contact credit bureaus or creditors for you, and do not promise results. See <Link href="/our-approach" className="text-blue-600 font-semibold hover:underline">How Creditor Academy Works</Link>.
                </p>
                <p className="mt-2 text-gray-700">
                  We also give you the protections of the federal Credit Repair Organizations Act (15 U.S.C. 1679 et seq.). Before you sign anything, you get a separate written disclosure of your credit file rights (15 U.S.C. 1679c). You then sign a written contract (15 U.S.C. 1679d), and you may cancel within three business days and get back everything you paid (15 U.S.C. 1679e). We bill only at the end of each period, for service already provided (15 U.S.C. 1679b(b)). This Privacy Policy explains how we handle personal information. It does not replace your Member Contract or the disclosures you receive.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-2">1.4 What this policy covers, and what it doesn&apos;t</h3>
                <p className="text-gray-700">
                  <strong>Covers information we collect:</strong> (a) on our website and the online course platform; (b) when you sign up, pay or take part in your membership; (c) in live classes, events (<Link href="/events-terms" className="text-blue-600 hover:underline">Events and Live Classes Terms</Link>), and consultations; (d) when you contact us by email or phone; (e) when you use our AI Assistants (Part 2.3A); and (f) from the outside sources named in Part 2.
                </p>
                <p className="mt-2 text-gray-700"><strong>Doesn&apos;t cover:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Sites and services run by others, such as credit bureaus, AnnualCreditReport.com, banks and card issuers, and any site you open from a link we provide. Their own privacy policies apply.</li>
                  <li>Job applicants, employees and contractors. Their information is handled separately.</li>
                </ul>
                <p className="mt-2 text-xs text-gray-500">
                  <strong>Our role:</strong> Where privacy laws distinguish a &quot;business&quot; or &quot;controller&quot; from a &quot;service provider&quot; or &quot;processor,&quot; Creditor Academy is the business/controller for everything described here (see Cal. Civ. Code 1798.140(d)).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 1: Part 2 Overview & Warning */}
          <motion.div
            data-section={1}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[1]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaLock className="text-lg" />
                <h2 className="text-lg font-semibold">Part 2. What We Collect (Overview &amp; Sharing Guidelines)</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 2 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-gray-700">
                Each section below answers four core questions: What do we get? Why? Who else handles it? How long do we keep it? Retention periods are collected in Part 2.8.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-sm text-amber-900 space-y-1">
                <strong className="font-bold flex items-center gap-2">
                  <FaLock className="text-amber-600" /> Before you share anything:
                </strong>
                <p className="text-xs sm:text-sm">
                  Most of what we hold comes from you. Please never send us full card numbers, card security codes (CVV), online banking passwords or PINs, except on the payment page run by our payment processor. Please also leave out health details, race, religion, sexual orientation and similar sensitive facts from messages, class chats and consultations unless you truly need to share them.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 2: 2.1 Account and Membership */}
          <motion.div
            data-section={2}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[2]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaUser className="text-lg" />
                <h2 className="text-lg font-semibold">2.1 Your Account and Membership</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 3 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900 w-1/4">What we get</th>
                      <td className="py-3 px-4 text-gray-700">
                        Full name, email, mailing address, phone number, username and account ID. Your log-in details for the online course platform (account log-in credentials are sensitive data). Records of the disclosures you were shown, the documents you signed or accepted and when, and cancellation notices. You sign by checking a box at checkout, and we keep a record that you checked it and when. Marketing consents and opt-outs. Support emails and notes, and call recordings if a call is recorded (we tell you at the start of any recorded call, and you can say no). Survey answers, feedback, reviews and testimonials.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Where it comes from</th>
                      <td className="py-3 px-4 text-gray-700">
                        You; our systems as you use the website and courses; our payment processor; public sources such as public social media posts that mention us.
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">Why</th>
                      <td className="py-3 px-4 text-gray-700">
                        To open and run your membership and confirm it&apos;s you; to send service messages (receipts, billing notices, security alerts, changes to our terms); to answer questions and look into complaints; to keep proof of what you agreed to and when; and for any other purpose we describe when we ask for your consent.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Who else handles it</th>
                      <td className="py-3 px-4 text-gray-700">Hosting, email, phone and online course platform vendors (Part 2.7).</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">How long</th>
                      <td className="py-3 px-4 text-gray-700">See Part 2.8.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Contract and cancellation records:</strong> Your records also include the separate credit file rights disclosure and the written contract you received and signed, and when. We use them to give you those documents (15 U.S.C. 1679c, 1679d), to honor your three-business-day right to cancel (15 U.S.C. 1679e), and to make sure no services that require payment are provided and no fee is charged during the cancellation period or before the service is provided (15 U.S.C. 1679b(b)).
              </p>
            </div>
          </motion.div>

          {/* Section 3: 2.2 Live Classes, Online Courses and Events */}
          <motion.div
            data-section={3}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[3]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaBook className="text-lg" />
                <h2 className="text-lg font-semibold">2.2 Live Classes, Online Courses and Events</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 4 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900 w-1/4">What we get</th>
                      <td className="py-3 px-4 text-gray-700">
                        Attendance at live classes and events; your name, image, voice and chat messages if you turn on your camera or microphone or post in the class chat; class recordings in which you appear, if a class is recorded (we say so at the start, and recordings are shared only with members inside Athena LMS). On the online course platform: courses you open, lessons completed, quiz answers and progress.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Why</th>
                      <td className="py-3 px-4 text-gray-700">To run classes and courses, track your progress, answer questions, and improve our teaching.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">Who else handles it</th>
                      <td className="py-3 px-4 text-gray-700">Athena LMS, the online course platform where live classes are held (Part 2.7).</td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">How long</th>
                      <td className="py-3 px-4 text-gray-700">See Part 2.8.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-amber-800 font-medium">
                Caution: Anything you say or show in a live class may be seen by other attendees. Please don&apos;t share your credit report, Social Security number or account numbers in a live class.
              </p>
            </div>
          </motion.div>

          {/* Section 4: 2.3 Consultations & Credit Information */}
          <motion.div
            data-section={4}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[4]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-lg" />
                <h2 className="text-lg font-semibold">2.3 Consultations and Credit Information You Choose to Share</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 5 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900 w-1/4">What we get</th>
                      <td className="py-3 px-4 text-gray-700">
                        What you tell us in a one-on-one consultation (held on Google Meet), and our notes. If you choose to share them, credit report contents (names, current and former addresses, date of birth, full or partial Social Security number, employer, account names and numbers, balances, payment history, collections, public records and inquiries), letters you wrote and replies you received from bureaus or creditors, and identity or address documents. All of this is sensitive. You never have to share documents with us. If you choose to, you can show them on screen during a Google Meet consultation or email them to counselor@creditoracademy.com. Please black out full account numbers and your Social Security number first.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Where it comes from</th>
                      <td className="py-3 px-4 text-gray-700">You.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">Why</th>
                      <td className="py-3 px-4 text-gray-700">
                        To teach you during the consultation so you can understand your own reports and do your own disputes. We do not send letters, file disputes, or contact credit bureaus or creditors for you.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Who else handles it</th>
                      <td className="py-3 px-4 text-gray-700">Hosting, email and video vendors, including Google Workspace and Google Meet (Part 2.7). Nobody receives it for advertising.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">How long</th>
                      <td className="py-3 px-4 text-gray-700">See Part 2.8. You can ask us to delete credit reports and identity documents at any time.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600">
                <strong>Other people&apos;s information:</strong> Reports and documents can name joint account holders, authorized users, co-signers or former spouses. Share only your own reports and documents, and only what you have the right to share.
              </p>
            </div>
          </motion.div>

          {/* Section 5: 2.3A AI Assistant Chats */}
          <motion.div
            data-section={5}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[5]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaRobot className="text-lg" />
                <h2 className="text-lg font-semibold">2.3A AI Assistant Chats</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 6 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900 w-1/4">What</th>
                      <td className="py-3 px-4 text-gray-700">Your chat messages with our AI Assistants, anything you choose to paste or upload, and any checklist you mark.</td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Why</th>
                      <td className="py-3 px-4 text-gray-700">To answer the questions you ask, keep the service safe, and help you when you ask for support.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">Who handles it</th>
                      <td className="py-3 px-4 text-gray-700">Our AI provider and hosting provider (Part 2.7). Only you, plus a small number of authorized Creditor Academy staff, and only to help you when you ask, look into a reported problem or misuse, keep the service safe, or follow the law. Staff access is logged.</td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">AI training</th>
                      <td className="py-3 px-4 text-blue-700 font-bold">We do not use your chats to train AI models. Our AI provider is barred by contract from doing so.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">How long</th>
                      <td className="py-3 px-4 text-gray-700">Until you ask us to delete them or your membership ends. We delete them within 90 days after your membership ends, unless the law requires us to keep them longer.</td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Never</th>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Never sold, never used for ads, never used to make credit decisions about you.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600">
                Please don&apos;t type or upload your full Social Security number, card numbers, bank account numbers, passwords, or login codes. Our AI Assistants never ask for them and never sign in to your accounts. See <Link href="/ai-notice" className="text-blue-600 font-semibold hover:underline">Education-Only AI Assistants</Link>.
              </p>
            </div>
          </motion.div>

          {/* Section 6: 2.4 Payments & Statements */}
          <motion.div
            data-section={6}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[6]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-lg" />
                <h2 className="text-lg font-semibold">2.4 Payments and Statements</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 7 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
                <strong>What we get, and what we don&apos;t:</strong> Your card number and security code go directly to our payment processor, Tilled, Inc. (&quot;Tilled&quot;), which handles them under its own privacy policy and the Payment Card Industry Data Security Standard. Tilled tells us whether each charge went through, was declined or was refunded, and lets us show the card brand, last four digits and expiration date so you can tell your cards apart. We also keep your billing name and address, transaction history, membership status, and refund and chargeback records. Tilled may also send us fraud-screening results. Creditor Academy charges show on your card statement as <strong>&quot;IMPERIUM GROUP.&quot;</strong> Imperium Group is our legal name, and Creditor Academy is the name we do business under. It is not a separate company. Your card number goes to Tilled, not to us.
              </p>
              <p>
                <strong>Why:</strong> To bill you, send receipts and required notices, process cancellations and refunds, and respond to payment disputes. Nothing in this policy limits your right to dispute a charge with your card issuer, or your rights under the Fair Credit Billing Act (15 U.S.C. 1666 et seq.), the Electronic Fund Transfer Act (15 U.S.C. 1693 et seq.) or card network rules. We will not penalize you for disputing a charge.
              </p>
              <p><strong>Who else handles it:</strong> Tilled; accountants and auditors as needed.</p>
              <p><strong>How long:</strong> See Part 2.8.</p>
            </div>
          </motion.div>

          {/* Section 7: 2.5 Website, Cookies & Analytics */}
          <motion.div
            data-section={7}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[7]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-lg" />
                <h2 className="text-lg font-semibold">2.5 Our Website, Cookies &amp; Analytics</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 8 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900 w-1/4">What we get</th>
                      <td className="py-3 px-4 text-gray-700">
                        IP address; browser, device type and operating system; pages you visit and links you click; time stamps; the site that sent you to us; error logs. Approximate city, state or region based on your IP address. We do not collect precise geolocation.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Where it comes from</th>
                      <td className="py-3 px-4 text-gray-700">
                        Our systems, using only strictly necessary cookies and analytics cookies. Our analytics cookies are Google Analytics cookies, such as _ga and _ga_&lt;container-id&gt; (see our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>).
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">Why</th>
                      <td className="py-3 px-4 text-gray-700">
                        To run and secure the website, keep you signed in, remember settings, fix errors, prevent fraud, and understand how the website is used so we can improve it.
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 font-bold text-gray-900">Who else handles it</th>
                      <td className="py-3 px-4 text-gray-700">Hosting and analytics vendors (Part 2.7). Our analytics tool is Google Analytics, provided by Google LLC.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <th className="py-3 px-4 font-bold text-gray-900">How long</th>
                      <td className="py-3 px-4 text-gray-700">See Part 2.8.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm font-bold text-emerald-700">
                No ad tracking: We do not use advertising or marketing pixels, retargeting, or advertising cookies, and we do not sell or share personal information for cross-context behavioral advertising.
              </p>
            </div>
          </motion.div>

          {/* Section 8: 2.6 Marketing and Events */}
          <motion.div
            data-section={8}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[8]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <h2 className="text-lg font-semibold">2.6 Marketing and Events</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 9 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-3 text-sm sm:text-base leading-relaxed text-gray-700">
              <p><strong>What we get:</strong> How you heard about us, marketing preferences and event attendance.</p>
              <p>
                <strong>Why:</strong> To send emails about classes, courses and offers, with your consent where the law requires it. We do not make sales calls, and we never take sign-ups or payments by phone. Our phone line is for support only. We never use credit information or identity documents for marketing.
              </p>
              <p><strong>Who else handles it:</strong> Our email vendor (Google Workspace) and Athena LMS, where live classes and events are held. We do not give personal information to any affiliated company for its own use.</p>
              <p><strong>How long:</strong> See Part 2.8. We keep a list of people who opted out so their choice sticks.</p>
            </div>
          </motion.div>

          {/* Section 9: 2.7 Vendors Who Handle Data For Us */}
          <motion.div
            data-section={9}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[9]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaServer className="text-lg" />
                <h2 className="text-lg font-semibold">2.7 Vendors Who Handle Data For Us</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 10 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-xs text-gray-600">
                Every vendor below works under a written contract that limits its use of the information to serving us and requires it to protect the data (for California, see Cal. Civ. Code 1798.100(d)).
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-bold">What the vendor does for us</th>
                      <th className="py-3 px-4 font-bold">What it receives</th>
                      <th className="py-3 px-4 font-bold">Vendor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Website hosting and storage</td>
                      <td className="py-3 px-4 text-gray-600">Information stored on our systems</td>
                      <td className="py-3 px-4 text-gray-500">Website hosting provider (name available on request)</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Online course platform and live classes</td>
                      <td className="py-3 px-4 text-gray-600">Account, course progress and usage information; name, image, voice and chat messages in live classes; class recordings, if any</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">Athena LMS, operated by our LMS provider</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Consultation video</td>
                      <td className="py-3 px-4 text-gray-600">Name, image, voice, chat messages</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">Google Meet (Google LLC)</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Payments</td>
                      <td className="py-3 px-4 text-gray-600">Billing and payment information</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">Tilled, Inc.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Email</td>
                      <td className="py-3 px-4 text-gray-600">Contact information, message content</td>
                      <td className="py-3 px-4 font-semibold text-gray-900">Google Workspace (Google LLC)</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Phone</td>
                      <td className="py-3 px-4 text-gray-600">Phone number, call records, recordings if any</td>
                      <td className="py-3 px-4 text-gray-500">Business phone service provider (name available on request)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Analytics</td>
                      <td className="py-3 px-4 text-gray-600">Device and website usage information</td>
                      <td className="py-3 px-4 text-gray-600">Google Analytics (Google LLC). Data processing terms with ad sharing turned off</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">AI model provider for AI Assistants</td>
                      <td className="py-3 px-4 text-gray-600">Chat messages and uploads</td>
                      <td className="py-3 px-4 text-gray-500">AI model provider (name available on request)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">AI Assistant hosting</td>
                      <td className="py-3 px-4 text-gray-600">Chat messages, uploads and usage logs</td>
                      <td className="py-3 px-4 text-gray-500">AI hosting provider (name available on request)</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Professional advisers</td>
                      <td className="py-3 px-4 text-gray-600">What they need for legal, tax or auditing requirements</td>
                      <td className="py-3 px-4 text-gray-500">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Section 10: 2.8 How Long We Keep Things */}
          <motion.div
            data-section={10}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[10]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaFileContract className="text-lg" />
                <h2 className="text-lg font-semibold">2.8 How Long We Keep Things (Retention Schedule)</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 11 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                <strong>The rule:</strong> We keep your personal information until you ask us to delete it (Part 4) or we no longer need it for the purpose we collected it for, whichever comes first. When you ask, we delete it or de-identify it, except for records the law requires us to keep longer or that we need for an actual or reasonably expected legal claim or investigation. We keep those records only as long as that need lasts, and use them only for that purpose.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-bold w-1/2">Data Category</th>
                      <th className="py-3 px-4 font-bold w-1/2">Retention Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Account and contact information</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete it or we no longer need it, whichever comes first</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Course progress and class attendance</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete it or we no longer need it, whichever comes first</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Class recordings (if any)</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them or we no longer need them, whichever comes first</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Consultation notes</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them or we no longer need them, whichever comes first</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Credit reports and identity documents you share</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them or we no longer need them, whichever comes first. You can ask at any time, including right after a consultation</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Support messages and call recordings</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them or we no longer need them, whichever comes first</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">AI Assistant chats and uploads</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them or your membership ends. We delete them within 90 days after your membership ends, unless the law requires us to keep them longer. You can ask us to delete them at any time</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Website usage and log data</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete it or we no longer need it, whichever comes first</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Marketing records</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them. If you opt out, we keep a record of your opt-out so it sticks</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Contract, disclosure, cancellation, terms acceptance and consent records</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them, except that we keep them for as long as the law requires (we aim for at least 5 years after your membership ends) or while we need them for a legal claim</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Payment, billing and tax records</td>
                      <td className="py-3 px-4 text-gray-600">Until you ask us to delete them, except that we keep them longer where tax or other law requires it or where we need them for a legal claim</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Call records the law requires us to keep</td>
                      <td className="py-3 px-4 text-gray-600">As long as the law requires (for example, 16 CFR 310.5, if it applies). We do not make sales calls</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Backups</td>
                      <td className="py-3 px-4 text-gray-600">Deleted data drops out as backups expire on a rolling schedule. We aim to keep backups no longer than 90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Section 11: Part 3 Things We Never Do */}
          <motion.div
            data-section={11}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[11]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaBan className="text-lg" />
                <h2 className="text-lg font-semibold">Part 3. Things We Never Do</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 12 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-sm sm:text-base leading-relaxed">
              <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                <li><strong>We never sell, rent or trade your personal information</strong>, and we never disclose it for cross-context behavioral advertising (see Cal. Civ. Code 1798.140(ad), (ah)).</li>
                <li><strong>We never use advertising pixels, retargeting or advertising cookies.</strong></li>
                <li><strong>We never use credit information to judge you.</strong> We don&apos;t use it, or give it to anyone, to decide whether you qualify for credit, insurance, a job, housing or any other benefit.</li>
                <li><strong>We never report about you.</strong> We don&apos;t send information about you to any credit bureau.</li>
                <li><strong>We never contact credit bureaus or creditors for you</strong>, and never write or send dispute letters for you. Neither do our AI Assistants. You do your own disputes.</li>
                <li><strong>We never collect voiceprints, face geometry or other biometric identifiers.</strong> Before any such collection we would give you a separate written notice of what is collected, why and for how long, get your written release, and publish a retention and destruction schedule (740 ILCS 14/15(a)–(b)). We would never sell, lease, trade or otherwise profit from such data (740 ILCS 14/15(c)). We do not extract voiceprints from call or class recordings.</li>
                <li><strong>We never copy or simulate your voice or likeness</strong>, or anyone else&apos;s, without permission.</li>
                <li><strong>We never stop you from talking to regulators</strong> (Part 5).</li>
                <li><strong>We never ask for your passwords or login codes</strong>, and our AI Assistants never sign in to your accounts.</li>
              </ul>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600">
                <strong>What we can&apos;t promise:</strong> perfect security. We use administrative, technical and physical safeguards, with extra care for credit information and identity documents. Safeguards lower risk; they cannot remove it. What we can promise is how we respond if something goes wrong (Part 6.9). Details, and steps you can take, are on our <Link href="/security" className="text-blue-600 font-semibold hover:underline">Security and Compliance</Link> page.
              </div>
            </div>
          </motion.div>

          {/* Section 12: Part 4 Your Controls */}
          <motion.div
            data-section={12}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[12]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaSlidersH className="text-lg" />
                <h2 className="text-lg font-semibold">Part 4. Your Controls</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 13 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-xs text-gray-500">
                These controls are open to every member. Part 6 adds rights that depend on your state.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-bold w-1/3">You want to...</th>
                      <th className="py-3 px-4 font-bold w-2/3">How</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">See or get a copy of your data</td>
                      <td className="py-3 px-4 text-gray-600">Ask us, and we will send you a copy.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Fix something</td>
                      <td className="py-3 px-4 text-gray-600">
                        Ask us to correct it. We can&apos;t change what a credit bureau&apos;s report says. If your report is wrong, you can dispute it free of charge directly with the bureau and the company that supplied the information (see <Link href="/fcra-rights" className="text-blue-600 hover:underline">Your Rights Under the FCRA</Link> and <Link href="/help/disputing-on-your-own" className="text-blue-600 hover:underline">Help: Disputing on Your Own</Link>).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Delete things</td>
                      <td className="py-3 px-4 text-gray-600">
                        Ask us to delete your account and personal information. We will, except where the law lets us keep certain records (for example, for tax, billing disputes, legal compliance or legal claims). Deleting your information does not by itself cancel your membership; see the <Link href="/cancellation-policy" className="text-blue-600 hover:underline">Cancellation Policy</Link>.
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Stop marketing email</td>
                      <td className="py-3 px-4 text-gray-600">Use the unsubscribe link in any marketing email, or contact us. Service messages (receipts, billing notices, security alerts) will still arrive.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Stop calls</td>
                      <td className="py-3 px-4 text-gray-600">Ask us to stop calling at any time, by any reasonable method.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Manage cookies</td>
                      <td className="py-3 px-4 text-gray-600">See Part 6.8 and our <Link href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</Link>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                <p><strong>How to ask:</strong> Email counselor@creditoracademy.com or call (425) 400-9246, 9:00 AM–5:00 PM Eastern Time.</p>
                <p><strong>Checking it&apos;s you:</strong> We match what you tell us against our records and may ask you to confirm from your account email. Requests about credit information or identity documents may need extra steps, but we avoid asking you to send new copies of ID where we can.</p>
                <p><strong>Timing:</strong> We respond within the time the law sets, generally 45 days, with one extension where allowed.</p>
                <p><strong>If we say no:</strong> You can appeal by emailing counselor@creditoracademy.com with &quot;Privacy Appeal&quot; in the subject within 60 days of our decision.</p>
              </div>
            </div>
          </motion.div>

          {/* Section 13: Part 5 When We Must Disclose Information */}
          <motion.div
            data-section={13}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[13]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaBalanceScale className="text-lg" />
                <h2 className="text-lg font-semibold">Part 5. When We Must Disclose Information</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 14 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-xs text-gray-500">Apart from the vendors in Part 2.7, information leaves Creditor Academy only in these situations:</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4 font-bold w-1/3">Situation</th>
                      <th className="py-3 px-4 font-bold w-2/3">What happens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Courts and legal process</td>
                      <td className="py-3 px-4 text-gray-600">A subpoena, court order, warrant or similar process that is valid and binding on us. We check that the demand is lawful and give only what it requires. Where the law allows and it is practical, we try to tell you first.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Regulators and government agencies</td>
                      <td className="py-3 px-4 text-gray-600">Lawful requests from agencies such as the FTC, CFPB or a state Attorney General. We respond and cooperate with lawful investigations.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Legal duties</td>
                      <td className="py-3 px-4 text-gray-600">Records or reports a law requires us to keep or provide, such as security breach notices (Part 6.9).</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Danger to someone</td>
                      <td className="py-3 px-4 text-gray-600">Where we reasonably believe disclosure is needed to prevent death or serious harm.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Fraud, abuse and security</td>
                      <td className="py-3 px-4 text-gray-600">To investigate or stop fraud, account takeover, security attacks or misuse, and to enforce our terms (for example, our <Link href="/acceptable-use" className="text-blue-600 hover:underline">Acceptable Use Policy</Link>).</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">Resolving disputes</td>
                      <td className="py-3 px-4 text-gray-600">If you or we refer a dispute to the PMA Council (Part 7.3), we share the information needed to resolve it.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Legal claims</td>
                      <td className="py-3 px-4 text-gray-600">To establish, exercise or defend legal claims involving Creditor Academy, you or others.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-bold text-gray-900">You ask us to</td>
                      <td className="py-3 px-4 text-gray-600">When you tell us to send information to someone you choose.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-gray-900">Change of ownership</td>
                      <td className="py-3 px-4 text-gray-600">Honors this policy or one at least as protective.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Section 14: Part 6 State & Federal Rules */}
          <motion.div
            data-section={14}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[14]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaGavel className="text-lg" />
                <h2 className="text-lg font-semibold">Part 6. Rules That Depend on Where You Live or What Law Applies</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 15 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-3 text-sm sm:text-base leading-relaxed text-gray-700">
              <p>
                <strong>6.1 State privacy laws:</strong> We honor access, correction, deletion, opt-out of sale/targeted advertising, and sensitive data consent across applicable state laws.
              </p>
              <p>
                <strong>6.2 California:</strong> California residents: see our <Link href="/privacy/california" className="text-blue-600 font-semibold hover:underline">California Privacy Notice</Link>.
              </p>
              <p>
                <strong>6.3 Gramm-Leach-Bliley Act (GLBA):</strong> We share nonpublic personal information with nonaffiliated third parties only within statutory exceptions.
              </p>
              <p>
                <strong>6.4 Fair Credit Reporting Act:</strong> Your FCRA rights exist whether or not you are a member. See <Link href="/fcra-rights" className="text-blue-600 font-semibold hover:underline">Your Rights Under the FCRA</Link>.
              </p>
              <p>
                <strong>6.5 Biometric and voice laws:</strong> We never collect voiceprints or biometric identifiers.
              </p>
              <p>
                <strong>6.6 Children:</strong> Creditor Academy is strictly for adults 18+. We never knowingly collect information from children under 13.
              </p>
              <p>
                <strong>6.7 US only:</strong> Our Offerings are meant only for individuals located in the United States.
              </p>
              <p>
                <strong>6.8 Global Privacy Control:</strong> We respect GPC signals from your browser as a valid opt-out request.
              </p>
              <p>
                <strong>6.9 Security Breaches:</strong> We notify you and regulators promptly as required by law.
              </p>
            </div>
          </motion.div>

          {/* Section 15: Part 7 Updates & Contact */}
          <motion.div
            data-section={15}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className={`p-4 bg-gradient-to-r ${gradientHeaderColors[15]} text-white flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <h2 className="text-lg font-semibold">Part 7. Updates and How to Reach Us</h2>
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold bg-white/20 px-2 py-0.5 rounded">
                Section 16 of {sections.length}
              </span>
            </div>
            <div className="p-6 md:p-8 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
              <p><strong>7.1 When this policy changes:</strong> For material changes, we notify you by email at least 30 days before they take effect.</p>
              <p><strong>7.2 Which document controls:</strong> Your Member Contract and CROA disclosures control first, then our Terms of Service, then this Privacy Policy.</p>
              <p><strong>7.3 Resolving disputes:</strong> Contact us first at counselor@creditoracademy.com. You keep all legal rights under federal and state law.</p>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm space-y-1">
                <p><strong>Email:</strong> counselor@creditoracademy.com</p>
                <p><strong>Phone:</strong> (425) 400-9246, 9:00 AM–5:00 PM Eastern Time</p>
                <p><strong>Mail:</strong> Imperium Group, doing business as Creditor Academy, Attn: Privacy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States</p>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                <strong>7.5 Rights this policy cannot take away:</strong> Nothing waives any right under CROA, FCRA, FCBA, EFTA, state law, or your right to post honest reviews under the Consumer Review Fairness Act.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
