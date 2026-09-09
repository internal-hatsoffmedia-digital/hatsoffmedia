"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      {/* Primary Button */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Link
          href="/contact"
          className="
          group
          relative
          flex
          items-center
          gap-4
          overflow-hidden
          rounded-full
          bg-white
          px-9
          py-4
          text-sm
          font-bold
          text-black
          transition-all
          duration-500
          hover:bg-[#FFCC00]
          hover:shadow-[0_20px_60px_rgba(255,204,0,0.25)]
          "
        >
          {/* Shine Animation */}

          <span
            className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/70
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
            "
          />

          <span className="relative z-10">Start Project</span>

          <span
            className="
            relative
            z-10
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
            transition-all
            duration-500
            group-hover:rotate-45
            "
          >
            <ArrowUpRight size={16} />
          </span>
        </Link>
      </motion.div>

      {/* Secondary Button */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        whileTap={{
          scale: 0.95,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Link
          href="/portfolio"
          className="
          group
          flex
          items-center
          gap-4
          rounded-full
          border
          border-white/25
          bg-white/10
          px-9
          py-4
          text-sm
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-500
          hover:border-[#FFCC00]
          hover:bg-white/15
          hover:text-[#FFCC00]
          "
        >
          {/* Animated Indicator */}

          <span
            className="
            relative
            flex
            h-3
            w-3
            "
          >
            <span
              className="
              absolute
              h-full
              w-full
              animate-ping
              rounded-full
              bg-[#FFCC00]
              opacity-60
              "
            />

            <span
              className="
              relative
              h-3
              w-3
              rounded-full
              bg-[#FFCC00]
              "
            />
          </span>

          <span className="text-white transition-colors group-hover:text-[#FFCC00]">
            View Our Work
          </span>

          <ArrowUpRight
            size={17}
            className="
            transition-transform
            duration-500
            group-hover:-translate-y-1
            group-hover:translate-x-1
            "
          />
        </Link>
      </motion.div>
    </div>
  );
}
