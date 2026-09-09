"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import Link from "next/link";

interface DecorativeHeaderProps {
  badge?: string;
  title?: string;
  highlight?: string;
  subtitle?: string;
  chips?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function DecorativeHeader({
  badge = "Tailored Agency Retainers",
  title = "Predictable Scale.",
  highlight = "Guaranteed Execution.",
  subtitle = "Strategic creative packages designed around your current stage. From brand launch to multi-channel customer acquisition.",
  chips = [
    "✦ Zero Long-Term Lock-in",
    "✦ Transparent Scope & Pricing",
    "✦ Dedicated Senior Lead",
    "✦ 100% On-Schedule Delivery",
  ],
  ctaText = "Explore Packages Below",
  ctaHref = "#packages",
}: DecorativeHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-[#0A0A0A] py-20 text-white md:py-28">
      {/* =========================================================
          DECORATIVE BACKGROUND ARCHITECTURE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated Gold Aurora Top Left */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FFCC00]/15
            blur-[160px]
          "
        />

        {/* Animated Amber Aurora Bottom Right */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -right-40
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#FFCC00]/10
            blur-[180px]
          "
        />

        {/* Technical Fine Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Moving Fine Light Beam */}
        <motion.div
          animate={{
            x: ["-30%", "140%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -top-20
            h-[150%]
            w-36
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-[#FFCC00]/15
            to-transparent
            blur-2xl
          "
        />

        {/* Precision Decorative Geometric Lines */}
        <div className="absolute left-8 top-16 hidden h-28 w-px bg-gradient-to-b from-transparent via-[#FFCC00]/40 to-transparent sm:block" />
        <div className="absolute right-12 top-24 hidden h-36 w-px bg-gradient-to-b from-transparent via-[#FFCC00]/30 to-transparent sm:block" />
        <div className="absolute left-16 top-16 hidden h-px w-48 bg-gradient-to-r from-transparent via-[#FFCC00]/40 to-transparent sm:block" />
        <div className="absolute bottom-16 right-16 hidden h-px w-64 bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent sm:block" />

        {/* Center Radial Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#0A0A0A_90%)]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <span
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#FFCC00]/40
                bg-[#FFCC00]/10
                px-5
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#FFCC00]
                shadow-[0_0_20px_rgba(255,204,0,0.15)]
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFCC00]" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
              {badge}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="
              mt-8
              text-4xl
              font-black
              leading-[1.02]
              tracking-[-0.05em]
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            {title}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FFCC00]">{highlight}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="
                  absolute
                  bottom-1
                  left-0
                  h-3
                  w-full
                  origin-left
                  rounded-full
                  bg-[#FFCC00]/25
                "
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-neutral-400
              sm:text-lg
            "
          >
            {subtitle}
          </motion.p>

          {/* Decorative Floating Feature Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
          >
            {chips.map((chip, i) => (
              <span
                key={i}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  text-neutral-300
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#FFCC00]/50
                  hover:bg-[#FFCC00]/10
                  hover:text-white
                "
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTA Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <Link
              href={ctaHref}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#FFCC00]
                px-8
                py-4
                text-sm
                font-bold
                text-black
                shadow-[0_8px_30px_rgba(255,204,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                hover:shadow-[0_12px_40px_rgba(255,255,255,0.2)]
              "
            >
              <span>{ctaText}</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#FFCC00] group-hover:text-black">
                <ArrowRight size={13} strokeWidth={3} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Separation Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#FFCC00]/40 to-transparent" />
    </header>
  );
}
