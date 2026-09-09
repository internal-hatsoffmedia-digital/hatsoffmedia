"use client";

import { motion } from "framer-motion";

export default function SiteBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base White */}
      <div className="absolute inset-0 bg-white" />

      {/* Gold Ambient Glow Left */}

      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -left-60
        top-20
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#FFCC00]/15
        blur-[180px]
        "
      />

      {/* Gold Ambient Glow Right */}

      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -right-60
        top-[30%]
        h-[700px]
        w-[700px]
        rounded-full
        bg-[#FFD84D]/20
        blur-[220px]
        "
      />

      {/* Premium Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.035]
        "
        style={{
          backgroundImage: `

          linear-gradient(
          rgba(0,0,0,.25) 1px,
          transparent 1px
          ),

          linear-gradient(
          90deg,
          rgba(0,0,0,.25) 1px,
          transparent 1px
          )

          `,

          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Light */}

      <motion.div
        animate={{
          y: [0, 40, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[45%]
        top-32
        h-3
        w-3
        rounded-full
        bg-[#FFCC00]
        shadow-[0_0_40px_#FFCC00]
        "
      />

      {/* Soft Circle Outline */}

      <div
        className="
      absolute
      right-[15%]
      top-[20%]
      h-[500px]
      w-[500px]
      rounded-full
      border
      border-[#FFCC00]/20
      "
      />
    </div>
  );
}
