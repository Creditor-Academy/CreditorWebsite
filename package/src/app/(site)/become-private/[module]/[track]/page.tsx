import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getCoursePath,
  getModuleBySlug,
} from "@/app/components/learning-paths/data";
import type { TrackId } from "@/app/components/learning-paths/data";
import ModuleTrackDetail from "@/app/components/learning-paths/module-track-detail";
import CTA from "@/app/components/shared/cta";
import { hasPageSeo, pageMetadata } from "@/lib/pageSeo";

const course = getCoursePath("become-private");
const VALID_TRACKS: TrackId[] = ["book-smart", "street-smart"];

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
  const path = `/become-private/${moduleSlug}/${track}`;
  if (hasPageSeo(path)) return pageMetadata(path);
  const trackLabel = track === "book-smart" ? "Book Smart" : "Street Smart";
  const mode = track === "book-smart" ? "live lessons" : "recorded lectures";
  return pageMetadata(path, {
    title: `${mod.title} ${trackLabel}`,
    description: `Study ${mod.title} in the ${trackLabel} track of Become Private at Creditor Academy. ${trackLabel} is taught as ${mode}. The module has ${mod.totalLessons} lessons.`,
  });
}

export default async function BecomePrivateModuleTrackPage({ params }: Props) {
  const { module: moduleSlug, track } = await params;
  const mod = getModuleBySlug(course, moduleSlug);
  if (!mod || !VALID_TRACKS.includes(track as TrackId)) notFound();

  return (
    <main>
      <ModuleTrackDetail
        course={course}
        moduleSlug={moduleSlug}
        track={track as TrackId}
      />
      <CTA />
    </main>
  );
}
