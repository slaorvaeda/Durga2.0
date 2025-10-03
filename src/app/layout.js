"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";
import { useState } from "react";
import ProjectIntro from "@/components/ProjectIntro";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();
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
