"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  User,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "Masterclass Membership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedPurpose = formData.purpose.trim() || "Masterclass Membership";
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setStatus("error");
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!trimmedEmail) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!trimmedPhone) {
      setStatus("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }

    const scriptUrl =
      process.env.NEXT_PUBLIC_CONTACT_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbxO1I4ogNMh65vannxkrA3e1YzxAU4L7ivLzdgjgZ7XB3J9qHH5G4Vhl_ycBoXA36vVaw/exec";

    setStatus("submitting");
    setErrorMessage("");

    try {
      const params = new URLSearchParams();
      params.append("name", trimmedName);
      params.append("email", trimmedEmail);
      params.append("phone", trimmedPhone);
      params.append("purpose", trimmedPurpose);
      params.append("message", trimmedMessage);

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        purpose: "Masterclass Membership",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage("Unable to submit message. Please try again or email us directly.");
    }
  };

  return (
    <section id="contact" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#e2e8f0] scroll-mt-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#026fe2]/10 text-[#026fe2] text-xs font-bold uppercase tracking-wider border border-[#026fe2]/20">
            <Mail size={15} />
            Contact &amp; Admissions
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-[#102a43] tracking-tight leading-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-[1.65]">
            Have questions about the Masterclass, Grok bots, or sovereign roadmaps? Connect with our team or schedule an instant consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Instant Booking Card + Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            {/* Instant Meeting Card */}
            <div className="bg-gradient-to-br from-[#081e36] to-[#0c2b4d] rounded-2xl p-6 sm:p-7 text-white shadow-lg border-t-2 border-[#38bdf8] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#38bdf8] text-xs font-bold uppercase tracking-wider w-fit mb-4">
                <Calendar size={14} />
                <span>Fastest Response</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Book Instant Meeting
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Skip the back-and-forth emails. Pick a live time on our calendar for a 1-on-1 strategy walkthrough via Zoom.
              </p>

              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://scheduler.zoom.us/d/yryit5gx/athena-lms-platform-demo",
                    "_blank"
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full py-3.5 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#38bdf8] transition-all shadow-md active:scale-[0.98]"
              >
                <Calendar size={16} />
                <span>Book Instant Meeting</span>
                <ExternalLink size={14} />
              </button>
            </div>

            {/* Direct Contact Info Box */}
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 space-y-4 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#102a43]">
                Office &amp; Support Info
              </h4>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center shrink-0 border border-blue-100">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                    Email
                  </span>
                  <a
                    href="mailto:counselor@creditoracademy.com"
                    className="text-sm font-bold text-[#102a43] hover:text-[#026fe2] transition-colors"
                  >
                    counselor@creditoracademy.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                    Phone
                  </span>
                  <a
                    href="tel:4254009246"
                    className="text-sm font-bold text-[#102a43] hover:text-[#026fe2] transition-colors"
                  >
                    (425) 400-9246
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#026fe2] flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b] block">
                    Hours
                  </span>
                  <p className="text-sm font-semibold text-[#102a43] leading-tight">
                    9:00 AM to 5:00 PM EST
                  </p>
                  <p className="text-xs text-[#64748b] mt-0.5">
                    Monday to Friday
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#e2e8f0] flex items-center gap-2 text-xs font-medium text-[#475569]">
                <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                <span>100% Private &amp; Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Modern, Straightforward Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#e2e8f0] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#102a43] tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                Leave your details below and an admissions counselor will reach out within 24 business hours.
              </p>
            </div>

            {status === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  Message Sent Successfully
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-sm mx-auto">
                  Thank you! An admissions counselor from Creditor Academy will review your message and contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-xl text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-100/60 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs font-semibold text-rose-700">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#102a43] mb-1.5"
                  >
                    Full Name <span className="text-[#026fe2]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User size={16} />
                    </div>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#102a43] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#026fe2]/20 focus:border-[#026fe2] transition-all"
                    />
                  </div>
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#102a43] mb-1.5"
                    >
                      Email Address <span className="text-[#026fe2]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail size={16} />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#102a43] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#026fe2]/20 focus:border-[#026fe2] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#102a43] mb-1.5"
                    >
                      Phone Number <span className="text-[#026fe2]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone size={16} />
                      </div>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#102a43] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#026fe2]/20 focus:border-[#026fe2] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Purpose of Inquiry */}
                <div>
                  <label
                    htmlFor="contact-purpose"
                    className="block text-xs font-bold uppercase tracking-wider text-[#102a43] mb-1.5"
                  >
                    Purpose of Inquiry
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <HelpCircle size={16} />
                    </div>
                    <select
                      id="contact-purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#102a43] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#026fe2]/20 focus:border-[#026fe2] transition-all appearance-none cursor-pointer"
                    >
                      <option value="Masterclass Membership">Masterclass Membership ($69/mo)</option>
                      <option value="Become Private Track">Become Private (Status Correction &amp; SPC)</option>
                      <option value="Operate Private Track">Operate Private (Business Trusts &amp; PMAs)</option>
                      <option value="Financial Freedom Track">Financial Freedom (Business Credit &amp; Banking)</option>
                      <option value="General Question">General Inquiry / Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#102a43] mb-1.5"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#102a43] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#026fe2]/20 focus:border-[#026fe2] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#026fe2] hover:bg-[#025ec0] text-white font-bold rounded-full py-4 px-8 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#026fe2] transition-all shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send a Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
