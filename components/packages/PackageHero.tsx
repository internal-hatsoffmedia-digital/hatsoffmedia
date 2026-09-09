"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import NumberTicker from "@/components/common/NumberTicker";

const stats = [
  {
    value: "4",
    label: "Business Packages",
  },
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Brands Served",
  },
  {
    value: "5★",
    label: "Client Rating",
  },
];

const highlights = [
  "Flexible Monthly Retainers",
  "Zero Long-Term Lock-in",
  "Dedicated Senior Account Lead",
  "Direct Delivery Roadmap",
];

export default function PackageHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-28
        pb-12
        sm:pt-32
        sm:pb-14
        lg:pt-36
        lg:pb-16
      "
    >
      {/* =========================================================
          DECORATIVE BACKGROUND ARCHITECTURE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large Gold Glow Top Right */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-10
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#FFCC00]/20
            blur-[180px]
          "
        />

        {/* Soft Amber Glow Bottom Left */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-250px]
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-yellow-100/70
            blur-[180px]
          "
        />

        {/* Technical Fine Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Diagonal Moving Light Beam */}
        <motion.div
          animate={{
            x: ["-25%", "135%"],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            -top-20
            h-[140%]
            w-40
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-[#FFCC00]/15
            to-transparent
            blur-2xl
          "
        />

        {/* Decorative Geometric Framing Lines */}
        <div className="absolute left-10 top-36 hidden h-32 w-px bg-gradient-to-b from-transparent via-[#FFCC00]/40 to-transparent lg:block" />
        <div className="absolute right-14 top-44 hidden h-40 w-px bg-gradient-to-b from-transparent via-[#FFCC00]/35 to-transparent lg:block" />
        <div className="absolute left-16 top-36 hidden h-px w-44 bg-gradient-to-r from-transparent via-[#FFCC00]/40 to-transparent lg:block" />
        <div className="absolute bottom-24 right-20 hidden h-px w-56 bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent lg:block" />

        {/* Radial Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.4) 65%, white 100%)",
          }}
        />
      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* Floating Decorative Chips (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pointer-events-none absolute right-8 top-0 hidden lg:flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur-md animate-float-gentle"
        >
          <ShieldCheck className="h-4 w-4 text-[#ffcc00]" />
          <span className="text-xs font-bold text-neutral-800">
            Transparent Pricing • Zero Lock-in
          </span>
        </motion.div>

        {/* Eyebrow Badge */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span
            className="
              inline-flex
              items-center
              gap-3
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
              text-[#9E7800]
              shadow-[0_0_20px_rgba(255,204,0,0.15)]
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E5B800]" />
            </span>
            <Sparkles className="h-4 w-4 text-[#E5B800]" />
            Business Packages & Retainers
          </span>
        </motion.div>

        {/* Decorative Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-10
            max-w-6xl
            text-6xl
            font-black
            leading-[0.88]
            tracking-[-0.07em]
            text-black
            md:text-8xl
            xl:text-[110px]
          "
        >
          Choose The
          <br />
          Right Plan
          <br />
          For Your{" "}
          <span className="relative inline-block tracking-normal sm:tracking-[0.02em]">
            <span className="relative z-10 text-[#ffcc00]">Business.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute bottom-2 left-0 h-4 w-full origin-left rounded-full bg-[#FFCC00]/25"
            />
          </span>
        </motion.h1>

        {/* Decorative Feature Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/5
                bg-[#FAFAF8]
                px-4
                py-1.5
                text-xs
                font-semibold
                text-neutral-700
                shadow-sm
              "
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-[#ffcc00]" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Description + CTA Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <p
            className="
              max-w-2xl
              text-lg
              leading-8
              text-neutral-600
            "
          >
            Whether you&apos;re launching a new business, building your
            social media presence, generating quality leads, or
            looking for a complete creative partner, Hatsoff Media
            offers tailored solutions designed around your current
            business stage.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* Primary Action */}
            <Link
              href="#packages"
              className="
                group
                relative
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-[#FFCC00]
                px-8
                py-4
                font-bold
                text-black
                shadow-[0_10px_30px_rgba(255,204,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-neutral-900
                hover:text-white
                hover:shadow-xl
              "
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">Choose My Plan</span>
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-colors duration-300 group-hover:bg-[#FFCC00] group-hover:text-black">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            {/* Secondary Action */}
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-neutral-300
                bg-white
                px-8
                py-4
                font-bold
                text-black
                transition-all
                duration-300
                hover:border-[#FFCC00]
                hover:bg-[#fffdf2]
                hover:shadow-md
              "
            >
              <span>Get Custom Proposal</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 3D Package Tier Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-[32px] border border-neutral-200/80 bg-neutral-900 shadow-2xl group relative"
        >
          <div className="relative aspect-[16/9] w-full max-h-[500px] overflow-hidden">
            <Image
              src="/images/packages/package-hero-banner.jpg"
              alt="Hatsoff Media Creative Packages 3D Tier Overview"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00] backdrop-blur-md">
                <Sparkles size={13} />
                Predictable Growth Tiers
              </span>
              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl text-white">
                Structured For High-Growth Execution.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300">
                Transparent milestones, zero lock-ins, and dedicated creative director oversight.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row with Animated NumberTicker */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-20
            overflow-hidden
            rounded-[32px]
            border
            border-neutral-200/80
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          "
        >
          <div
            className="
              grid
              grid-cols-2
              divide-y
              divide-neutral-200/80
              md:grid-cols-4
              md:divide-x
              md:divide-y-0
            "
          >
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="py-10 text-center transition-colors duration-300 hover:bg-[#FFFDF7]"
              >
                <h3
                  className="
                    text-5xl
                    font-black
                    text-[#ffcc00]
                  "
                >
                  <NumberTicker value={item.value} delay={0.2 + index * 0.1} />
                </h3>

                <p
                  className="
                    mt-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-neutral-500
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}