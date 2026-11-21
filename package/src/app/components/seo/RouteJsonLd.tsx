"use client";

import { usePathname } from "next/navigation";
import { breadcrumbJsonLd } from "@/lib/structuredData";
import { JsonLd } from "./JsonLd";

/** BreadcrumbList for the current URL. Course schema is rendered by the course templates. */
export function RouteJsonLd() {
  const pathname = usePathname() || "/";
  const blocks = [breadcrumbJsonLd(pathname)].filter(Boolean);

  return (
    <>
      {blocks.map((data, index) => (
        <JsonLd key={index} data={data} />
      ))}
    </>
  );
}
