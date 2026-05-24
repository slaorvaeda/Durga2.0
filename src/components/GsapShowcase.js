"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Module-level so ScrollTrigger useEffect can run with stable data (no TDZ). */
const SHOWCASE_ITEMS = [
    { text: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
    { text: "GitHub", icon: `${DEVICON}/github/github-original.svg` },
    { text: "Git", icon: `${DEVICON}/git/git-original.svg` },
    { text: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    { text: "Python", icon: `${DEVICON}/python/python-original.svg` },
    { text: "React", icon: `${DEVICON}/react/react-original.svg` },
    { text: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
    { text: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
    { text: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    { text: "Redux", icon: `${DEVICON}/redux/redux-original.svg` },
    { text: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    { text: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
    { text: "MySQL", icon: `${DEVICON}/mysql/mysql-original.svg` },
    { text: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
    { text: "Prisma", icon: `${DEVICON}/prisma/prisma-original.svg` },
    { text: "NestJS", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
    { text: "Express", icon: `${DEVICON}/express/express-original.svg` },
    { text: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
    { text: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
    { text: "Google Cloud", icon: `${DEVICON}/googlecloud/googlecloud-original.svg` },
    { text: "AWS", icon: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
    { text: "Firebase", icon: `${DEVICON}/firebase/firebase-plain.svg` },
    { text: "Vercel", icon: `${DEVICON}/vercel/vercel-original.svg` },
    { text: "Netlify", icon: `${DEVICON}/netlify/netlify-original.svg` },
    { text: "Nginx", icon: `${DEVICON}/nginx/nginx-original.svg` },
    { text: "Jenkins", icon: "/jenkins.png" },
    { text: "Postman", icon: `${DEVICON}/postman/postman-original.svg` },
    { text: "Figma", icon: `${DEVICON}/figma/figma-original.svg` },
    { text: "VS Code", icon: `${DEVICON}/vscode/vscode-original.svg` },
    { text: "Bash", icon: `${DEVICON}/bash/bash-original.svg` },
    { text: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
    { text: "npm", icon: `${DEVICON}/npm/npm-original-wordmark.svg` },
    { text: "Webpack", icon: `${DEVICON}/webpack/webpack-original.svg` },
    { text: "Jest", icon: `${DEVICON}/jest/jest-plain.svg` },
    { text: "Material UI", icon: `${DEVICON}/materialui/materialui-original.svg` },
    { text: "GSAP", icon: "https://durga-nayak.vercel.app/assets/gsap-W40nV5iE.svg" },
];

export default function GsapShowcase() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const section = containerRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        /** Move strip left so the end lines up with the viewport (negative translate). */
        const getMaxShift = () => {
            const overflow = track.scrollWidth - window.innerWidth;
            return -(Math.max(0, overflow) + 48);
        };

        /** More scroll pixels = longer, slower scrub through the full horizontal range. */
        const getScrollDistance = () => {
            const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
            return Math.max(window.innerHeight * 2.4, overflow * 2.5, 4000);
        };

        const ctx = gsap.context(() => {
            gsap.fromTo(
                track,
                { x: 0 },
                {
                    x: getMaxShift,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "center center",
                        end: () => "+=" + getScrollDistance(),
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                },
            );
        }, section);

        const onResize = () => ScrollTrigger.refresh();
        window.addEventListener("resize", onResize);
        const t = window.setTimeout(() => ScrollTrigger.refresh(), 600);

        return () => {
            window.removeEventListener("resize", onResize);
            window.clearTimeout(t);
            ctx.revert();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative mt-10 flex w-full min-h-[72vh] flex-col overflow-x-hidden rounded-3xl bg-gray-200/40"
        >
            <header className="relative z-10 w-full shrink-0 px-4 pb-6 pt-10 text-center md:px-8 md:pb-10 md:pt-12">
                <h2 className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-1 sm:gap-2 md:flex-row md:gap-4">
                    <span className="text-3xl font-extrabold tracking-tight text-orange-400 drop-shadow-lg sm:text-4xl md:text-5xl">
                        TECHNOLOGY
                    </span>
                    <span
                        className="hidden h-10 w-px shrink-0 bg-gradient-to-b from-orange-300/50 to-amber-200/80 md:block"
                        aria-hidden
                    />
                    <span className="text-3xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-4xl md:text-5xl">
                        SHOWCASE
                    </span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
                    Scroll the page while this section is pinned — the strip moves across {SHOWCASE_ITEMS.length} tools (extra
                    scroll distance so you can see everything without it racing past).
                </p>
            </header>

            <div className="relative flex w-full flex-1 items-center overflow-hidden pb-10 md:pb-14">
                <div
                    ref={trackRef}
                    className="flex w-max shrink-0 flex-nowrap items-center gap-10 px-6 sm:gap-14 sm:px-10 md:gap-16 md:px-12"
                >
                    {SHOWCASE_ITEMS.map((item, i) => {
                        const scale = Number((1 + Math.sin(i) * 0.15).toFixed(5));
                        const rotate = i % 2 === 0 ? 5 : -5;
                        return (
                        <div
                            key={`${item.text}-${i}`}
                            className="flex min-w-[200px] max-w-[280px] shrink-0 flex-col items-center justify-center rounded-[2rem] text-5xl transition-transform duration-500 group sm:min-w-[220px] sm:max-w-[300px]"
                            style={{
                                transform: `scale(${scale}) rotate(${rotate}deg)`,
                            }}
                        >
                            <span
                                className="mb-4 text-6xl drop-shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <Image width={140} height={140} src={item.icon} alt={item.text} className="h-36 w-36 sm:h-40 sm:w-40" />
                            </span>
                        </div>
                        );
                    })}
                </div>
            </div>
            <style>{`
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(.23,1,.32,1) both; }
      `}</style>
        </section>
    );
}
