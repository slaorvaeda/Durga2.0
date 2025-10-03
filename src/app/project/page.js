"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProjectAbout from "@/components/ProjectAbout";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectGallery from "@/components/ProjectGallery";

export default function Project() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <main className="min-h-screen font-sans">
      <ProjectShowcase />
      <ProjectAbout />
      <ProjectDetails />
      <ProjectGallery />
      {/* Personal Project Intro */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold mb-4 text-orange-400">My Projects</h1>
        <p className="text-lg text-gray-700 mb-8">A showcase of my favorite work, blending creativity and strategy to solve real-world problems. Each project is a story of collaboration and innovation.</p>
      </section>

     

      {/* Project Process */}
  <section className="max-w-4xl mx-auto py-8 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6 text-orange-400 text-center">How I Approach Projects</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            { step: "Research", desc: "Understanding the problem and user needs." },
            { step: "Design", desc: "Ideation, wireframing, and prototyping." },
            { step: "Launch", desc: "Delivering and supporting the final product." },
          ].map((item, i) => (
            <div key={item.step} className="bg-orange-100 rounded-xl p-6 shadow flex flex-col items-center gap-2 w-full md:w-1/3">
              <span className="text-2xl font-bold text-orange-400">{i+1}</span>
              <h3 className="font-semibold text-gray-900">{item.step}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
  <section className="max-w-4xl mx-auto py-8 px-4 text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-orange-400 mb-2">Awards & Recognition</h2>
        <ul className="list-disc list-inside text-gray-700 inline-block text-left">
          <li>Best Product Designer 2023</li>
          <li>Database Design 2024</li>
          <li>Equinox coder 2024</li>
          <li>Techcarnivasl semi-finalist 2025</li>
        </ul>
      </section>

      {/* Contact CTA */}
  <section className="max-w-4xl mx-auto py-12 px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Have a project idea?</h2>
        <p className="text-gray-700 mb-6">Let's bring your vision to life. Reach out to discuss your project and start collaborating!</p>
        <a href="/contact" className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold shadow hover:bg-orange-500 transition">Contact Me</a>
      </section>
    </main>
  );
}
