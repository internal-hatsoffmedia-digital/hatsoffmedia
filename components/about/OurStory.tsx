"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Eye,
  Lightbulb,
} from "lucide-react";
import { useRef } from "react";

const story = [
  {
    year: "2019",
    phase: "The Spark",
    title: "Freelancing Roots",
    description:
      "Founded by Sabari Nadhaan, Hatsoff began as a solo freelance operation focused on solving design problems with real business intent.",
    icon: Lightbulb,
  },
  {
    year: "2024",
    phase: "The Evolution",
    title: "Transition to Agency",
    description:
      "Individual projects grew into a full-fledged creative team bringing strategy, design, and digital execution under one roof.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2025",
    phase: "Official Milestone",
    title: "Pvt Ltd Incorporation",
    description:
      "Formalized operations as a Private Limited entity, strengthening client partnerships and scaling core capability.",
    icon: Building2,
  },
  {
    year: "2026",
    phase: "The Present Focus",
    title: "Power of Brand Visibility",
    description:
      "Now hyper-focused on expanding brand visibility, narrative authority, and digital presence for growing businesses.",
    icon: Eye,
  },
];

function GrowthLine() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div
      ref={ref}
      className="
        pointer-events-none
        absolute
        left-[20px]
        top-0
        bottom-0
        hidden
        w-[2px]
        bg-neutral-100
        lg:block
      "
    >
      <motion.div
        initial={{ height: 0 }}
        animate={inView ? { height: "100%" } : { height: 0 }}
        transition={{
          duration: 2.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-0 top-0 w-full origin-top bg-[#FFCC00]"
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          inView
            ? {
              scale: 1,
              opacity: 1,
            }
            : {
              scale: 0,
              opacity: 0,
            }
        }
        transition={{
          delay: 2.15,
          duration: 0.45,
          type: "spring",
        }}
        className="
          absolute
          -left-[7px]
          bottom-0
          h-4
          w-4
          rounded-full
          border-4
          border-white
          bg-[#FFCC00]
          shadow-[0_0_0_1px_rgba(0,0,0,0.08)]
        "
      />
    </div>
  );
}

// =========================================================
// HAND-DRAWN DOODLE-STYLE VISUAL ART (CLPART & LINE ART)
// =========================================================
function DoodleStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" />
    </svg>
  );
}

function DoodleCurlyArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M10 25 C 30 5, 60 55, 85 28" />
      <path d="M72 22 L 86 28 L 78 40" />
    </svg>
  );
}

function DoodleLightbulb({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M25 8 C 17 8, 12 15, 15 24 C 17 29, 19 32, 20 36 L 30 36 C 31 32, 33 29, 35 24 C 38 15, 33 8, 25 8 Z" />
      <path d="M21 40 L 29 40" />
      <path d="M23 44 L 27 44" />
      <path d="M25 2 L 25 5" />
      <path d="M10 10 L 13 13" />
      <path d="M40 10 L 37 13" />
    </svg>
  );
}

function DoodleSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      className={className}
    >
      <path d="M4 11 Q 25 3, 46 11 T 88 11 T 136 11" />
    </svg>
  );
}

