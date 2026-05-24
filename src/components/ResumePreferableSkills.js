"use client";

import PreferableSkillCardsGrid from "@/components/PreferableSkillCardsGrid";

export default function ResumePreferableSkills() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="resume-preferable-skills-heading">
      <h2 id="resume-preferable-skills-heading" className="mb-8 text-center text-3xl font-bold text-gray-900">
        <span className="text-gray-900">Preferable for </span>
        <span className="text-orange-400">my Skills</span>
      </h2>
      <PreferableSkillCardsGrid className="rounded-2xl border border-orange-100 bg-white/80 py-10 shadow-inner" />
    </section>
  );
}
