import Link from "next/link";
import BlogsPage from "@/app/components/Blogs"; // Added quotes and matched the export name
import { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import { getJournalSummaries } from "@/lib/journalSummaries";

export const metadata: Metadata = pageMetadata("/Blogs");

export default function Page() {
    const posts = getJournalSummaries();
    const byCategory = new Map<string, typeof posts>();
    for (const post of posts) {
        const list = byCategory.get(post.category) ?? [];
        list.push(post);
        byCategory.set(post.category, list);
    }

    return (
        <main>
            <BlogsPage posts={posts} />

            {/* Plain links to every article, so readers and search engines can reach posts
                that sit behind the client-side pagination above. */}
            <section aria-labelledby="all-articles" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                <h2 id="all-articles" className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-6">
                    All articles by topic
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[...byCategory.entries()].map(([category, list]) => (
                        <div key={category}>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-700 mb-3">{category}</h3>
                            <ul className="space-y-2">
                                {list.map((post) => (
                                    <li key={post.slug}>
                                        <Link href={`/Blogs/${post.slug}`} prefetch={false} className="text-sm text-neutral-700 hover:text-blue-700 hover:underline">
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
