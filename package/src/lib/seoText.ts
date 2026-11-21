const BRAND = "Creditor Academy";
const SUFFIX = ` | ${BRAND}`;

/** One brand mention, at or under 60 characters, without chopping mid-word. */
export function fitTitle(raw: string): string {
  let title = raw.replace(/\s+/g, " ").trim();

  while (countBrand(title) > 1 && title.includes("|")) {
    title = title.slice(0, title.lastIndexOf("|")).trim();
  }

  if (countBrand(title) === 0) {
    const withBrand = `${title}${SUFFIX}`;
    if (withBrand.length <= 60) title = withBrand;
  }

  if (title.length <= 60) return title;

  if (title.endsWith(SUFFIX)) {
    const topic = title.slice(0, -SUFFIX.length).replace(/[\s|–—-]+$/g, "");
    if (topic.length <= 60 && topic.length >= 15) return topic;

    const budget = 60 - SUFFIX.length;
    let cut = cleanCut(topic.slice(0, budget));
    const next = cut ? `${cut}${SUFFIX}` : BRAND;
    if (next.length <= 60) return next;
  }

  return cleanCut(title.slice(0, 60));
}

/** Keep descriptions that already fit. Trim longer ones to 120–160 characters. */
export function fitDescription(raw: string): string {
  const text = raw.replace(/\s+/g, " ").trim();
  if (text.length <= 160) return text;

  const sentences = text.split(/(?<=[.!?])\s+/);
  let acc = "";
  for (const sentence of sentences) {
    const trial = acc ? `${acc} ${sentence}` : sentence;
    if (trial.length <= 160) acc = trial;
    else break;
  }
  if (acc.length >= 120) return acc;

  let cut = text.slice(0, 157);
  const space = cut.lastIndexOf(" ");
  if (space >= 120) cut = cut.slice(0, space);
  cut = cut.replace(/[\s,;:–—-]+$/g, "");
  const andAt = cut.toLowerCase().lastIndexOf(" and ");
  if (andAt >= 120) cut = cut.slice(0, andAt).replace(/[\s,;:–—-]+$/g, "");
  if (cut && !/[.!?]$/.test(cut)) cut = `${cut}.`;
  return cut.length <= 160 ? cut : cut.slice(0, 160);
}

function countBrand(title: string): number {
  return title.toLowerCase().split("creditor academy").length - 1;
}

function cleanCut(value: string): string {
  let cut = value;
  const space = cut.lastIndexOf(" ");
  if (cut.length >= 60 && space > 20) cut = cut.slice(0, space);
  cut = cut.replace(/\s+and\s+\S+$/i, "");
  cut = cut.replace(/[\s|–—:,;&/]+$/g, "");
  const dangling = /\b(and|or|to|for|of|a|an|the|with|in|on|at|by|from|into|before|after|your|this|that|how|what)$/i;
  while (dangling.test(cut) && cut.length > 24) {
    cut = cut.replace(dangling, "").replace(/[\s|–—:,;&/]+$/g, "");
  }
  return cut;
}
