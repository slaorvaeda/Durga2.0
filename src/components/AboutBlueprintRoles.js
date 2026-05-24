"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Courier_Prime, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/** Rotating roles — same idea as the reference HTML engine, tailored to your about page */
const WORDS = ["developer", "designer", "builder", "solver", "mentor"];

const MAX_CELLS = 14;

/** Shared letter scale — measurer must match exactly */
const LETTER_FONT_SIZE = "clamp(4.75rem, 14vw, 9.5rem)";

function coordLabel(i, len) {
  if (len < 2) return null;
  if (i === 0) return "0.4X";
  if (i === 1) return "1Y";
  if (i === Math.floor(len / 2) + 1) return "1.25Y";
  if (i === len - 2) return "0.59Y";
  if (i === len - 1) return "8.59Y";
  return null;
}

function LetterCell({ char, width, index, total, reduce, wordKey, dashScrollY, glyphHeight, fontFamily }) {
  const label = coordLabel(index, total);
  const showLines = width > 0;

  const vLineStyle =
    !reduce && dashScrollY
      ? {
          backgroundPositionY: dashScrollY,
        }
      : undefined;

  return (
    <motion.div
      className="relative inline-flex items-baseline justify-center overflow-visible"
      initial={false}
      animate={{
        width: width > 0 ? width : 0,
        opacity: width > 0 ? 1 : 0,
        marginRight: width > 0 ? 0 : 0,
      }}
      transition={{
        width: { type: "spring", stiffness: 260, damping: 32, mass: 0.6 },
        opacity: { duration: 0.35 },
      }}
      style={{ minWidth: 0 }}
    >
      {showLines ? (
        <>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bottom-[-200px] left-0 top-[-200px] w-px bg-[length:1px_6px] bg-[linear-gradient(to_bottom,rgba(234,88,12,0.45)_2px,transparent_2px)]"
            style={vLineStyle}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute bottom-[-200px] right-0 top-[-200px] w-px bg-[length:1px_6px] bg-[linear-gradient(to_bottom,rgba(234,88,12,0.45)_2px,transparent_2px)]"
            style={vLineStyle}
          />
        </>
      ) : null}

      {char && width > 0 && glyphHeight > 0 ? (
        <motion.svg
          key={`${wordKey}-${index}`}
          width={width}
          height={glyphHeight}
          viewBox={`0 0 ${width} ${glyphHeight}`}
          className="select-none overflow-visible"
          role="img"
          aria-label={char}
          initial={{ opacity: 0, y: 14, scale: 0.92, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 26,
            delay: reduce ? 0 : index * 0.04,
          }}
        >
          <text
            x={width / 2}
            y={glyphHeight * 0.72}
            textAnchor="middle"
            dominantBaseline="alphabetic"
            fill="none"
            stroke="#ea580c"
            strokeWidth={Math.max(2.2, glyphHeight * 0.036)}
            strokeDasharray="7 5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              fontFamily: fontFamily ?? "Poppins, system-ui, sans-serif",
              fontSize: `${glyphHeight * 0.72}px`,
              fontWeight: 500,
              letterSpacing: 0,
            }}
          >
            {char}
          </text>
        </motion.svg>
      ) : null}

      {label ? (
        <motion.span
          className={`pointer-events-none absolute -bottom-11 left-0 whitespace-nowrap text-[11px] tracking-tight text-orange-700/80 md:text-xs ${courier.className}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.15 + index * 0.03, duration: 0.35 }}
        >
          {label}
        </motion.span>
      ) : null}
    </motion.div>
  );
}

export default function AboutBlueprintRoles() {
  const reduce = useReducedMotion();
  const measureRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [widths, setWidths] = useState(() => Array(MAX_CELLS).fill(0));
  const [glyphHeight, setGlyphHeight] = useState(0);

  const word = WORDS[wordIndex % WORDS.length];
  const chars = useMemo(() => word.split(""), [word]);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    let cancelled = false;
    const measure = () => {
      if (cancelled || !measureRef.current) return;
      const next = Array(MAX_CELLS).fill(0);
      let maxH = 0;
      chars.forEach((c, i) => {
        measureRef.current.textContent = c;
        const r = measureRef.current.getBoundingClientRect();
        next[i] = r.width;
        maxH = Math.max(maxH, r.height);
      });
      if (maxH > 0) setGlyphHeight(maxH);
      setWidths(next);
    };
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    } else {
      measure();
    }
    return () => {
      cancelled = true;
    };
  }, [chars]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const gx = useSpring(useTransform(mx, [-0.5, 0.5], [12, -12]), { stiffness: 40, damping: 20 });
  const gy = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 40, damping: 20 });

  /** Dash pattern slides with pointer — horizontal lines use X, vertical letter guides use Y */
  const dashScrollX = useSpring(useTransform(mx, [-0.5, 0.5], [-40, 40]), { stiffness: 55, damping: 20 });
  const dashScrollY = useSpring(useTransform(my, [-0.5, 0.5], [-36, 36]), { stiffness: 55, damping: 20 });

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-x-clip">
      <section
        className="relative w-full pt-10 pb-0 md:pt-14 md:pb-0"
        aria-label="Rotating roles"
        onMouseMove={(e) => {
          if (reduce) return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
      <div
        className="relative w-full max-w-none overflow-hidden border-y border-orange-200/90 bg-white shadow-[0_20px_60px_-28px_rgba(234,88,12,0.12)]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={
            reduce
              ? {
                  backgroundImage:
                    "radial-gradient(rgba(234, 88, 12, 0.16) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }
              : {
                  backgroundImage:
                    "radial-gradient(rgba(234, 88, 12, 0.18) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                  x: gx,
                  y: gy,
                }
          }
        />

        <div className="relative z-[1] flex min-h-[360px] flex-col items-center justify-center px-4 pt-10 pb-4 md:min-h-[440px] md:px-8 md:pt-12 md:pb-6 lg:px-12">
          {/* Horizontal construction lines */}
          <div className="pointer-events-none absolute inset-x-6 top-[32%] md:inset-x-12 lg:inset-x-20">
            <motion.div
              className="h-px w-full origin-center bg-[length:8px_1px] bg-[linear-gradient(to_right,rgba(234,88,12,0.4)_3px,transparent_3px)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={reduce ? undefined : { backgroundPositionX: dashScrollX }}
            />
            <span className={`absolute -top-5 left-2 text-[11px] text-orange-800/70 md:text-xs ${courier.className}`}>0.4X</span>
          </div>
          <div className="pointer-events-none absolute inset-x-6 top-[44%] md:inset-x-12 lg:inset-x-20">
            <motion.div
              className="h-px w-full origin-center bg-[length:8px_1px] bg-[linear-gradient(to_right,rgba(251,146,60,0.45)_3px,transparent_3px)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={reduce ? undefined : { backgroundPositionX: dashScrollX }}
            />
            <span className={`absolute -top-5 left-2 text-[11px] text-orange-700/75 md:text-xs ${courier.className}`}>1X</span>
          </div>
          <div className="pointer-events-none absolute inset-x-6 bottom-[30%] md:inset-x-12 lg:inset-x-20">
            <motion.div
              className="h-px w-full origin-center bg-[length:8px_1px] bg-[linear-gradient(to_right,rgba(234,88,12,0.35)_3px,transparent_3px)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={reduce ? undefined : { backgroundPositionX: dashScrollX }}
            />
            <span className={`absolute top-2 left-2 text-[11px] text-orange-800/65 md:text-xs ${courier.className}`}>XYZ</span>
          </div>

          {/* Hidden measurer — same font metrics as displayed letters */}
          <span
            ref={measureRef}
            aria-hidden
            className={`pointer-events-none absolute -left-[9999px] top-0 whitespace-nowrap opacity-0 ${poppins.className}`}
            style={{
              fontSize: LETTER_FONT_SIZE,
              letterSpacing: "normal",
              textTransform: "lowercase",
            }}
          />

          <div className="relative flex min-h-[5.25rem] items-end justify-center px-2 py-4 md:min-h-[6.5rem] md:px-8">
            {Array.from({ length: MAX_CELLS }).map((_, i) => (
              <LetterCell
                key={i}
                char={chars[i] ?? ""}
                width={i < chars.length ? widths[i] ?? 0 : 0}
                index={i}
                total={chars.length}
                reduce={reduce}
                wordKey={word}
                dashScrollY={reduce ? undefined : dashScrollY}
                glyphHeight={glyphHeight}
                fontFamily={poppins.style.fontFamily}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
