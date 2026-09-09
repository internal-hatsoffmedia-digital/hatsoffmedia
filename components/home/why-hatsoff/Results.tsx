"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "150+",
    title: "Projects Delivered",
    description:
      "Helping businesses build premium digital experiences across industries.",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description:
      "Long-term partnerships built on trust, creativity, and measurable results.",
  },
  {
    value: "7+",
    title: "Years of Experience",
    description:
      "Years of designing brands, websites, campaigns, and digital products.",
  },
  {
    value: "24/7",
    title: "Creative Support",
    description:
      "Dedicated support and collaboration throughout every project lifecycle.",
  },
];

export default function Results() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C89B00]">
              OUR IMPACT
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-black md:text-7xl">
              Numbers backed
              <br />
              by meaningful
              <br />
              partnerships.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
              Every project we deliver is driven by strategy, creativity,
              and measurable business outcomes. Our success is reflected
              in the growth of the brands we work with.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 h-px bg-neutral-200" />

        {/* Stats */}
        <div className="grid gap-16 md:grid-cols-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              className="group border-b border-neutral-200 pb-12"
            >
              <div className="flex items-end justify-between">
                <h3 className="text-[72px] font-black leading-none tracking-[-0.06em] text-black transition group-hover:text-[#FFCC00] md:text-[100px]">
                  {item.value}
                </h3>

                <span className="text-neutral-300 text-6xl font-black">
                  0{index + 1}
                </span>
              </div>

              <h4 className="mt-6 text-2xl font-bold text-black">
                {item.title}
              </h4>

              <p className="mt-4 max-w-md leading-8 text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}