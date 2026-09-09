"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Clapperboard,
  Utensils,
  Building2,
  BriefcaseBusiness,
  Rocket,
} from "lucide-react";

const industries = [
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Retail & Product Brands",
    icon: ShoppingBag,
  },
  {
    title: "Entertainment & Media",
    icon: Clapperboard,
  },
  {
    title: "Food & Beverage",
    icon: Utensils,
  },
  {
    title: "Real Estate",
    icon: Building2,
  },
  {
    title: "Corporate Companies",
    icon: BriefcaseBusiness,
  },
  {
    title: "Startups",
    icon: Rocket,
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =========================================================
          SUBTLE BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: "120px 100%",
          }}
        />

        <div
          className="
            absolute
            -right-40
            top-1/2
            h-[400px]
            w-[400px]
            -translate-y-1/2
            rounded-full
            bg-[#FFCC00]/10
            blur-[140px]
          "
        />
      </div>

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1500px]
          px-6
          lg:px-12
          xl:px-20
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Heading */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FFCC00]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.4em]
                  text-[#ffcc00]
                "
              >
                Industries We Work With
              </span>
            </div>

            <h2
              className="
                mt-5
                text-[52px]
                font-black
                leading-[0.82]
                tracking-[-0.075em]
                text-black
                sm:text-[68px]
                md:text-[82px]
                lg:text-[100px]
                xl:text-[115px]
              "
            >
              BUILT FOR
              <br />

              <span className="text-[#FFCC00]">EVERY</span> INDUSTRY.
            </h2>
          </div>

          {/* Index */}

          <div className="flex items-center gap-3 lg:pb-2">
            <span
              className="
                font-heading
                tabular-nums
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              08 Industries
            </span>

            <span className="h-px w-10 bg-neutral-200" />

            <span
              className="
                font-heading
                tabular-nums
                text-[9px]
                font-bold
                tracking-[0.2em]
                text-[#ffcc00]
              "
            >
              01 — 08
            </span>
          </div>
        </motion.div>

        {/* =======================================================
            INDUSTRY LIST
        ======================================================== */}

        <div className="mt-10 border-t border-neutral-200">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  border-b
                  border-neutral-200
                "
              >
                <div
                  className="
                    relative
                    flex
                    items-center
                    gap-4
                    py-5
                    sm:py-6
                    lg:py-7
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      w-8
                      shrink-0
                      font-heading
                      tabular-nums
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                      text-neutral-400
                      transition-colors
                      duration-300
                      group-hover:text-[#ffcc00]
                      sm:w-12
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-neutral-200
                      bg-white
                      text-neutral-500
                      transition-all
                      duration-300
                      group-hover:border-[#FFCC00]
                      group-hover:bg-[#FFCC00]
                      group-hover:text-black
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Industry Name */}

                  <h3
                    className="
                      flex-1
                      text-[22px]
                      font-black
                      leading-none
                      tracking-[-0.045em]
                      text-black
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      sm:text-[28px]
                      md:text-[34px]
                      lg:text-[40px]
                      xl:text-[46px]
                    "
                  >
                    {industry.title}
                  </h3>

                  {/* Hover line */}

                  <div
                    className="
                      hidden
                      items-center
                      gap-3
                      sm:flex
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-neutral-300
                        transition-colors
                        duration-300
                        group-hover:text-[#ffcc00]
                      "
                    >
                      Explore
                    </span>

                    <span
                      className="
                        h-[2px]
                        w-5
                        bg-[#FFCC00]
                        transition-all
                        duration-300
                        group-hover:w-10
                      "
                    />
                  </div>

                  {/* Mobile Accent */}

                  <span
                    className="
                      h-2
                      w-2
                      rotate-45
                      bg-[#FFCC00]
                      transition-transform
                      duration-300
                      group-hover:rotate-90
                      sm:hidden
                    "
                  />
                </div>

                {/* Yellow bottom reveal */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    bg-[#FFCC00]
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* =======================================================
            FOOTER MARK
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-7
            flex
            items-center
            gap-4
          "
        >
          <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />

          <span
            className="
              font-heading
              text-[8px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Across sectors · Across ideas
          </span>

          <div className="h-px flex-1 bg-neutral-200" />
        </motion.div>
      </div>
    </section>
  );
}