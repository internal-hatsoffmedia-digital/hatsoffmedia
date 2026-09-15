"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

const posterCards = [
  "/images/posters/poster-01-01.jpg",
  "/images/posters/poster-02-1-budget-day.jpeg",
  "/images/posters/poster-03-1-what-s-your-sipcode.jpg",
  "/images/posters/poster-04-10-kungpaochicken.jpg",
  "/images/posters/poster-05-5-ponnirice.jpg",
  "/images/posters/poster-06-analogical-poster-6-2.jpg",
  "/images/posters/poster-07-artboard-1-copy.png",
  "/images/posters/poster-08-artboard-2-copy.png",
  "/images/posters/poster-09-bh-carousel-06.jpg",
  "/images/posters/poster-10-butter-paneer-makhni-mac-cheese-pasta.jpg",
  "/images/posters/poster-11-hair-detox-treatment.jpg",
  "/images/posters/poster-12-hmaug26176.png",
  "/images/posters/poster-13-hmaug26178.png",
  "/images/posters/poster-14-hmmay26342-2.jpg",
  "/images/posters/poster-15-massage-benefits-our-list-recovered.jpg",
  "/images/posters/poster-16-poster-3-2.jpg",
  "/images/posters/poster-17-sdc.jpg",
  "/images/posters/poster-18-sdc-1.jpg",
  "/images/posters/poster-19-splash-4.jpg",
];

export default function CreativeDirectionCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;

    const firstCard = container.querySelector(".poster-card") as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 18 : 280;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () => {
    setSelectedIndex((current) => (current === null ? null : (current - 1 + posterCards.length) % posterCards.length));
  };
  const showNext = () => {
    setSelectedIndex((current) => (current === null ? null : (current + 1) % posterCards.length));
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const selectedPoster = selectedIndex === null ? null : posterCards[selectedIndex];

  return (
    <>
      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/50">Selected work</p>
            <h3 className="mt-2 text-3xl font-black text-[#111111] sm:text-4xl">Creative direction</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Scroll creative direction carousel left"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Scroll creative direction carousel right"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black shadow-sm transition hover:border-black/20 hover:bg-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden pb-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f7f5ef] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f7f5ef] to-transparent sm:w-16" />

          <div
            ref={carouselRef}
            className="flex w-full items-start gap-4 overflow-x-auto pb-3 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          >
            {posterCards.map((poster, index) => (
              <motion.div
                key={poster}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="poster-card group relative w-[220px] shrink-0 snap-center overflow-hidden rounded-[22px] border border-black/10 bg-white shadow-[0_12px_34px_rgba(17,17,17,0.08)] sm:w-[250px] lg:w-[280px]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="relative block w-full text-left"
                  aria-label={`Zoom creative direction artwork ${index + 1}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#f2f0ea]">
                    <Image
                      src={poster}
                      alt={`Creative direction artwork ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 280px"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <span className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white shadow-lg backdrop-blur-sm transition group-hover:bg-black/50">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPoster && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[#111111]/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Creative direction artwork viewer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative flex h-[min(82vh,760px)] w-full max-w-5xl items-center justify-center overflow-hidden rounded-[28px] border border-white/15 bg-[#202020] shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedPoster}
                alt={`Creative direction artwork ${selectedIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain p-4 sm:p-8"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-5 sm:p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffcc00]">Creative direction</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{String(selectedIndex + 1).padStart(2, "0")} / {String(posterCards.length).padStart(2, "0")}</p>
                </div>
                <p className="hidden text-xs text-white/50 sm:block">Use arrow keys to browse</p>
              </div>

              <button
                type="button"
                onClick={closeLightbox}
                aria-label="Close artwork viewer"
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/60"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous artwork"
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/60 sm:left-5"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Show next artwork"
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/60 sm:right-5"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
