import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import OurTeamStrength from "@/components/about/OurTeamStrength";
import TeamSection from "@/components/about/team/TeamSection";
import Industries from "@/components/about/Industries";
import CTASection from "@/components/home/cta/CTASection";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* =========================================================
          ABOUT HERO
      ========================================================== */}
      <section id="about-hero" className="relative">
        <AboutHero />
      </section>

      {/* =========================================================
          STORY
          The narrative starts immediately after the hero.
      ========================================================== */}
      <section id="our-story" className="relative">
        <OurStory />
      </section>

      {/* =========================================================
          BELIEF / PHILOSOPHY
          Creates a visual pause between story and capabilities.
      ========================================================== */}
      <section
        id="our-beliefs"
        className="relative overflow-hidden bg-[#fafaf8]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,.4) 1px, transparent 1px)
              `,
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        <div className="relative">
          <WhatWeBelieve />
        </div>
      </section>

      {/* =========================================================
          TEAM STRENGTH
          Moves from beliefs into what the team can actually execute.
      ========================================================== */}
      <section id="team-strength" className="relative bg-white">
        <OurTeamStrength />
      </section>

      {/* =========================================================
          TEAM
          Full-width visual leadership / team section.
      ========================================================== */}
      <section id="our-team" className="relative overflow-hidden bg-[#111111]">
        <TeamSection />
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section id="industries" className="relative bg-white">
        <Industries />
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section id="about-cta" className="relative">
        <CTASection />
      </section>
    </main>
  );
}