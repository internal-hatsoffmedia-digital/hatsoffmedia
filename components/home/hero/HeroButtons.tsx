"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Primary Button */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/contact"
          className="
            group
            relative
            inline-flex
            items-center
            justify-center
            gap-3
            overflow-hidden
            rounded-full
            bg-[#ffcc00]
            px-8
            py-4
            text-sm
            font-bold
            text-black
            shadow-[0_12px_30px_rgba(255,204,0,.35)]
            transition-all
            duration-300
            hover:bg-neutral-900
            hover:text-white
            hover:shadow-[0_18px_40px_rgba(0,0,0,.25)]
          "
        >
          {/* Light sweep animation on hover */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

          <span className="relative z-10">Start Your Project</span>

          <motion.span
            className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#ffcc00] transition-colors duration-300 group-hover:bg-[#ffcc00] group-hover:text-black"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </motion.span>
        </Link>
      </motion.div>

      {/* Secondary Button */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href="/portfolio"
          className="
            group
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-neutral-300
            bg-white
            px-8
            py-4
            text-sm
            font-bold
            text-neutral-900
            transition-all
            duration-300
            hover:border-[#ffcc00]
            hover:bg-[#fffdf2]
            hover:shadow-lg
          "
        >
          View Our Work
        </Link>
      </motion.div>
    </div>
  );
}