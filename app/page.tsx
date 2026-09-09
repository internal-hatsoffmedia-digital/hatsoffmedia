import Hero from "@/components/home/hero/Hero";

import Problem from "@/components/home/Problem";
import Transformation from "@/components/home/transformation/Transformation";
import PackageEntry from "@/components/home/PackageEntry";

import WorkPreview from "@/components/home/WorkPreview";

import WhyHatsoff from "@/components/home/why-hatsoff/WhyHatsoff";

import CTASection from "@/components/home/cta/CTASection";

import SiteBackground from "@/components/ui/SiteBackground";
import ClientsCarousel from "@/components/home/ClientsCarousel";


export default function HomePage() {
  return (
    <main
      className="
      relative
      overflow-hidden
      bg-white
      "
    >
      {/* Global Premium Background */}
      <SiteBackground />

      {/* Website Sections */}

      <Hero />

      <Problem />

      <Transformation />

      <PackageEntry />

      <WorkPreview />

      <WhyHatsoff />
      <ClientsCarousel />

      <CTASection />
    </main>
  );
}
