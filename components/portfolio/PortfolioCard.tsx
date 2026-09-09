"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";
import { PortfolioItem } from "./portfolio-data";

interface PortfolioCardProps {
  project: PortfolioItem;
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:border-[#FFCC00] hover:shadow-2xl"
    >
      {/* Media (Image or Video) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <img
            src={project.image}
            alt={project.client}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category */}
        <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-gray-900 backdrop-blur">
          {project.category}
        </div>

        {/* Featured */}
        {project.featured && (
          <div className="absolute right-5 top-5 rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-bold text-black">
            Featured
          </div>
        )}

        {/* Hover Button */}
        <div className="absolute bottom-5 right-5 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
            <ArrowUpRight className="h-5 w-5 text-black" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <span>{project.industry}</span>

          <span>•</span>

          <span>{project.service}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#C89B00]">
          {project.client}
        </h3>

        <p className="mt-4 leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-semibold text-[#C89B00]">
            View Project
          </span>

          {project.website ? (
            <Link
              href={project.website}
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition-all duration-300 hover:border-[#FFCC00] hover:bg-[#FFCC00]"
            >
              <Globe className="h-5 w-5" />
            </Link>
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}