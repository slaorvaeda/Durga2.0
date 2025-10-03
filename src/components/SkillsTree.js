"use client";

const leftSkills = [
  "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT JS",
  "ZUSTAND", "TAILWIND CSS", "FRAMER MOTION",
  "DOM", "UNIT TEST", "PERFORMANCE OPTIMIZE", "SSR"
];
const rightSkills = [
  "NODE", "BUN", "EXPRESS", "REST API",
  "VALIDATION", "JWT/OAUTH", "SQL", "POSTGRES",
  "SUPABASE", "DB MODELING", "STRIPE PAYMENTS"
];
const bottomSkills = [
  "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "C#",
  "REACT NATIVE", "GIT", "GITHUB", "LINUX", "WORDPRESS", "VPS", "VERCEL",
  "UX/UI DESIGN", "REQUIREMENTS ANALYSIS", "PRODUCT DESIGN", "FIGMA", "WIREFRAME"
];

export default function SkillsTree() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="flex flex-col items-center mb-8">
        <div data-aos="zoom-in" className="border-2 border-black rounded-lg px-8 py-2 text-2xl font-bold bg-white shadow dark:text-black">MY SKILLS</div>
        <div className="flex w-full justify-center items-center mt-2">
          <div className="h-8 w-1 bg-black dark:bg-amber-50" />
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="h-1 w-32 bg-black dark:bg-amber-50" />
          <div className="h-1 w-32 bg-black dark:bg-amber-50 ml-32" />
        </div>
      </div>
      <div className="flex w-full justify-center gap-16 mb-8">
        <div data-aos="fade-right" className="flex flex-wrap gap-3 max-w-lg justify-center">
          {leftSkills.map(skill => (
            <span key={skill} className="bg-[#e7eafc] text-gray-700 px-4 py-2 rounded-md shadow text-sm font-semibold">{skill}</span>
          ))}
        </div>
        <div data-aos="fade-left" className="flex flex-wrap gap-3 max-w-lg justify-center">
          {rightSkills.map(skill => (
            <span key={skill} className="bg-[#e7f7f1] text-gray-700 px-4 py-2 rounded-md shadow text-sm font-semibold">{skill}</span>
          ))}
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-wrap gap-3 max-w-4xl justify-center mt-4">
        {bottomSkills.map(skill => (
          <span key={skill} className="bg-[#e7eafc] text-gray-700 px-4 py-2 rounded-md shadow text-sm font-semibold">{skill}</span>
        ))}
      </div>
    </div>
  );
}
