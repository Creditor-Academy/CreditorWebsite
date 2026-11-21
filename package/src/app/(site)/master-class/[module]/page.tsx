import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCoursePath, getModuleBySlug } from "@/app/components/learning-paths/data";
import ModuleDetail from "@/app/components/learning-paths/module-detail";
import CTA from "@/app/components/shared/cta";
import { hasPageSeo, pageMetadata } from "@/lib/pageSeo";

const course = getCoursePath("master-class");

type Props = { params: Promise<{ module: string }> };

export async function generateStaticParams() {
  return course.modules.map((m) => ({ module: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { module: slug } = await params;
  const mod = getModuleBySlug(course, slug);
  if (!mod) return {};
  const path = `/master-class/${slug}`;
  if (hasPageSeo(path)) return pageMetadata(path);
  return pageMetadata(path, {
    title: `${mod.title} | Master Class`,
    description: `${mod.title} is part of the Master Class program at Creditor Academy, with ${mod.totalLessons} lessons. Choose Book Smart live lessons or Street Smart recorded lectures.`,
  });
}

export default async function MasterClassModulePage({ params }: Props) {
  const { module: slug } = await params;
  const mod = getModuleBySlug(course, slug);
  if (!mod) notFound();

  return (
    <main>
      <ModuleDetail course={course} moduleSlug={slug} />
      <CTA />
    </main>
  );
}
