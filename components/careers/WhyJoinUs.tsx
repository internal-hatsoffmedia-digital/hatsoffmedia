"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Megaphone, Video, Palette } from "lucide-react";

const reasons = [
  {
    title: "AI-Powered Creativity",
    description: "Work with cutting-edge AI tools for video and design, staying ahead of industry trends and creating smarter content.",
    icon: Sparkles,
  },
  {
    title: "High-Impact Performance",
    description: "Drive real business growth through data-driven performance marketing and scalable campaigns.",
    icon: Megaphone,
  },
  {
    title: "Modern Tech Stack",
    description: "Build robust web experiences and digital products using the latest frameworks and development practices.",
    icon: Code2,
  },
  {
    title: "Visual Storytelling",
    description: "Produce top-tier video content and motion graphics that captivate audiences and tell compelling brand stories.",
    icon: Video,
  },
  {
    title: "Creative Freedom",
    description: "Shape brand identities from scratch. We give you the space to experiment, design, and redefine visual languages.",
    icon: Palette,
  },
];

export default function WhyJoinUs() {
  return (
    <section id="why-join" className="relative bg-[#FFFDF7] py-20 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-20 2xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
              Why Hatsoff?
            </span>
            <span className="h-[2px] w-12 bg-black/10" />
          </div>
          
          <h2 className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl md:text-6xl">
            A Place to <br className="hidden sm:block" />
            <span className="text-neutral-400">Do Your Best Work.</span>
          </h2>
          
          <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
            We don't just build brands; we build careers. Here's why you'll love being part of our creative ecosystem.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 xl:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 border border-neutral-100"
              >
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-[#FFCC00] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-black">{reason.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{reason.description}</p>
                
                {/* Decorative background accent on hover */}
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FFCC00]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
