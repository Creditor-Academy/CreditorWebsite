import React from "react";

export interface GrokBotInfo {
  id: string;
  name: string;
  shapeName: string;
  color: string;
  category: "masterclass" | "become-private" | "operate-private" | "financial-freedom";
  oneLiner: string;
}

export const GROK_BOTS: GrokBotInfo[] = [
  {
    id: "masterclass",
    name: "Masterclass",
    shapeName: "squircle",
    color: "#EA4045",
    category: "masterclass",
    oneLiner: "Your 24/7 sovereign study assistant for the Masterclass ecosystem and live sessions.",
  },
  {
    id: "spc",
    name: "Secured Party Creditor",
    shapeName: "teardrop",
    color: "#ED712E",
    category: "become-private",
    oneLiner: "Guides lawful SPC paperwork, filing procedures, and foundational debtor-creditor standing.",
  },
  {
    id: "status-correction",
    name: "Status Correction",
    shapeName: "dome",
    color: "#F19D38",
    category: "become-private",
    oneLiner: "Assists in understanding political status, nationality declarations, and jurisdictional standing.",
  },
  {
    id: "taxes",
    name: "Taxes",
    shapeName: "egg",
    color: "#3C82F6",
    category: "become-private",
    oneLiner: "Explains private vs. public tax status, non-resident alien standing, and lawful tax obligations.",
  },
  {
    id: "admin-proc",
    name: "Administrative Procedure",
    shapeName: "tablet",
    color: "#5BC67A",
    category: "become-private",
    oneLiner: "Assists with commercial notices, affidavits, lawful claims, and default judgments.",
  },
  {
    id: "business-trust",
    name: "Business Trust",
    shapeName: "clover",
    color: "#54B9A6",
    category: "operate-private",
    oneLiner: "Assists with Unincorporated Business Trust (UBT) indentures, minutes, and trustee operations.",
  },
  {
    id: "pma",
    name: "Private Membership Association",
    shapeName: "pebble",
    color: "#885CF5",
    category: "operate-private",
    oneLiner: "Assists in drafting PMA bylaws, membership contracts, and private commerce structures.",
  },
  {
    id: "asset-protection",
    name: "Asset Protection",
    shapeName: "blob",
    color: "#97683D",
    category: "operate-private",
    oneLiner: "Helps structure layered holding systems, privacy barriers, and liability insulation.",
  },
  {
    id: "credit-repair",
    name: "Credit Repair",
    shapeName: "flower",
    color: "#EB4699",
    category: "financial-freedom",
    oneLiner: "Guides factual dispute methodologies, consumer protection statutes, and bureau correction.",
  },
  {
    id: "business-credit",
    name: "Business Credit",
    shapeName: "star",
    color: "#00C972",
    category: "financial-freedom",
    oneLiner: "Navigates tier 1-4 commercial tradelines, EIN credit building without PG, and merchant funding.",
  },
];

interface GrokBotShapeProps {
  id: string;
  size?: number;
  className?: string;
  showEyes?: boolean;
}

