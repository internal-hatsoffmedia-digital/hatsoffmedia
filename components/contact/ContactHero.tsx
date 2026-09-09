"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, Play } from "lucide-react";
import NumberTicker from "@/components/common/NumberTicker";

const stats = [
  {
    value: "24 hrs",
    label: "Average Response",
  },
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "5★",
    label: "Client Rating",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14">
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-180px] top-0 h-[650px] w-[650px] rounded-full bg-[#fceb77]/40 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-[-220px] h-[450px] w-[450px] rounded-full bg-[#ffcc00]/10 blur-[180px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">

          {/* ========================================= */}
          {/* LEFT CONTENT */}
          {/* ========================================= */}

          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-[#ffcc00]/30 bg-[#fceb77]/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#4c4c4c]">
                LET'S CONNECT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-[#4c4c4c] sm:text-7xl xl:text-[90px]"
            >
              Let's Build
              <br />
              Your Brand
              <br />
              <span className="text-[#ffcc00]">
                Together.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-[#4c4c4c]/70"
            >
              Tell us what your business needs.
              Whether it's branding, social media,
              website development, videos,
              advertising, or complete digital
              support, we'll recommend the right
              creative solution for your next
              stage of growth.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#contact-form"
                className="group flex items-center gap-3 rounded-full bg-[#ffcc00] px-7 py-4 font-bold text-[#4c4c4c] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Enquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="tel:+918925881695"
                className="group flex items-center gap-3 rounded-full border border-[#4c4c4c] px-7 py-4 font-bold text-[#4c4c4c] transition-all duration-300 hover:bg-[#4c4c4c] hover:text-white"
              >
                <PhoneCall size={18} />

                Call Now
              </Link>
            </motion.div>

          </div>

          {/* ========================================= */}
          {/* RIGHT VIDEO */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            {/* Glow */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[380px] w-[380px] rounded-full bg-[#fceb77]/50 blur-[110px]" />
            </div>

            {/* Video Card */}

            <div className="relative w-full max-w-[560px] overflow-hidden rounded-[36px] border border-[#ffcc00]/20 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.12)]">

              {/* Floating Badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-6 top-6 z-20"
              >
                <div className="rounded-full bg-white/90 px-4 py-2 backdrop-blur-md shadow-lg">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4c4c4c]">
                    Creative Support
                  </span>
                </div>
              </motion.div>

              {/* Play Icon */}

              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <Play
                    size={28}
                    fill="white"
                    className="ml-1 text-white"
                  />
                </div>
              </div>

              {/* VIDEO */}

              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-auto w-full object-cover"
              >
                <source
                  src="/videos/contact-hero.mp4"
                  type="video/mp4"
                />
              </video>
                            {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* ========================================= */}
        {/* STATS */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-20 overflow-hidden rounded-[32px] border border-[#4c4c4c]/10 bg-white/80 shadow-xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-[#4c4c4c]/10 md:grid-cols-4 md:divide-y-0">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group px-6 py-8 text-center"
              >
                <h3 className="text-4xl font-black text-[#ffcc00] transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                  <NumberTicker value={item.value} delay={0.2 + index * 0.1} />
                </h3>

                <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}