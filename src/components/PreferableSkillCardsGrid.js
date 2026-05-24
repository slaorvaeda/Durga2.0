"use client";

import { useMemo, useState } from "react";
import SkillCard from "@/components/SkillCard";
import { FaDocker, FaGitAlt, FaGithubSquare, FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import {
  SiAmazonec2,
  SiAnthropic,
  SiExpress,
  SiFastapi,
  SiFastify,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiGraphql,
  SiHuggingface,
  SiJest,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiOpenai,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiSequelize,
  SiSocketdotio,
  SiTrpc,
  SiBun,
  SiMilvus,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { TbBrain, TbStack2, TbVector } from "react-icons/tb";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "tools", label: "Tools" },
  { id: "ai", label: "AI" },
];

/**
 * Original “Preferable” cards + skills that also appear on your resume.
 * `category` drives the animated filters above the grid.
 */
const PREFERABLE_SKILLS = [
  { name: "React", level: 90, bg: "text-sky-300", Icon: FaReact, category: "frontend" },
  { name: "Node.js", level: 80, bg: "text-green-300", Icon: FaNode, category: "backend" },
  { name: "Next.js", level: 85, bg: "text-black", Icon: RiNextjsFill, category: "frontend" },
  { name: "Tailwind CSS", level: 88, bg: "text-blue-300", Icon: RiTailwindCssFill, category: "frontend" },
  { name: "TypeScript", level: 75, bg: "text-blue-800", Icon: SiTypescript, category: "frontend" },
  { name: "Python", level: 90, bg: "text-black", Icon: FaPython, category: "backend" },
  { name: "Docker", level: 60, bg: "text-sky-500", Icon: FaDocker, category: "cloud" },
  { name: "Kubernetes", level: 55, bg: "text-blue-700", Icon: SiKubernetes, category: "cloud" },
  { name: "GitHub", level: 88, bg: "text-black", Icon: FaGithubSquare, category: "tools" },
  { name: "Vercel", level: 75, bg: "text-black", Icon: RiVercelFill, category: "cloud" },
  { name: "Firebase", level: 75, bg: "text-yellow-500", Icon: RiFirebaseFill, category: "cloud" },
  { name: "NestJS", level: 78, bg: "text-red-600", Icon: SiNestjs, category: "backend" },
  { name: "Express.js", level: 82, bg: "text-gray-800", Icon: SiExpress, category: "backend" },
  { name: "GraphQL", level: 72, bg: "text-pink-600", Icon: SiGraphql, category: "backend" },
  { name: "tRPC", level: 71, bg: "text-blue-800", Icon: SiTrpc, category: "backend" },
  { name: "Socket.io", level: 70, bg: "text-gray-700", Icon: SiSocketdotio, category: "backend" },
  { name: "Fastify", level: 69, bg: "text-gray-900", Icon: SiFastify, category: "backend" },
  { name: "Mongoose", level: 78, bg: "text-green-700", Icon: SiMongoose, category: "backend" },
  { name: "Sequelize", level: 68, bg: "text-blue-800", Icon: SiSequelize, category: "backend" },
  { name: "Passport (auth)", level: 74, bg: "text-green-800", Icon: SiPassport, category: "backend" },
  { name: "FastAPI", level: 68, bg: "text-teal-700", Icon: SiFastapi, category: "backend" },
  { name: "Bun", level: 64, bg: "text-neutral-800", Icon: SiBun, category: "backend" },
  { name: "MongoDB", level: 85, bg: "text-green-600", Icon: SiMongodb, category: "database" },
  { name: "MySQL", level: 78, bg: "text-blue-600", Icon: SiMysql, category: "database" },
  { name: "PostgreSQL", level: 76, bg: "text-indigo-700", Icon: SiPostgresql, category: "database" },
  { name: "Prisma", level: 74, bg: "text-teal-600", Icon: SiPrisma, category: "database" },
  { name: "Redis", level: 72, bg: "text-red-500", Icon: SiRedis, category: "database" },
  { name: "TanStack Query", level: 78, bg: "text-sky-600", Icon: SiReactquery, category: "frontend" },
  { name: "Zustand", level: 70, bg: "text-amber-600", Icon: TbStack2, category: "frontend" },
  { name: "Redux", level: 76, bg: "text-purple-600", Icon: SiRedux, category: "frontend" },
  { name: "Jest", level: 70, bg: "text-pink-700", Icon: SiJest, category: "tools" },
  { name: "Git", level: 88, bg: "text-orange-600", Icon: FaGitAlt, category: "tools" },
  { name: "GCP", level: 72, bg: "text-blue-500", Icon: SiGooglecloud, category: "cloud" },
  { name: "AWS (EC2)", level: 70, bg: "text-orange-500", Icon: SiAmazonec2, category: "cloud" },
  { name: "GitHub Actions", level: 68, bg: "text-gray-800", Icon: SiGithubactions, category: "cloud" },
  { name: "OpenAPI", level: 68, bg: "text-green-700", Icon: SiSwagger, category: "tools" },
  { name: "LLM / AI APIs", level: 68, bg: "text-emerald-700", Icon: SiOpenai, category: "ai" },
  { name: "RAG & retrieval", level: 72, bg: "text-violet-600", Icon: TbBrain, category: "ai" },
  { name: "LangChain", level: 70, bg: "text-emerald-600", Icon: SiLangchain, category: "ai" },
  { name: "Google Gemini", level: 68, bg: "text-blue-600", Icon: SiGooglegemini, category: "ai" },
  { name: "Anthropic (Claude)", level: 66, bg: "text-amber-800", Icon: SiAnthropic, category: "ai" },
  { name: "Hugging Face", level: 64, bg: "text-yellow-600", Icon: SiHuggingface, category: "ai" },
  { name: "Embeddings & vectors", level: 70, bg: "text-cyan-700", Icon: TbVector, category: "ai" },
  { name: "Vector DBs", level: 67, bg: "text-lime-700", Icon: SiMilvus, category: "ai" },
];

export default function PreferableSkillCardsGrid({ className = "" }) {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return PREFERABLE_SKILLS;
    return PREFERABLE_SKILLS.filter((s) => s.category === active);
  }, [active]);

  return (
    <div className="flex flex-col gap-8">
      {/* Animated filter pills */}
      <div
        className="flex flex-wrap items-center justify-center gap-2 px-2"
        role="tablist"
        aria-label="Filter skills by category"
      >
        {FILTERS.map((f) => {
          const isOn = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={isOn}
              onClick={() => setActive(f.id)}
              className={[
                "relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-300 ease-out",
                "focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
                isOn
                  ? "preferable-filter-active scale-105 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                  : "border border-gray-200 bg-white/95 text-gray-600 shadow-sm hover:scale-[1.03] hover:border-orange-200 hover:text-orange-600 active:scale-95",
              ].join(" ")}
            >
              <span className="relative z-10">{f.label}</span>
              {isOn ? (
                <span
                  className="pointer-events-none absolute inset-0 z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[preferable-shimmer_1.8s_ease-in-out_infinite]"
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className={`flex flex-wrap justify-center gap-8 ${className}`.trim()}>
        {filtered.map(({ name, level, bg, Icon }, index) => (
          <div
            key={`${active}-${name}`}
            className="preferable-skill-card"
            style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
          >
            <SkillCard name={name} icon={<Icon className="text-2xl" />} level={level} bg={bg} />
          </div>
        ))}
      </div>
    </div>
  );
}
