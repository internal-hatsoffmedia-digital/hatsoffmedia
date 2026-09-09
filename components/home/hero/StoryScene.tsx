"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoryScene() {
  return (
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
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto h-[760px] w-full max-w-[650px]"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[540px] w-[540px] rounded-full bg-[#ffcc00]/10 blur-[140px]" />
      </div>

      {/* Editorial Label */}
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute left-0 top-6 z-30 text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-500"
      >
        Website Design
      </motion.span>

      {/* Main Image */}
      <motion.div
        initial={{
          scale: 1.08,
          clipPath: "inset(20% 18% round 36px)",
        }}
        animate={{
          scale: 1,
          clipPath: "inset(0% 0% round 36px)",
        }}
        transition={{
          duration: 1.3,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-10 top-16 h-[620px] w-[500px] overflow-hidden rounded-[36px] shadow-[0_50px_120px_rgba(0,0,0,.12)]"
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Hatsoff Media"
          fill
          priority
          className="object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Featured Work
          </p>

          <h3 className="mt-2 text-3xl font-black text-white">
            Hatsoff Media
          </h3>
        </div>
      </motion.div>

      {/* Secondary Image */}
      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          delay: 0.9,
          duration: 0.8,
        }}
        className="absolute bottom-8 right-0 h-[250px] w-[210px] overflow-hidden rounded-[28px] border-4 border-white shadow-2xl"
      >
        <Image
          src="/images/hero/hero-detail.jpg"
          alt="Branding"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </motion.div>

      {/* Branding */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-140 -left-6 text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-500"
      >
        Branding
      </motion.span>

      {/* Video */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute right-[-30px] top-1/2 -translate-y-1/2 rotate-90 text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-500"
      >
        Video Production
      </motion.span>

      {/* Marketing */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-0 right-8 text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-500"
      >
        Digital Marketing
      </motion.span>

      {/* Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 140 }}
        transition={{
          delay: 1.1,
          duration: 0.8,
        }}
        className="absolute right-0 top-12 h-[2px] rounded-full bg-[#ffcc00]"
      />

      {/* Corner Frame */}
      <div className="absolute left-2 top-2 h-12 w-12 border-l border-t border-[#ffcc00]/60" />
      <div className="absolute bottom-2 right-2 h-12 w-12 border-b border-r border-[#ffcc00]/60" />
    </motion.div>
  );
}