export function GrokBotShape({
  id,
  size = 56,
  className = "",
  showEyes = true,
}: GrokBotShapeProps) {
  const bot = GROK_BOTS.find((b) => b.id === id) || GROK_BOTS[0];

  // Still face details (eyes + calm smile)
  const renderEyes = (cx1: number, cx2: number, cy: number, r: number = 2.5) => {
    if (!showEyes) return null;
    return (
      <g fill="#ffffff" opacity="0.95">
        <circle cx={cx1} cy={cy} r={r} />
        <circle cx={cx2} cy={cy} r={r} />
        <circle cx={cx1 + 0.8} cy={cy - 0.8} r={r * 0.4} fill="#ffffff" />
        <circle cx={cx2 + 0.8} cy={cy - 0.8} r={r * 0.4} fill="#ffffff" />
        <path
          d={`M ${cx1 + 1} ${cy + 5} Q ${(cx1 + cx2) / 2} ${cy + 8} ${cx2 - 1} ${cy + 5}`}
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </g>
    );
  };

  const renderShape = () => {
    switch (bot.id) {
      case "masterclass":
        // Squircle #EA4045
        return (
          <>
            <rect
              x="6"
              y="6"
              width="52"
              height="52"
              rx="18"
              fill={bot.color}
            />
            {renderEyes(26, 38, 30, 2.8)}
          </>
        );

      case "spc":
        // Teardrop #ED712E
        return (
          <>
            <path
              d="M 32 6 C 32 6 11 30 11 43 A 21 21 0 0 0 53 43 C 53 30 32 6 32 6 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 38, 2.5)}
          </>
        );

      case "status-correction":
        // Dome #F19D38
        return (
          <>
            <path
              d="M 10 52 L 54 52 A 4 4 0 0 0 58 48 C 58 26 46 10 32 10 C 18 10 6 26 6 48 A 4 4 0 0 0 10 52 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 32, 2.5)}
          </>
        );

      case "taxes":
        // Egg #3C82F6
        return (
          <>
            <path
              d="M 32 8 C 18 8 10 24 10 41 C 10 51 19 57 32 57 C 45 57 54 51 54 41 C 54 24 46 8 32 8 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 34, 2.5)}
          </>
        );

      case "admin-proc":
        // Tablet #5BC67A (stone tablet arch top, flat base)
        return (
          <>
            <path
              d="M 12 54 L 52 54 A 3 3 0 0 0 55 51 L 55 24 C 55 13 45 8 32 8 C 19 8 9 13 9 24 L 9 51 A 3 3 0 0 0 12 54 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 32, 2.5)}
          </>
        );

      case "business-trust":
        // Clover #54B9A6 (4-lobe rounded clover)
        return (
          <>
            <path
              d="M 32 26 C 32 14 20 8 13 17 C 6 26 12 37 24 34 C 12 31 6 42 13 51 C 20 60 32 54 32 42 C 32 54 44 60 51 51 C 58 42 52 31 40 34 C 52 37 58 26 51 17 C 44 8 32 14 32 26 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 34, 2.5)}
          </>
        );

      case "pma":
        // Pebble #885CF5 (organic smooth asymmetric pebble)
        return (
          <>
            <path
              d="M 22 10 C 37 7 51 13 55 26 C 59 39 53 52 39 56 C 25 60 11 53 8 39 C 5 25 10 13 22 10 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 32, 2.5)}
          </>
        );

      case "asset-protection":
        // Blob #97683D (smooth multi-lobe blob)
        return (
          <>
            <path
              d="M 31 9 C 45 7 55 17 53 29 C 51 40 57 46 49 54 C 39 62 25 57 17 51 C 9 45 8 35 12 25 C 16 15 20 11 31 9 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 32, 2.5)}
          </>
        );

      case "credit-repair":
        // Flower #EB4699 (petals radiating around center)
        return (
          <>
            <g fill={bot.color}>
              <circle cx="32" cy="17" r="9" />
              <circle cx="45" cy="24" r="9" />
              <circle cx="45" cy="40" r="9" />
              <circle cx="32" cy="47" r="9" />
              <circle cx="19" cy="40" r="9" />
              <circle cx="19" cy="24" r="9" />
              <circle cx="32" cy="32" r="14" />
            </g>
            {renderEyes(26, 38, 32, 2.5)}
          </>
        );

      case "business-credit":
        // Star #00C972 (smooth 5-point star)
        return (
          <>
            <path
              d="M 32 8 L 38 22 A 2 2 0 0 0 40 23 L 55 24 C 57 24 58 26 56 28 L 44 37 A 2 2 0 0 0 43 39 L 47 54 C 48 56 46 57 44 56 L 33 48 A 2 2 0 0 0 31 48 L 20 56 C 18 57 16 56 17 54 L 21 39 A 2 2 0 0 0 20 37 L 8 28 C 6 26 7 24 9 24 L 24 23 A 2 2 0 0 0 26 22 Z"
              fill={bot.color}
            />
            {renderEyes(26, 38, 33, 2.3)}
          </>
        );

      default:
        return (
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="16"
            fill={bot.color}
          />
        );
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title={`${bot.name} (${bot.shapeName})`}
      aria-label={`${bot.name} Grok Bot - ${bot.shapeName} in ${bot.color}`}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-sm select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderShape()}
      </svg>
    </div>
  );
}
