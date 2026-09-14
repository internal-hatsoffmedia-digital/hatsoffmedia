"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  Layers3,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "28+",
    title: "Creative Minds",
  },
  {
    number: "10000+",
    title: "Projects Delivered",
  },
  {
    number: "360°",
    title: "Digital Solutions",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Strategy",
    description: "We start with the business, not just the brief.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Creative",
    description: "Ideas become clear, memorable brand experiences.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Execution",
    description: "Design, content, technology and marketing work together.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Growth",
    description: "Everything is built to create a stronger business outcome.",
    icon: BarChart3,
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const topWavePaths = [
  "M400 0 C220 0 220 180 400 180",
  "M378 0 C220 0 220 180 378 202",
  "M356 0 C220 0 220 180 356 224",
  "M334 0 C220 0 220 180 334 246",
  "M312 0 C220 0 220 180 312 268",
  "M290 0 C220 0 220 180 290 290",
  "M268 0 C220 0 220 180 268 312",
];

const bottomWavePaths = [
  "M0 220 C180 220 180 400 400 220",
  "M0 238 C180 238 180 400 382 238",
  "M0 256 C180 256 180 400 364 256",
  "M0 274 C180 274 180 400 346 274",
  "M0 292 C180 292 180 400 328 292",
  "M0 310 C180 310 180 400 310 310",
  "M0 328 C180 328 180 400 292 328",
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* =========================================================
          EXISTING BACKGROUND STYLE — KEPT
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <motion.div
          animate={{
            x: [-40, 30, -40],
            y: [-20, 30, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-72 top-0 h-[550px] w-[550px] rounded-full bg-[#FFCC00]/10 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [30, -40, 30],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-72 bottom-0 h-[550px] w-[550px] rounded-full bg-[#FCEB77]/15 blur-[160px]"
        />

        <motion.div
          animate={{
            x: ["-20%", "120%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-32 -rotate-12 bg-gradient-to-r from-transparent via-[#FFCC00]/[0.08] to-transparent blur-2xl"
        />

        <svg
          className="absolute right-0 top-0 h-[260px] w-[260px] opacity-15"
          viewBox="0 0 400 400"
          fill="none"
        >
          {topWavePaths.map((path, i) => (
            <motion.path
              key={path}
              d={path}
              stroke="#FFCC00"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        <svg
          className="absolute bottom-0 left-0 h-[240px] w-[240px] opacity-10"
          viewBox="0 0 400 400"
          fill="none"
        >
          {bottomWavePaths.map((path, i) => (
            <motion.path
              key={path}
              d={path}
              stroke="#FCEB77"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#000 1px,transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* =====================================================
              TOP INTRO
          ====================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <motion.div variants={item}>
              <div className="flex items-center gap-4">
                <div className="h-8 w-[2px] rounded-full bg-[#FFCC00]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#ffcc00] sm:text-xs">
                  Who We Are
                </span>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-500">
                A creative and digital team built around one simple idea:
                make businesses easier to notice, trust and choose.
              </p>
            </motion.div>

            <motion.div variants={item}>
              <h2 className="max-w-5xl text-[42px] font-black leading-[0.94] tracking-[-0.055em] text-black sm:text-[52px] md:text-[62px] lg:text-[70px]">
                We are not just
                <br />
                a creative agency.
                <br />
                We are your{" "}
                <span className="relative inline-block text-[#FFCC00]">
                  growth partner.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute bottom-0 left-0 z-[-1] h-2.5 w-full origin-left rounded-full bg-[#FFCC00]/15 sm:h-3"
                  />
                </span>
              </h2>
            </motion.div>
          </div>

          {/* =====================================================
              NEW CONTENT LAYOUT
          ====================================================== */}
          <div className="mt-14 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            {/* LEFT — EDITORIAL CONTENT */}
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white"
            >
              <div className="absolute right-6 top-5 text-[90px] font-black leading-none tracking-[-0.08em] text-black/[0.035]">
                01
              </div>

              <div className="relative p-7 sm:p-9 lg:p-10">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffcc00]">
                    The idea behind Hatsoff
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                    Chennai / India
                  </span>
                </div>

                <div className="mt-8 max-w-2xl">
                  <p className="text-2xl font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-3xl">
                    Helping businesses transform their ideas into powerful
                    brands people remember.
                  </p>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <p className="text-sm leading-6 text-neutral-500 sm:text-[15px]">
                      Hatsoff Media Pvt Ltd is a creative and digital growth
                      company based in Chennai.
                    </p>

                    <p className="text-sm leading-6 text-neutral-500 sm:text-[15px]">
                      We combine{" "}
                      <span className="font-semibold text-black">
                        branding, design, technology, content and marketing
                      </span>{" "}
                      to build stronger digital presence.
                    </p>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500 sm:text-[15px]">
                    From startups to growing companies, we create meaningful
                    experiences that improve visibility, trust and customer
                    connection.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-9 grid grid-cols-3 border-t border-black/10 pt-7">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className={`${index !== 0 ? "border-l border-black/10 pl-4 sm:pl-6" : ""
                        }`}
                    >
                      <p className="text-2xl font-black tracking-[-0.05em] text-black sm:text-3xl">
                        {stat.number}
                      </p>

                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-400 sm:text-[10px]">
                        {stat.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — CAPABILITY STACK */}
            <motion.div
              variants={item}
              className="rounded-[30px] border border-black/10 bg-[#111111] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-7"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
                    How We Work
                  </span>

                  <p className="mt-1 text-xs text-white/35">
                    One connected process
                  </p>
                </div>

                <span className="text-3xl font-black tracking-[-0.06em] text-white/10">
                  04
                </span>
              </div>

              <div className="mt-4">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;

                  return (
                    <motion.div
                      key={capability.number}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        x: 5,
                      }}
                      className="group relative flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FFCC00]/30 bg-[#FFCC00]/10 text-[9px] font-bold text-[#FFCC00]">
                        {capability.number}
                      </span>

                      <div className="flex min-w-0 flex-1 items-center gap-4">
                        <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-white/50 transition-colors duration-300 group-hover:bg-[#FFCC00] group-hover:text-black sm:flex">
                          <Icon size={17} />
                        </div>

                        <div>
                          <h3 className="text-lg font-black tracking-[-0.025em] text-white">
                            {capability.title}
                            <span className="text-[#FFCC00]">.</span>
                          </h3>

                          <p className="mt-1 max-w-xs text-xs leading-5 text-white/35">
                            {capability.description}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FFCC00]"
                      />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-[20px] bg-[#FFCC00] p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/45">
                  Our approach
                </p>

                <p className="mt-2 text-base font-black leading-5 tracking-[-0.02em] text-black">
                  Strategy first. Creative second. Growth always.
                </p>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              BOTTOM STATEMENT
          ====================================================== */}
          <motion.div
            variants={item}
            className="mt-4 flex flex-col gap-5 rounded-[26px] border border-black/10 bg-[#FFFBEA] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ffcc00]">
                What we believe
              </p>

              <p className="mt-1 text-sm font-bold text-black sm:text-base">
                Great creative should not just look better. It should move the
                business forward.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
              <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
              Built to grow
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}