import { courseJsonLdForPath } from "@/lib/structuredData";
import { JsonLd } from "./JsonLd";

export function CourseSchema({ path }: { path: string }) {
  const data = courseJsonLdForPath(path);
  if (!data) return null;
  return <JsonLd data={data} />;
}
