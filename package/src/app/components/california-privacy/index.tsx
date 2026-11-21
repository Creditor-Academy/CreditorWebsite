"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaInfoCircle,
  FaShieldAlt,
  FaBook,
  FaSearch,
  FaCheck,
  FaQuestionCircle,
  FaFileContract,
  FaUserShield,
  FaTable,
  FaListUl,
  FaBalanceScale,
  FaEnvelope,
  FaPhoneAlt,
  FaGavel,
  FaEyeSlash,
  FaLock
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SectionItem {
  icon: React.ReactElement;
  title: string;
}

export default function CaliforniaPrivacyNotice() {
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
    { icon: <FaTable />, title: "1. At a Glance (Notice at Collection)" },
    { icon: <FaListUl />, title: "2. What We Collect and Why" },
    { icon: <FaEyeSlash />, title: "3. Selling, Sharing and Sensitive Data" },
    { icon: <FaUserShield />, title: "4. Your Rights, and How to Use Them" },
    { icon: <FaBalanceScale />, title: "5. Exemptions and Special Cases" },
    { icon: <FaEnvelope />, title: "6. Contact, Regulators and Disputes" }
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = (readSections.size / sections.length) * 100;

  const gradientHeaderColors = [
    "from-blue-600 to-indigo-600",
    "from-indigo-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-blue-500 to-teal-600",
    "from-slate-700 to-slate-900",
    "from-teal-600 to-emerald-600"
  ];

  return (
    <section className="min-h-screen bg-[#f3f4fd] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400/10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-purple-400/10 -translate-x-1/2 pointer-events-none" />

      {/* Top progress bar */}
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
              Creditor Academy California Privacy Notice
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-gray-600">
              This Notice is for California residents (&quot;consumers&quot; or &quot;you&quot;). It adds California-specific detail to our Privacy Policy under the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (together, the &quot;CCPA&quot;), Cal. Civ. Code 1798.100 et seq., and its regulations, Cal. Code Regs. tit. 11, 7000 et seq. (the &quot;CCPA Regulations&quot;). Words defined in the CCPA mean the same thing here.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 shrink-0 text-base" />
                <div className="text-sm text-blue-800">
                  <p>
                    <strong>Effective date:</strong> November 18, 2026 · <strong>Last updated:</strong> November 18, 2026
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    WCAG 2.2 AA Compliance Target · Cal. Civ. Code 1798.100 et seq.
                  </p>
                </div>
              </div>
            </div>

            {/* Seller Entity Notice */}
            <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
              <strong>Seller Entity:</strong> Imperium Group, a business trust, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States. Creditor Academy controls the personal information described here. Creditor Academy sells and provides all of our Offerings, and your contract for them is with Creditor Academy only. The PMA does not hold member personal information. Only Creditor Academy holds it. If a dispute is referred to the PMA Council, we share only the information needed to resolve it.
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
                placeholder="Search California notice sections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full py-2.5 px-3 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Reading progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Reading progress
              </span>
              <span className="text-xs font-bold text-blue-600">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Sections List in 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const originalIndex = sections.findIndex((s) => s.title === section.title);
                const isSelected = activeSection === originalIndex;
                const isRead = readSections.has(originalIndex);

                return (
                  <button
                    key={originalIndex}
                    onClick={() => scrollToSection(originalIndex)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all duration-200 text-left ${
                      isSelected
                        ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm"
                        : "border-gray-100 bg-gray-50/70 hover:bg-blue-50/70 hover:border-blue-200 text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <span className="text-blue-500 shrink-0 text-base">{section.icon}</span>
                      <span className="truncate">{section.title}</span>
                    </div>
                    {isRead && <FaCheck className="text-green-500 text-xs shrink-0" />}
                  </button>
                );
              })
            ) : (
              <p className="col-span-3 text-center py-4 text-sm text-gray-500">
                No matching sections found for &quot;{searchQuery}&quot;.
              </p>
            )}
          </div>

          <div className="mt-6 p-3 bg-gray-50 rounded-xl flex items-center gap-2 text-xs text-gray-500">
            <FaQuestionCircle className="text-blue-500 shrink-0" />
            <span>
              Use the search bar to find specific CCPA terms. Green checkmarks indicate sections you have scrolled past.
            </span>
          </div>
        </motion.div>

        {/* SECTION 1: AT A GLANCE */}
        <div data-section="0" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[0]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaTable /> 1. At a glance (Notice at Collection)
            </h2>
            {readSections.has(0) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              This table is our notice at collection under Cal. Civ. Code 1798.100(a)(1) and Cal. Code Regs. tit. 11, 7012. It is linked from every page and form where we collect personal information, including sign-up, checkout and consultation booking.
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Question</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Short answer</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">What categories do we collect?</td>
                    <td className="px-4 py-3 text-gray-600">Identifiers; customer records information; protected classifications (limited); commercial information; internet or network activity; approximate geolocation; audio/visual information; professional information shown on credit reports you share; inferences; and sensitive personal information (account log-in, and any Social Security number, government ID or financial account information in documents you choose to share). No biometric information.</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(1)}>Section 2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Why?</td>
                    <td className="px-4 py-3 text-gray-600">To run your membership, classes, courses, consultations and AI Assistants; billing; support; security; legal compliance; improving our teaching; and marketing our own offerings (with consent where required).</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(1)}>Section 2.3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Do we sell or share it?</td>
                    <td className="px-4 py-3 text-gray-600"><strong>No.</strong> We do not sell personal information or share it for cross-context behavioral advertising. We use no advertising pixels, retargeting or advertising cookies.</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(2)}>Section 3</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">How long do we keep it?</td>
                    <td className="px-4 py-3 text-gray-600">Until you ask us to delete it or we no longer need it, whichever comes first, except records the law requires us to keep longer or that we need for legal claims. AI Assistant chats are deleted within 90 days after your membership ends, unless the law requires us to keep them longer.</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(1)}>Section 2.1 & Privacy Policy Part 2.8</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Full privacy policy</td>
                    <td className="px-4 py-3 text-gray-600">See our comprehensive Privacy Policy covering all data collection, retention, and third-party vendors.</td>
                    <td className="px-4 py-3"><Link href="/privacy" className="text-blue-600 hover:underline font-semibold">Privacy Policy</Link></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&quot;Do Not Sell or Share My Personal Information&quot; link</td>
                    <td className="px-4 py-3 text-gray-600"><strong>None.</strong> We do not sell or share personal information, so no link is required.</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(2)}>Section 3.2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&quot;Limit the Use of My Sensitive Personal Information&quot; link</td>
                    <td className="px-4 py-3 text-gray-600"><strong>None required.</strong> We use sensitive data only for purposes allowed by Cal. Code Regs. tit. 11, 7027(m).</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(2)}>Section 3.5</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Who else collects personal information on our site?</td>
                    <td className="px-4 py-3 text-gray-600">Google Analytics (Google LLC) collects website usage information for us through analytics cookies. We configure Google Analytics to use Google&apos;s data processing terms, under which Google acts as our service provider (Cal. Civ. Code 1798.100(d)), and we turn off Google&apos;s advertising features and ad data sharing. No advertising companies collect information on our site. See our Cookie Policy.</td>
                    <td className="px-4 py-3 text-blue-600 hover:underline cursor-pointer" onClick={() => scrollToSection(2)}>Section 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl text-sm space-y-2 border border-gray-100">
              <p>
                <strong>New purposes need a new notice:</strong> We will not collect more categories, or use what we have for a purpose incompatible with the ones above, without first giving you a new notice (Cal. Civ. Code 1798.100(a)(1)). Our collection, use, retention and sharing will stay reasonably necessary and proportionate to the purposes we told you about (Cal. Civ. Code 1798.100(c)). We will not link your Creditor Academy account into a system shared with other products or companies without a new notice, a compatible purpose, and written contracts with anyone who receives the data (Cal. Civ. Code 1798.100(d)).
              </p>
              <p>
                <strong>How Creditor Academy works:</strong> We provide self-help credit education, and you do your own disputes. We also give you the protections of the Credit Repair Organizations Act. See <Link href="/our-approach" className="text-blue-600 underline font-medium">How Creditor Academy Works</Link>.
              </p>
              <p>
                <strong>Does the CCPA apply to us?</strong> The CCPA applies only to businesses that meet certain size thresholds (Cal. Civ. Code 1798.140(d)). Either way, we follow this Notice for California residents.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: WHAT WE COLLECT AND WHY */}
        <div data-section="1" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[1]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaListUl /> 2. What we collect and why
            </h2>
            {readSections.has(1) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">2.1 One table, by legal category</h3>
            <p>
              The categories come from the CCPA&apos;s definition of &quot;personal information,&quot; Cal. Civ. Code 1798.140(v). The period covered is the past 12 months. &quot;Sources&quot; refers to Section 2.2; &quot;Purposes&quot; to Section 2.3. &quot;Recipients&quot; are the categories of recipients we disclosed information to for a business purpose. Nothing in any category has been sold or shared.
            </p>

            <div className="overflow-x-auto my-6 rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Legal category</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">What it means at Creditor Academy</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Sources</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Purposes</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Recipients (business purpose)</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Sold or shared?</th>
                    <th className="px-3 py-2.5 text-left font-semibold text-gray-700">Kept for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">A. Identifiers</td>
                    <td className="px-3 py-2.5 text-gray-600">Name, postal address, email, phone, account ID, username, IP address, online identifiers, cookie IDs; Social Security number, driver&apos;s license or state ID number, passport number only if they appear in credit reports or ID documents you choose to share</td>
                    <td className="px-3 py-2.5 font-medium">S1, S2, S3</td>
                    <td className="px-3 py-2.5 font-medium">P1–P8</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers and contractors (hosting, online course platform, video, payments, email, phone, analytics, AI model and AI hosting providers); professional advisers; the PMA Council if a dispute is referred to it; government and legal recipients when required</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">B. Customer records information (Cal. Civ. Code 1798.80(e))</td>
                    <td className="px-3 py-2.5 text-gray-600">Name, signature, address, phone, billing information; and, if in documents you share, SSN, ID numbers, employment information, full or partial bank or card account numbers and other financial information</td>
                    <td className="px-3 py-2.5 font-medium">S1, S3</td>
                    <td className="px-3 py-2.5 font-medium">P1–P7</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers and contractors (hosting, payments, email, AI model and AI hosting providers); legal recipients when required</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">C. Protected classification characteristics</td>
                    <td className="px-3 py-2.5 text-gray-600">Age (for example, date of birth on credit reports you share); possibly marital or military status if shown on documents you share</td>
                    <td className="px-3 py-2.5 font-medium">S1</td>
                    <td className="px-3 py-2.5 font-medium">P1, P5, P7</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (hosting, email)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">D. Commercial information</td>
                    <td className="px-3 py-2.5 text-gray-600">Membership, purchases, payment history with us, refunds and chargebacks; contract, disclosure and consent records; credit account and payment history in credit reports you share</td>
                    <td className="px-3 py-2.5 font-medium">S1, S3</td>
                    <td className="px-3 py-2.5 font-medium">P1–P7</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (payments, hosting, online course platform)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">E. Biometric information</td>
                    <td className="px-3 py-2.5 text-gray-600"><strong>None collected.</strong> We do not collect voiceprints or face geometry and do not use facial recognition. We do not extract voiceprints from call or class recordings.</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">F. Internet or other electronic network activity</td>
                    <td className="px-3 py-2.5 text-gray-600">Pages visited and links clicked on our website; course progress on the online course platform; referring sites; device and browser data; error logs</td>
                    <td className="px-3 py-2.5 font-medium">S2</td>
                    <td className="px-3 py-2.5 font-medium">P1, P5, P6</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (hosting, online course platform, analytics)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">G. Geolocation data</td>
                    <td className="px-3 py-2.5 text-gray-600">Approximate city or state based on IP address. <strong>No precise geolocation.</strong></td>
                    <td className="px-3 py-2.5 font-medium">S2</td>
                    <td className="px-3 py-2.5 font-medium">P5, P6</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (hosting, analytics)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">H. Audio, electronic, visual or similar information</td>
                    <td className="px-3 py-2.5 text-gray-600">Your image, voice and chat messages in live classes (held in Athena LMS) and consultations (held on Google Meet); class recordings, if a class is recorded; call recordings, if a call is recorded (we tell you first); photos in ID documents you share</td>
                    <td className="px-3 py-2.5 font-medium">S1</td>
                    <td className="px-3 py-2.5 font-medium">P1, P3, P5, P7</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (online course platform, video platform, phone, hosting)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">I. Professional or employment-related information</td>
                    <td className="px-3 py-2.5 text-gray-600">Employer names and history shown on credit reports you share</td>
                    <td className="px-3 py-2.5 font-medium">S1</td>
                    <td className="px-3 py-2.5 font-medium">P1</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (hosting, email)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">J. Non-public education information (FERPA)</td>
                    <td className="px-3 py-2.5 text-gray-600"><strong>Not collected.</strong> Course progress at Creditor Academy is usage information, not FERPA education records</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                    <td className="px-3 py-2.5">N/A</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">K. Inferences</td>
                    <td className="px-3 py-2.5 text-gray-600">Course and class interests; how engaged you are with classes and courses</td>
                    <td className="px-3 py-2.5 font-medium">Derived from S1–S2</td>
                    <td className="px-3 py-2.5 font-medium">P1, P6, P8</td>
                    <td className="px-3 py-2.5 text-gray-600">Service providers (hosting, online course platform)</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2.5 font-semibold text-gray-900">L. Sensitive personal information</td>
                    <td className="px-3 py-2.5 text-gray-600">See Section 3.4 for complete table</td>
                    <td className="px-3 py-2.5 font-medium">S1, S3</td>
                    <td className="px-3 py-2.5 font-medium">See Section 3.4</td>
                    <td className="px-3 py-2.5 text-gray-600">See Section 3.4</td>
                    <td className="px-3 py-2.5 text-green-700 font-semibold">Not sold or shared</td>
                    <td className="px-3 py-2.5"><Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy Part 2.8</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">2.2 Where it comes from</h4>
                <ul className="text-sm space-y-1.5 list-disc pl-5">
                  <li><strong>S1 – You:</strong> Sign-up forms, consultations, live classes, emails and calls, AI Assistant chats, and documents you choose to share.</li>
                  <li><strong>S2 – Your device:</strong> Automatically collected strictly necessary cookies, Google Analytics cookies (_ga), and server logs.</li>
                  <li><strong>S3 – Payment Processor:</strong> Tilled, Inc.</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">2.3 What we use it for (Business Purposes)</h4>
                <ul className="text-xs space-y-1 text-gray-600 list-disc pl-4">
                  <li><strong>P1:</strong> Running membership: account, classes, courses, consultations, AI Assistants.</li>
                  <li><strong>P2:</strong> Billing, membership management, refunds and disputes.</li>
                  <li><strong>P3:</strong> Customer support and communications.</li>
                  <li><strong>P4:</strong> CROA contracts, disclosures and consent records.</li>
                  <li><strong>P5:</strong> Security, fraud prevention, debugging.</li>
                  <li><strong>P6:</strong> Short-term transient use and course improvement.</li>
                  <li><strong>P7:</strong> Legal compliance, dispute resolution, legal claims.</li>
                  <li><strong>P8:</strong> Marketing our own classes (categories A, D, F, K only; never credit data).</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-xl text-sm border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900">2.4 Who receives it</h4>
              <p className="mt-1 text-blue-800">
                Service providers and contractors under contracts meeting Cal. Civ. Code 1798.100(d) (listed in Privacy Policy Part 2.7); our payment processor, Tilled, Inc.; professional advisers; the PMA Council, if you or we refer a dispute to it; courts, government authorities and regulators, and parties to litigation, when legally required; and a new owner in a business transfer. <strong>Nothing in this Notice limits your right to contact any regulator.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: SELLING, SHARING AND SENSITIVE DATA */}
        <div data-section="2" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[2]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaEyeSlash /> 3. Selling, sharing and sensitive data
            </h2>
            {readSections.has(2) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">3.1 We do not sell or share</h3>
            <p>
              We do not sell, and in the past 12 months have not sold, personal information (Cal. Civ. Code 1798.140(ad)). We do not share, and in the past 12 months have not shared, personal information for cross-context behavioral advertising (Cal. Civ. Code 1798.140(ah)).
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">3.2 No advertising cookies</h3>
            <p>
              &quot;Sharing&quot; means giving personal information to a third party for cross-context behavioral advertising, whether or not money changes hands (Cal. Civ. Code 1798.140(ah)). We do not use advertising cookies, pixels, retargeting or similar tools, and we use only strictly necessary cookies and Google Analytics cookies. Because we neither sell nor share, we do not offer a &quot;Do Not Sell or Share My Personal Information&quot; link.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">3.3 Global Privacy Control</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>GPC:</strong> We treat opt-out preference signals such as Global Privacy Control as a valid request to opt out of sale and sharing for the browser or device sending it and, if you are logged in, for your account (Cal. Civ. Code 1798.135; Cal. Code Regs. tit. 11, 7025). If the signal conflicts with a privacy setting you chose with us, we follow the signal.</li>
              <li><strong>Timing:</strong> If we ever begin selling or sharing, we will act on opt-outs as soon as feasibly possible and no later than 15 business days after receipt (Cal. Code Regs. tit. 11, 7026).</li>
              <li><strong>No account needed:</strong> You can opt out by GPC or by contacting us, without creating an account.</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 pt-3">3.4 Sensitive personal information we may hold</h3>
            <p className="text-sm">Sensitive personal information as defined in Cal. Civ. Code 1798.140(ae):</p>

            <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Sensitive category</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Examples</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Why we use it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Social Security, driver&apos;s license, state ID or passport number</td>
                    <td className="px-4 py-3 text-gray-600">Only if it appears in a credit report or ID document you choose to share</td>
                    <td className="px-4 py-3 text-gray-600">Teaching you in a consultation about your own reports</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Account log-in credentials</td>
                    <td className="px-4 py-3 text-gray-600">Your username and password for your account and the online course platform</td>
                    <td className="px-4 py-3 text-gray-600">Signing you in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Financial account information</td>
                    <td className="px-4 py-3 text-gray-600">Partial account numbers on credit reports you share. We do not collect passwords or codes that allow access to your financial accounts, and your card number goes directly to our payment processor</td>
                    <td className="px-4 py-3 text-gray-600">Teaching you about your own reports; billing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Contents of mail or email where we are not the intended recipient</td>
                    <td className="px-4 py-3 text-gray-600">Only if you share copies of letters or emails from bureaus or creditors</td>
                    <td className="px-4 py-3 text-gray-600">Teaching you about your own dispute records</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Anything sensitive you type into an AI Assistant chat</td>
                    <td className="px-4 py-3 text-gray-600">Only if you type or upload it, even though we ask you not to</td>
                    <td className="px-4 py-3 text-gray-600">Answering the questions you ask. Our AI provider processes it as our service provider and may not use it to train its models</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Precise geolocation; racial or ethnic origin; religious beliefs; genetic/biometric data; health; sexual orientation</td>
                    <td className="px-4 py-3 text-gray-600"><strong>Not intentionally collected.</strong> Please don&apos;t share this information</td>
                    <td className="px-4 py-3 text-gray-400">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-gray-900 pt-2">3.5 Why there is no &quot;Limit&quot; link</h3>
            <p className="text-sm">
              We use and disclose sensitive personal information only for purposes allowed by Cal. Code Regs. tit. 11, 7027(m), such as performing the services you reasonably expect when you request them, security and integrity, fraud prevention, short-term transient use, services performed for us, and maintaining service quality. We do not use it to infer characteristics about you. So we are not required to offer a &quot;Limit the Use of My Sensitive Personal Information&quot; link. If that changes, we will update this Notice and offer the right to limit.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">3.6 Minors</h3>
            <p className="text-sm">
              We have no actual knowledge of selling or sharing personal information of consumers under 16. Creditor Academy is for adults 18 and older.
            </p>
          </div>
        </div>

        {/* SECTION 4: YOUR RIGHTS */}
        <div data-section="3" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[3]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaUserShield /> 4. Your rights, and how to use them
            </h2>
            {readSections.has(3) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">4.1 What you can ask us to do</h3>
            <p className="text-sm">Subject to verification and the CCPA&apos;s exceptions:</p>

            <div className="overflow-x-auto my-4 rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Right</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">What you can ask for</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Law</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Know / access</td>
                    <td className="px-4 py-3 text-gray-600">The categories of personal information we collected about you; their sources; our purposes; the categories of third parties we disclose to; the categories disclosed for a business purpose and the recipients; and the specific pieces we hold. You may ask about information beyond the prior 12 months, for information collected on or after January 1, 2022, unless impossible or disproportionate. Specific pieces come in a portable and, where feasible, readily usable format. We won&apos;t send your SSN, government ID number, financial account number, account password or security questions and answers in response, but we will tell you we hold that type of data (Cal. Code Regs. tit. 11, 7024(d)).</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.100, 1798.110, 1798.115</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Delete</td>
                    <td className="px-4 py-3 text-gray-600">Deletion of personal information we collected from you. We also tell our service providers and contractors to delete it. Exceptions (for example, completing a transaction, detecting security incidents, legal duties or legal claims) may apply; we&apos;ll tell you which.</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.105</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Correct</td>
                    <td className="px-4 py-3 text-gray-600">Correction of inaccurate information we hold. We cannot change a credit bureau&apos;s report; you can dispute it directly with the bureau and the company that supplied the information (see Your Rights Under the FCRA and Help: Disputing on Your Own).</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.106</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Opt out of sale and sharing</td>
                    <td className="px-4 py-3 text-gray-600">We do not sell or share, but see Sections 3.2–3.3.</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.120</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Limit use of sensitive data</td>
                    <td className="px-4 py-3 text-gray-600">See Section 3.5.</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.121</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">No discrimination or retaliation</td>
                    <td className="px-4 py-3 text-gray-600">We won&apos;t deny goods or services, charge different prices, give a different level or quality of service, or suggest any of these, because you used your rights. We won&apos;t retaliate against an employee, applicant or contractor for using theirs.</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">Cal. Civ. Code 1798.125</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h4 className="font-bold text-gray-900">4.2 Step 1: Send the request</h4>
                <p className="text-sm"><strong>Email:</strong> <a href="mailto:counselor@creditoracademy.com?subject=California%20Privacy%20Request" className="text-blue-600 underline">counselor@creditoracademy.com</a>, subject &quot;California Privacy Request&quot;.</p>
                <p className="text-sm"><strong>Phone:</strong> (425) 400-9246, 9:00 AM–5:00 PM Eastern Time.</p>
                <p className="text-sm"><strong>Mail:</strong> Imperium Group DBA Creditor Academy, Attn: Privacy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009.</p>
                <p className="text-xs text-gray-500">You don&apos;t need an account to make a request.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h4 className="font-bold text-gray-900">4.3 Step 2: Verification</h4>
                <p className="text-xs text-gray-600">
                  <strong>Members:</strong> Confirm from email on file, or portal log-in.<br />
                  <strong>Non-members:</strong> Match at least two data points with records we hold.<br />
                  <strong>Sensitive records / specific pieces:</strong> High certainty (e.g. 3 matching data points + signed declaration under penalty of perjury, Cal. Code Regs. tit. 11, 7062).
                </p>
                <p className="text-xs text-gray-500">Verification data is deleted as soon as practical after processing.</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2 mt-4">
              <h4 className="font-bold text-gray-900">4.4 Step 3 (optional): Authorized Agent</h4>
              <p className="text-sm text-gray-600">
                An agent may make a request for you. We require proof that you gave signed permission, and may also ask you to verify your identity directly (Cal. Code Regs. tit. 11, 7063), unless the agent holds a power of attorney under Cal. Probate Code 4121–4130.
              </p>
            </div>

            <h4 className="font-bold text-gray-900 pt-3">4.5 Step 4: Timelines</h4>
            <div className="overflow-x-auto my-2 rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Stage</th>
                    <th className="px-4 py-2.5 text-left font-semibold text-gray-700">Timing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-2 text-gray-900 font-medium">We acknowledge request to know, delete or correct</td>
                    <td className="px-4 py-2 text-gray-600">Within 10 business days, with processing details</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900 font-medium">We respond in full</td>
                    <td className="px-4 py-2 text-gray-600">Within 45 calendar days of receipt (can be extended up to 45 more days with notice)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900 font-medium">How often, and fees</td>
                    <td className="px-4 py-2 text-gray-600">No fee. Requests to know limited to twice in 12 months unless excessive</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 pt-2">
              <strong>4.6 Our records:</strong> We keep records of consumer requests and responses for at least 24 months (Cal. Code Regs. tit. 11, 7101) solely for compliance purposes.
            </p>
          </div>
        </div>

        {/* SECTION 5: EXEMPTIONS AND SPECIAL CASES */}
        <div data-section="4" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[4]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBalanceScale /> 5. Exemptions and special cases
            </h2>
            {readSections.has(4) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              <strong>5.1 GLBA and FCRA data:</strong> Parts of the CCPA do not apply to certain personal information collected, processed, sold or disclosed under the federal Gramm-Leach-Bliley Act (15 U.S.C. 6801 et seq.) or Fair Credit Reporting Act (15 U.S.C. 1681 et seq.). These exemptions apply to specific data, not to a whole business, and do not extend to the private right of action for data breaches (Cal. Civ. Code 1798.150). Even where an exemption may apply, we describe that information in this Notice and intend to honor the requests in Section 4 where feasible.
            </p>
            <p>
              <strong>5.2 GLBA privacy notice:</strong> If required, we provide it electronically under our E-Sign Consent or on paper upon request.
            </p>
            <p>
              <strong>5.3 &quot;Shine the Light&quot; (Cal. Civ. Code 1798.83):</strong> We do not disclose personal information to third parties for their own direct marketing. To ask, email counselor@creditoracademy.com with &quot;Shine the Light Request&quot;.
            </p>
            <p>
              <strong>5.4 Minors:</strong> Creditor Academy is for adults 18 and older. Cal. Bus. &amp; Prof. Code 22580–22582 lets registered users under 18 ask to remove content they posted.
            </p>
            <p>
              <strong>5.5 Financial incentives:</strong> We do not offer financial incentives or price differences in exchange for personal information collection or retention.
            </p>
            <p>
              <strong>5.6 Automated decision-making:</strong> We do not use automated decision-making technology to make significant decisions about you.
            </p>
            <p>
              <strong>5.7 Biometric and voice data:</strong> We collect none (category E). No voiceprints, face geometry, or biometric identifiers are collected or used.
            </p>
          </div>
        </div>

        {/* SECTION 6: CONTACT & LEGAL NOTICES */}
        <div data-section="5" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[5]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaEnvelope /> 6. Contact, Regulators and Disputes
            </h2>
            {readSections.has(5) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p><strong>Email:</strong> counselor@creditoracademy.com</p>
              <p><strong>Phone:</strong> (425) 400-9246, 9:00 AM–5:00 PM Eastern Time</p>
              <p><strong>Mail:</strong> Imperium Group, doing business as Creditor Academy, Attn: Privacy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States</p>
              <p className="mt-2 text-xs text-gray-500"><strong>Accessibility:</strong> Available in other formats on request; see our Accessibility Statement.</p>
            </div>

            <p>
              <strong>Regulators:</strong> You can contact the California Attorney General, the California Privacy Protection Agency, or any other regulator (FTC, CFPB) about our practices at any time, and you may cooperate with any of them. Nothing in this Notice, any membership or PMA document, or any other document limits that. You keep all rights the law gives you.
            </p>

            <p>
              <strong>Resolving disputes:</strong> If you have a problem, please contact us first so we can try to fix it. If we can&apos;t, either of us may refer the dispute to the Council of the Creditor Academy Private Membership Association (the &quot;PMA Council&quot;) for informal resolution, at no cost to you. This does not limit any right you have under the CCPA or other law. See our <Link href="/terms" className="text-blue-600 underline font-medium">Terms of Service</Link>.
            </p>

            <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 text-amber-900 text-xs space-y-1.5">
              <p><strong>Which document controls:</strong> Your CROA written contract (Member Contract) and the CROA disclosures control first, then our Terms of Service, then our policies, including this Notice. Any document that gives you a right the law requires controls over anything that limits it.</p>
              <p><strong>Rights this Notice cannot take away:</strong> Nothing in this Notice waives or limits any right you have under the Credit Repair Organizations Act (any waiver is void, 15 U.S.C. 1679f), the Fair Credit Reporting Act, the CCPA, other state law, or any other law that cannot be waived by contract. Your right to post honest reviews is protected by the Consumer Review Fairness Act (15 U.S.C. 45b).</p>
            </div>
          </div>
        </div>

        {/* Back to top & related links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-xs text-gray-500">
          <span>Imperium Group DBA Creditor Academy · California Privacy Notice (CCPA / CPRA)</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-blue-600 hover:underline font-semibold"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </section>
  );
}
