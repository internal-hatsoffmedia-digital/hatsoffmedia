"use client";

import { motion } from "framer-motion";
import StoryScene from "./StoryScene";

export default function HeroStory() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        lg:justify-end
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[680px]
          aspect-[4/5]
          select-none
        "
      >
        <StoryScene />
      </div>
    </motion.div>
  );
}