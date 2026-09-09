"use client";

import PortfolioHero from "@/components/portfolio/PortfolioHero";
import VideoShowcase from "@/components/portfolio/VideoShowcase";
import DesignShowcase from "@/components/portfolio/DesignShowcase";

export default function PortfolioPage() {
  return (
    <main className="bg-[#f7f5ef]">
      <PortfolioHero />
      <VideoShowcase />
      <DesignShowcase />
    </main>
  );
}
