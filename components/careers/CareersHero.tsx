"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

const floatingIcons = [
  {
    label: "Creative",
    icon: Palette,
    className: "-left-6 top-8 md:left-0",
    color: "bg-[#FFCC00] text-black",
  },
  {
    label: "People",
    icon: Users,
    className: "right-0 top-10",
    color: "bg-white text-black",
  },
  {
    label: "Growth",
    icon: ArrowUpRight,
    className: "-bottom-4 left-12 md:left-4",
    color: "bg-[#f5f1d8] text-black",
  },
  {
    label: "Work",
    icon: BriefcaseBusiness,
    className: "-right-4 bottom-12 md:right-2",
    color: "bg-neutral-900 text-white",
  },
];

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#FFCC00]/16 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F0E7B5]/50 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 xl:px-20 2xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#9E7800]">
                Join Hatsoff Media
              </span>
              <span className="h-[2px] w-12 bg-neutral-300" />
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-neutral-900 sm:text-7xl md:text-8xl">
              Do The <br />
              <span className="text-[#FFCC00]">Best Work</span>
              <br />
              Of Your Life.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-600 sm:text-xl">
              We&apos;re a team of creators, strategists, and innovators. Join us to build modern digital experiences and shape the future of brands.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="group inline-flex h-14 items-center justify-center rounded-full bg-[#FFCC00] px-8 text-sm font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(255,204,0,0.28)]"
              >
                View Open Roles
              </a>
              <a
                href="#why-join"
                className="inline-flex h-14 items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-8 text-sm font-bold uppercase tracking-[0.08em] text-neutral-800 transition-all duration-300 hover:border-neutral-400 hover:bg-white"
              >
                Life at Hatsoff
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[560px] lg:ml-auto"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,204,0,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.04),_transparent_35%)]" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFCC00] text-lg font-black text-black">
                    H
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-neutral-500">
                      Team Culture
                    </p>
                    <p className="text-lg font-black text-neutral-900">Hatsoff Crew</p>
                  </div>
                </div>
                <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                  Now Hiring
                </div>
              </div>

              <div className="relative z-10 mt-8 overflow-hidden rounded-[28px] border border-neutral-200 bg-[#f9f9f7] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
                    Creative studio
                  </span>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[#39c97a] shadow-[0_0_12px_rgba(57,201,122,0.8)]" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
                        Focus
                      </p>
                      <Sparkles size={16} className="text-[#FFCC00]" />
                    </div>
                    <p className="text-2xl font-black tracking-[-0.05em] text-neutral-900">
                      Build brands <span className="text-[#FFCC00]">people love</span>
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "Strategy", value: "01" },
                      { label: "Design", value: "02" },
                      { label: "Growth", value: "03" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-neutral-200 bg-white p-3 text-center"
                      >
                        <div className="text-lg font-black text-neutral-900">{item.value}</div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {floatingIcons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 4.5 + index * 0.4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${item.className} z-20 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 shadow-[0_16px_35px_rgba(0,0,0,0.08)] ${item.color}`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
