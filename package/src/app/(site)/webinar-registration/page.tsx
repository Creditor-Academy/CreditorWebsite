import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";
import WebinarRegistrationClient from "./WebinarRegistrationClient";

// Staff-only registrations dashboard: keep it out of search results.
export const metadata: Metadata = {
  ...pageMetadata("/webinar-registration"),
  robots: { index: false, follow: false },
};

export default function WebinarRegistrationPage() {
  return <WebinarRegistrationClient />;
}
