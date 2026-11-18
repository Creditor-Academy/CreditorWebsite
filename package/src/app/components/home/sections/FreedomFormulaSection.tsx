"use client";

import React from "react";
import Link from "next/link";
import { GrokBotShape } from "../grok-bot-shapes";

export default function FreedomFormulaSection() {
  return (
    <section
      id="freedom"
      style={{
        background: "var(--ca-light)",
        paddingTop: "60px",
        paddingBottom: "50px",
      }}
    >
      <div className="ca-wrap flex flex-col gap-14">
        <div className="ca-head">
          <span className="ca-pill">Four steps</span>
          <h2 className="ca-h2">The Freedom Formula</h2>
          <p className="ca-sub">
            The simple path we use to help you learn, plug in, and start living what you study.
          </p>
        </div>

        <div className="ca-steps">
          <svg
            className="ca-wave"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 30 C 62 30 62 30 125 30 C 250 30 250 86 375 86 C 500 86 500 30 625 30 C 750 30 750 86 875 86 C 937 86 940 86 1000 86"
              fill="none"
              stroke="#026fe2"
              strokeWidth="3"
              strokeDasharray="2 9"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Step 1 */}
          <div className="ca-step">
            <div className="ca-node">1</div>
            <div className="ca-stepcard">
              <h3>Become a Member</h3>
              <p>
                Step inside Creditor Academy. Unlock private education, the course library,
                and a path toward financial freedom.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="ca-step">
            <div className="ca-lo">
              <div className="ca-node ca-node-hl">2</div>
              <div className="ca-stepcard ca-stepcard-hl">
                <h3>Get Access to Your Bots</h3>
                <p>
                  Your Creditor Academy Grok Bots sit with you in every course, talk in
                  plain words, and help you learn each step.
                </p>
                <div className="ca-stepbots flex items-center justify-center gap-2 mt-4">
                  <GrokBotShape id="spc" size={40} index={1} animated />
                  <GrokBotShape id="taxes" size={40} index={3} animated />
                  <GrokBotShape id="credit-repair" size={40} index={8} animated />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="ca-step">
            <div className="ca-node">3</div>
            <div className="ca-stepcard">
              <h3>Unlock Courses &amp; Connect</h3>
              <p>
                Get into premium courses, join daily live masterclasses, and meet people
                on the same path. Your Grok Bots are in the courses too.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="ca-step">
            <div className="ca-lo">
              <div className="ca-node">4</div>
              <div className="ca-stepcard">
                <h3>Become Private</h3>
                <p>
                  Take control of your sovereignty. Live more freely, operate privately,
                  and build wealth on your own terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            className="ca-btn ca-btn-primary ca-btn-lg"
            href="/masterclass-membership"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}
