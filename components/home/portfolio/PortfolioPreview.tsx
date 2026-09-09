"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  Share2,
  Globe2,
  Video,
  Megaphone,
  Bot,
  Sparkles,
} from "lucide-react";

const portfolioCategories = [
  {
    id: "01",
    title: "Aashara",
    shortTitle: "Aashara",
    eyebrow: "Brand identity / Web presence",
    description:
      "A polished digital presence built to elevate a premium healthcare brand with clarity, trust, and a strong visual identity.",
    image: "/portfolio/aashara.jpg",
    tags: ["Branding", "Web Design", "Healthcare"],
    icon: Palette,
    accent: "#FFCC00",
  },
  {
    id: "02",
    title: "Doctor",
    shortTitle: "Doctor",
    eyebrow: "Healthcare / Digital trust",
    description:
      "A modern healthcare showcase designed to guide patients clearly while reinforcing credibility and expertise.",
    image: "/portfolio/doctor.png",
    tags: ["Healthcare", "UX", "Brand Story"],
    icon: Globe2,
    accent: "#FFCC00",
  },
  {
    id: "03",
    title: "Langhar",
    shortTitle: "Langhar",
    eyebrow: "Food / Product experience",
    description:
      "A premium commerce experience crafted to spotlight rich food storytelling, conversion, and a strong product-first impression.",
    image: "/portfolio/langhar.jpg",
    tags: ["Ecommerce", "Food", "Branding"],
    icon: Megaphone,
    accent: "#FFCC00",
  },
  {
    id: "04",
    title: "Restaurant",
    shortTitle: "Restaurant",
    eyebrow: "Dining / Visual presentation",
    description:
      "An elevated restaurant experience built around appetite appeal, storytelling, and seamless browsing across devices.",
    image: "/portfolio/retaurent.jpeg",
    tags: ["Restaurant", "Web Experience", "Visual Identity"],
    icon: Share2,
    accent: "#FFCC00",
  },
  {
    id: "05",
    title: "Senthil Dental",
    shortTitle: "Dental",
    eyebrow: "Healthcare / Trust / Conversion",
    description:
      "A patient-focused digital experience designed to create confidence, accessibility, and brand trust for a dental practice.",
    image: "/portfolio/senthil-dental.jpg",
    tags: ["Dental", "Healthcare", "Conversion"],
    icon: Bot,
    accent: "#FFCC00",
  },
  {
    id: "06",
    title: "Smartsales",
    shortTitle: "Smartsales",
    eyebrow: "B2B / Digital marketing",
    description:
      "A high-performing business website that sharpens positioning, values, and conversion-focused messaging for growth.",
    image: "/portfolio/smartsales.jpg",
    tags: ["B2B", "Web Design", "Marketing"],
    icon: Video,
    accent: "#FFCC00",
  },
  {
    id: "07",
    title: "Travel",
    shortTitle: "Travel",
    eyebrow: "Tourism / Storytelling",
    description:
      "An immersive travel experience that uses mood, destination storytelling, and cleaner browsing to spark engagement.",
    image: "/portfolio/traval.jpeg",
    tags: ["Travel", "Brand Story", "Experience"],
    icon: Palette,
    accent: "#FFCC00",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mediaVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.035,
    x: 24,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    x: -18,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function PortfolioPreview() {
  const [active, setActive] = useState(0);
  const activeCategory = portfolioCategories[active];

  /*
   * Desktop behaviour:
   * - Hover a category to preview it.
   * - Click a category to lock it naturally through state.
   *
   * Mobile behaviour:
   * - Tap any category.
   *
   * The auto-preview pauses while the pointer is over the showcase.
   */
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % portfolioCategories.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const activeNumber = useMemo(
    () => String(active + 1).padStart(2, "0"),
    [active]
  );

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f8f8f6] py-14 text-black sm:py-16 lg:py-20"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-16rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-[#FFCC00]/14 blur-[140px]" />
        <div className="absolute bottom-[-18rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#FFCC00]/10 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-px w-[90%] -translate-x-1/2 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionVariants}
          className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FFCC00]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-600">
                Selected Work
              </span>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#A17B00]">
              07 selected projects
            </p>
          </div>

          <div className="lg:max-w-4xl">
            <h2 className="text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.84] tracking-[-0.065em]">
              We Don&apos;t Just
              <br />
              <span className="text-[#FFCC00]">Talk.</span>{" "}
              <span className="text-black">We Create.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              From the first idea to the final pixel, we turn strategy into
              brands, content, websites, campaigns, and digital experiences
              people actually remember.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN SHOWCASE
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-[330px_minmax(0,1fr)]"
        >
          {/* =======================================================
              CATEGORY RAIL
          ======================================================== */}
          <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.07)]">
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-neutral-400">
                What we do
              </span>

              <span className="text-xs font-semibold tabular-nums text-neutral-400">
                {activeNumber} / 06
              </span>
            </div>

            <div className="p-2">
              {portfolioCategories.map((category, index) => {
                const Icon = category.icon;
                const isActive = active === index;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="group relative flex w-full items-center gap-4 rounded-[22px] px-4 py-4 text-left outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#FFCC00] focus-visible:ring-offset-2"
                  >
                    {/* Active background */}
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.96,
                      }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 rounded-[22px] bg-[#FFCC00]"
                    />

                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold tabular-nums transition-all duration-300 ${
                        isActive
                          ? "border-black/10 bg-black text-white"
                          : "border-black/10 bg-[#f7f7f5] text-neutral-400 group-hover:border-black/20 group-hover:text-black"
                      }`}
                    >
                      {category.id}
                    </span>

                    <span className="relative z-10 min-w-0 flex-1">
                      <span
                        className={`block text-[17px] font-extrabold tracking-[-0.025em] transition-colors duration-300 ${
                          isActive ? "text-black" : "text-neutral-500 group-hover:text-black"
                        }`}
                      >
                        {category.title}
                      </span>

                      <span
                        className={`mt-0.5 block truncate text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                          isActive ? "text-black/55" : "text-neutral-400"
                        }`}
                      >
                        {category.shortTitle}
                      </span>
                    </span>

                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "rotate-45 bg-black text-white"
                          : "bg-neutral-100 text-neutral-400 group-hover:translate-x-1 group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tiny bottom note */}
            <div className="border-t border-black/10 px-6 py-5">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                <Sparkles size={13} />
                Hover to explore
              </div>
            </div>
          </div>

          {/* =======================================================
              FEATURED VISUAL
          ======================================================== */}
          <div className="relative min-h-[570px] overflow-hidden rounded-[30px] bg-[#101010] shadow-[0_28px_100px_rgba(0,0,0,0.17)] sm:min-h-[650px] lg:min-h-[700px]">
            {/* Yellow edge detail */}
            <div className="absolute right-0 top-16 z-30 h-20 w-1.5 rounded-l-full bg-[#FFCC00]" />

            {/* Media */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                variants={mediaVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                {"isVideo" in activeCategory && activeCategory.isVideo ? (
                  <video
                    key={activeCategory.image}
                    className="h-full w-full object-cover"
                    src={activeCategory.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <Image
                    src={activeCategory.image}
                    alt={`${activeCategory.title} portfolio preview`}
                    fill
                    priority={active === 0}
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                  />
                )}

                {/* Layered cinematic treatment */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/85" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* =====================================================
                TOP META
            ====================================================== */}
            <div className="absolute left-6 right-6 top-6 z-20 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-10 lg:right-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-xl">
                  <activeCategory.icon size={18} />
                </span>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
                    Hatsoff Media
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    Creative / {activeNumber}
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/75 backdrop-blur-xl">
                Featured
              </span>
            </div>

            {/* =====================================================
                LARGE INDEX
            ====================================================== */}
            <div className="absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 select-none lg:block">
              <span className="text-[10rem] font-black leading-none tracking-[-0.09em] text-white/[0.06]">
                {activeNumber}
              </span>
            </div>

            {/* =====================================================
                BOTTOM CONTENT
            ====================================================== */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeCategory.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { duration: 0.2 },
                }}
                className="absolute inset-x-6 bottom-6 z-20 sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10"
              >
                <div className="max-w-3xl">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#FFCC00] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                      {activeCategory.eyebrow}
                    </span>
                  </div>

                  <div className="grid gap-7 lg:grid-cols-[1fr_260px] lg:items-end">
                    <div>
                      <h3 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                        {activeCategory.title}
                        <span className="text-[#FFCC00]">.</span>
                      </h3>

                      <p className="mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
                        {activeCategory.description}
                      </p>
                    </div>

                    <div className="lg:justify-self-end">
                      <div className="flex flex-wrap gap-2 lg:justify-end">
                        {activeCategory.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75 backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress line */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/15">
                    <motion.div
                      key={activeCategory.id}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.2, ease: "linear" }}
                      className="h-full bg-[#FFCC00]"
                    />
                  </div>

                  <span className="text-[10px] font-bold tabular-nums text-white/45">
                    {activeNumber}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mt-5 grid overflow-hidden rounded-[30px] border border-black/10 bg-white lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="relative px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <span className="absolute right-8 top-8 text-7xl font-black leading-none tracking-[-0.08em] text-black/[0.035] sm:text-9xl">
              07
            </span>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A17B00]">
              One creative partner
            </p>

            <h3 className="relative mt-5 max-w-3xl text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              Strategy in the thinking.
              <br />
              <span className="text-[#FFCC00]">Craft in the execution.</span>
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-500 sm:text-base sm:leading-7">
              We bring branding, content, web, video, advertising, and AI
              production under one creative roof—so every touchpoint feels
              connected.
            </p>
          </div>

          <div className="flex flex-col justify-between border-t border-black/10 bg-[#FFCC00] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-black/50">
                Ready when you are
              </p>

              <p className="mt-4 text-xl font-black leading-tight tracking-[-0.03em] sm:text-2xl">
                Have a brand, idea, or project that needs a sharper point of
                view?
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-between rounded-full bg-white px-5 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
              >
                Explore full portfolio
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFCC00] text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white/70 px-5 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-white"
              >
                Start a project
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}