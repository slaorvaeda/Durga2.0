"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import { useState, useEffect } from "react";
import ProjectIntro from "@/components/ProjectIntro";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const [pagesPrefetched, setPagesPrefetched] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Prefetch all pages after home page loads
  useEffect(() => {
    if (pathname === "/" && !pagesPrefetched) {
      // Wait for home page to fully render, then prefetch other pages
      const timer = setTimeout(() => {
        const pagesToPrefetch = ["/about", "/contact", "/project", "/resume", "/service"];
        pagesToPrefetch.forEach((page) => {
          router.prefetch(page);
        });
        setPagesPrefetched(true);
      }, 2000); // Wait 2 seconds after home page loads

      return () => clearTimeout(timer);
    }
  }, [pathname, pagesPrefetched, router]);

  let pageTitle = "Dnayak - Home";
  if (pathname) {
    if (pathname === "/") pageTitle = "Dnayak - Home";
    else if (pathname.includes("about")) pageTitle = "Dnayak - About";
    else if (pathname.includes("contact")) pageTitle = "Dnayak - Contact";
    else if (pathname.includes("project")) pageTitle = "Dnayak - Project";
    else if (pathname.includes("resume")) pageTitle = "Dnayak - Resume";
    else if (pathname.includes("service")) pageTitle = "Dnayak - Service";
    else pageTitle = `Dnayak - ${pathname.replace("/", "").replace(/-/g, " ")}`;
  }
  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/1.png" type="image/png" />
        {/* DNS prefetch for Spline to improve loading */}
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        {/* Prefetch pages for faster navigation */}
        <link rel="prefetch" href="/about" as="document" />
        <link rel="prefetch" href="/contact" as="document" />
        <link rel="prefetch" href="/project" as="document" />
        <link rel="prefetch" href="/resume" as="document" />
        <link rel="prefetch" href="/service" as="document" />
      </head>
      <body className=" min-h-screen flex flex-col relative ">
        {/* Animated Intro Overlay as Component */}
        {showIntro && <ProjectIntro onFinish={() => setShowIntro(false)} />}
        {/* Main Content */}
        <div className={showIntro ? "pointer-events-none blur-sm" : ""}>
          <Navbar />
          <main className="flex-grow min-h-screen">
            {children}
          </main>
          <MobileNavbar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
