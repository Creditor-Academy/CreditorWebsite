"use client";

import React from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      {/* =========================================================
          11. CONTACT SECTION (Let's build your next step toward freedom)
         ========================================================= */}
      <section
        id="contact"
        style={{
          background: "var(--ca-light)",
          paddingTop: "10px",
          paddingBottom: "90px",
        }}
      >
        <div className="ca-wrap">
          <div className="ca-contact">
            <div
              className="flex flex-col gap-5 items-start justify-center"
              style={{ flex: "1.3 1 420px", minWidth: 0 }}
            >
              <span className="ca-pill">Talk with our team</span>
              <h2 className="ca-h2">Let's build your next step toward freedom</h2>
              <p className="ca-sub">
                Have questions or ready to begin? Talk with our team and find the right
                path for your goals. One conversation can make your next move clearer.
                The chat is listed on the live site as a secure and confidential
                connection.
              </p>
              <div className="ca-cta-row">
                <Link className="ca-btn ca-btn-primary ca-btn-lg" href="/contact-us">
                  Send a Message
                </Link>
                <Link className="ca-btn ca-btn-outline ca-btn-lg" href="/contact-us">
                  Book Instant Meeting
                </Link>
              </div>
            </div>

            <div className="ca-details" id="contact-sales">
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                Ready to get started?
              </h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <svg
                    className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <div>
                    <b>Email</b>counselor@creditoracademy.com
                  </div>
                </li>
                <li>
                  <svg
                    className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </svg>
                  <div>
                    <b>Phone</b>(425) 400-9246
                  </div>
                </li>
                <li>
                  <svg
                    className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  <div>
                    <b>Hours</b>9:00 AM to 5:00 PM EST, Monday to Friday
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
