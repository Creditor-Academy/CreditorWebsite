"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

const DISCLAIMER =
  "Educational content only. Not legal, tax or financial advice. Consult a qualified professional for your situation.";

const INCLUDED = [
  "Promotional-rate card concepts",
  "Short-term rental funding topics",
  "Interest-period basics",
  "Planning questions to ask",
  "How a lesson walks through promotional-rate card terms",
  "Questions to review before using credit for a short-term stay",
] as const;

const TRADITIONAL = [
  { title: "Higher-interest financing", body: "The lesson contrasts higher-interest loans with promotional-rate card terms, without promising a particular rate or approval." },
  { title: "Using cash reserves", body: "The lesson discusses why some operators use cash for upfront stay costs, and the tradeoffs of that choice." },
  { title: "Interest cost over time", body: "The lesson explains how interest can add cost when a balance is carried. It does not promise interest will be eliminated." },
] as const;

const CREDITOR = [
  { title: "Promotional-rate card terms", body: "The workshop teaches how promotional-rate offers are commonly described, and that approval and terms depend on the issuer." },
  { title: "Interest during a promo window", body: "Lessons cover how a promotional period is usually defined, and what can happen when that period ends." },
  { title: "Cash-flow questions", body: "The class reviews questions about keeping records and separating personal and business spending. Results vary." },
] as const;

export default function WorkshopPageContent() {
  return (
    <div className="workshop-athena-style min-h-screen bg-[#eef5fc] text-slate-800">
      <section className="relative overflow-hidden border-b border-[#1a4d7a] bg-linear-to-br from-[#061525] via-[#0a2d52] to-[#0f3d6b] px-4 pb-16 pt-20 md:pb-24 md:pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(2,111,226,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(2,111,226,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        <div className="container relative z-10">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7eb8ff]">
                Creditor Academy · Private Montessori Association
              </p>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.65rem] uppercase">
                Study promotional-rate cards{" "}
                <span className="block bg-linear-to-r from-amber-400 via-yellow-300 to-white bg-clip-text text-transparent font-black mt-1">
                  and short-term rental funding
                </span>
                <span className="text-xl sm:text-2xl block mt-2 text-slate-200 capitalize font-medium italic">
                  A class on how promotional-rate credit cards are described, and questions to ask before using them for a short-term stay.
                </span>
              </h1>

              <div className="mt-5 inline-block rounded-xl bg-black/30 border border-white/10 px-4 py-2.5 text-left">
                <p className="text-sm font-bold text-amber-300 sm:text-base flex items-center gap-2">
                  <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-xs font-black">Workshop</span>
                  New workshop dates are coming soon.
                </p>
              </div>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100/85 lg:mx-0">
                The session teaches the ideas behind promotional-rate card offers and short-term rental planning. It does not promise a rate, an approval, or an investment result.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-blue-100/70 lg:mx-0">
                {DISCLAIMER}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/masterclass-membership"
                  className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-8 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-amber-500/20 transition transform hover:-translate-y-0.5 hover:brightness-110 uppercase"
                >
                  View membership
                </Link>
                <Link href="/contact" className="text-xs font-semibold text-blue-200/70 tracking-wide underline">
                  Contact us about upcoming dates
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:max-w-md">
              <div className="rounded-2xl border border-white/20 bg-white p-8 shadow-2xl shadow-black/30 ring-1 ring-primary/30 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Schedule</p>
                <p className="mt-4 text-2xl font-black tracking-tight text-slate-900">
                  New workshop dates are coming soon
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  The previous session has ended. This page is not taking registration for a past date.
                </p>
                <Link
                  href="/masterclass-membership"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-white"
                >
                  Go to membership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#c5dff5] bg-linear-to-b from-[#e3f0fa] to-[#eef5fc] py-12 md:py-14">
        <div className="container">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#b8d9f5]/80 bg-white shadow-lg shadow-blue-900/6 ring-1 ring-primary/5">
            <div className="relative flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-center lg:max-w-xl lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  Workshop schedule
                </span>
                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                  New workshop dates are coming soon
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Promotional-rate cards and short-term rental funding, taught as education.
                </p>
              </div>
              <Link
                href="/masterclass-membership"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-extrabold text-white"
              >
                View membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f7fd] py-16 md:py-24">
        <div className="container">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-primary">
            What the class compares
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Higher-interest financing and promotional-rate card terms
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
            The workshop explains the difference as a study topic. Card approval, rates, and rental results are not promised.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#c5dff5] bg-white/60 p-8 backdrop-blur-sm">
              <span className="inline-block rounded-full bg-[#d0e8f8] px-3 py-1 text-xs font-bold uppercase text-slate-600">
                Financing concepts
              </span>
              <p className="mt-4 text-sm font-bold text-slate-400 tracking-wide">Topics in the lesson</p>
              <ul className="mt-6 space-y-6">
                {TRADITIONAL.map((item) => (
                  <li key={item.title}>
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-primary bg-linear-to-br from-[#dbeafe] to-[#eff6ff] p-8 shadow-lg shadow-blue-500/15">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
                Promotional-rate concepts
              </span>
              <p className="mt-4 text-sm font-bold text-primary tracking-wide">Also covered in class</p>
              <ul className="mt-6 space-y-6">
                {CREDITOR.map((item) => (
                  <li key={item.title}>
                    <p className="font-bold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#061525] via-[#0a2d52] to-[#0f3d6b] py-16 md:py-24" id="register">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-6 text-center lg:text-left justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                  Workshop topics
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  What the{" "}
                  <span className="bg-linear-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
                    promotional-rate workshop
                  </span>{" "}
                  teaches
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-blue-100/90 lg:mx-0">
                  Lessons walk through promotional-rate card language and short-term rental planning questions. New workshop dates are coming soon.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm lg:p-7">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <Sparkles className="h-5 w-5 text-amber-300" aria-hidden />
                  <h3 className="text-base font-bold text-white tracking-wide">Key topics covered:</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-3">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/4 p-3.5 text-left"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-white/95">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-white p-6 shadow-2xl shadow-black/25 md:p-8">
              <div className="rounded-2xl bg-linear-to-br from-primary to-[#0259bd] px-6 py-6 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-100/90">
                  Online workshop
                </p>
                <p className="mt-3 text-xl sm:text-2xl font-black tracking-tight">
                  New workshop dates are coming soon
                </p>
              </div>

              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                Registration for the past date is closed. Join the membership page or contact the academy when a new date is posted.
              </p>
              <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">{DISCLAIMER}</p>

              <Link
                href="/masterclass-membership"
                className="mt-6 flex w-full items-center justify-center rounded-full bg-blue-600 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5 hover:bg-blue-700"
              >
                View membership
              </Link>
              <Link href="/contact" className="mt-4 text-center text-xs text-primary font-medium underline">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#c5dff5] bg-linear-to-b from-[#dceefb] to-[#e8f4fc] py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl tracking-tight">
            New workshop dates are coming soon
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-600 font-medium text-sm sm:text-base">
            Until a new date is announced, the membership page is the place to continue the educational tracks.
          </p>
          <Link
            href="/masterclass-membership"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-12 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-500/20 transition transform hover:-translate-y-0.5 hover:bg-[#0259bd]"
          >
            View membership
          </Link>
          <p className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            Direct Support Line:{" "}
            <a href="tel:+14254009246" className="text-primary hover:underline font-extrabold ml-1">
              425-400-9246
            </a>
            {" | "}
            <a href="https://creditoracademy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-extrabold ml-1 lowercase">
              creditoracademy.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
