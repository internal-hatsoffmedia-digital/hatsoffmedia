"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Briefcase,
  Megaphone,
  TrendingUp,
  Crown,
} from "lucide-react";
import Link from "next/link";

const packages = [
  {
    icon: Briefcase,
    badge: "I'm Starting a New Business",
    title: "Business Starter",
    description:
      "Perfect for businesses launching their brand and creating a professional first impression.",
    color: "bg-blue-50",
    iconColor: "bg-blue-500",
    features: [
      "Logo / Basic Identity",
      "Business Card",
      "Letterhead",
      "Starter Social Creatives",
      "Profile Setup",
      "Brand Launch Essentials",
    ],
  },
  {
    icon: Megaphone,
    badge: "I Need Better Social Media",
    title: "Social Media Growth",
    description:
      "Keep your business active with consistent social media management and engaging content.",
    color: "bg-green-50",
    iconColor: "bg-green-500",
    features: [
      "Monthly Content Calendar",
      "Social Media Creatives",
      "Reels & Short Videos",
      "Stories",
      "Captions & Hashtags",
      "Monthly Report",
    ],
  },
  {
    icon: TrendingUp,
    badge: "I Want Leads & Campaigns",
    title: "Digital Growth",
    description:
      "Generate quality leads through structured digital campaigns and creative advertising.",
    color: "bg-orange-50",
    iconColor: "bg-orange-500",
    featured: true,
    features: [
      "Monthly Creatives",
      "Ad Creative Planning",
      "Meta Campaigns",
      "Lead Campaigns",
      "Traffic Campaigns",
      "Performance Reports",
    ],
  },
  {
    icon: Crown,
    badge: "I Need Complete Brand Support",
    title: "Premium Partner",
    description:
      "A complete creative partnership for businesses that need ongoing branding and digital support.",
    color: "bg-yellow-50",
    iconColor: "bg-[#FFCC00]",
    features: [
      "Brand Strategy",
      "Social Media",
      "Website Support",
      "Video Production",
      "Campaign Planning",
      "Monthly Review",
    ],
  },
];

export default function PackageGrid() {
  return (
    <section
      id="packages"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#B68A00]">
            Packages
          </span>

          <h2 className="mt-6 text-5xl font-black text-black md:text-6xl">
            Find The Perfect
            <span className="text-[#FFCC00]"> Plan</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every package is carefully designed around your business
            stage, making it easier to choose the right starting point.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <motion.div
                key={pkg.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
                className={`
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  ${
                    pkg.featured
                      ? "border-[#FFCC00] shadow-2xl"
                      : "border-neutral-200"
                  }
                  bg-white
                `}
              >
                {pkg.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#FFCC00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div
                    className={`
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      ${pkg.iconColor}
                      text-white
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B68A00]">
                    {pkg.badge}
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-black">
                    {pkg.title}
                  </h3>

                  <p className="mt-5 leading-7 text-neutral-600">
                    {pkg.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    {pkg.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFCC00]/15">
                          <Check
                            size={14}
                            className="text-[#B68A00]"
                          />
                        </div>

                        <span className="text-sm text-neutral-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                                    <div className="mt-10">
                    <Link
                      href="/contact"
                      className={`
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        py-4
                        font-bold
                        transition-all
                        duration-300
                        ${
                          pkg.featured
                            ? "bg-[#FFCC00] text-black hover:scale-[1.03]"
                            : "border border-neutral-300 hover:border-[#FFCC00] hover:bg-[#FFCC00] hover:text-black"
                        }
                      `}
                    >
                      Choose This Plan

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Bottom Strip */}

                <div
                  className={`
                    border-t
                    ${
                      pkg.featured
                        ? "border-[#FFCC00]/30 bg-[#FFCC00]/5"
                        : "border-neutral-200 bg-neutral-50"
                    }
                    px-8
                    py-5
                  `}
                >
                  <p className="text-center text-sm leading-6 text-neutral-600">
                    Ideal for businesses looking to move confidently to
                    the next stage of growth.
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}