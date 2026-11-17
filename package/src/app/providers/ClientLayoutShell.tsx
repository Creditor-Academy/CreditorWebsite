"use client";
import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { MetaPixelPageView } from "../components/analytics/MetaPixelPageView";
import FloatingMiniChatbot from "../components/chatbot/FloatingMiniChatbot";

const CHATBOT_ALLOWED_EXACT = ["/", "/about-us", "/services", "/masterclass-membership"];

/** Chatbot only on homepage, about us, services hub, course catalog, and website service. */
function isChatbotVisible(pathname: string) {
  const path = pathname.toLowerCase().replace(/\/$/, "") || "/";

  if (CHATBOT_ALLOWED_EXACT.includes(path)) {
    return true;
  }

  if (path.startsWith("/services/course-cataloges")) {
    return true;
  }

  if (path === "/services/website-service") {
    return true;
  }

  return false;
}

export function ClientLayoutShell({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const excludedRoutes = [
    "https://creditor-academy.lmsathena.com/login",
    "/forgot-password",
    "/documentation",
    "/become-wonder",
    "/operate-wonder",
    "/private-wonder",
    "/projects-wonder",
    "/webinar",
  ];
  const hideHeader =
    excludedRoutes.includes(pathname) ||
    pathname.startsWith("/services/tradeline-exchange");
  const hideFooter =
    excludedRoutes.includes(pathname) ||
    pathname === "/signup" ||
    pathname.startsWith("/services/tradeline-exchange");

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <div>
          <MetaPixelPageView />
          {!hideHeader && <Header />}
          {children}
          {!hideFooter && <Footer />}

          {/* Video chatbot — allowed pages only */}
          {isChatbotVisible(pathname) && <FloatingMiniChatbot />}
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}
