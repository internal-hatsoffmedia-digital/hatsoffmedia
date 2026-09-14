"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PackageCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-14 sm:py-16 lg:py-20">
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#FFCC00]/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FFCC00]/10 blur-[180px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-[#FFCC00]/20
            bg-[#FFCC00]/10
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-[#FFCC00]
            "
          >
            <Sparkles size={16} />

            Let's Build Together
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
          }}
          className="
          mx-auto
          mt-8
          max-w-5xl
          text-5xl
          font-black
          leading-tight
          text-white
          md:text-7xl
          "
        >
          Confused About
          <br />
          Which Package
          <span className="text-[#FFCC00]"> Fits You?</span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
          }}
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-neutral-300
          "
        >
          Tell us about your business, your goals, and where you are
          today. We'll recommend the right package and create a roadmap
          that helps your brand grow with confidence.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.35,
          }}
          className="
          mt-14
          flex
          flex-col
          items-center
          justify-center
          gap-5
          sm:flex-row
          "
        >
          <Link
            href="/contact"
            className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#FFCC00]
            px-8
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-105
            "
          >
            Get Custom Proposal

            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/25
            bg-white/5
            px-8
            py-4
            font-bold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-[#FFCC00]
            hover:bg-[#FFCC00]
            hover:text-black
            "
          >
            Talk To Hatsoff
          </Link>
        </motion.div>

        {/* Bottom Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
          }}
          className="
          mt-20
          grid
          grid-cols-2
          gap-6
          border-t
          border-white/10
          pt-12
          md:grid-cols-4
          "
        >
          {[
            {
              value: "10000+",
              label: "Projects",
            },
            {
              value: "120+",
              label: "Brands",
            },
            {
              value: "10+",
              label: "Industries",
            },
            {
              value: "5★",
              label: "Client Rating",
            },
          ].map((item) => (
            <div key={item.label}>
              <h3 className="text-4xl font-black text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}