"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function LoaderLine() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="relative h-[2px] w-44 overflow-hidden rounded-full bg-black/10">
        {/* Animated Fill */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full bg-black"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />

        {/* Light Sweep */}
        <motion.div
          className="absolute top-1/2 h-6 w-10 -translate-y-1/2 rounded-full bg-white/70 blur-lg"
          initial={{ x: -60 }}
          animate={{ x: 240 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}