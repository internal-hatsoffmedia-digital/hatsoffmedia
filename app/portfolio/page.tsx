"use client";

import { useState } from "react";

import PortfolioHero from "@/components/portfolio/PortfolioHero";
import VideoShowcase from "@/components/portfolio/VideoShowcase";

export default function PortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <main className="bg-[#f7f5ef]">
      <PortfolioHero onOpenVideo={setSelectedVideo} />
      <VideoShowcase onOpenVideo={setSelectedVideo} />

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[26px] border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/45 text-lg text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Close video"
            >
              ×
            </button>

            <video
              src={selectedVideo}
              autoPlay
              muted={false}
              loop
              controls
              playsInline
              className="h-[72vh] w-full object-contain md:h-[80vh]"
            />
          </div>
        </div>
      )}
    </main>
  );
}
