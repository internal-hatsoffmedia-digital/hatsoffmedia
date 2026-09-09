"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    description?: string;
    linkedin?: string;
  };

  index: number;
  onClick: () => void;
}

export default function TeamCard({ member, index, onClick }: TeamCardProps) {
  return (
    <motion.div
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
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="
      group
      cursor-pointer
      "
      onClick={onClick}
    >
      {/* Image */}

      <div
        className="
        relative
        mx-auto
        h-72
        w-72
        overflow-hidden
        rounded-[40px]
        border
        border-neutral-200
        bg-neutral-100
        "
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
          "
        />

        {/* Hover Layer */}

        <div
          className="
          absolute
          inset-0
          flex
          items-end
          justify-center
          bg-gradient-to-t
          from-black/70
          via-black/20
          to-transparent
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          "
        >
          <div
            className="
            mb-8
            flex
            items-center
            gap-3
            "
          >
            {/* Linkedin */}

            <a
              href={member.linkedin || "#"}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#FFCC00]
              text-black
              transition-all
              hover:scale-110
              "
            >
              <FaLinkedinIn size={20} />
            </a>

            {/* View Profile */}

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
              "
            >
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}

      <div
        className="
        mt-7
        text-center
        "
      >
        <h3
          className="
          text-2xl
          font-black
          tracking-tight
          text-black
          "
        >
          {member.name}
        </h3>

        <p
          className="
          mt-2
          text-sm
          font-semibold
          uppercase
          tracking-wider
          text-[#ffcc00]
          "
        >
          {member.role}
        </p>

        {member.description && (
          <p
            className="
            mx-auto
            mt-4
            max-w-xs
            text-sm
            leading-6
            text-neutral-500
            "
          >
            {member.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
