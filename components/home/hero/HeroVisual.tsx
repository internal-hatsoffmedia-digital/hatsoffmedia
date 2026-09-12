"use client";

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
      className="relative flex justify-center overflow-visible lg:justify-end"
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
          z-10
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
        <motion.div
          variants={shineVariants}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#ffcc00]/25 to-transparent"
        />

        <div className="border-b border-neutral-200 p-8">
          <p className="text-xs font-semibold tracking-[0.35em] text-neutral-500 uppercase">
            Featured Project
          </p>

          <h3 className="mt-3 text-3xl font-black">Hatsoff Media</h3>

          <p className="mt-3 text-neutral-500 leading-7">
            Branding, Website, Motion Graphics & Performance Marketing.
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-black">
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
            <video
              src="/videos/herosection.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        </div>

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

      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          -left-2
          top-14
          z-30
          hidden
          items-center
          gap-3
          rounded-[22px]
          border
          border-[#171717]/10
          bg-white/80
          px-4
          py-3
          shadow-[0_18px_40px_rgba(15,15,15,0.12)]
          backdrop-blur-xl
          ring-1
          ring-white/70
          sm:flex
        "
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffcc00]/20 text-lg shadow-inner shadow-[#ffcc00]/30">
          📈
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">Growth</p>
          <p className="text-sm font-black text-neutral-900">+340% Traffic</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          -bottom-4
          right-4
          z-30
          hidden
          items-center
          gap-3
          rounded-[22px]
          border
          border-[#171717]/10
          bg-[#fffdf8]/90
          px-4
          py-3
          shadow-[0_18px_40px_rgba(15,15,15,0.12)]
          backdrop-blur-xl
          ring-1
          ring-white/80
          sm:flex
        "
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffcc00] text-sm font-black text-black shadow-[0_10px_20px_rgba(255,204,0,0.35)]">
          5★
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">Clients</p>
          <p className="text-sm font-black text-neutral-900">Rated Excellent</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
