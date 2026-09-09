"use client";

import { motion } from "framer-motion";
import { categories } from "./portfolio-data";

interface PortfolioFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilters({
  activeCategory,
  onCategoryChange,
}: PortfolioFiltersProps) {
  const filters = ["All", ...categories];

  return (
    <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const active = activeCategory === filter;

            return (
              <motion.button
                key={filter}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onCategoryChange(filter)}
                className={`relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "border-[#FFCC00] bg-[#FFCC00] text-black shadow-lg"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#FFCC00] hover:text-black"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activePortfolioFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-[#FFCC00]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{filter}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}