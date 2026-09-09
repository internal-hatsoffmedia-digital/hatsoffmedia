"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type PortfolioCategory =
  | "Website"
  | "Videos"
  | "Ads"
  | "Posters"
  | "Branding"
  | "Social Media"
  | "AI Content"
  | "Animation"
  | "Logo";

interface PortfolioProject {
  id: number;
  client: string;
  industry: string;
  description: string;
  image: string;
  featured?: boolean;
  categories: PortfolioCategory[];
  services: string[];
}

const filters = [
  "All",
  "Website",
  "Videos",
  "Ads",
  "Posters",
  "Branding",
  "Social Media",
  "AI Content",
  "Animation",
  "Logo",
];

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    client: "Senthil Dental Care",
    industry: "Healthcare",
    description:
      "Complete digital branding support including website, advertisements, creative posters and social media campaigns.",
    image: "/images/portfolio/sdc.jpg",
    featured: true,
    categories: ["Website", "Ads", "Posters", "Videos", "Social Media"],
    services: ["Website", "Ads", "Videos", "Posters", "Carousels"],
  },
  {
    id: 2,
    client: "Color Pencil",
    industry: "Entertainment",
    description:
      "Creative video editing and YouTube production for viral digital content.",
    image: "/images/portfolio/color-pencil.jpg",
    featured: true,
    categories: ["Videos", "Animation", "Social Media"],
    services: ["Videos", "Editing", "Motion Art"],
  },
  {
    id: 3,
    client: "Cinema Kichdy",
    industry: "Entertainment",
    description:
      "Trailer editing, short-form video content, and cinematic promotional videos.",
    image: "/images/portfolio/cinema-kichdy.jpg",
    categories: ["Videos", "Posters"],
    services: ["Videos", "Trailers", "Posters"],
  },
  {
    id: 4,
    client: "San TV Network",
    industry: "Media & Broadcast",
    description:
      "Creative broadcast support with viral reels, show posters and digital promotional campaigns.",
    image: "/images/portfolio/suntv.jpg",
    featured: true,
    categories: ["Videos", "Posters", "Social Media"],
    services: ["Videos", "Reels", "Posters", "Carousels"],
  },
  {
    id: 5,
    client: "Aashara Hospital",
    industry: "Healthcare",
    description:
      "Full digital patient acquisition campaigns with educational health posters, awareness reels, and ad funnels.",
    image: "/portfolio/aashara.jpg",
    featured: true,
    categories: ["Posters", "Ads", "Social Media", "Branding"],
    services: ["Campaign Posters", "Ad Creatives", "Social Media"],
  },
  {
    id: 6,
    client: "Langhar Rice",
    industry: "Food & Beverage",
    description:
      "Complete brand campaign support including landing page, AI reels, packaging posters, and performance ads.",
    image: "/images/portfolio/langhar.jpg",
    featured: true,
    categories: ["Website", "Videos", "Ads", "Posters", "AI Content"],
    services: ["Landing Page", "Videos", "Ads", "Posters", "AI Reels"],
  },
  {
    id: 7,
    client: "Pratilipi Comics",
    industry: "Entertainment",
    description:
      "High-engagement comic poster art, character promotional teasers, and short video animations.",
    image: "/images/portfolio/dashtoons.jpg",
    categories: ["Posters", "Videos", "Animation"],
    services: ["Digital Posters", "Animation", "Video Teasers"],
  },
  {
    id: 8,
    client: "Little Feet Play School",
    industry: "Education",
    description:
      "Vibrant brand identity, admission campaign posters, prospectus design, and cheerful digital visuals.",
    image: "/images/portfolio/sipcode.jpg",
    categories: ["Logo", "Branding", "Posters", "Social Media"],
    services: ["Logo Design", "Admission Posters", "Social Media"],
  },
  {
    id: 9,
    client: "Evolve Media Studio",
    industry: "Commercial Production",
    description:
      "High-impact 4K video editing, color grading, motion title cards, and promotional poster sets.",
    image: "/images/portfolio/videos-preview.jpg",
    featured: true,
    categories: ["Videos", "Posters", "Animation"],
    services: ["4K Video Production", "Motion Graphics", "Promo Posters"],
  },
  {
    id: 10,
    client: "Sithan Pokku Digital",
    industry: "Media & YouTube",
    description:
      "Created promotional shorts, high-CTR YouTube thumbnails, digital posters and video edits.",
    image: "/images/portfolio/sithan-pokku.jpg",
    categories: ["Videos", "Posters"],
    services: ["Videos", "Shorts", "Thumbnails", "Posters"],
  },
  {
    id: 11,
    client: "Lara Global Solutions",
    industry: "Corporate & SaaS",
    description:
      "Clean corporate web platform with high-conversion landing pages, brand guidelines, and UI systems.",
    image: "/images/portfolio/websites-preview.jpg",
    categories: ["Website", "Branding"],
    services: ["Web Development", "UI/UX", "Brand Systems"],
  },
  {
    id: 12,
    client: "Hatsoff Creative AI Lab",
    industry: "Next-Gen Creative",
    description:
      "Hyper-realistic synthetic media generation, generative AI video campaigns, and futuristic poster series.",
    image: "/images/portfolio/ads-preview.jpg",
    featured: true,
    categories: ["AI Content", "Videos", "Posters", "Ads"],
    services: ["AI Video", "Synthetic Posters", "Automated Ads"],
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;

    return portfolioProjects.filter((project) =>
      project.categories.includes(activeFilter as PortfolioCategory)
    );
  }, [activeFilter]);

  return (
    <section
      id="portfolio-grid"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filters */}

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#FFCC00] bg-[#FFCC00] text-black"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-[#FFCC00]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio */}

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-2xl"
              >
                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold">
                    {project.industry}
                  </div>

                  {project.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-bold text-black">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}

                <div className="p-8">
                  <h3 className="text-3xl font-black text-black">
                    {project.client}
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    {project.description}
                  </p>

                  {/* Services */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-[#FFCC00]/10 px-3 py-2 text-xs font-semibold text-[#A17600]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                                    <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C89B00]">
                      View Project
                    </span>

                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      transition-all
                      duration-300
                      group-hover:border-[#FFCC00]
                      group-hover:bg-[#FFCC00]
                      "
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}