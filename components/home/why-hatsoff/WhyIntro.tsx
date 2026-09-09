"use client";

import { motion } from "framer-motion";

export default function WhyIntro() {
  const points = [
    {
      number: "01",
      text: "We think like business people, not just designers.",
    },
    {
      number: "02",
      text: "We bring branding, content, websites, videos, and ads under one roof.",
    },
    {
      number: "03",
      text: "We keep your brand consistent across every platform.",
    },
    {
      number: "04",
      text: "We work as your extended creative and digital team.",
    },
  ];

  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

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
            duration: 0.8,
          }}
          className="max-w-5xl"
        >
          <span
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#ffcc00]
            "
          >
            Why Hatsoff
          </span>

          <h2
            className="
            mt-8
            text-5xl
            font-black
            leading-[0.92]
            tracking-[-0.06em]
            text-black
            md:text-7xl
            xl:text-[90px]
            "
          >
            We Think Beyond
            <br />
            Design.
            <br />
            We Build
            <span className="text-[#FFCC00]"> Brands.</span>
          </h2>
        </motion.div>

        {/* Points */}

        <div
          className="
          mt-24
          "
        >
          {points.map((item, index) => (
            <motion.div
              key={item.number}
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
                delay: index * 0.12,
                duration: 0.7,
              }}
              className="
                group
                grid
                gap-8
                border-t
                border-neutral-200
                py-12
                lg:grid-cols-12
                "
            >
              {/* Number */}

              <div
                className="
                  text-6xl
                  font-black
                  tracking-[-0.06em]
                  text-neutral-200
                  transition-colors
                  duration-500
                  group-hover:text-[#FFCC00]
                  lg:col-span-2
                  "
              >
                {item.number}
              </div>

              {/* Content */}

              <h3
                className="
                  max-w-4xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-black
                  transition-colors
                  duration-300
                  group-hover:text-[#ffcc00]
                  lg:col-span-10
                  md:text-4xl
                  "
              >
                {item.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
