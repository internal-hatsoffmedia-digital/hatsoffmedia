"use client";

import { motion, type Variants } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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

const headingLines = ["Turn Your", "Business Into A Brand"];

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 max-w-[640px]"
    >
      {/* Agency Label */}
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/40 bg-[#ffcc00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#9E7800]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffcc00] opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E5B800]" />
          </span>
          Creative Digital Agency
        </span>
      </motion.div>

      {/* Heading */}
      <div className="mt-10">
        {headingLines.map((line, index) => (
          <motion.div
            key={line}
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[52px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-neutral-900
              md:text-[68px]
              xl:text-[88px]
            "
          >
            {line}
          </motion.div>
        ))}

        {/* Highlight */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            inline-block
            mt-2
            text-[52px]
            font-black
            leading-[0.95]
            tracking-[-0.05em]
            md:text-[68px]
            xl:text-[88px]
          "
        >
          <span className="relative z-10 text-[#ffcc00]"> People Remember. </span>

          <motion.span
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              delay: 1.15,
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              absolute
              bottom-3
              left-0
              h-4
              w-full
              origin-left
              rounded-full
              bg-[#ffcc00]/20
            "
          />
        </motion.div>
      </div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="
          mt-10
          max-w-[560px]
          text-lg
          leading-8
          text-neutral-600
        "
      >
        Hatsoff Media helps businesses build memorable brands through premium
        website design, branding, digital marketing, content creation, AI
        automation, and high-impact visual experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={fadeUp} className="mt-14">
        <HeroButtons />
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUp} className="mt-20">
        <HeroStats />
      </motion.div>

      {/* Decorative Accent */}
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 120,
        }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="mt-16 h-[2px] rounded-full bg-[#ffcc00]"
      />
    </motion.div>
  );
}
