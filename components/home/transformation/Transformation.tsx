"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate, type Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const transformationData = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Build a memorable visual identity that creates trust and helps customers instantly recognize your business.",
    tag: "Strategy & Design",
  },
  {
    number: "02",
    title: "Websites & Landing Pages",
    description:
      "Modern, fast and conversion-focused websites that strengthen your digital presence.",
    tag: "Engineering",
  },
  {
    number: "03",
    title: "Content & Social Media",
    description:
      "Creative content that keeps your brand visible, engaging and consistent across every platform.",
    tag: "Growth",
  },
  {
    number: "04",
    title: "Video Production",
    description:
      "Reels, corporate films and motion content that communicate your story effectively.",
    tag: "Media",
  },
  {
    number: "05",
    title: "Performance Marketing",
    description:
      "Reach the right audience with strategic campaigns that generate measurable business growth.",
    tag: "Analytics",
  },
  {
    number: "06",
    title: "AI Powered Creativity",
    description:
      "Leverage AI to create faster, smarter and scalable creative experiences.",
    tag: "Innovation",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

/**
 * Interactive card with mouse-tracking radial spotlight glow
 */
function TransformationCard({
  service,
  index,
}: {
  service: (typeof transformationData)[0];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#FFCC00] hover:shadow-[0_20px_50px_rgba(255,204,0,0.15)] md:p-10"
    >
      {/* Dynamic Mouse-Tracking Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 204, 0, 0.18),
              transparent 80%
            )
          `,
        }}
      />

      {/* Dynamic Border Highlight on Hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 204, 0, 0.6),
              transparent 80%
            )
          `,
          maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
        }}
      />

      {/* Card Header: Number & Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-4xl font-black tracking-tighter text-black/20 transition-colors duration-300 group-hover:text-[#ffcc00] md:text-5xl">
          {service.number}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-black/[0.03] px-3.5 py-1 text-xs font-semibold tracking-wider text-black/60 transition-colors duration-300 group-hover:border-[#FFCC00]/30 group-hover:bg-[#FFCC00]/10 group-hover:text-black">
          <Sparkles className="h-3 w-3 text-[#FFCC00]" />
          {service.tag}
        </span>
      </div>

      {/* Card Content */}
      <div className="relative z-10 mt-12">
        <h3 className="text-2xl font-black tracking-tight text-black transition-colors duration-300 group-hover:text-[#ffcc00] md:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-[#555] transition-colors duration-300 group-hover:text-black/80">
          {service.description}
        </p>
      </div>

      {/* Card Footer Action */}
      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-black/5 pt-6">
        <span className="text-xs font-bold uppercase tracking-widest text-black/40 transition-colors duration-300 group-hover:text-black">
          Explore Solution
        </span>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 45 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-colors duration-300 group-hover:bg-[#FFCC00] group-hover:text-black"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Transformation() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Background Lighting & FX */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pulsing Ambient Glow Left */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-52 top-16 h-[520px] w-[520px] rounded-full bg-[#FFCC00]/20 blur-[180px]"
        />

        {/* Pulsing Ambient Glow Right */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-[#FFCC00]/15 blur-[180px]"
        />

        {/* Premium Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label Indicator */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <motion.div
              animate={{ height: ["24px", "40px", "24px"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-[2px] rounded-full bg-[#FFCC00]"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffcc00]">
              Our Transformation
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="mx-auto mt-8 max-w-4xl text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-black sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[64px]"
          >
            We Build the
            <br />
            Digital Face of
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FFCC00]">Your Business.</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 left-0 h-3 w-full origin-left rounded-full bg-[#FFCC00]/20"
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-[#555] lg:text-xl"
          >
            Strategy, branding, websites, content, marketing, technology and AI working together to transform businesses into memorable brands that people trust.
          </motion.p>
        </motion.div>

        {/* Kinetic Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {transformationData.map((service, index) => (
            <TransformationCard key={service.number} service={service} index={index} />
          ))}
        </motion.div>

        {/* Closing Result Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28 border-t border-black/10 pt-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Result Tag */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-10 w-[2px] rounded-full bg-[#FFCC00]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ffcc00]">
                The Result
              </span>
            </div>

            {/* Closing Heading */}
            <h3 className="mx-auto mt-8 max-w-4xl text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-black sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[64px]">
              Everything Your Business Needs.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FFCC00]">One Creative Partner.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="absolute bottom-2 left-0 h-3 w-full origin-left rounded-full bg-[#FFCC00]/20"
                />
              </span>
            </h3>

            {/* Closing Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#555] lg:text-xl">
              From strategy and branding to websites, social media, marketing, AI, and creative production, we help businesses build a memorable brand that people trust, remember, and choose.
            </p>

            {/* Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 140 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mx-auto mt-12 h-[2px] rounded-full bg-[#FFCC00]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}