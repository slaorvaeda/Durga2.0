"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TESTIMONIALS = [
  {
    id: "lirante",
    name: "Jayesh Patil",
    role: "CEO, Lirante",
    rating: "5.0",
    quote:
      "Durga rebuilt our ordering flow, added live ops dashboards, and coached our internal team so we could keep iterating without him. Revenue per courier jumped 41% the month we launched.",
    initials: "JP",
    accent: "from-orange-500 to-amber-600",
  },
  {
    id: "retail-ops",
    name: "Vikram Desai",
    role: "COO, multi-hub retail chain",
    rating: "5.0",
    quote:
      "We brought him in when our stock and dispatch views were all spreadsheets. He delivered a single dashboard the hubs actually use daily—alerts, low-stock rules, and exports our finance team asked for in week two. Adoption was fast because the UI stayed simple.",
    initials: "VD",
    accent: "from-slate-600 to-slate-800",
  },
  {
    id: "freelance",
    name: "Elena Morales",
    role: "Founder, boutique e-commerce brand",
    rating: "5.0",
    quote:
      "Clear estimates, weekly demos, and no surprises on scope. The storefront and admin panel he shipped were responsive, fast, and easy for our non-technical staff to update. We went live before a busy season without a single payment-integration fire drill.",
    initials: "EM",
    accent: "from-teal-600 to-cyan-700",
  },
];

function Avatar({ initials, accent }) {
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-md ${accent}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <section className="mt-12 rounded-3xl text-black" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {["Full stack", "Dashboards", "MERN", "Next.js", "APIs"].map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-8 flex items-center justify-center">
          <h2 className="text-center text-3xl font-bold align-middle">
            Lirante — food delivery &amp; ops
            <span className="ml-2 inline-flex h-10 w-10 -rotate-45 items-center justify-center rounded-full bg-orange-400 text-lg font-bold text-white" aria-hidden>
              →
            </span>
          </h2>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
          Case study: a full-stack delivery experience with ordering, tracking, and operator tools. Below is feedback from that launch plus two other recent collaborations—each card is a different person and project, not copy-pasted duplicates.
        </p>
      </div>

      <div className="flex min-h-[min(80vh,56rem)] flex-col items-center justify-center rounded-3xl bg-[url('/service-bg.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply px-4 py-12 bg-[#535252b5]">
        <div className="mb-8 text-center">
          <h3 className="text-5xl font-bold text-amber-50">
            Testimonials That
            <br />
            <span className="text-orange-400">Speak to My Results</span>
          </h3>
          <p className="m-auto my-4 w-11/12 max-w-3xl text-gray-300 md:w-3/4">
            Short, specific notes from people who depended on the software day to day—shipping flows, dashboards, and handoffs so their teams could own what came next.
          </p>
        </div>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="relative flex flex-col gap-4 rounded-2xl bg-black/60 p-6 shadow-lg ring-1 ring-white/10"
            >
              <span className="absolute left-6 top-6 text-5xl text-gray-400 opacity-30 select-none" aria-hidden>
                “
              </span>
              <div className="mb-2 flex items-center gap-3">
                <Avatar initials={t.initials} accent={t.accent} />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xl text-orange-400" aria-label={`${t.rating} out of 5`}>
                  ★★★★★
                </span>
                <span className="font-bold text-white">{t.rating}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
