"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white
      pt-28
      pb-6
      sm:pt-32
      sm:pb-8
      lg:pt-36
      lg:pb-10
      "
    >
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
        className="
        absolute
        right-[-200px]
        top-20
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#FFCC00]/20
        blur-[180px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-7xl
        px-6
        lg:px-8
        "
      >
        {/* Label */}

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
            border-[#FFCC00]/30
            bg-[#FFCC00]/10
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-[#B68A00]
            "
          >
            <span
              className="
            h-2
            w-2
            rounded-full
            bg-[#FFCC00]
            "
            />
            About Hatsoff
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
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
            duration: 0.8,
          }}
          className="
          mt-10
          max-w-5xl
          text-5xl
          font-black
          leading-[0.88]
          tracking-[-0.07em]
          text-black
          sm:text-6xl
          md:text-8xl
          xl:text-[110px]
          "
        >
          We Help
          <br />
          Businesses Become
          <br />
          <span className="text-[#FFCC00]">Stronger</span> Brands.
        </motion.h1>

        {/* Description + Buttons */}

        <div
          className="
          mt-10
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          "
        >
          <p
            className="
            max-w-xl
            text-base
            leading-7
            text-neutral-600
            sm:text-lg
            sm:leading-8
            "
          >
            Hatsoff Media Pvt Ltd is a Chennai-based branding, creative
            production, and digital growth company built for modern businesses.
          </p>

          <div
            className="
            flex
            flex-wrap
            gap-4
            "
          >
            <Link
              href="/contact"
              className="
              group
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#FFCC00]
              px-6
              py-3.5
              text-sm
              font-bold
              text-black
              shadow-[0_8px_25px_rgba(255,204,0,0.35)]
              transition-all
              duration-300
              hover:bg-neutral-900
              hover:text-white
              hover:shadow-xl
              sm:px-8
              sm:py-4
              sm:text-base
              "
            >
              <span>Talk To Our Team</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-colors group-hover:bg-[#FFCC00] group-hover:text-black">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="
              group
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-neutral-300
              bg-white
              px-6
              py-3.5
              text-sm
              font-bold
              text-black
              transition-all
              duration-300
              hover:border-[#FFCC00]
              hover:bg-[#fffdf2]
              hover:shadow-md
              sm:px-8
              sm:py-4
              sm:text-base
              "
            >
              <span>View Our Work</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Team Banner */}

      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
        relative
        mt-16
        h-[340px]
        overflow-hidden
        bg-white
        sm:mt-20
        sm:h-[420px]
        lg:h-[650px]
        "
      >
        <Image
          key="about-team-banner-v2"
          src="/images/about/team-banner.png"
          alt="Hatsoff Media Team"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="
          h-full
          w-full
          object-contain
          object-center
          "
        />

        {/* Bottom Fade */}

        <div
          className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-white
          to-transparent
          "
        />
      </motion.div>
    </section>
  );
}
