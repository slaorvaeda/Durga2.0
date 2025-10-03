"use client";

import SkillCard from "../components/SkillCard";
import Testimonials from "../components/Testimonials";
import ProjectIdeaDiscuss from "../components/ProjectIdeaDiscuss";
import BlogPosts from "../components/BlogPosts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import Service from "./service/page";
import WorkExperience from "../components/WorkExperience";
import HireMe from "../components/HireMe";
import PortfolioShowcase from "../components/PortfolioShowcase";
import Services from "@/components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import GsapShowcase from "../components/GsapShowcase";
import { FaDocker, FaGithubSquare, FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiKubernetes, SiTypescript } from "react-icons/si";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 2000 });
  }, []);

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
            <span className="text-gray-900">Prefeable for </span>
            <span className="text-orange-400">my Skils</span>
          </h2>
        <SkillCard name="React" icon={<FaReact />} level={90} bg="text-sky-300"/>
        <SkillCard name="Node.js" icon={<FaNode />} level={80} bg="text-green-300"/>
        <SkillCard name="Next.js" icon={<RiNextjsFill />} level={85} bg="text-black"/>
        <SkillCard name="Tailwind CSS" icon={<RiTailwindCssFill />} level={88} bg="text-blue-300"/>
        <SkillCard name="TypeScript" icon={<SiTypescript />} level={75} bg="text-blue-800"/>

        <SkillCard name="Python" icon={<FaPython />} level={90} bg="text-black"/>
        <SkillCard name="Docker" icon={<FaDocker />} level={60} bg="text-sky-500"/>
        <SkillCard name="Kubernetes" icon={<SiKubernetes />} level={55} bg="text-blue-700"/>
        <SkillCard name="GitHub" icon={<FaGithubSquare />} level={88} bg="text-black"/>
        <SkillCard name="Vercel" icon={<RiVercelFill />} level={75} bg="text-black"/>
        <SkillCard name="Firebase" icon={<RiFirebaseFill />} level={75} bg="text-yellow-500"/>
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
