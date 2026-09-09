"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  BriefcaseBusiness,
  Megaphone,
  TrendingUp,
  Crown,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const packages = [
  {
    id: "01",
    title: "Business Starter",
    badge: "New Businesses",
    tagline: "Build trust and make an unforgettable first impression.",
    icon: BriefcaseBusiness,
    features: [
      "Logo & Brand Identity System",
      "Executive Business Stationery",
      "Starter Social Media Creatives",
      "Brand Launch Strategy Guide",
    ],
    popular: false,
    accent: "#FFCC00",
  },
  {
    id: "02",
    title: "Social Media Growth",
    badge: "Active Engagement",
    tagline: "Stay top-of-mind with consistent, high-impact content.",
    icon: Megaphone,
    features: [
      "Monthly Curated Content Calendar",
      "High-Converting Viral Reels & Shorts",
      "Feed & Story Creative Design",
      "Audience Analytics & Monthly Review",
    ],
    popular: false,
    accent: "#FFCC00",
  },
  {
    id: "03",
    title: "Digital Growth",
    badge: "Most Popular",
    tagline: "Turn attention into qualified leads, customers & revenue.",
    icon: TrendingUp,
    features: [
      "Strategic Meta & Google Ad Creative",
      "Targeted Lead Generation Campaigns",
      "Conversion Landing Page Audits",
      "Weekly Optimization & ROI Reporting",
    ],
    popular: true,
    accent: "#FFCC00",
  },
  {
    id: "04",
    title: "Premium Partner",
    badge: "Full Dedicated Team",
    tagline: "An entire creative and marketing agency at your side.",
    icon: Crown,
    features: [
      "Complete Brand Strategy & Evolution",
      "End-to-End Video & Media Production",
      "High-Performance Website Support",
      "Direct Executive Strategy Access",
    ],
    popular: false,
    accent: "#FFCC00",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PackageEntry() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-14 sm:py-16 lg:py-20">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-1/4 h-[550px] w-[550px] rounded-full bg-[#FFCC00]/10 blur-[160px]" />
        <div className="absolute -right-48 bottom-1/4 h-[550px] w-[550px] rounded-full bg-[#FFE082]/15 blur-[160px]" />
        
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#9E7800]">
            <Sparkles className="h-3.5 w-3.5 text-[#E5B800]" />
            Growth Packages
          </span>

          <h2 className="mt-8 text-4xl font-black leading-[1] tracking-[-0.05em] text-neutral-900 sm:text-5xl lg:text-6xl">
            Tailored Solutions For{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#ffcc00]">Every Stage.</span>
              <span className="absolute bottom-2 left-0 h-3 w-full rounded-full bg-[#FFCC00]/20" />
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Whether launching your venture or scaling an established market leader,
            our transparent packages provide predictable impact and high creative execution.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={pkg.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                className={`
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-[32px]
                  border
                  p-8
                  transition-all
                  duration-400
                  ${
                    pkg.popular
                      ? "border-[#FFCC00] bg-white shadow-[0_20px_50px_rgba(255,204,0,0.18)] ring-2 ring-[#FFCC00]/40"
                      : "border-black/5 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:border-[#FFCC00]/60 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                  }
                `}
              >
                {/* Popular Ribbon */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFCC00] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-black shadow-md">
                      <Sparkles className="h-3 w-3" /> Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        transition-all
                        duration-300
                        ${
                          pkg.popular || isHovered
                            ? "bg-[#FFCC00] text-black shadow-lg"
                            : "bg-[#FFCC00]/15 text-[#9E7800]"
                        }
                      `}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                      {pkg.id}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-7">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {pkg.badge}
                    </span>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-neutral-900">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-8 space-y-3.5 border-t border-black/5 pt-6">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ffcc00]" />
                        <span className="text-sm font-medium leading-tight text-neutral-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-10 border-t border-black/5 pt-6">
                  <Link
                    href="/packages"
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      py-3.5
                      text-sm
                      font-bold
                      transition-all
                      duration-300
                      ${
                        pkg.popular
                          ? "bg-[#FFCC00] text-black shadow-[0_4px_16px_rgba(255,204,0,0.35)] hover:bg-neutral-900 hover:text-white"
                          : "bg-neutral-100 text-neutral-900 hover:bg-[#FFCC00] hover:text-black"
                      }
                    `}
                  >
                    <span>View Package Details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <p className="text-sm font-medium text-neutral-500">
            Need a custom combination or ongoing enterprise retainer?
          </p>
          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-neutral-900 underline decoration-[#FFCC00] decoration-2 underline-offset-4 transition-colors hover:text-[#9E7800]"
          >
            Compare All Packages & Features ↗
          </Link>
        </motion.div>
      </div>
    </section>
  );
}