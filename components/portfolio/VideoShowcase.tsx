"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";

const cinematicVideos = [
  {
    id: 1,
    title: "Travel Videos",
    category: "Cinematic Campaign",
    video: "/videos/thailand.mp4",
    description: "Travel-led storytelling with rich atmosphere, layered motion, and premium color grading.",
  },
  {
    id: 2,
    title: "Next Stop",
    category: "Brand Film",
    video: "/videos/next-stop.mp4",
    description: "A modern, high-energy visual narrative shaped for digital-first storytelling.",
  },
  {
    id: 3,
    title: "Cinematic",
    category: "Short Film",
    video: "/videos/cinimatic.mp4",
    description: "A moody cinematic edit built to feel like a premium YouTube feature trailer.",
  },
];

const reelVideos = [
  {
    id: 4,
    title: "Amma Naana",
    category: "Reel Edit",
    video: "/videos/amma-naana.mp4",
  },
  {
    id: 5,
    title: "Collab Kit",
    category: "Social Reel",
    video: "/videos/collab-kit.mp4",
  },
  {
    id: 6,
    title: "AI Video",
    category: "AI Campaign",
    video: "/videos/ai-video.mp4",
  },
  {
    id: 7,
    title: "Deekshu",
    category: "Clinic Reel",
    video: "/videos/deekshu-clinic.mp4",
  },
  {
    id: 8,
    title: "Briyani",
    category: "Food Reel",
    video: "/videos/Briyani.mp4",
  },
  {
    id: 9,
    title: "Briyani D",
    category: "Food Story",
    video: "/videos/BriyaniD.mp4",
  },
  {
    id: 10,
    title: "AI Launch",
    category: "Campaign Reel",
    video: "/videos/AI.mp4",
  },
];

const marqueeVideos = [...reelVideos, ...reelVideos];

type VideoShowcaseProps = {
  onOpenVideo: (video: string) => void;
};

export default function VideoShowcase({ onOpenVideo }: VideoShowcaseProps) {
  const reelCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = reelCarouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".reel-card") as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 20 : 280;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] pb-20 pt-8 sm:pb-28 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-black/60">
              Motion Portfolio
            </p>
            <h2 className="text-4xl font-black text-[#111111] sm:text-5xl lg:text-6xl">
              Cinematic stories <span className="text-[#c89b00]">that move.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-black/60">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#c89b00]" />
            16:9 campaign visuals + short-form reels
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.55fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-black shadow-[0_30px_80px_rgba(17,17,17,0.18)]"
          >
            <div className="aspect-video overflow-hidden">
              <video
                src={cinematicVideos[0].video}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
                  {cinematicVideos[0].category}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffcc00] text-black shadow-lg">
                  <Play className="ml-0.5 h-4 w-4 fill-black" />
                </span>
              </div>

              <h3 className="text-2xl font-black text-white sm:text-4xl">{cinematicVideos[0].title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                {cinematicVideos[0].description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {cinematicVideos.slice(1).map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-[0_18px_50px_rgba(17,17,17,0.15)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <video
                    src={video.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-end p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/50">Reels</p>
              <h3 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">Short-form impact</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll reel carousel left"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll reel carousel right"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden pb-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f5ef] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f5ef] to-transparent" />

            <div ref={reelCarouselRef} className="flex w-full gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {marqueeVideos.map((video, index) => (
                <motion.div
                  key={`${video.id}-${index}`}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  className="reel-card group relative w-[260px] shrink-0 overflow-hidden rounded-[26px] border border-black/10 bg-[#101010] shadow-[0_18px_44px_rgba(17,17,17,0.12)] sm:w-[280px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden">
                    <video
                      src={video.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/12 to-transparent" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => onOpenVideo(video.video)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-black/35"
                      >
                        View Video
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
