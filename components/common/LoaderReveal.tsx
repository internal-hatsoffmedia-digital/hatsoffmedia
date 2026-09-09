"use client";

import { motion } from "framer-motion";

export default function LoaderReveal() {
  return (
    <>
      {/* Top Panel */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-1/2 bg-[#080808]"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          delay: 2.4,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Bottom Panel */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 h-1/2 bg-[#080808]"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{
          delay: 2.4,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Center Light */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 h-[2px] w-0 -translate-x-1/2 -translate-y-1/2 bg-[#FFCC00]"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          delay: 1.6,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Sweep Glow */}
      <motion.div
        className="absolute top-0 z-20 h-full w-32 bg-gradient-to-r from-transparent via-[#FFCC00]/30 to-transparent blur-2xl"
        initial={{ x: "-20%" }}
        animate={{ x: "120vw" }}
        transition={{
          delay: 1.8,
          duration: 1.2,
          ease: "easeInOut",
        }}
      />
    </>
  );
}