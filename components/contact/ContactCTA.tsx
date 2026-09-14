"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from "lucide-react";
import NumberTicker from "@/components/common/NumberTicker";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/80 py-14 sm:py-16 lg:py-20">
      {/* Ambient background glow & subtle grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#ffcc00]/15 via-[#D4AF37]/10 to-transparent blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#fceb77]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/90 p-8 shadow-2xl shadow-neutral-900/5 backdrop-blur-md sm:p-12 lg:p-16">
          {/* Subtle decorative inner corner accent */}
          <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-[#ffcc00]/15 to-transparent blur-2xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#ffcc00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#996515]"
            >
              <Sparkles size={14} className="text-[#D4AF37]" />
              Ready To Grow Your Brand?
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
            >
              Let&apos;s Turn Your Vision Into{" "}
              <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#996515] bg-clip-text text-transparent">
                Measurable Results.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 sm:text-lg"
            >
              Whether you need high-converting digital branding, a website redesign, viral social media growth, or targeted performance marketing—our team is ready to scale your business.
            </motion.p>

            {/* Trust highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-600 sm:gap-6 sm:text-sm"
            >
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#D4AF37]" /> Free 30-Min Strategy Call
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#D4AF37]" /> Transparent Retainers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-[#D4AF37]" /> 24hr Quick Response
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact#contact-form"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-black hover:shadow-xl hover:shadow-neutral-900/10 hover:scale-[1.02]"
              >
                <span>Get Started Today</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffcc00] text-black transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </div>
              </Link>

              <Link
                href="tel:+918925881695"
                className="inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-bold text-neutral-800 shadow-sm transition-all duration-300 hover:border-[#D4AF37] hover:bg-neutral-50 hover:text-[#996515]"
              >
                <PhoneCall size={16} className="text-[#D4AF37]" />
                Call Our Team (+91 89258 81695)
              </Link>
            </motion.div>

            {/* Stats strip with NumberTicker */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-6 border-t border-neutral-200/80 pt-10 sm:grid-cols-4 sm:gap-8"
            >
              {[
                { value: "10000+", label: "Projects Completed" },
                { value: "120+", label: "Brands Scaled" },
                { value: "10+", label: "Industry Verticals" },
                { value: "5★", label: "Client Satisfaction" },
              ].map((stat, idx) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-3xl font-extrabold text-neutral-900 sm:text-4xl">
                    <NumberTicker value={stat.value} delay={idx * 0.1} />
                  </div>
                  <p className="mt-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}