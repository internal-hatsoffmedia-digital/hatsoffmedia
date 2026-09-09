"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.45) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.45) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <motion.div
          animate={{
            x: [-30, 25, -30],
            y: [-20, 20, -20],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-64 -top-64 h-[550px] w-[550px] rounded-full bg-[#FFCC00]/10 blur-[170px]"
        />

        <motion.div
          animate={{
            x: [25, -25, 25],
            y: [20, -20, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-72 -right-72 h-[600px] w-[600px] rounded-full bg-[#FCEB77]/10 blur-[180px]"
        />

        {/* Moving fine beam */}
        <motion.div
          animate={{
            x: ["-30%", "130%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 h-[140%] w-28 -rotate-[18deg] bg-gradient-to-r from-transparent via-[#FFCC00]/10 to-transparent blur-2xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            MAIN EDITORIAL CTA
        ========================================================== */}
        <div className="relative overflow-hidden border-y border-black/10">
          {/* Decorative top number */}
          <div className="pointer-events-none absolute -right-5 -top-20 select-none text-[230px] font-black leading-none tracking-[-0.12em] text-black/[0.025] sm:text-[300px] lg:text-[390px]">
            GO
          </div>

          {/* Yellow vertical accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 left-0 top-0 hidden w-[3px] origin-top bg-[#FFCC00] sm:block"
          />

          <div className="grid gap-12 px-0 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-12 lg:py-20">
            {/* =====================================================
                LEFT — BIG STATEMENT
            ====================================================== */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <motion.div variants={item} className="flex items-center gap-4">
                <span className="h-8 w-[2px] bg-[#FFCC00]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#ffcc00]">
                  The Next Step
                </span>
              </motion.div>

              <motion.h2
                variants={item}
                className="mt-7 max-w-5xl text-[46px] font-black leading-[0.9] tracking-[-0.06em] text-black sm:text-[60px] md:text-[72px] lg:text-[84px] xl:text-[96px]"
              >
                Your brand
                <br />
                deserves to be
                <br />
                <span className="text-[#FFCC00]">seen.</span>
              </motion.h2>

              <motion.p
                variants={item}
                className="mt-7 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base"
              >
                Tell us where your business is today. We&apos;ll help you
                figure out what your brand needs next — creatively and
                digitally.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#FFCC00] px-6 py-3.5 text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,204,0,.22)] sm:px-7"
                >
                  Start a Conversation

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-black"
                >
                  Tell us your idea

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* =====================================================
                RIGHT — SMALL EDITORIAL INFO
            ====================================================== */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={container}
              className="relative flex flex-col justify-end lg:border-l lg:border-black/10 lg:pl-12"
            >
              <motion.div variants={item}>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-neutral-300">
                  What happens next
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    ["01", "You tell us what you need."],
                    ["02", "We understand the business."],
                    ["03", "We suggest the right direction."],
                  ].map(([number, text]) => (
                    <div
                      key={number}
                      className="flex items-start gap-4 border-b border-black/10 pb-5"
                    >
                      <span className="font-heading tabular-nums text-[9px] font-bold text-[#ffcc00]">
                        {number}
                      </span>

                      <p className="max-w-xs text-sm font-semibold leading-5 text-neutral-700">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="mt-8 flex items-center gap-3"
              >
                <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                  No complicated process
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BRAND LINE
        ========================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4 border-b border-black/10 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
            Branding · Content · Websites · Video · Ads · Digital
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#FFCC00]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-300">
              Let&apos;s build what&apos;s next
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}