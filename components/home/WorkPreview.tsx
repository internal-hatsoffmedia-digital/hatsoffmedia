"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    category: "Maternity Care",
    title: "Maternity Care",
    subtitle: "Branding • Website • Healthcare",
    description:
      "A warm, trusted healthcare brand experience designed for maternity care, family confidence, and digital credibility.",
    image: "/portfolio/aashara.jpg",
    tags: ["Branding", "Website", "Healthcare"],
  },
  {
    id: "02",
    category: "Clinic",
    title: "Doctor Practice",
    subtitle: "Website • Trust • UX",
    description:
      "A clean digital presence built to communicate expertise, appointment ease, and patient-first service.",
    image: "/portfolio/doctor.png",
    tags: ["Website", "Healthcare", "UX"],
  },
  {
    id: "03",
    category: "Rice Brand",
    title: "Rice Brand",
    subtitle: "Branding • Product Site",
    description:
      "A premium rice brand presentation with a stronger product story, modern visuals, and conversion-focused landing design.",
    image: "/portfolio/langhar.jpg",
    tags: ["Branding", "Product", "Creative"],
  },
  {
    id: "04",
    category: "Travel Posters",
    title: "Travel Poster Series",
    subtitle: "Poster Design • Visual Storytelling",
    description:
      "Destination-led poster artwork designed to turn travel stories into bold, memorable visual campaigns.",
    image: "/portfolio/traval.jpeg",
    tags: ["Posters", "Travel", "Campaigns"],
  },
  {
    id: "05",
    category: "Dental Care",
    title: "Dental Care",
    subtitle: "Healthcare • Website • Social",
    description:
      "A patient-first digital experience built to communicate clarity, trust, and accessible care.",
    image: "/portfolio/senthil-dental.jpg",
    tags: ["Healthcare", "Website", "Social"],
  },
  {
    id: "06",
    category: "Sales Business",
    title: "Sales Business",
    subtitle: "Business Website",
    description:
      "A crisp sales-focused business website designed to build trust, showcase value, and generate qualified leads.",
    image: "/portfolio/smartsales.jpg",
    tags: ["Sales", "Business", "Growth"],
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const panelVariants: Variants = {
  enter: {
    opacity: 0,
    y: 16,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function PortfolioPreview() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const project = projects[active];

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 4600);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-40">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-60 top-0 h-[650px] w-[650px] rounded-full bg-[#FFCC00]/10 blur-[180px]" />
        <div className="absolute -right-60 bottom-0 h-[650px] w-[650px] rounded-full bg-[#FFCC00]/8 blur-[180px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-10 w-[2px] bg-[#FFCC00]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B68A00]">
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-black md:text-[56px] lg:text-[60px] xl:text-[64px]"
          >
            We Don&apos;t Just Build
            <br />
            <span className="text-[#FFCC00]">Beautiful Experiences.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600"
          >
            Every project is crafted with strategy, creativity and technology
            to help brands stand out and grow.
          </motion.p>
        </motion.div>

        {/* Showcase */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          className="mt-24 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch"
        >
          {/* Left: project index / selector */}
          <div className="flex flex-col divide-y divide-black/10 overflow-hidden rounded-[32px] border border-black/10 bg-neutral-50/60">
            {projects.map((p, i) => {
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`
                    group flex items-center justify-between gap-6 px-8 py-7
                    text-left transition-colors duration-300
                    ${isActive ? "bg-white" : "hover:bg-white/70"}
                  `}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-sm font-semibold tabular-nums transition-colors duration-300 ${isActive ? "text-[#B68A00]" : "text-neutral-400"
                        }`}
                    >
                      {p.id}
                    </span>

                    <div>
                      <p
                        className={`text-lg font-bold tracking-[-0.02em] transition-colors duration-300 ${isActive ? "text-black" : "text-neutral-500"
                          }`}
                      >
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                        {p.category}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                      transition-all duration-300
                      ${isActive
                        ? "bg-[#FFCC00] text-black rotate-45"
                        : "bg-transparent text-neutral-300 group-hover:text-neutral-500"
                      }
                    `}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: active project detail panel */}
          <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative flex h-full min-h-[480px] flex-col justify-end"
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={`${project.category} portfolio preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                </div>

                <div className="relative px-8 pb-10 pt-24 lg:px-10">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFCC00] backdrop-blur">
                    {project.subtitle}
                  </span>

                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-28
            overflow-hidden
            rounded-[40px]
            border
            border-[#FFCC00]/20
            bg-gradient-to-br
            from-[#FFFDF4]
            via-white
            to-[#FFF8DD]
            px-8
            py-20
            lg:px-16
          "
        >
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-3 rounded-full border border-[#FFCC00]/20 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#ffcc00]">
                <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
                Featured
              </span>

              <h3 className="mt-8 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-black md:text-[56px] lg:text-[60px] xl:text-[64px]">
                Every Project
                <br />
                <span className="text-[#FFCC00]">Begins With Strategy.</span>
                <br />
                Ends With Results.
              </h3>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                We partner with ambitious businesses to create memorable
                brands, high-performing websites and digital experiences
                that generate measurable business growth.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-5">
              <Link
                href="/portfolio"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-5
                  rounded-full
                  bg-black
                  px-8
                  py-5
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#FFCC00]
                  hover:text-black
                "
              >
                Explore Portfolio
                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFCC00]
                    text-black
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:bg-black
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/20
                  bg-white
                  px-8
                  py-5
                  font-bold
                  text-black
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-neutral-100
                "
              >
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid gap-8 border-t border-black/10 pt-10 sm:grid-cols-3">
            {[
              {
                value: "25+",
                label: "Projects Delivered",
              },
              {
                value: "100%",
                label: "Custom Strategy",
              },
              {
                value: "Creative",
                label: "Design • Development • Marketing",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <h4 className="text-4xl font-black tracking-[-0.05em] text-black">
                  {stat.value}
                </h4>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
