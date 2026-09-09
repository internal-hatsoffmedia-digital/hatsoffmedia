"use client";

import { motion } from "framer-motion";
import type { Feature } from "./features";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-8 shadow-premium transition-default"
    >
      {/* Gold Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#FFCC00]/15 blur-3xl" />
      </div>

      {/* Icon */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFCC00]/10 text-[#FFCC00] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFCC00] group-hover:text-black">
        <Icon size={30} strokeWidth={2.2} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-8 text-2xl font-bold text-black">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-8 text-neutral-600">
        {feature.description}
      </p>
    </motion.article>
  );
}