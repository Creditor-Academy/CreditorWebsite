import {
  COURSE_PATHS,
  getModuleBySlug,
  getTrackCurriculum,
  type CourseId,
  type CoursePath,
  type TrackId,
} from "@/app/components/learning-paths/data";

export const SITE_URL = "https://creditoracademy.com";
export const ORG_ID = `${SITE_URL}/#organization`;

const LOGO = `${SITE_URL}/images/logo/creditor-academy-header-logo.png`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Organization"],
    "@id": ORG_ID,
    name: "Creditor Academy",
    url: SITE_URL,
    logo: LOGO,
    image: LOGO,
    email: "counselor@creditoracademy.com",
    telephone: "+1-425-400-9246",
    founder: {
      "@type": "Person",
      name: "PaulMichael Rowland",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "600 1st Ave",
      addressLocality: "Seattle",
      addressRegion: "WA",
      postalCode: "98104",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/groups/1455118361753321/",
      "https://x.com/CreditorAcademy",
      "https://www.youtube.com/@creditoracademy",
      "https://rumble.com/user/CreditorAcademy",
      "https://www.tiktok.com/@creditoracademy",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Creditor Academy",
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

const CATALOG_TO_COURSE: Record<string, CourseId> = {
  "/services/course-cataloges/become-private": "become-private",
  "/services/course-cataloges/operate-private": "operate-private",
  "/services/course-cataloges/financial-freedom": "financial-freedom",
};

const CRUMB_LABELS: Record<string, string> = {
  "about-us": "About Us",
  blogs: "Journal",
  services: "Services",
  "course-cataloges": "Course Catalog",
  "become-private": "Become Private",
  "operate-private": "Operate Private",
  "financial-freedom": "Financial Freedom",
  "master-class": "Master Class",
  "masterclass-membership": "Masterclass Membership",
  "book-smart": "Book Smart",
  "street-smart": "Street Smart",
  "tradeline-exchange": "Tradeline Exchange",
  "live-class": "Live Classes",
  "private-merchant": "Private Merchant",
  "website-service": "Website Services",
  "contact-us": "Contact",
  webinar: "Free Webinar",
  ebooks: "eBooks",
};

for (const course of Object.values(COURSE_PATHS)) {
  for (const mod of course.modules) {
    CRUMB_LABELS[mod.slug] = mod.title;
  }
}

export function breadcrumbJsonLd(pathname: string) {
  if (!pathname || pathname === "/" || pathname.startsWith("/blogs/")) return null;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return null;

  const itemListElement = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ];
  let acc = "";
  parts.forEach((part, index) => {
    acc += `/${part}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: CRUMB_LABELS[part] ?? titleCaseSlug(part),
      item: `${SITE_URL}${acc}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function courseJsonLdForPath(pathname: string) {
  if (pathname === "/services/course-cataloges") {
    const courses = (["become-private", "operate-private", "financial-freedom"] as CourseId[]).map(
      (id) => COURSE_PATHS[id]
    );
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Creditor Academy Course Catalog",
      itemListElement: courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: courseNode(course.title, course.description, `${SITE_URL}${course.hubPath}`),
      })),
    };
  }

  const catalogId = CATALOG_TO_COURSE[pathname];
  if (catalogId) {
    const course = COURSE_PATHS[catalogId];
    return {
      "@context": "https://schema.org",
      ...courseNode(course.title, course.description, `${SITE_URL}${pathname}`),
    };
  }

  for (const course of Object.values(COURSE_PATHS)) {
    if (pathname === course.hubPath) {
      return {
        "@context": "https://schema.org",
        ...courseNode(course.title, hubDescription(course), `${SITE_URL}${pathname}`),
      };
    }
    if (pathname === course.bookSmartPath || pathname === course.streetSmartPath) {
      const track: TrackId = pathname === course.bookSmartPath ? "book-smart" : "street-smart";
      const curriculum = getTrackCurriculum(course, track);
      const label = track === "book-smart" ? "Book Smart" : "Street Smart";
      const mode = track === "book-smart" ? "live lessons" : "recorded lectures";
      return {
        "@context": "https://schema.org",
        ...courseNode(
          `${course.title} ${label}`,
          `${label} is the ${mode} track of ${course.title} at Creditor Academy, with ${curriculum.lessons} lessons across ${curriculum.modules} modules.`,
          `${SITE_URL}${pathname}`
        ),
      };
    }

    if (!pathname.startsWith(`${course.hubPath}/`)) continue;
    const rest = pathname.slice(course.hubPath.length + 1).split("/");
    const moduleSlug = rest[0];
    const mod = getModuleBySlug(course, moduleSlug);
    if (!mod) return null;

    if (rest.length === 1) {
      return {
        "@context": "https://schema.org",
        ...courseNode(
          mod.title,
          `${mod.title} is a module in the ${course.title} program at Creditor Academy. It includes ${mod.totalLessons} lessons.`,
          `${SITE_URL}${pathname}`
        ),
      };
    }

    const track = rest[1];
    if (rest.length === 2 && (track === "book-smart" || track === "street-smart")) {
      const curriculum = getTrackCurriculum(course, track);
      const item = curriculum.items.find((entry) => entry.slug === moduleSlug);
      const label = track === "book-smart" ? "Book Smart" : "Street Smart";
      const mode = track === "book-smart" ? "live lessons" : "recorded lectures";
      const lessons = item?.lessons ?? mod.totalLessons;
      return {
        "@context": "https://schema.org",
        ...courseNode(
          `${mod.title} — ${label}`,
          `${label} covers ${mod.title} with ${mode} in the ${course.title} program at Creditor Academy. This track includes ${lessons} lessons.`,
          `${SITE_URL}${pathname}`
        ),
      };
    }
  }

  return null;
}

function courseNode(name: string, description: string, url: string) {
  return {
    "@type": "Course",
    name,
    description,
    url,
    inLanguage: "en",
    provider: { "@id": ORG_ID },
  };
}

function hubDescription(course: CoursePath): string {
  const lessons = course.modules.reduce((sum, mod) => sum + mod.totalLessons, 0);
  const summary = `${course.title} at Creditor Academy includes ${course.modules.length} modules and ${lessons} lessons.`;
  if (course.description.length >= 80) return course.description;
  return `${course.description} ${summary}`;
}

function titleCaseSlug(segment: string): string {
  return segment
    .split("-")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}
