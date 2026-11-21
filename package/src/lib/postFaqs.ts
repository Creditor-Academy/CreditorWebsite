/** Pull question/answer pairs that are already written under a post's "## FAQ" heading. */
export function extractPostFaqs(content: string[]): { question: string; answer: string }[] {
  const start = content.findIndex((block) => block.trim() === "## FAQ");
  if (start === -1) return [];

  const faqs: { question: string; answer: string }[] = [];
  for (const block of content.slice(start + 1)) {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) break;
    const match = trimmed.match(/^\*\*(.+?\?)\*\*\s+([\s\S]+)$/);
    if (!match) continue;
    const question = match[1].trim();
    const answer = match[2].replace(/\s+/g, " ").trim();
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}
