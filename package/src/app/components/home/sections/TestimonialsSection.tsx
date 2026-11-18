"use client";

import React from "react";

export default function TestimonialsSection() {
  return (
    <>
      {/* =========================================================
          10. TESTIMONIALS (What Our Students Say)
         ========================================================= */}
      <section
        style={{
          background: "var(--ca-white)",
          paddingTop: "10px",
          paddingBottom: "40px",
        }}
      >
        <div className="ca-wrap flex flex-col gap-12">
          <div className="ca-head">
            <span className="ca-pill">Student voices</span>
            <h2 className="ca-h2">What Our Students Say</h2>
            <p className="ca-sub">From the Creditor Academy community.</p>
          </div>
          <div className="ca-quotes">
            <figure className="ca-quote">
              <svg className="ca-q" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6zM14 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6z" />
              </svg>
              <p>
                Creditor Academy helped me understand credit scores and save thousands.
                The learning experience was simple yet powerful.
              </p>
              <figcaption className="ca-who">
                Olivia<span>Student</span>
              </figcaption>
            </figure>

            <figure className="ca-quote">
              <svg className="ca-q" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6zM14 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6z" />
              </svg>
              <p>
                The practical courses transformed how I manage my business credit.
                Highly recommend for anyone serious about finance.
              </p>
              <figcaption className="ca-who">
                Henry<span>Entrepreneur</span>
              </figcaption>
            </figure>

            <figure className="ca-quote">
              <svg className="ca-q" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6zM14 21c0-6 1-11 5-14l2 2c-2 2-3 4-3 6h4v6z" />
              </svg>
              <p>
                I now feel confident managing loans and personal finance. The content is
                practical and easy to follow.
              </p>
              <figcaption className="ca-who">
                Charlotte<span>Working Professional</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Wave Transition: White to Light */}
      <div className="ca-edge" style={{ background: "var(--ca-white)" }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
          <path
            className="to-light"
            d="M0 46 C 180 92 360 92 540 52 S 900 6 1080 46 S 1320 86 1440 40 L1440 90 L0 90Z"
          />
        </svg>
      </div>
    </>
  );
}
