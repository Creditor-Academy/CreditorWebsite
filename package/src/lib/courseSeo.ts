import type { CoursePath, TrackId } from "@/app/components/learning-paths/data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";
const BRAND = "Creditor Academy";
const MAX_TITLE = 60;

/** Short program name used in titles ("Become Private + SOV 101" → "Become Private"). */
export function courseShortName(course: CoursePath): string {
  return course.title.replace(/\s*\+.*$/, "").trim();
}

/** "Become Private – Status Correction" → "Status Correction" when the course name is already in the title. */
export function moduleShortName(course: CoursePath, moduleTitle: string): string {
  const prefix = courseShortName(course);
  return moduleTitle.replace(new RegExp(`^${prefix}\\s*[–—-]\\s*`), "").trim();
}

function trackLabel(track?: TrackId): string | null {
  if (!track) return null;
  return track === "book-smart" ? "Book Smart" : "Street Smart";
}

function trackMode(track?: TrackId): string | null {
  if (!track) return null;
  return track === "book-smart" ? "live lessons" : "recorded lectures";
}

/** Joins title parts and drops the least important ones until it fits in ~60 characters. Brand stays last. */
function fitTitle(parts: string[]): string {
  const list = [...parts];
  let title = [...list, BRAND].join(" | ");
  while (title.length > MAX_TITLE && list.length > 1) {
    list.splice(list.length - 1, 1);
    title = [...list, BRAND].join(" | ");
  }
  return title.length > MAX_TITLE ? list.join(" | ") : title;
}

export function moduleSeo(
  course: CoursePath,
  mod: { slug: string; title: string; totalLessons: number },
  track?: TrackId
): { title: string; description: string; canonical: string } {
  const program = courseShortName(course);
  const name = moduleShortName(course, mod.title);
  const label = trackLabel(track);
  const mode = trackMode(track);
  const head = label ? `${name}: ${label}` : name;
  const title = fitTitle(name === program ? [head] : [head, program]);

  const description = label
    ? `${name} in the ${program} course, ${label} track: ${mode} covering ${mod.totalLessons} lessons. Online and educational only, not legal, tax or financial advice.`
    : `${name} in the ${program} course: ${mod.totalLessons} lessons, available as live lessons (Book Smart) or recorded lectures (Street Smart). Educational only.`;

  const path = `${course.hubPath}/${mod.slug}${track ? `/${track}` : ""}`;
  return { title, description, canonical: `${siteUrl}${path}` };
}

export function courseJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: opts.name,
    description: opts.description,
    url: `${siteUrl}${opts.path}`,
    inLanguage: "en",
    provider: {
      "@type": "Organization",
      name: BRAND,
      url: siteUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
    },
  };
}

/** Course JSON-LD for a module (and optional track) page, built from the same text as its metadata. */
export function moduleCourseJsonLd(
  course: CoursePath,
  mod: { slug: string; title: string; totalLessons: number },
  track?: TrackId
): Record<string, unknown> {
  const seo = moduleSeo(course, mod, track);
  return courseJsonLd({
    name: seo.title.replace(` | ${BRAND}`, ""),
    description: seo.description,
    path: `${course.hubPath}/${mod.slug}${track ? `/${track}` : ""}`,
  });
}