function TimelineYearText({ value }: { value: string }) {
  return (
    <span className="font-heading tabular-nums text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black transition-colors duration-300 group-hover:text-[#ffcc00]">
      {value}
    </span>
  );
}

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: "120px 100%",
          }}
        />

        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-48
            top-1/3
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#FFCC00]/10
            blur-[150px]
          "
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-6
          lg:px-12
          xl:px-20
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FFCC00]/50 bg-[#FFCC00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#9E7800]">
              <span className="h-2 w-2 rounded-full bg-[#FFCC00] animate-pulse" />
              Our Story & Milestones
            </div>

            <div className="relative">
              <h2 className="mt-5 max-w-6xl text-[52px] font-black leading-[0.85] tracking-[-0.075em] text-black sm:text-[68px] md:text-[82px] lg:text-[100px] xl:text-[115px]">
                WE KEPT
                <br />
                <span className="text-[#FFCC00]">GROWING.</span>
              </h2>
              <DoodleSquiggle className="h-4 w-44 text-[#FFCC00] mt-3" />
            </div>
          </div>

          <div className="relative max-w-md lg:pb-2">
            <div className="absolute -top-10 -right-6 hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#A87B00]">
              <DoodleCurlyArrow className="h-10 w-16 text-[#FFCC00]" />
              <span className="rotate-3 font-heading">Our Timeline</span>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              One idea became a practice. The practice became a team. The team
              became a company. And the journey is still moving.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="font-heading tabular-nums text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                2019 — 2026
              </span>

              <span className="h-px w-10 bg-neutral-300" />

              <span className="font-heading text-xs font-bold tracking-[0.2em] text-[#ffcc00]">
                THE GROWTH
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            GROWTH MAP
        ======================================================== */}

        <div className="relative mt-12 sm:mt-16">
          <GrowthLine />

          <div className="space-y-0 lg:pl-[55px]">
            {story.map((item, index) => (
              <GrowthStep
                key={item.year}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            FINAL STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-12
            border-t
            border-neutral-200
            pt-8
            sm:mt-16
            sm:pt-10
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-neutral-400
                  "
                >
                  Still growing
                </span>
              </div>

              <h3
                className="
                  mt-5
                  max-w-5xl
                  text-[36px]
                  font-black
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-black
                  sm:text-[48px]
                  md:text-[58px]
                "
              >
                THE NEXT MILESTONE
                <br />
                <span className="text-[#FFCC00]">IS YOURS.</span>
              </h3>
            </div>

            <a
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-bold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#FFCC00]
                hover:text-black
              "
            >
              Build With Us

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFCC00]
                  text-black
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* =======================================================
            FOOTER MARK
        ======================================================== */}

        <div className="mt-8 flex items-center gap-4">
          <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />

          <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
            Started small · Built with purpose · Still moving
          </span>

          <div className="h-px flex-1 bg-neutral-200" />
        </div>
      </div>
    </section>
  );
}

function GrowthStep({
  item,
  index,
}: {
  item: (typeof story)[number];
  index: number;
}) {
  const Icon = item.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.35,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        border-t
        border-neutral-200
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          grid
          gap-6
          sm:grid-cols-[100px_1fr_auto]
          sm:items-center
          sm:gap-8
          lg:grid-cols-[140px_0.75fr_1.5fr_80px]
          lg:gap-10
        "
      >
        {/* YEAR (Large Text Format) */}
        <div className="flex items-center gap-3">
          <TimelineYearText value={item.year} />

          <motion.span
            initial={{ width: 0 }}
            animate={inView ? { width: 28 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden h-0.5 bg-[#FFCC00] sm:block"
          />
        </div>

        {/* PHASE */}
        <div>
          <div className="flex items-center gap-2">
            <motion.span
              initial={{ scale: 0, rotate: 45 }}
              animate={
                inView
                  ? {
                    scale: 1,
                    rotate: 45,
                  }
                  : {
                    scale: 0,
                    rotate: 45,
                  }
              }
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
              }}
              className="h-2 w-2 rounded-xs bg-[#FFCC00]"
            />

            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#ffcc00] transition-colors duration-300 group-hover:text-black">
              {item.phase}
            </span>

            {index === 0 && (
              <span title="The Spark">
                <DoodleLightbulb className="h-5 w-5 text-[#FFCC00]" />
              </span>
            )}

            {index === 3 && (
              <span title="Current Focus">
                <DoodleStar className="h-4 w-4 text-[#FFCC00]" />
              </span>
            )}
          </div>

          {/* Mobile title */}
          <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-black transition-transform duration-300 group-hover:translate-x-1 sm:hidden">
            {item.title}
          </h3>
        </div>

        {/* CONTENT */}
        <div>
          <h3 className="hidden text-3xl font-black leading-[1.08] tracking-tight text-black transition-transform duration-300 group-hover:translate-x-1 sm:block md:text-4xl lg:text-[42px]">
            {item.title}
          </h3>

          <p className="mt-3.5 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900">
            {item.description}
          </p>

          {/* Growing progress bar */}
          <div className="mt-6 h-[2px] w-full max-w-md overflow-hidden bg-neutral-100">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{
                duration: 1.25,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-[#FFCC00]"
            />
          </div>
        </div>

        {/* ICON */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            inView
              ? {
                opacity: 1,
                scale: 1,
              }
              : {
                opacity: 0,
                scale: 0.7,
              }
          }
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
          }}
          className="
            hidden
            h-12
            w-12
            items-center
            justify-center
            border
            border-neutral-200
            bg-white
            text-neutral-400
            transition-all
            duration-300
            group-hover:border-[#FFCC00]
            group-hover:bg-[#FFCC00]
            group-hover:text-black
            sm:flex
          "
        >
          <Icon size={18} strokeWidth={1.7} />
        </motion.div>
      </div>

      {/* Hover reveal */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          bg-[#FFCC00]
        "
      />
    </motion.article>
  );
}