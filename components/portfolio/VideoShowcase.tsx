"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play } from "lucide-react";
import CreativeDirectionCarousel from "@/components/portfolio/CreativeDirectionCarousel";

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

const shortsVideos = [
  "/videos/ai-video.mp4",
  "/videos/AI.mp4",
  "/videos/amma-naana.mp4",
  "/videos/Briyani.mp4",
  "/videos/BriyaniD.mp4",
  "/videos/deekshu-clinic.mp4",
  "/videos/Product.mp4",
  "/videos/My Video-2.mp4",
  "/videos/My Video-3.mp4",
  "/videos/My Video-4.mp4",
  "/videos/Mobile boodham (1).mp4",
  "/videos/collab-kit.mp4",
];

type VideoShowcaseProps = {
  onOpenVideo: (video: string) => void;
};

export default function VideoShowcase({ onOpenVideo }: VideoShowcaseProps) {
  const shortsCarouselRef = useRef<HTMLDivElement>(null);

  const scrollShortsCarousel = (direction: "left" | "right") => {
    const container = shortsCarouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".shorts-card") as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 18 : 280;

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

        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/50">Short-form</p>
              <h3 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">Reels & shorts</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollShortsCarousel("left")}
                aria-label="Scroll shorts carousel left"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollShortsCarousel("right")}
                aria-label="Scroll shorts carousel right"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden pb-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f7f5ef] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f7f5ef] to-transparent" />

            <div
              ref={shortsCarouselRef}
              className="flex w-full gap-4 overflow-x-auto pb-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            >
              {shortsVideos.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="shorts-card group relative w-[220px] shrink-0 snap-center overflow-hidden rounded-[28px] border border-black/10 bg-black shadow-[0_16px_38px_rgba(17,17,17,0.12)] sm:w-[240px] lg:w-[260px]"
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[28px]">
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                    <span className="rounded-full border border-white/20 bg-black/20 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                      Shorts
                    </span>

                    <button
                      type="button"
                      onClick={() => onOpenVideo(src.replace(/^\//, ""))}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/35"
                      aria-label="Open shorts video"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <CreativeDirectionCarousel />
      </div>
    </section>
  );
}
