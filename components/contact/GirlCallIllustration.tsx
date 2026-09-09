"use client";

import { motion } from "framer-motion";
import { PhoneCall, Heart, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";

export default function GirlCallIllustration() {
  return (
    <div className="relative flex h-[550px] w-full max-w-xl items-center justify-center overflow-hidden mx-auto select-none">
      {/* Background Soft Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[420px] w-[420px] rounded-full bg-[#fceb77]/50 blur-[100px]"
      />

      {/* Orbiting Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[460px] w-[460px] rounded-full border border-dashed border-[#ffcc00]/40 pointer-events-none"
      />

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-16 z-20"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-[#ffcc00]/30 bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-lg">
          <div className="rounded-full bg-[#ffcc00]/20 p-2">
            <PhoneCall className="text-[#ffcc00]" size={18} />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-wider text-[#4c4c4c]/50 uppercase">Status</p>
            <p className="text-xs font-bold text-[#4c4c4c]">Connected</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-6 top-28 z-20"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-[#ffcc00]/30 bg-white/90 backdrop-blur-md px-3.5 py-2 shadow-lg">
          <Heart className="text-rose-500 fill-rose-500" size={16} />
          <span className="text-xs font-bold text-[#4c4c4c]">Friendly Support</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-10 bottom-24 z-20"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-white/90 backdrop-blur-md px-3.5 py-2 shadow-lg">
          <CheckCircle2 className="text-emerald-500" size={16} />
          <span className="text-xs font-bold text-[#4c4c4c]">24/7 Available</span>
        </div>
      </motion.div>

      {/* SVG Graphic - Girl on Phone */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewBox="0 0 500 500"
        className="relative z-10 h-full w-full"
        fill="none"
      >
        {/* Decorative Circle Card Background */}
        <circle cx="250" cy="260" r="180" fill="white" className="shadow-2xl" />
        <circle cx="250" cy="260" r="180" stroke="#ffcc00" strokeWidth="3" strokeOpacity="0.2" />

        {/* Floating Chat Bubble */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="100" y="140" width="100" height="50" rx="16" fill="#ffcc00" />
          <path d="M130 190 L120 202 L140 190 Z" fill="#ffcc00" />
          <MessageSquare x="140" y="155" size={20} className="text-[#4c4c4c]" />
        </motion.g>

        {/* Girl Base Group */}
        <g id="girl-character">
          {/* Hair Back */}
          <path
            d="M170 210 C160 300 180 370 220 390 C270 390 320 360 330 250 C330 170 290 140 240 140 C190 140 170 170 170 210 Z"
            fill="#3a3a3a"
          />

          {/* Shoulders / Top */}
          <path
            d="M160 410 C160 360 200 340 250 340 C300 340 340 360 340 410 L350 450 L150 450 Z"
            fill="#ffcc00"
          />
          {/* Jacket / Collar detail */}
          <path
            d="M210 340 L250 390 L290 340"
            stroke="#4c4c4c"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Neck */}
          <rect x="235" y="300" width="30" height="45" rx="10" fill="#fddcb4" />

          {/* Head & Face */}
          <path
            d="M200 230 C200 290 220 315 250 315 C280 315 300 290 300 230 C300 180 280 175 250 175 C220 175 200 180 200 230 Z"
            fill="#fddcb4"
          />

          {/* Hair Front / Bangs */}
          <path
            d="M195 210 C210 160 270 160 305 200 C290 170 260 165 240 165 C210 165 200 185 195 210 Z"
            fill="#2a2a2a"
          />

          {/* Eyes (Happy Closed / Smiling) */}
          <path
            d="M220 235 Q230 243 240 235"
            stroke="#4c4c4c"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M265 235 Q275 243 285 235"
            stroke="#4c4c4c"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Blush */}
          <ellipse cx="215" cy="248" rx="8" ry="5" fill="#f49898" opacity="0.6" />
          <ellipse cx="288" cy="248" rx="8" ry="5" fill="#f49898" opacity="0.6" />

          {/* Smile */}
          <path
            d="M242 262 Q252 272 262 262"
            stroke="#4c4c4c"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Earring */}
          <circle cx="198" cy="245" r="5" fill="#ffcc00" />

          {/* Hand holding Smartphone */}
          <g id="hand-and-phone">
            {/* Arm / Forearm rising */}
            <path
              d="M320 370 Q310 300 285 260"
              stroke="#fddcb4"
              strokeWidth="24"
              strokeLinecap="round"
            />
            {/* Sleeve */}
            <path
              d="M335 390 L305 325"
              stroke="#ffcc00"
              strokeWidth="28"
              strokeLinecap="round"
            />

            {/* Smartphone Container */}
            <motion.g
              animate={{
                rotate: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ originX: "280px", originY: "240px" }}
            >
              {/* Smartphone Body */}
              <rect
                x="272"
                y="200"
                width="36"
                height="70"
                rx="8"
                fill="#4c4c4c"
              />
              <rect
                x="275"
                y="205"
                width="30"
                height="60"
                rx="5"
                fill="#38bdf8"
              />

              {/* Screen Wave Animation */}
              <motion.circle
                cx="290"
                cy="235"
                r="8"
                fill="white"
                opacity="0.5"
                animate={{ scale: [0.8, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />

              {/* Call Screen Icon */}
              <PhoneCall
                x="282"
                y="227"
                size={16}
                className="text-white relative z-10"
              />

              {/* Fingers wrapping phone */}
              <path
                d="M270 220 Q265 225 272 230"
                stroke="#fddcb4"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M270 232 Q265 237 272 242"
                stroke="#fddcb4"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M270 244 Q265 249 272 254"
                stroke="#fddcb4"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </motion.g>
          </g>
        </g>

        {/* Audio Waves / Calling Signal */}
        <motion.path
          d="M320 210 Q335 220 320 230"
          stroke="#ffcc00"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M330 200 Q350 220 330 240"
          stroke="#ffcc00"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />

        {/* Floating Sparkles */}
        <motion.g
          animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 90, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles x="130" y="260" size={22} className="text-[#ffcc00]" />
          <Sparkles x="340" y="140" size={26} className="text-[#ffcc00]" />
        </motion.g>
      </motion.svg>
    </div>
  );
}