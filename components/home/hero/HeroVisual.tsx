"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroVisual() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 120,
    damping: 18,
  });

  const mouseY = useSpring(y, {
    stiffness: 120,
    damping: 18,
  });

  const rotateX = useTransform(mouseY, [-120, 120], [6, -6]);
  const rotateY = useTransform(mouseX, [-120, 120], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;

    x.set(dx);
    y.set(dy);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  // Variants for parent propagation
  const shineVariants = {
    initial: { x: "-120%" },
    hover: { x: "120%" },
  };

  const arrowVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex justify-center lg:justify-end"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        initial="initial"
        whileHover="hover"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          w-full
          max-w-[620px]
          overflow-hidden
          rounded-[36px]
          border
          border-neutral-200
          bg-white
          shadow-[0_40px_120px_rgba(0,0,0,.08)]
        "
      >
        {/* Gold Border / Sheen Sweep */}
        <motion.div
          variants={shineVariants}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#ffcc00]/25 to-transparent"
        />

        {/* Header */}
        <div className="border-b border-neutral-200 p-8">
          <p className="text-xs font-semibold tracking-[0.35em] text-neutral-500 uppercase">
            Featured Project
          </p>

          <h3 className="mt-3 text-3xl font-black">Hatsoff Media</h3>

          <p className="mt-3 text-neutral-500 leading-7">
            Branding, Website, Motion Graphics & Performance Marketing.
          </p>
        </div>

        {/* Preview */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            initial={{
              scale: 1.15,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/work/hatsoff-homepage.jpg"
              alt="Hatsoff Website"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-8">
          <div>
            <p className="text-sm text-neutral-500">Services</p>

            <h4 className="mt-2 text-lg font-bold">Website • Branding • AI</h4>
          </div>

          <motion.div
            variants={arrowVariants}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#ffcc00]
              font-bold
              text-black
              shadow-[0_4px_16px_rgba(255,204,0,0.4)]
            "
          >
            ↗
          </motion.div>
        </div>
      </motion.div>

      {/* Modern Floating Metric Badge 1 (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          -left-6
          top-16
          z-20
          hidden
          items-center
          gap-3
          rounded-2xl
          border
          border-black/5
          bg-white/90
          px-4
          py-3
          shadow-[0_16px_35px_rgba(0,0,0,0.08)]
          backdrop-blur-md
          animate-float-slow
          sm:flex
        "
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffcc00]/20 text-lg">
          📈
        </div>
        <div>
          <p className="text-xs font-bold text-neutral-900">+340% Traffic</p>
          <p className="text-[10px] font-medium text-neutral-500">Average Brand Growth</p>
        </div>
      </motion.div>

      {/* Modern Floating Metric Badge 2 (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          -bottom-6
          right-6
          z-20
          hidden
          items-center
          gap-3
          rounded-2xl
          border
          border-black/5
          bg-white/95
          px-5
          py-3.5
          shadow-[0_16px_35px_rgba(0,0,0,0.1)]
          backdrop-blur-md
          animate-float-gentle
          sm:flex
        "
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffcc00] text-black font-black text-sm">
          5★
        </div>
        <div>
          <p className="text-xs font-bold text-neutral-900">Rated Excellent</p>
          <p className="text-[10px] font-medium text-neutral-500">60+ Global Partners</p>
        </div>
      </motion.div>
    </motion.div>
  );
}