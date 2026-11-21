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
  FaLock,
  FaServer,
  FaBalanceScale,
  FaBug,
  FaUserCheck,
  FaEnvelope,
  FaKey,
  FaCreditCard,
  FaDesktop
} from "react-icons/fa";
import { motion } from "framer-motion";

interface SectionItem {
  icon: React.ReactElement;
  title: string;
}

export default function SecurityCompliance() {
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
    { icon: <FaShieldAlt />, title: "1. Why Security Matters Here" },
    { icon: <FaServer />, title: "2. Our Security Program" },
    { icon: <FaLock />, title: "3. Security Practices" },
    { icon: <FaBalanceScale />, title: "4. Compliance (CROA, FCRA, ROSCA)" },
    { icon: <FaBug />, title: "5. Reporting a Security Problem" },
    { icon: <FaUserCheck />, title: "6. What You Can Do" },
    { icon: <FaEnvelope />, title: "7. Changes and Contact" }
  ];

  const filteredSections = sections.filter((sec) =>
    sec.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = (readSections.size / sections.length) * 100;

  const gradientHeaderColors = [
    "from-blue-600 to-indigo-600",
    "from-indigo-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-teal-600 to-emerald-600",
    "from-red-600 to-rose-600",
    "from-blue-500 to-teal-600",
    "from-slate-700 to-slate-900"
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
              Security and Compliance at Creditor Academy
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-gray-600">
              Imperium Group, a business trust, doing business as Creditor Academy (&quot;Creditor Academy,&quot; &quot;we,&quot; &quot;us&quot;), offers self-help education. This page explains how we protect customer information, our approach to legal duties, vulnerability reporting, and account safety.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-blue-500 mt-1 shrink-0 text-base" />
                <div className="text-sm text-blue-800">
                  <p>
                    <strong>Effective date:</strong> November 18, 2026 · <strong>Last updated:</strong> November 18, 2026
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    WCAG 2.2 AA Compliance Target · FTC Safeguards &amp; NIST CSF Reference
                  </p>
                </div>
              </div>
            </div>

            {/* Seller Entity Notice */}
            <div className="mt-4 p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-600">
              <strong>Seller Entity:</strong> Imperium Group, a business trust, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States. Creditor Academy controls the customer information described here. Only Creditor Academy holds member information. The Creditor Academy Private Membership Association (the &quot;PMA&quot;) does not hold any member information.
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
                placeholder="Search security & compliance sections..."
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
              Use the search bar to find specific security topics. Green checkmarks indicate sections you have scrolled past.
            </span>
          </div>
        </motion.div>

        {/* SECTION 1 */}
        <div data-section="0" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[0]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaShieldAlt /> 1. Why security matters here
            </h2>
            {readSections.has(0) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Imperium Group, a business trust, doing business as Creditor Academy (&quot;Creditor Academy,&quot; &quot;we,&quot; &quot;us&quot;), offers the Creditor Academy Masterclass membership (live online classes and online courses), the I Want Remedy Now online course, one-on-one consultations, and Education-Only AI Assistants included with the Masterclass.
            </p>
            <p>
              To provide these, we hold information such as your name, contact details, account log-in, billing records, and your progress in our courses on the Athena LMS learning platform. You may also choose to share personal details with us, for example in a consultation or an email. This page explains how we protect that information, how we approach our legal duties, how to report a security problem, and what you can do to keep your account safe.
            </p>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm">
              <p>
                <strong>Customer information control:</strong> Creditor Academy controls the customer information described here. Only Creditor Academy holds member information. The Creditor Academy Private Membership Association (the &quot;PMA&quot;) does not hold any member information.
              </p>
              <p className="mt-2 text-xs text-gray-500">
                This page is a general description. It is not a contract, a warranty, or a promise that a security incident will never happen. No system is perfectly secure. For how we collect, use, and share personal information, see our <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link> and <Link href="/privacy/california" className="text-blue-600 underline">California Privacy Notice</Link>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div data-section="1" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[1]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaServer /> 2. Our security program
            </h2>
            {readSections.has(1) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              <strong>2.1 Who is in charge:</strong> A qualified person named by Imperium Group&apos;s trustee oversees our information security program.
            </p>
            <p>
              <strong>2.2 Written program and risk review:</strong> We aim to keep a written information security program based on a review of the risks to customer information, and to update it regularly and whenever our systems or business change. We are putting this written program in place and aim to review it at least once a year.
            </p>
            <p>
              <strong>2.3 Frameworks:</strong> We use the FTC Safeguards Rule (16 CFR Part 314) and the NIST Cybersecurity Framework as references for our program. We do not claim certification under any framework (see Section 3.8).
            </p>
          </div>
        </div>

        {/* SECTION 3 */}
        <div data-section="2" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[2]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaLock /> 3. Security practices
            </h2>
            {readSections.has(2) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2"><FaKey className="text-blue-500" /> 3.1 Encryption</h3>
                <p><strong>In transit:</strong> Encrypted using TLS 1.2 or higher between browser and website, and to service providers.</p>
                <p><strong>At rest:</strong> Stored customer data and databases encrypted with industry-standard encryption (AES-256 where supported).</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2"><FaLock className="text-blue-500" /> 3.2 Access controls</h3>
                <p>Role-based permissions; staff access logged; access reviewed every 6 months and removed promptly upon departure. Real customer data is never used for testing.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2"><FaDesktop className="text-blue-500" /> 3.3 Multi-factor authentication</h3>
                <p>MFA required for staff accessing customer information systems. Members are strongly encouraged to enable MFA if offered.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2"><FaServer className="text-blue-500" /> 3.4 Logging &amp; Monitoring</h3>
                <p>Security logs kept for 12 months where allowed. Logs configured to never capture SSNs, card numbers, or ID documents. Automated tools run under dedicated limited accounts. <strong>No biometric collection.</strong></p>
              </div>
            </div>

            <p>
              <strong>3.5 Vulnerability management:</strong> Monthly scans, critical vulnerabilities fixed within 7 days, high-risk within 30 days. Independent testing planned. Secrets kept in secure vaults, not code.
            </p>
            <p>
              <strong>3.6 Collecting only what we need:</strong> You do not need to send us credit reports, SSNs, or IDs. AI Assistants never ask for passwords and chats are not used for model training. No advertising tracking pixels or retargeting cookies.
            </p>
            <p>
              <strong>3.7 Payment card data:</strong> Processed by Tilled, Inc. Full card numbers and security codes are never stored on our servers. Charges appear as &quot;IMPERIUM GROUP&quot; (our legal name).
            </p>
            <p>
              <strong>3.8 Certifications:</strong> Creditor Academy does not currently hold a SOC 2 report or ISO 27001 certification.
            </p>
            <p>
              <strong>3.9 Service providers:</strong> Evaluated for security and bound by written confidentiality agreements (listed in Privacy Policy Part 2.7).
            </p>
            <p>
              <strong>3.10 Staff training:</strong> Annual privacy/security training covering phishing, sensitive data, and compliance rules (e.g. never disputing accurate information).
            </p>
            <p>
              <strong>3.11 Incident response:</strong> Written incident response plan tested annually. Prompt notice given to consumers and regulators if an incident occurs.
            </p>
            <p>
              <strong>3.12 Backups &amp; hosting:</strong> Encrypted daily backups kept up to 90 days. Athena LMS hosts courses; Google Workspace hosts email.
            </p>
          </div>
        </div>

        {/* SECTION 4: COMPLIANCE */}
        <div data-section="3" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[3]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBalanceScale /> 4. Compliance
            </h2>
            {readSections.has(3) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 space-y-2">
              <h3 className="font-bold text-blue-950 text-base">4.1 Credit Repair Organizations Act (CROA) &amp; State Laws</h3>
              <p className="text-blue-900">
                What we sell is education. We teach; you do your own disputes. We give you all CROA protections:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-blue-800 text-xs">
                <li>Pre-signup <strong>Consumer Credit File Rights Under State and Federal Law</strong> disclosure (15 U.S.C. 1679c(a)).</li>
                <li>Written, dated Member Contract (15 U.S.C. 1679d).</li>
                <li><strong>3-business-day cancellation rights</strong> with full refund and no penalty (15 U.S.C. 1679e).</li>
                <li><strong>Billed in arrears:</strong> We bill on your monthly anniversary for service already completed, never in advance (15 U.S.C. 1679b(b)).</li>
                <li><strong>Honesty:</strong> No false claims or promises to raise scores. Accurate, timely information generally cannot be removed. No CPNs or fake dispute letters permitted.</li>
                <li>CROA rights cannot be waived by contract (15 U.S.C. 1679f).</li>
              </ul>
            </div>

            <p>
              <strong>4.2 Fair Credit Reporting Act (FCRA):</strong> You have rights under 15 U.S.C. 1681 et seq. to dispute errors directly with credit bureaus for free. We do not report information to bureaus or use credit reports to make decisions about you.
            </p>
            <p>
              <strong>4.3 GLBA Safeguards Rule:</strong> Information security program modeled on 16 CFR part 314.
            </p>
            <p>
              <strong>4.4 TSR &amp; TCPA:</strong> We never sell by phone, send marketing text messages, or make marketing calls. Phone line is for inbound support only.
            </p>
            <p>
              <strong>4.5 Membership Billing (ROSCA &amp; Automatic Renewal Laws):</strong> 1-click cancellation button in LMS account (California Bus. &amp; Prof. Code 17600–17606 / AB 2863). 30 days&apos; advance notice before price changes. No chargeback penalties.
            </p>
            <p>
              <strong>4.7 PCI DSS:</strong> Tilled, Inc. is responsible for payment field security under its PCI DSS program.
            </p>
            <p>
              <strong>4.9 Accessibility:</strong> Target is WCAG 2.2 Level AA.
            </p>
            <p>
              <strong>4.10 Truth in Advertising:</strong> Compliant with FTC Act Section 5 and 16 CFR part 465 (consumer reviews and testimonials).
            </p>
            <p>
              <strong>4.11 Working with regulators:</strong> You may contact or cooperate with the FTC, CFPB, or state AGs at any time. Consumer Review Fairness Act (15 U.S.C. 45b) protects your right to post honest reviews.
            </p>
          </div>
        </div>

        {/* SECTION 5: REPORTING */}
        <div data-section="4" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[4]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaBug /> 5. Reporting a security problem
            </h2>
            {readSections.has(4) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              <strong>5.1 How to report:</strong> Email <a href="mailto:counselor@creditoracademy.com?subject=Security%20report" className="text-blue-600 underline font-medium">counselor@creditoracademy.com</a> with &quot;Security report&quot; in the subject line. Include reproduction steps, affected URLs, and contact info.
            </p>
            <p>
              <strong>5.2 What we ask:</strong> Avoid privacy violations and service disruptions; do not access or alter others&apos; data; no phishing or DDoS testing; test only on your own accounts; allow 90 days before public disclosure.
            </p>
            <p>
              <strong>5.3 What we promise:</strong> Report acknowledgment within 5 business days, progress updates, and public acknowledgment if permitted (no cash rewards).
            </p>
            <p>
              <strong>5.4 Safe harbor:</strong> If you act in good faith and follow this policy, we will not take legal action against you or ask law enforcement to investigate.
            </p>
          </div>
        </div>

        {/* SECTION 6: WHAT YOU CAN DO */}
        <div data-section="5" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[5]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaUserCheck /> 6. What you can do
            </h2>
            {readSections.has(5) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-3 text-gray-700 leading-relaxed text-sm">
            <p><strong>6.1 Protect your account:</strong> Use strong unique passwords, enable MFA, never share credentials (staff will never ask for passwords), and log out on shared devices.</p>
            <p><strong>6.2 Protect your papers:</strong> Keep credit reports safe, shred old documents, review dispute letters before sending.</p>
            <p><strong>6.3 Watch for scams:</strong> Official contact is counselor@creditoracademy.com and (425) 400-9246. Anyone suggesting a CPN or new credit identity is suggesting something illegal — don&apos;t do it.</p>
            <p><strong>6.4 Share carefully:</strong> Never send full card numbers, CVVs, PINs, or banking passwords in chat or email.</p>
            <p><strong>6.5 Report problems:</strong> Contact counselor@creditoracademy.com immediately if you notice suspicious activity.</p>
          </div>
        </div>

        {/* SECTION 7: CONTACT */}
        <div data-section="6" className="mb-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className={`bg-gradient-to-r ${gradientHeaderColors[6]} p-5 text-white flex justify-between items-center`}>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <FaEnvelope /> 7. Changes and contact
            </h2>
            {readSections.has(6) && (
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-1 font-semibold">
                <FaCheck /> Read
              </span>
            )}
          </div>
          <div className="p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed text-sm">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p><strong>Report security problems:</strong> counselor@creditoracademy.com</p>
              <p><strong>Phone:</strong> (425) 400-9246, 9:00 AM–5:00 PM Eastern Time</p>
              <p><strong>Mail:</strong> Imperium Group, doing business as Creditor Academy, 2232 Dell Range Blvd, Suite 303, Cheyenne, WY 82009, United States</p>
            </div>
            <p className="text-xs text-gray-500">
              Nothing on this page waives or limits any right you have under the Credit Repair Organizations Act (15 U.S.C. 1679f), the Fair Credit Reporting Act (15 U.S.C. 1681 et seq.), state law, or any other law that cannot be waived by contract.
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-xs text-gray-500">
          <span>Imperium Group DBA Creditor Academy · Security and Compliance</span>
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
