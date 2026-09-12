"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";
import NumberTicker from "@/components/common/NumberTicker";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Global Brands" },
  { value: "10+", label: "Industries Served" },
];

type PortfolioHeroProps = {
  onOpenVideo: (video: string) => void;
};

export default function PortfolioHero({ onOpenVideo }: PortfolioHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(video.muted);

    if (!video.muted) {
      await video.play().catch(() => undefined);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] pt-24 text-[#111111] sm:pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,204,0,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(17,17,17,0.08),_transparent_25%)]" />
        <motion.div
          animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-14 h-[420px] w-[420px] rounded-full bg-[#ffcc00]/18 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-18">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b] shadow-[0_32px_100px_rgba(17,17,17,0.24)] sm:rounded-[34px]"
        >
          <div className="relative aspect-[16/9] min-h-[520px] w-full overflow-hidden lg:min-h-[720px]">
            <video
              ref={videoRef}
              src="/videos/herosection.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.78] contrast-[1.08] saturate-[1.1]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.83)_0%,rgba(6,6,6,0.46)_34%,rgba(6,6,6,0.12)_58%,rgba(6,6,6,0.28)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,204,0,0.22),transparent_20%),radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-[#070707]/10 to-transparent" />

            <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/80 backdrop-blur-sm sm:left-8 sm:top-8">
              <span className="h-2 w-2 rounded-full bg-[#ffcc00]" />
              Portfolio Film
            </div>

            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Turn hero video sound on" : "Mute hero video"}
              className="absolute right-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:bg-black/55 sm:right-8 sm:top-8"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#ffcc00]" />}
              {isMuted ? "Muted" : "Sound on"}
            </button>

            <div className="pointer-events-none absolute right-5 top-24 z-10 hidden w-[210px] rotate-[12deg] rounded-[24px] border border-white/15 bg-[#e9dca8]/10 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:block lg:right-14 lg:top-24 lg:w-[250px]">
              <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.26),rgba(255,204,0,0.1))] p-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/75">A tooth has</p>
                <div className="mt-3 rounded-[14px] bg-[#dfe8d2]/90 p-3 text-[#1a1a1a] shadow-inner">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1a1a1a]/70">Stories</p>
                  <div className="mt-3 h-16 rounded-[10px] bg-[linear-gradient(135deg,#baee8d,#f7f7f7)]" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-24 right-6 z-10 hidden w-[220px] -rotate-[10deg] rounded-[22px] border border-white/15 bg-[#f7f1d2]/10 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-md md:block lg:right-20 lg:bottom-28 lg:w-[250px]">
              <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,204,0,0.08))] p-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/75">Campaign</p>
                <div className="mt-3 rounded-[14px] bg-[#f8f4ea] p-2 text-[#111111] shadow-inner">
                  <div className="h-20 rounded-[10px] bg-[linear-gradient(135deg,#f3d28a,#f5efe4,#d9d2ff)]" />
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-8 lg:p-10">
              <div className="max-w-3xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mb-4 text-[10px] font-black uppercase tracking-[0.32em] text-white/70"
                >
                  Cinematic portfolio
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="max-w-3xl text-[3.2rem] font-black leading-[0.86] tracking-[-0.08em] text-white sm:text-[4.6rem] md:text-[5.5rem] lg:text-[7rem]"
                >
                  Modern
                  <br />
                  <span className="bg-gradient-to-r from-[#ffcc00] via-[#f5d76a] to-white bg-clip-text text-transparent">
                    Portfolio.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-5 max-w-xl text-base font-medium leading-7 text-white/82 sm:text-lg lg:text-xl"
                >
                  A curated portfolio of cinematic video, brand storytelling, and digital design built to feel premium, immersive, and unforgettable.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#ffcc00] px-6 py-3.5 text-sm font-bold text-black shadow-[0_10px_20px_rgba(255,204,0,0.35)] transition-all hover:scale-[1.02] hover:bg-[#f5d352]"
                  >
                    Start a Project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenVideo("/videos/herosection.mp4")}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-[#ffcc00] hover:bg-white/10"
                  >
                    View Video
                    <Play className="h-4 w-4 fill-current" />
                  </button>

                  <button
                    onClick={() => {
                      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
                    }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-[#ffcc00] hover:bg-white/10"
                  >
                    Explore Work
                    <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3"
              >
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black text-white sm:text-3xl">
                      <NumberTicker value={stat.value} delay={0.5 + i * 0.1} />
                    </p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-white/80">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-t from-[#070707]/90 via-[#070707]/15 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
