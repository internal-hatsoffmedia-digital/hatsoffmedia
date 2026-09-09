"use client";

import { motion } from "framer-motion";

export default function WhyHeader() {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center rounded-full border border-[#FFCC00]/30 bg-[#FFCC00]/10 px-5 py-2"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B00]">
          Why Hatsoff
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="text-balance text-4xl font-extrabold leading-tight text-black md:text-5xl lg:text-6xl"
      >
        More Than a Service.
        <span className="block text-[#FFCC00]">
          A Growth Partner.
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600"
      >
        At Hatsoff Media, we combine strategy, creativity, technology, and
        marketing to build brands that inspire trust, attract customers, and
        drive measurable business growth.
      </motion.p>
    </div>
  );
}