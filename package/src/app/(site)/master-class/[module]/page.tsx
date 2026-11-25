import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCoursePath, getModuleBySlug } from "@/app/components/learning-paths/data";
import ModuleDetail from "@/app/components/learning-paths/module-detail";
import CTA from "@/app/components/shared/cta";
import JsonLdScript from "@/app/components/structured-data/JsonLdScript";
import { moduleCourseJsonLd, moduleSeo } from "@/lib/courseSeo";

const course = getCoursePath("master-class");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://creditoracademy.com";

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return course.modules.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = getModuleBySlug(course, slug);
  if (!mod) return {};
  const seo = moduleSeo(course, mod);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
  };
}

export default async function MasterClassModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = getModuleBySlug(course, slug);
  if (!mod) notFound();

  return (
    <main>
      <JsonLdScript data={moduleCourseJsonLd(course, mod)} />
      <ModuleDetail course={course} moduleSlug={slug} />
      <CTA />
    </main>
  );
}
