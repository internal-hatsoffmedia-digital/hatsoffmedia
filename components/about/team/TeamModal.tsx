"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import type { TeamMember } from "./TeamSection";

export default function TeamModal({
  member,
  close,
}: {
  member: TeamMember;
  close: () => void;
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/30
        px-4
        backdrop-blur-md
        sm:px-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 22,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          y: 22,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-[940px]
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-[#111111]
          p-4
          shadow-[0_40px_100px_rgba(0,0,0,0.35)]
          md:p-6
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,204,0,0.18),_transparent_30%)]" />

        <button
          onClick={close}
          className="
            absolute
            right-5
            top-5
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-white/70
            transition-colors
            hover:bg-[#FFCC00]
            hover:text-black
          "
        >
          <X size={18} strokeWidth={2} />
        </button>

        <div className="relative grid gap-6 md:grid-cols-[340px_1fr] md:gap-8">
          <div className="relative">
            <div className="relative h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-neutral-200 shadow-inner md:h-[440px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#FFCC00]">
                  {member.role}
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  {member.tagline}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-[#FFCC00]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#FFCC00]">
                  Profile
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.06em] text-white md:text-4xl">
                {member.name}
              </h2>

              <p className="mt-3 text-sm font-medium leading-6 text-white/65 md:text-[15px]">
                {member.description}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-white/45">
                Strengths
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-[#FFCC00]/30 bg-[#FFCC00]/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FFCC00]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                  Focus
                </p>
                <p className="mt-2 text-sm font-semibold text-white/90">
                  {member.tagline}
                </p>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                  Impact
                </p>
                <p className="mt-2 text-sm font-semibold text-white/90">
                  Smart execution with standout creative energy.
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">
                <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
                Hatsoff Media
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-transform
                    hover:scale-[1.02]
                  "
                >
                  <FaLinkedinIn size={12} />
                  LinkedIn
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#FFCC00]
                    px-4
                    py-2.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black
                    transition-transform
                    hover:scale-[1.02]
                  "
                >
                  <FaGithub size={12} />
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
