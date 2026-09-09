import CareersHero from "@/components/careers/CareersHero";
import WhyJoinUs from "@/components/careers/WhyJoinUs";
import OpenPositions from "@/components/careers/OpenPositions";

export const metadata = {
  title: "Careers | Hatsoff Media",
  description: "Join Hatsoff Media and help build the future of digital experiences and brand growth.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
    </main>
  );
}
