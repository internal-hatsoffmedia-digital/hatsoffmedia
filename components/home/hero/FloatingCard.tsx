"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
}: FloatingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-[#FFCC00]/50
        hover:shadow-2xl
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#FFCC00]/0
          via-[#FFCC00]/5
          to-[#FFCC00]/0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative flex items-center gap-5">
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#FFCC00]/10
            text-[#ffcc00]
            transition-all
            duration-300
            group-hover:bg-[#FFCC00]
            group-hover:text-black
          "
        >
          {icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-black">
            {title}
          </h4>

          <p className="mt-1 text-sm leading-6 text-neutral-500">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}