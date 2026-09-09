"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type DesignCategory = "All" | "Websites" | "Branding" | "Posters" | "Social Media";

const designProjects = [
  {
    id: 1,
    client: "Senthil Dental Care",
    industry: "Healthcare",
    category: "Websites",
    image: "/portfolio/senthil-dental.jpg",
    tags: ["Website", "Ads", "Posters", "Social Media"],
    className: "md:col-span-1",
  },
  {
    id: 2,
    client: "Aashara Hospital",
    industry: "Healthcare",
    category: "Branding",
    image: "/images/portfolio/healthcare-campaign-generated.png",
    tags: ["Posters", "Ads", "Social Media", "Branding"],
    className: "md:col-span-1",
  },
  {
    id: 3,
    client: "Langhar Rice",
    industry: "Food & Beverage",
    category: "Websites",
    image: "/images/portfolio/langhar-campaign-generated.png",
    tags: ["Website", "Ads", "Posters", "AI Content"],
    className: "md:col-span-1",
  },
  {
    id: 4,
    client: "Little Feet Play School",
    industry: "Education",
    category: "Branding",
    image: "/images/portfolio/sipcode-campaign-generated.png",
    tags: ["Logo", "Branding", "Posters", "Social Media"],
    className: "md:col-span-1",
  },
];

const categories: DesignCategory[] = ["All", "Websites", "Branding", "Posters", "Social Media"];

export default function DesignShowcase() {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? designProjects
      : designProjects.filter((project) => project.tags.includes(activeCategory) || project.category === activeCategory);

  return (
    <section className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="flex flex-wrap items-end gap-3 text-4xl font-black leading-none tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              <span>Design &</span>
              <span className="text-[#ffcc00]">Web.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Beautifully crafted websites, striking brand identities, and visually stunning posters that tell a story.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${project.className} group relative overflow-hidden rounded-3xl bg-white shadow-sm`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      <h3 className="mb-1 text-2xl font-bold text-white">{project.client}</h3>
                      <p className="mb-4 text-sm font-medium text-neutral-300">{project.industry}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-4 top-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
