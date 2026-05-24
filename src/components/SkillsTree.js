"use client";

import { useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const leftSkills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "NEXT JS",
  "ZUSTAND",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "DOM",
  "UNIT TEST",
  "PERFORMANCE OPTIMIZE",
  "SSR",
];

const rightSkills = [
  "NODE",
  "BUN",
  "EXPRESS",
  "REST API",
  "VALIDATION",
  "JWT/OAUTH",
  "SQL",
  "POSTGRES",
  "SUPABASE",
  "DB MODELING",
  "STRIPE PAYMENTS",
];

const bottomSkills = [
  "JAVASCRIPT",
  "TYPESCRIPT",
  "PYTHON",
  "AI / LLMs & RAG",
  "REACT NATIVE",
  "GIT",
  "GITHUB",
  "LINUX",
  "WORDPRESS",
  "VPS",
  "VERCEL",
  "UX/UI DESIGN",
  "REQUIREMENTS ANALYSIS",
  "PRODUCT DESIGN",
  "FIGMA",
  "WIREFRAME",
];

const viewport = { once: true, amount: 0.12, margin: "0px 0px -10% 0px" };

const columnVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.038, delayChildren: 0.06 },
  },
};

const pillVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 22,
    scale: 0.9,
    filter: "blur(8px)",
    transition: { delay: Math.min(i, 10) * 0.015 },
  }),
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 26,
      mass: 0.55,
      delay: Math.min(i, 14) * 0.025,
    },
  }),
};

function AmbientOrbs({ reduced }) {
  if (reduced) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
      >
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl" />
      </div>
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-orange-300/25 blur-3xl"
        animate={{ y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -16, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-48 w-[min(90vw,480px)] -translate-x-1/2 rounded-full bg-amber-200/15 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function SkillPill({ skill, tone, custom }) {
  const reduce = useReducedMotion();
  const [shine, setShine] = useState(false);
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-7, 7]);
  const springX = useSpring(rotateX, { stiffness: 320, damping: 28, mass: 0.35 });
  const springY = useSpring(rotateY, { stiffness: 320, damping: 28, mass: 0.35 });

  const toneClass =
    tone === "mint"
      ? "bg-[#e7f7f1] ring-emerald-500/10 hover:ring-emerald-400/35"
      : "bg-[#e7eafc] ring-indigo-500/10 hover:ring-indigo-400/35";

  function onMove(e) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.span
      ref={ref}
      variants={pillVariants}
      custom={custom}
      onMouseMove={onMove}
      onMouseLeave={() => {
        onLeave();
        setShine(false);
      }}
      onHoverStart={() => {
        if (!reduce) setShine(true);
      }}
      onHoverEnd={() => setShine(false)}
      style={
        reduce
          ? undefined
          : {
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 760,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={
        reduce
          ? { y: -2, scale: 1.03 }
          : {
              y: -5,
              scale: 1.06,
              boxShadow: "0 16px 40px -12px rgba(251, 146, 60, 0.22)",
              transition: { type: "spring", stiffness: 420, damping: 20 },
            }
      }
      whileTap={{ scale: 0.97 }}
      className={`${toneClass} relative isolate cursor-default overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-md ring-1 ring-black/[0.06] transition-shadow duration-300 will-change-transform`}
    >
      {!reduce ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={false}
          animate={shine ? { x: "130%", skewX: -10 } : { x: "-130%", skewX: -10 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}
      <span className="relative z-[1]">{skill}</span>
    </motion.span>
  );
}

function ColumnHeading({ title, subtitle }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      <div className="relative inline-block">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">{title}</p>
        <motion.span
          aria-hidden
          className="absolute -bottom-1 left-0 right-0 mx-auto h-px max-w-[4.5rem] origin-center rounded-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      {subtitle ? <p className="mt-2 max-w-xs text-xs leading-relaxed text-gray-500">{subtitle}</p> : null}
    </motion.div>
  );
}

function SkillColumn({ title, subtitle, skills, tone, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ type: "spring", stiffness: 240, damping: 28, delay }}
      className="flex max-w-lg flex-col items-center gap-4"
    >
      <ColumnHeading title={title} subtitle={subtitle} />
      <motion.div
        className="flex flex-wrap justify-center gap-2.5 md:gap-3"
        variants={columnVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        {skills.map((skill, i) => (
          <SkillPill key={skill} skill={skill} tone={tone} custom={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function SkillsTree() {
  const reduce = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about-skills"
        className="relative flex w-full flex-col items-center overflow-hidden py-16 md:py-24"
        aria-labelledby="about-skills-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(251,146,60,0.14),transparent_58%)]" />
        <AmbientOrbs reduced={reduce} />

        <motion.div
          className="relative z-[1] mb-12 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <motion.div
            id="about-skills-heading"
            className="relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white px-9 py-3 text-2xl font-bold tracking-tight text-gray-900 shadow-xl dark:border-amber-100/80 dark:bg-gray-950 dark:text-amber-50"
            whileHover={
              reduce
                ? { scale: 1.01 }
                : {
                    scale: 1.03,
                    boxShadow: "0 20px 50px -18px rgba(251, 146, 60, 0.35)",
                    transition: { type: "spring", stiffness: 400, damping: 18 },
                  }
            }
          >
            {!reduce ? (
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/15 to-orange-400/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              />
            ) : null}
            <span className="relative z-[1]">MY SKILLS</span>
          </motion.div>

          <div className="mt-3 flex w-full flex-col items-center">
            <motion.div
              className="h-10 w-1 origin-top rounded-full bg-gradient-to-b from-gray-900 via-orange-400/70 to-gray-400 dark:from-amber-100 dark:via-orange-300/50 dark:to-amber-700/40"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="flex w-full max-w-lg items-center justify-center gap-0">
              <motion.div
                className="h-1 flex-1 origin-right rounded-full bg-gradient-to-l from-gray-900 to-transparent dark:from-amber-100"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="mx-1 h-2 w-2 shrink-0 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.7)]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ type: "spring", stiffness: 400, damping: 16, delay: 0.35 }}
              />
              <motion.div
                className="h-1 flex-1 origin-left rounded-full bg-gradient-to-r from-gray-900 to-transparent dark:from-amber-100"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>

        <div className="relative z-[1] mb-14 flex w-full max-w-5xl flex-col items-stretch justify-center gap-14 px-4 md:flex-row md:gap-12 lg:gap-20">
          <SkillColumn
            title="Frontend"
            subtitle="Interfaces, state, and shipping fast in the browser."
            skills={leftSkills}
            tone="indigo"
            delay={0}
          />
          <SkillColumn
            title="Backend & data"
            subtitle="APIs, auth, persistence, and payments."
            skills={rightSkills}
            tone="mint"
            delay={0.08}
          />
        </div>

        <motion.div
          className="relative z-[1] flex max-w-4xl flex-col items-center gap-4 px-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 240, damping: 28, delay: 0.08 }}
        >
          <ColumnHeading
            title="Stack & craft"
            subtitle="Languages, delivery, and product-minded design."
          />
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 md:gap-3"
            variants={columnVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {bottomSkills.map((skill, i) => (
              <SkillPill key={skill} skill={skill} tone="indigo" custom={i} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
