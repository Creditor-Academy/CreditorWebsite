/**
 * Hand-picked "read next" guides per journal post (added 26 Nov 2026 for search).
 * Purely additive: it adds links under a post, it never changes or removes article text.
 * Blog slugs resolve to the post's own title; other paths carry their own label.
 */
export type ReadNextItem = { href: string; label?: string };

export const JOURNAL_READ_NEXT: Record<string, ReadNextItem[]> = {
  "private-business-vs-traditional-business": [
    { href: "/Blogs/what-is-a-privately-owned-business" },
    { href: "/Blogs/how-to-operate-a-business-in-the-private" },
    { href: "/Blogs/private-operations-vs-public-operations" },
  ],
  "what-is-a-privately-owned-business": [
    { href: "/Blogs/private-business-vs-traditional-business" },
    { href: "/Blogs/how-to-operate-a-business-in-the-private" },
  ],
  "business-trust-explained": [
    { href: "/Blogs/how-to-set-up-a-business-trust" },
    { href: "/Blogs/family-trust-basics" },
    { href: "/Blogs/asset-protection-for-entrepreneurs" },
  ],
  "how-to-set-up-a-business-trust": [{ href: "/Blogs/business-trust-explained" }],
  "asset-protection-for-entrepreneurs": [
    { href: "/Blogs/protecting-business-assets" },
    { href: "/Blogs/business-trust-explained" },
    { href: "/Blogs/legacy-planning-for-entrepreneurs" },
  ],
  "credit-repair-for-business-owners": [
    { href: "/Blogs/personal-credit-repair-vs-business-credit-building" },
    { href: "/Blogs/how-to-build-business-credit-from-scratch" },
    { href: "/Blogs/business-credit-readiness-checklist" },
  ],
  "types-of-tradelines-explained": [
    { href: "/services/tradeline-exchange/resources/what-is-tradeline", label: "What Is a Tradeline? How Tradelines Work" },
  ],
  "what-is-a-private-membership-association": [{ href: "/Blogs/how-to-start-a-private-membership-association" }],
  "how-to-start-a-private-membership-association": [{ href: "/Blogs/what-is-a-private-membership-association" }],
};
