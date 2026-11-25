import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getCoursePath,
  getModuleBySlug,
} from "@/app/components/learning-paths/data";
import type { TrackId } from "@/app/components/learning-paths/data";
import ModuleTrackDetail from "@/app/components/learning-paths/module-track-detail";
import CTA from "@/app/components/shared/cta";
import JsonLdScript from "@/app/components/structured-data/JsonLdScript";
import { moduleCourseJsonLd, moduleSeo } from "@/lib/courseSeo";

const course = getCoursePath("master-class");
const VALID_TRACKS: TrackId[] = ["book-smart", "street-smart"];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";

type Props = { params: Promise<{ module: string; track: string }> };

export async function generateStaticParams() {
  return course.modules.flatMap((m) =>
    VALID_TRACKS.map((t) => ({ module: m.slug, track: t }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: moduleSlug, track } = await params;
  const mod = getModuleBySlug(course, moduleSlug);
  if (!mod || !VALID_TRACKS.includes(track as TrackId)) return {};
  const seo = moduleSeo(course, mod, track as TrackId);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
  };
}

export default async function MasterClassModuleTrackPage({ params }: Props) {
  const { module: moduleSlug, track } = await params;
  const mod = getModuleBySlug(course, moduleSlug);
  if (!mod || !VALID_TRACKS.includes(track as TrackId)) notFound();

  return (
    <main>
      <JsonLdScript data={moduleCourseJsonLd(course, mod, track as TrackId)} />
      <ModuleTrackDetail
        course={course}
        moduleSlug={moduleSlug}
        track={track as TrackId}
      />
      <CTA />
    </main>
  );
}
