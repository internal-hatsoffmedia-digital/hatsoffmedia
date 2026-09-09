"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function LoaderLogo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
      className="relative flex items-center justify-center"
    >
      {/* Soft Glow */}
      <motion.div
        className="absolute h-56 w-56 rounded-full bg-white/20 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src="/logo.png"
          alt="Hatsoff Media"
          width={220}
          height={220}
          priority
          className="h-auto w-[180px] select-none object-contain md:w-[220px]"
        />
      </motion.div>
    </motion.div>
  );
}