import { JOURNAL_POSTS, type JournalPost } from "@/lib/journalPosts";

/**
 * Light version of a journal post for lists (blog index, related posts).
 * Keeps only the first prose paragraph so client bundles don't ship every article body.
 */
export type JournalSummary = Pick<
  JournalPost,
  "id" | "slug" | "title" | "description" | "category" | "date" | "readTime" | "image" | "featured"
> & { content: string[] };

function firstProse(content: string[]): string[] {
  const block = content.find(
    (b) =>
      !b.startsWith("#") &&
      !b.startsWith("-") &&
      !b.startsWith("[TABLE]") &&
      !b.startsWith("[CTA]") &&
      !b.startsWith("*") &&
      b.trim().length > 40
  );
  return block ? [block] : [];
}

export function toSummary(post: JournalPost): JournalSummary {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    featured: post.featured,
    content: firstProse(post.content),
  };
}

export function getJournalSummaries(): JournalSummary[] {
  return JOURNAL_POSTS.map(toSummary);
}

/** Up to `limit` other posts, same category first, newest first. */
export function getRelatedJournalPosts(slug: string, limit = 4): JournalSummary[] {
  const current = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!current) return [];
  const byDate = (a: JournalPost, b: JournalPost) => new Date(b.date).getTime() - new Date(a.date).getTime();
  const others = JOURNAL_POSTS.filter((p) => p.slug !== slug);
  const same = others.filter((p) => p.category === current.category).sort(byDate);
  const rest = others.filter((p) => p.category !== current.category).sort(byDate);
  return [...same, ...rest].slice(0, limit).map(toSummary);
}
