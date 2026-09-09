"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Story } from "./storyData";

interface StoryBlockProps {
  story: Story;
}

export default function StoryBlock({ story }: StoryBlockProps) {
  return (
    <section
      className={`grid items-center gap-20 py-28 lg:grid-cols-2 ${
        story.reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: story.reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative overflow-hidden rounded-[36px]"
      >
        <Image
          src={story.image}
          alt={story.title}
          width={900}
          height={900}
          className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-8 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-500 group-hover:opacity-100">
          <ArrowUpRight size={22} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: story.reverse ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Number */}
        <span className="text-[120px] font-black leading-none tracking-[-0.08em] text-[#FFCC00]/15 md:text-[170px]">
          {story.number}
        </span>

        {/* Small Label */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-px w-12 bg-[#FFCC00]" />

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C89B00]">
            {story.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-8 text-5xl font-black leading-tight tracking-[-0.05em] text-black md:text-6xl">
          {story.title}
        </h3>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
          {story.description}
        </p>

        {/* CTA */}
        <button className="group mt-12 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:text-[#C89B00]">
          Learn More

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </motion.div>
    </section>
  );
}