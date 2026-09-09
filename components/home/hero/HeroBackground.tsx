"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Large Gold Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="
          absolute
          right-[-12rem]
          top-1/2
          h-[700px]
          w-[700px]
          -translate-y-1/2
          rounded-full
          bg-[#ffcc00]/10
          blur-[140px]
        "
      />

      {/* Secondary Soft Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="
          absolute
          left-[-8rem]
          top-[-6rem]
          h-[420px]
          w-[420px]
          rounded-full
          bg-yellow-100/40
          blur-[120px]
        "
      />

      {/* Premium Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#000 1px,transparent 1px),
            linear-gradient(to bottom,#000 1px,transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(255,255,255,.18) 55%, white 100%)",
        }}
      />

      {/* Top Light */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[520px]
          w-[900px]
          -translate-x-1/2
          bg-gradient-to-b
          from-yellow-100/30
          to-transparent
          blur-3xl
        "
      />

      {/* Decorative Lines */}
      <div className="absolute left-16 top-32 h-44 w-px bg-gradient-to-b from-transparent via-yellow-300/40 to-transparent" />

      <div className="absolute right-24 bottom-24 h-52 w-px bg-gradient-to-b from-transparent via-yellow-300/30 to-transparent" />

      <div className="absolute top-36 left-20 h-px w-40 bg-gradient-to-r from-transparent via-yellow-300/40 to-transparent" />

      <div className="absolute bottom-28 right-20 h-px w-52 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </div>
  );
}