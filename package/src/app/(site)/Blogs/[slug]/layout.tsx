import Link from "next/link";
import JsonLdScript from "@/app/components/structured-data/JsonLdScript";
import { getJournalPostBySlug } from "@/lib/journalPosts";
import { getRelatedJournalPosts } from "@/lib/journalSummaries";
import { extractFaq, FAQ_LAYOUT_SLUGS } from "@/lib/journalFaq";
import { JOURNAL_READ_NEXT } from "@/lib/journalReadNext";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

/**
 * Wraps every journal post with server-rendered related links and next steps,
 * so each article links to other articles and to the course and webinar pages.
 */
export default async function JournalPostLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);
  if (!post) return <>{children}</>;

  const related = getRelatedJournalPosts(slug, 4);
  const faq = FAQ_LAYOUT_SLUGS.has(slug) ? extractFaq(post.content) : [];
  const readNext = (JOURNAL_READ_NEXT[slug] ?? [])
    .map((item) => {
      const blogSlug = item.href.startsWith("/Blogs/") ? item.href.slice("/Blogs/".length) : null;
      const label = item.label ?? (blogSlug ? getJournalPostBySlug(blogSlug)?.title : undefined);
      return label ? { href: item.href, label } : null;
    })
    .filter((item): item is { href: string; label: string } => item !== null);

  return (
    <>
      {faq.length > 0 ? (
        <JsonLdScript
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      ) : null}
      {children}
      <aside aria-labelledby="keep-learning" className="bg-[#FAFAFA] pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {readNext.length > 0 ? (
            <nav aria-labelledby="read-next" className="mb-8">
              <h2 id="read-next" className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">
                Read next on this topic
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-base text-neutral-800">
                {readNext.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} prefetch={false} className="text-blue-700 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          {related.length > 0 ? (
            <>
              <h2 id="keep-learning" className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5">
                Related articles
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug} className="rounded-xl border border-neutral-200 bg-white p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">{r.category}</span>
                    <Link
                      href={`/Blogs/${r.slug}`}
                      prefetch={false}
                      className="mt-1 block text-base font-semibold text-neutral-900 hover:text-blue-700 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5 sm:p-6 text-sm text-neutral-700 leading-relaxed">
            <p className="font-semibold text-neutral-900 mb-2">Keep learning with Creditor Academy</p>
            <p>
              Watch the <Link href="/webinar" className="text-blue-700 underline">free recorded class</Link>, browse the{" "}
              <Link href="/operate-private" className="text-blue-700 underline">Operate Private</Link>,{" "}
              <Link href="/become-private" className="text-blue-700 underline">Become Private</Link> and{" "}
              <Link href="/financial-freedom" className="text-blue-700 underline">Financial Freedom</Link> courses, or see{" "}
              <Link href="/masterclass-membership" className="text-blue-700 underline">membership options</Link>.
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Educational content only. Not legal, tax or financial advice. Speak to a qualified professional about your situation.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
