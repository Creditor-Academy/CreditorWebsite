import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogDetail from "@/app/components/Blogs/BlogDetail";
import { getJournalPostBySlug, getAllJournalSlugs } from "@/lib/journalPosts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";

const MONTHS: Record<string, string> = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

/** "November 10, 2026" → "2026-11-10". Falls back to the original string. */
function journalDateToIso(date: string): string {
  const match = date.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (!match) return date;
  const month = MONTHS[match[1]];
  if (!month) return date;
  return `${match[3]}-${month}-${match[2].padStart(2, "0")}`;
}

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllJournalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    return { title: "Journal Not Found | Creditor" };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.split(",").map((keyword) => keyword.trim()),
    alternates: {
      canonical: `${siteUrl}/Blogs/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteUrl}/Blogs/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
      ],
    },
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${siteUrl}/Blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;
  const published = journalDateToIso(post.date);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: "Creditor Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "Creditor Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo/creditor-academy-header-logo.png`,
      },
    },
    mainEntityOfPage: pageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${siteUrl}/Blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }} />
      <BlogDetail post={post} />
    </main>
  );
}
