import PackageHero from "@/components/packages/PackageHero";
import PackageJourney from "@/components/packages/PackageJourney";
import PackageGrid from "@/components/packages/PackageGrid";

export default function PackagesPage() {
  return (
    <main className="bg-white">
      <PackageHero />
      <PackageJourney />
      <PackageGrid />
    </main>
  );
}