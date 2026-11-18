"use client";

import React from "react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <>
      {/* =========================================================
          9. GOOD TO KNOW + SIMPLE PRICING
         ========================================================= */}
      <section
        style={{
          background: "var(--ca-light)",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        <div className="ca-wrap flex flex-col gap-12">
          {/* Note removed per user edit */}

          <div className="ca-pricing" id="pricing">
            <div
              className="flex flex-col gap-4 items-start"
              style={{ flex: "1 1 380px", minWidth: 0 }}
            >
              <span className="ca-pill ca-pill-dark">Limited locked-in rate</span>
              <h2 className="ca-h2 ca-h2-light">
                Simple Pricing. Invest in Sovereignty.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.6,
                  color: "var(--ca-on-dark-soft)",
                  maxWidth: "520px",
                }}
              >
                Start with the Masterclass. Join live classes, get a clear plan, and use
                your Grok Bots in the courses as you go. Cancel anytime.
              </p>
            </div>
            <div
              className="flex flex-col gap-5 items-start"
              style={{ flex: "1 1 340px", minWidth: 0 }}
            >
              <div className="flex items-baseline flex-wrap gap-2 sm:gap-5">
                <span className="ca-price-s">
                  $69<small>/month</small>
                </span>
                <span className="ca-was" style={{ fontSize: "24px" }}>
                  $147/mo
                </span>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--ca-on-dark-soft)",
                }}
              >
                Live classes Monday through Friday, a step-by-step private plan,
                community, intro lessons, pay-as-you-go flexibility, a starter resource
                library, and member discounts.
              </p>
              <div className="ca-cta-row">
                <Link
                  className="ca-btn ca-btn-primary ca-btn-lg"
                  href="/masterclass-membership"
                >
                  Join Masterclass — $69/month
                </Link>
                {/* <Link
                  className="ca-btn ca-btn-ghost ca-btn-lg"
                  href="/masterclass-membership"
                >
                  Get Started Instantly — $69/month
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition: Light to White */}
      <div className="ca-edge" style={{ background: "var(--ca-light)" }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path className="to-white" d="M0 90 L0 56 Q720 -34 1440 56 L1440 90Z" />
        </svg>
      </div>
    </>
  );
}
