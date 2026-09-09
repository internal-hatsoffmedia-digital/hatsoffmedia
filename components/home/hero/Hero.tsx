"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background */}
      <HeroBackground />

      {/* Main Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[85vh]
          lg:min-h-[90vh]
          max-w-[1600px]
          items-center
          px-6
          pt-28
          pb-12
          sm:pt-32
          sm:pb-16
          lg:px-12
          xl:px-20
          2xl:px-24
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            xl:gap-20
          "
        >
          {/* Left Content */}
          <HeroContent />

          {/* Right Visual */}
          <HeroVisual />
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-white
          via-white/80
          to-transparent
        "
      />
    </section>
  );
}