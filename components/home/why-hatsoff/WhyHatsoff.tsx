"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const keyPoints = [
  "We think like business people, not just designers.",
  "We bring branding, content, websites, videos, and ads under one roof.",
  "We keep your brand consistent across every platform.",
  "We work as your extended creative and digital team.",
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyHatsoff() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-52 top-0 h-[650px] w-[650px] rounded-full bg-[#FFCC00]/10 blur-[180px]" />
        <div className="absolute -right-52 bottom-0 h-[650px] w-[650px] rounded-full bg-[#FFCC00]/8 blur-[180px]" />
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
        {/* Main Section Header */}
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
              Why Hatsoff
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-black md:text-[56px] lg:text-[60px] xl:text-[64px]"
          >
            More Than
            <br />
            <span className="text-[#FFCC00]">A Creative Agency.</span>
            <br />
            Your Growth Partner.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600"
          >
            We combine business strategy, creative thinking, and modern
            technology to build brands that achieve long-term success.
          </motion.p>
        </motion.div>

        {/* Content Layout */}
        <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Visual Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-[36px] border border-black/10 bg-neutral-900 shadow-2xl"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]">
              <Image
                src="/images/why/why-hatsoff-showcase.jpg"
                alt="Why Hatsoff Media Digital Showcase"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#FFCC00]">
                  Hatsoff Advantage
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl">
                  Built For Execution.
                  <br />
                  Driven By Results.
                </h3>
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute right-6 top-6 rounded-2xl bg-black/70 px-4 py-2.5 backdrop-blur-md border border-white/10 animate-float-gentle">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FFCC00] animate-ping" />
                  <span className="text-xs font-bold text-white tracking-wider uppercase">Proven Track Record</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Differentiators */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group flex items-start gap-5 rounded-[24px] border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#FFCC00] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8D9] text-[#B68A00] transition-colors group-hover:bg-[#FFCC00] group-hover:text-black">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-lg font-bold leading-snug tracking-[-0.01em] text-neutral-900 group-hover:text-black sm:text-xl">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Direct CTA Link */}
            <motion.div variants={fadeUp} className="pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#FFCC00] px-8 py-5 text-base font-bold text-black shadow-[0_10px_30px_rgba(255,204,0,0.35)] transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]"
              >
                <span>Start Working With Us</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[#FFCC00] group-hover:text-black">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}