"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTAContent() {
  return (
    <div
      className="
relative
overflow-hidden
rounded-[32px]
bg-black
px-8
py-12
md:px-14
md:py-16
"
    >
      {/* Glow */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
absolute
-left-20
top-10
h-64
w-64
rounded-full
bg-[#FFCC00]/20
blur-[120px]
"
      />

      <div
        className="
relative
z-10
max-w-4xl
"
      >
        {/* Label */}

        <motion.div
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
          }}
          className="
inline-flex
items-center
gap-3
rounded-full
border
border-[#FFCC00]/30
bg-[#FFCC00]/10
px-4
py-2
"
        >
          <span
            className="
h-2
w-2
rounded-full
bg-[#FFCC00]
animate-pulse
"
          />

          <span
            className="
text-[11px]
font-bold
uppercase
tracking-[0.35em]
text-[#FFCC00]
"
          >
            Ready To Grow?
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
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
            duration: 0.7,
          }}
          className="
mt-6
max-w-3xl
text-4xl
font-black
leading-[0.95]
tracking-[-0.06em]
text-white
md:text-6xl
"
        >
          Build a brand
          <br />
          people
          <span className="text-[#FFCC00]">remember.</span>
        </motion.h2>

        {/* Description */}

        <p
          className="
mt-5
max-w-xl
text-sm
leading-7
text-neutral-400
md:text-base
"
        >
          Strategy, design, websites, content, and digital growth solutions
          under one creative partner.
        </p>

        {/* Button */}

        <motion.div
          whileHover={{
            y: -3,
          }}
          className="
mt-8
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
px-6
py-3
text-sm
font-bold
text-black
"
          >
            Start Project
            <span
              className="
flex
h-8
w-8
items-center
justify-center
rounded-full
bg-black
text-white
transition-transform
duration-500
group-hover:rotate-45
"
            >
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
