"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Megaphone,
  TrendingUp,
  Crown,
  ArrowRight,
} from "lucide-react";

const journey = [
  {
    id: "01",
    icon: BriefcaseBusiness,
    title: "Starting a\nBusiness",
    subtitle: "Business Starter",
    description:
      "Build your brand identity and launch with a professional foundation.",
  },
  {
    id: "02",
    icon: Megaphone,
    title: "Better Social\nMedia",
    subtitle: "Social Growth",
    description:
      "Stay active with consistent content, reels and social engagement.",
  },
  {
    id: "03",
    icon: TrendingUp,
    title: "Leads &\nCampaigns",
    subtitle: "Digital Growth",
    description:
      "Reach new customers with performance marketing and campaigns.",
  },
  {
    id: "04",
    icon: Crown,
    title: "Complete\nBrand Partner",
    subtitle: "Premium Partner",
    description:
      "Your dedicated branding, website and digital growth partner.",
  },
];

export default function PackageJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Glow */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#fceb77]/30 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#ffcc00]/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

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
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#ffcc00]/30
              bg-[#fceb77]/40
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#4c4c4c]
            "
          >
            BUSINESS JOURNEY
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              tracking-[-0.05em]
              text-[#4c4c4c]
              md:text-7xl
            "
          >
            Choose Your
            <br />

            <span className="text-[#ffcc00]">
              Business Stage
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-[#4c4c4c]/70
            "
          >
            Every successful business starts somewhere.
            Select your current stage and discover the
            package designed to help you move forward.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24 hidden lg:block">
          <div className="absolute top-10 left-0 right-0 h-px bg-[#4c4c4c]/10" />

          <div className="grid grid-cols-4 gap-8">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
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
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative"
                >
                  {/* Number */}

                  <div
                    className="
                      absolute
                      -top-14
                      left-1/2
                      -translate-x-1/2
                      text-6xl
                      font-black
                      text-[#4c4c4c]/10
                    "
                  >
                    {item.id}
                  </div>

                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#ffcc00]/30
                      bg-white
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:border-[#ffcc00]
                      group-hover:bg-[#ffcc00]
                    "
                  >
                    <Icon
                      size={34}
                      className="text-[#4c4c4c] transition-all group-hover:scale-110"
                    />
                  </div>

                  {/* Card */}

                  <div
                    className="
                      mt-10
                      rounded-[32px]
                      border
                      border-[#4c4c4c]/10
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:border-[#ffcc00]
                      group-hover:shadow-[0_25px_60px_rgba(255,204,0,0.18)]
                    "
                  >
                    <h3 className="whitespace-pre-line text-3xl font-black leading-tight text-[#4c4c4c]">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-bold text-[#ffcc00]">
                      {item.subtitle}
                    </p>

                    <p className="mt-5 leading-7 text-[#4c4c4c]/70">
                      {item.description}
                    </p>
                                        <div className="mt-8 flex items-center justify-between">
                      <span
                        className="
                          text-sm
                          font-bold
                          uppercase
                          tracking-[0.25em]
                          text-[#4c4c4c]/50
                          transition-all
                          duration-300
                          group-hover:text-[#ffcc00]
                        "
                      >
                        Next Stage
                      </span>

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#4c4c4c]/10
                          transition-all
                          duration-300
                          group-hover:border-[#ffcc00]
                          group-hover:bg-[#ffcc00]
                        "
                      >
                        <ArrowRight
                          size={18}
                          className="
                            text-[#4c4c4c]
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}

        <div className="mt-20 space-y-8 lg:hidden">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
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
                  delay: index * 0.15,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#4c4c4c]/10
                  bg-white
                  p-7
                  shadow-sm
                "
              >
                <div className="flex items-start gap-5">
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ffcc00]
                    "
                  >
                    <Icon
                      size={28}
                      className="text-[#4c4c4c]"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-sm font-bold text-[#ffcc00]">
                      {item.id}
                    </span>

                    <h3 className="mt-2 whitespace-pre-line text-2xl font-black text-[#4c4c4c]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-semibold text-[#ffcc00]">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 leading-7 text-[#4c4c4c]/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                {index !== journey.length - 1 && (
                  <div className="mt-8 flex justify-center">
                    <ArrowRight
                      className="rotate-90 text-[#ffcc00]"
                      size={24}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}