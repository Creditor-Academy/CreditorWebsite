/** Journal posts whose FAQPage JSON-LD is emitted by Blogs/[slug]/layout.tsx (kept separate from page-level FAQ schema). */
export const FAQ_LAYOUT_SLUGS = new Set<string>([
  "what-is-a-privately-owned-business",
  "how-to-start-a-private-membership-association",
  "types-of-tradelines-explained",
  "asset-protection-for-entrepreneurs",
  "credit-repair-for-business-owners",
]);

const stripInline = (text: string) =>
  text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .trim();

/** Reads "### Question" + answer paragraphs under a "## Frequently Asked Questions" heading, matching the visible text. */
export function extractFaq(content: string[]): { question: string; answer: string }[] {
  const start = content.findIndex((b) => /^##\s+(Frequently Asked Questions|FAQ)\s*$/i.test(b.trim()));
  if (start === -1) return [];
  const out: { question: string; answer: string }[] = [];
  let i = start + 1;
  while (i < content.length) {
    const block = content[i].trim();
    if (block.startsWith("## ")) break;
    if (block.startsWith("### ")) {
      const question = block.slice(4).trim();
      const parts: string[] = [];
      i += 1;
      while (i < content.length) {
        const next = content[i].trim();
        if (next.startsWith("### ") || next.startsWith("## ")) break;
        if (next) parts.push(stripInline(next));
        i += 1;
      }
      if (question && parts.length) out.push({ question, answer: parts.join(" ") });
      continue;
    }
    i += 1;
  }
  return out;
}
