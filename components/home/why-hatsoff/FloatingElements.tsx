"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <>
      {/* Main Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-20
          -top-20
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#FFCC00]/20
          blur-[120px]
        "
      />


      {/* Left Soft Glow */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          bottom-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#FFCC00]/10
          blur-[100px]
        "
      />


      {/* Floating Gold Dot */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[18%]
          top-[25%]
          h-3
          w-3
          rounded-full
          bg-[#FFCC00]
        "
      />


      {/* Subtle Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-20
          bottom-10
          h-32
          w-32
          rounded-full
          border
          border-[#FFCC00]/20
        "
      />


      {/* Light Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/[0.02]
          to-transparent
        "
      />
    </>
  );
}