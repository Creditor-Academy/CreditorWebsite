"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bot } from "lucide-react";

export default function Footer() {
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Return and Refunds", href: "/return-refund" },
    { name: "Membership Terms", href: "https://creditor-academy.lmsathena.com/signup" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/groups/1455118361753321/",
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883527/creditor-website-assets/images/footer/facebook.png",
    },
    {
      name: "X",
      href: "https://x.com/CreditorAcademy",
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883533/creditor-website-assets/images/footer/twitter.png",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@creditoracademy",
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883538/creditor-website-assets/images/footer/youtube.png",
    },
    {
      name: "Rumble",
      href: "https://rumble.com/user/CreditorAcademy",
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883531/creditor-website-assets/images/footer/rumble.png",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@creditoracademy",
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883532/creditor-website-assets/images/footer/tiktok.png",
    },
  ];

  return (
    <footer className="relative bg-[#071a2e] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Info & Powered by Grok */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white">
              <div className="w-10 h-10 rounded-xl bg-[#026fe2] flex items-center justify-center text-white font-black text-lg shadow-sm">
                CA
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Creditor Academy
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Private Education Association dedicated to autonomous financial education, asset protection, and sovereign business structuring.
            </p>

            {/* "Powered by Grok" Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-slate-200 text-xs font-semibold">
              <Bot size={15} className="text-[#38bdf8]" />
              <span>Powered by Grok</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#38bdf8] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#38bdf8]">
              Follow Us
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-[#38bdf8]/40 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Creditor Academy. All rights reserved.</p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-slate-400 leading-normal">
            Grok is made by xAI. They do not run this site. Grok and the Grok logo are marks of xAI.
          </p>
        </div>
      </div>
    </footer>
  );
}
