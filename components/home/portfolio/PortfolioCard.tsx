"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    link: string;
  };
}

export default function PortfolioCard({
  project,
}: PortfolioCardProps) {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <Link
        href={project.link}
        className="
        group
        block
        overflow-hidden
        rounded-[32px]
        "
      >

        {/* Image Wrapper */}

        <div
          className="
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-[32px]
          bg-neutral-100
          "
        >

          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
            "
          />


          {/* Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            "
          />


          {/* Arrow */}

          <div
            className="
            absolute
            right-6
            top-6
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            opacity-0
            translate-y-3
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
            "
          >
            <ArrowUpRight size={20} />
          </div>


          {/* Hover Content */}

          <div
            className="
            absolute
            bottom-0
            left-0
            w-full
            translate-y-5
            p-8
            opacity-0
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
            "
          >

            <p
              className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#FFCC00]
              "
            >
              {project.category}
            </p>


            <h3
              className="
              mt-3
              text-3xl
              font-black
              text-white
              "
            >
              {project.title}
            </h3>

          </div>

        </div>


        {/* Mobile Text */}

        <div className="mt-5 lg:hidden">

          <p
            className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#ffcc00]
            "
          >
            {project.category}
          </p>


          <h3
            className="
            mt-2
            text-2xl
            font-black
            text-black
            "
          >
            {project.title}
          </h3>

        </div>


      </Link>
    </motion.div>
  );
}