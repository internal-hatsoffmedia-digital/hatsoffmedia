"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Share2,
  Megaphone,
  Video,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Flame,
} from "lucide-react";

const allServices = [
  {
    id: "branding",
    title: "Graphic Design & Branding",
    subtitle: "Logos, Creative Posters & Guidelines",
    tag: "✦ Design Direction",
    icon: Palette,
    position: "left-2 lg:-left-12 top-6 lg:top-8",
    floatAnim: { y: [0, -15, 0], x: [0, 6, 0] },
    duration: 5.5,
  },
  {
    id: "web",
    title: "Website Design & Dev",
    subtitle: "High-Conversion Next.js & UX",
    tag: "⚡ Modern Web",
    icon: Code2,
    position: "right-2 lg:-right-12 top-6 lg:top-8",
    floatAnim: { y: [0, 16, 0], x: [0, -6, 0] },
    duration: 6.2,
  },
  {
    id: "social",
    title: "Social Media Management",
    subtitle: "Viral Reels, Content & Community",
    tag: "🔥 10M+ Reach",
    icon: Share2,
    position: "left-1 lg:-left-14 top-[44%] -translate-y-1/2",
    floatAnim: { y: [0, 14, 0], x: [0, -7, 0] },
    duration: 6.8,
  },
  {
    id: "marketing",
    title: "Performance Marketing",
    subtitle: "Meta & Google Ads • Lead Gen",
    tag: "📈 4.8x ROAS",
    icon: Megaphone,
    position: "right-1 lg:-right-14 top-[44%] -translate-y-1/2",
    floatAnim: { y: [0, -16, 0], x: [0, 8, 0] },
    duration: 5.8,
  },
  {
    id: "video",
    title: "Video Production & Motion",
    subtitle: "Commercials, 4K VFX & Podcasts",
    tag: "🎬 Cinematic",
    icon: Video,
    position: "left-2 lg:-left-10 bottom-6 lg:bottom-8",
    floatAnim: { y: [0, -12, 0], x: [0, 8, 0] },
    duration: 6.5,
  },
  {
    id: "ai",
    title: "AI Creative Production",
    subtitle: "Generative Video & Rapid Scale",
    tag: "✨ Next-Gen AI",
    icon: Sparkles,
    position: "right-2 lg:-right-10 bottom-6 lg:bottom-8",
    floatAnim: { y: [0, 15, 0], x: [0, -8, 0] },
    duration: 5.2,
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Ambient Background Glows */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-16 h-[550px] w-[550px] rounded-full bg-[#FFCC00]/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [-20, 20, -20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 top-40 h-[600px] w-[600px] rounded-full bg-[#FCEB77]/25 blur-[180px]"
      />

      {/* Subtle fine grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER & VALUE STATEMENT
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ffcc00]/30 bg-[#FFCC00]/15 px-3.5 py-1 text-xs font-bold tracking-[0.25em] uppercase text-[#8F6B00]">
            <Sparkles size={13} className="text-[#B8860B]" />
            <span>Full-Spectrum Capabilities</span>
          </div>

          <h1 className="mt-7 text-4xl font-black leading-[0.92] tracking-[-0.06em] text-black sm:text-6xl md:text-7xl xl:text-[92px]">
            We Create
            <br />
            Digital Experiences
            <br />
            <span className="text-[#FFCC00] drop-shadow-[0_2px_15px_rgba(255,204,0,0.3)]">
              That Build Brands.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-8 md:text-xl">
            From strategic brand identity and high-conversion web development to viral video production, performance marketing, and AI-accelerated creativity — we engineer solutions that dominate your market.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FFCC00] px-7 py-4 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(255,204,0,0.38)] transition-all duration-300 hover:bg-[#FFE04D] hover:scale-105 hover:shadow-[0_14px_40px_rgba(255,204,0,0.5)]"
            >
              <span className="font-bold tracking-tight text-black">Start Your Project</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </span>
            </Link>

            <a
              href="#service-showcase"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/80 px-6 py-4 text-sm font-semibold text-neutral-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-black hover:bg-white hover:text-black"
            >
              <span>Explore All 6 Services</span>
              <span className="text-neutral-400">↓</span>
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            VISUAL SHOWCASE AREA WITH ALL 6 FLOATING MODERN CARDS
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 sm:mt-20 lg:mt-24 h-[580px] sm:h-[620px] lg:h-[640px]"
        >
          {/* Main Central Studio Workstation Canvas */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] sm:h-[470px] lg:h-[500px] w-full max-w-[940px] overflow-hidden rounded-[36px] sm:rounded-[48px] border border-neutral-200/90 shadow-[0_25px_70px_rgba(0,0,0,0.14)]"
          >
            <Image
              src="/images/services/services-creative-showcase.jpg"
              alt="Hatsoff Creative Services Studio & Workstation"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 940px"
              className="object-cover object-center select-none transition-transform duration-700 hover:scale-105"
            />

            {/* Subtle Gradient Overlays for High-End Cinematic Feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

            {/* Top Banner Tag: Creative Specialists */}
            <div className="absolute top-5 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
              <span>In-House Graphic Designers & Creative Specialists</span>
            </div>

            {/* Central Studio Live Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/75 px-5 py-2.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Hatsoff Creative Lab • Graphic Designers, Video Editors & Web Developers</span>
            </div>
          </motion.div>

          {/* =========================================================
              FLOATING MODERN VISUALS & ALL 6 SERVICE CARDS
          ========================================================== */}
          <div className="absolute inset-0 pointer-events-none">
            {allServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  animate={service.floatAnim}
                  transition={{
                    duration: service.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                  className={`pointer-events-auto absolute ${service.position}`}
                >
                  <a
                    href="#service-showcase"
                    className="group relative flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/90 p-3 sm:p-3.5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 hover:border-[#FFCC00] hover:bg-white hover:shadow-[0_20px_45px_rgba(255,204,0,0.24)]"
                  >
                    {/* Glowing Icon Badge in Brand Gold */}
                    <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FFCC00] via-[#FFD633] to-[#FFF0A0] text-black shadow-[0_0_15px_rgba(255,204,0,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={19} strokeWidth={2.3} />
                    </div>

                    {/* Text & Tag */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold tracking-tight text-black group-hover:text-[#8F6B00] transition-colors">
                          {service.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-medium text-neutral-500 hidden sm:block">
                        {service.subtitle}
                      </span>
                      <span className="mt-0.5 inline-block text-[10px] font-bold uppercase tracking-wider text-[#B8860B]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Subtle Hover Action Arrow */}
                    <div className="ml-1 hidden h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:bg-[#FFCC00] group-hover:text-black md:flex">
                      <ArrowUpRight size={13} />
                    </div>
                  </a>
                </motion.div>
              );
            })}

            {/* Additional Modern Floating Visual Metric Card (Top Center) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-auto absolute left-1/2 -top-4 -translate-x-1/2 hidden md:flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-2 text-xs font-bold text-black shadow-xl backdrop-blur-xl hover:scale-105 transition-transform"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFCC00] text-black">
                <Flame size={12} />
              </span>
              <span>10000+ Projects Delivered • 120+ Happy Clients</span>
            </motion.div>

            {/* Additional Modern Floating Visual Metric Card (Bottom Center) */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [1, -1, 1],
              }}
              transition={{
                duration: 6.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-auto absolute left-1/2 -bottom-4 -translate-x-1/2 hidden md:flex items-center gap-2 rounded-full border border-[#FFCC00]/50 bg-black px-4 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-black">
                <TrendingUp size={12} strokeWidth={3} />
              </span>
              <span>3.8x Average Return On Marketing Ad Spend</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
