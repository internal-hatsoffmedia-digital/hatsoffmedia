"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const beliefs = [
  {
    number: "01",
    title: "Look professional.",
    statement: "Because first impressions become business impressions.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Communicate clearly.",
    statement: "Because a strong brand should never need explaining.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Create trust.",
    statement: "Because attention means little without credibility.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Move the business forward.",
    statement: "Because digital presence should create momentum.",
    icon: TrendingUp,
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhatWeBelieve() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px),
              linear-gradient(90deg,rgba(0,0,0,.4) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <motion.div
          animate={{
            x: [-30, 30, -30],
            y: [-20, 25, -20],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-72 -top-64 h-[600px] w-[600px] rounded-full bg-[#FFCC00]/10 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [25, -25, 25],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-72 -right-72 h-[600px] w-[600px] rounded-full bg-[#FCEB77]/10 blur-[180px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            INTRO
        ========================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end"
        >
          <motion.div variants={reveal}>
            <div className="flex items-center gap-4">
              <span className="h-8 w-[2px] bg-[#FFCC00]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ffcc00] sm:text-xs">
                What We Believe
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-neutral-500">
              The thinking behind the work — and the reason we do it.
            </p>
          </motion.div>

          <motion.div variants={reveal}>
            <h2 className="max-w-5xl text-[42px] font-black leading-[0.93] tracking-[-0.055em] text-black sm:text-[54px] md:text-[64px] lg:text-[72px]">
              We believe
              <br />
              <span className="text-[#FFCC00]">good creative</span>
              <br />
              should do more.
            </h2>
          </motion.div>
        </motion.div>

        {/* =========================================================
            BELIEF EXPERIENCE
        ========================================================== */}
        <div className="mt-14 lg:mt-20">
          {/* Desktop editorial list */}
          <div className="hidden border-y border-black/10 lg:block">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;

              return (
                <motion.article
                  key={belief.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  className="group relative grid grid-cols-[90px_110px_1fr_300px_70px] items-center gap-6 border-b border-black/10 py-7 last:border-b-0"
                >
                  {/* Number */}
                  <span className="font-heading tabular-nums text-sm font-bold tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-[#ffcc00]">
                    {belief.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white transition-all duration-500 group-hover:border-[#FFCC00] group-hover:bg-[#FFCC00]">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-black"
                    />

                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#FFCC00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Main title */}
                  <div>
                    <h3 className="text-[34px] font-black leading-none tracking-[-0.05em] text-black transition-transform duration-500 group-hover:translate-x-2">
                      {belief.title}
                    </h3>
                  </div>

                  {/* Supporting thought */}
                  <p className="max-w-xs text-base leading-relaxed text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900">
                    {belief.statement}
                  </p>

                  {/* Arrow */}
                  <div className="flex justify-end">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-neutral-300 transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-[#FFCC00] group-hover:rotate-45">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Yellow reveal line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#FFCC00]"
                  />
                </motion.article>
              );
            })}
          </div>

          {/* =======================================================
              MOBILE / TABLET
          ======================================================== */}
          <div className="space-y-0 border-y border-black/10 lg:hidden">
            {beliefs.map((belief, index) => {
              const Icon = belief.icon;

              return (
                <motion.article
                  key={belief.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  className="group relative border-b border-black/10 py-7 last:border-b-0"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <span className="font-heading tabular-nums text-xs font-bold tracking-[0.15em] text-neutral-500">
                        {belief.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F8F5] text-black transition-colors duration-300 group-hover:bg-[#FFCC00]">
                        <Icon size={18} strokeWidth={1.7} />
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffcc00]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-xl text-[27px] font-black leading-[1] tracking-[-0.045em] text-black sm:text-[32px]">
                    {belief.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
                    {belief.statement}
                  </p>

                  <div className="mt-5 h-[2px] w-8 bg-[#FFCC00] transition-all duration-500 group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-8 grid gap-5 border-b border-black/10 pb-2 pt-2 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffcc00]">
              Our simple rule
            </p>

            <p className="mt-2 max-w-2xl text-lg font-black leading-tight tracking-[-0.025em] text-black sm:text-xl">
              If it looks good but does not help the business,
              <span className="text-[#FFCC00]"> we can do better.</span>
            </p>
          </div>

          <div className="flex items-center gap-2 pb-1">
            <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400">
              Strategy × Creative × Growth
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}