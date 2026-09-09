"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const easeCustom: [number, number, number, number] = [0.76, 0, 0.24, 1];

const CAPABILITIES = [
  "Brand Identity & Strategy",
  "Cinematic Video Production",
  "High-Impact Campaigns",
  "Modern Web Experiences",
];

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [capabilityIndex, setCapabilityIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  // Real-time Chennai time format
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime("11:30 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Capability switcher ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setCapabilityIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 550);
    return () => clearInterval(interval);
  }, []);

  // Smooth realistic counter ticker from 00 to 100%
  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      // Non-linear realistic progress increments
      const step = current < 30 ? 4 : current < 70 ? 6 : current < 90 ? 3 : 2;
      current = Math.min(current + step, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        // Short pause at 100% before triggering smooth curtain exit
        setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = "";
        }, 320);
      }
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <div className="fixed inset-0 z-[999999] pointer-events-auto overflow-hidden">
          {/* 4-Column Modern Curtain Reveal Panels */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 pointer-events-none z-10">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-full w-full bg-[#080808] border-r border-white/[0.03] last:border-r-0"
                initial={{ y: 0 }}
                exit={{
                  y: "-100%",
                  transition: {
                    duration: 0.85,
                    delay: i * 0.07,
                    ease: easeCustom,
                  },
                }}
              />
            ))}
          </div>

          {/* Loader Interior Content Layer (fades up/out right before columns lift) */}
          <motion.div
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10 lg:p-14"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -25,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
          >
            {/* Ambient Radial Golden Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFCC00]/12 blur-[140px]" />

            {/* Subtle Technical Grid Lines */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* ========================================================
                TOP BAR: Studio Brand & Realtime Metatags
            ======================================================== */}
            <div className="relative z-30 flex items-center justify-between text-xs tracking-wider text-neutral-400 font-mono">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFCC00]" />
                </span>
                <span className="font-semibold text-white tracking-widest uppercase">
                  HATSOFF MEDIA
                </span>
                <span className="hidden sm:inline text-neutral-600">/</span>
                <span className="hidden sm:inline text-neutral-500 uppercase">
                  PVT. LTD.
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] sm:text-xs">
                <span className="hidden md:inline text-neutral-500">
                  CHENNAI, IN [13.08° N, 80.27° E]
                </span>
                {currentTime && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[#FFCC00] font-mono">
                    {currentTime} IST
                  </span>
                )}
              </div>
            </div>

            {/* ========================================================
                CENTER: Emblem & Cinematic Typography
            ======================================================== */}
            <div className="relative z-30 flex flex-col items-center justify-center my-auto py-8">
              {/* Central Glowing Icon / Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: easeCustom }}
                className="relative mb-8"
              >
                {/* Golden pulsing aura ring */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#FFCC00]/25 via-[#FFE066]/10 to-[#FFCC00]/20 blur-xl animate-pulse" />

                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl border border-white/10 bg-neutral-900/90 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                  <Image
                    src="/logo3.png"
                    alt="Hatsoff Media"
                    width={80}
                    height={80}
                    priority
                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_4px_12px_rgba(255,204,0,0.35)]"
                  />
                </div>
              </motion.div>

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="h-1 w-1 rounded-full bg-[#FFCC00]" />
                <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
                  Full-Service Creative Agency
                </span>
                <span className="h-1 w-1 rounded-full bg-[#FFCC00]" />
              </motion.div>

              {/* Main Display Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: easeCustom }}
                className="text-center font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
              >
                HATSOFF <span className="text-[#FFCC00]">MEDIA</span>
              </motion.h1>

              {/* Dynamic Discipline/Capability Ticker */}
              <div className="mt-4 h-8 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={capabilityIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-400"
                  >
                    <span className="text-[#FFCC00]">✦</span>
                    <span>{CAPABILITIES[capabilityIndex]}</span>
                    <span className="text-[#FFCC00]">✦</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ========================================================
                BOTTOM: Precision Progress Line & Percent Counter
            ======================================================== */}
            <div className="relative z-30 flex flex-col gap-4">
              {/* Ultra-fine Golden Precision Progress Track */}
              <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FFCC00] via-[#FFE27A] to-[#FFCC00] shadow-[0_0_12px_rgba(255,204,0,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Tagline & Counter Split */}
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <p className="hidden sm:inline text-neutral-400 font-normal">
                    Turning Businesses Into{" "}
                    <span className="text-white font-medium">
                      Brands People Remember.
                    </span>
                  </p>
                  <p className="sm:hidden text-neutral-400 text-xs">
                    Loading Experience...
                  </p>
                </div>

                {/* Big Monospace Percent Counter */}
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-xs text-neutral-500 font-bold">LDR</span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                    {progress.toString().padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold text-[#FFCC00]">%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}