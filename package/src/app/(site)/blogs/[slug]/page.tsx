import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogDetail from "@/app/components/Blogs/BlogDetail";
import { getJournalPostBySlug, getAllJournalSlugs } from "@/lib/journalPosts";
import { fitDescription, fitTitle } from "@/lib/seoText";
import { extractPostFaqs } from "@/lib/postFaqs";
import { faqPageJsonLd, FOUNDER_ID } from "@/lib/structuredData";
import { JsonLd } from "@/app/components/seo/JsonLd";

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
    return { title: "Journal Not Found | Creditor Academy" };
  }

  const title = fitTitle(post.metaTitle);
  const description = fitDescription(post.metaDescription);
  const pageUrl = `${siteUrl}/blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  return {
    title,
    description,
    keywords: post.keywords.split(",").map((keyword) => keyword.trim()),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "article",
      images: [{ url: imageUrl, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const pageUrl = `${siteUrl}/blogs/${post.slug}`;
  const imageUrl = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;
  const published = journalDateToIso(post.date);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "Article"],
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "PaulMichael Rowland",
      url: `${siteUrl}/founder`,
    },
    publisher: {
      "@type": "Organization",
      name: "Creditor Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo/creditor-academy-header-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
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
        name: "Journal",
        item: `${siteUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  const postFaqs = extractPostFaqs(post.content);
  const faqLd = faqPageJsonLd(postFaqs);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <BlogDetail post={post} />
    </main>
  );
}
