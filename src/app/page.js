"use client";

import PreferableSkillCardsGrid from "@/components/PreferableSkillCardsGrid";
import Testimonials from "../components/Testimonials";
import ProjectIdeaDiscuss from "../components/ProjectIdeaDiscuss";
import BlogPosts from "../components/BlogPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Service from "./service/page";
import WorkExperience from "../components/WorkExperience";
import HireMe from "../components/HireMe";
import PortfolioShowcase from "../components/PortfolioShowcase";
import Services from "@/components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import GsapShowcase from "../components/GsapShowcase";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);

  // Prefetch all pages after home page renders for faster navigation
  useEffect(() => {
    // Wait for page to fully load, then prefetch other pages
    const prefetchPages = () => {
      const pages = ["/about", "/contact", "/project", "/resume", "/service"];
      pages.forEach((page) => {
        router.prefetch(page);
      });
    };

    // Prefetch after initial render and animations
    const timer = setTimeout(prefetchPages, 1500);
    
    // Also prefetch on idle
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      requestIdleCallback(prefetchPages, { timeout: 2000 });
    }

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-white text-white font-sans">
      {/* Hero Section */}
      <div data-aos="fade-up">
        <Hero ref={heroRef} />
      </div>

    

      {/* Services Section */}
      <div data-aos="fade-up">
        <Services servicesRef={servicesRef} />
      </div>
      <div data-aos="fade-up">
        <WorkExperience />
      </div>
      <div data-aos="fade-up">
        <HireMe />
      </div>
        {/* Skills Section */}
      <div className="w-9/10 m-auto bg-black/10 flex flex-wrap gap-8 justify-center py-12 rounded-2xl mb-4 border-b-4 border-gray-300" data-aos="fade-up">
      <h2 className="text-4xl font-bold w-full px-16">
            <span className="text-gray-900">Preferable for </span>
            <span className="text-orange-400">my Skills</span>
          </h2>
        <PreferableSkillCardsGrid className="px-2 py-4" />
      </div>
      <div data-aos="fade-up">
        <PortfolioShowcase />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <GsapShowcase />
      <div data-aos="fade-up">
        <ProjectIdeaDiscuss />
      </div>
      <div data-aos="fade-up">
        <BlogPosts />
      </div>
    </main>
  );
}
