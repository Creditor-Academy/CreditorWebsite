import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageSeo";

// Confirmation page shows the visitor's name and personal join link.
// The page is a client component, so the robots directive lives here.
export const metadata: Metadata = {
  ...pageMetadata("/event-registration"),
  robots: { index: false, follow: false },
};

export default function EventRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return children as React.ReactElement;
}
