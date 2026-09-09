"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import TeamModal from "./TeamModal";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sabari K",
    role: "Director",
    image: "/images/about/team/Sabari.png",
    linkedin: "#",
    description:
      "Driving business vision, strategy, and creative growth at Hatsoff Media.",
  },
  {
    name: "Veena Sai S",
    role: "Managing Director",
    image: "/images/about/team/Veena.png",
    linkedin: "#",
    description:
      "Leading operations, partnerships, and organizational growth.",
  },
  {
    name: "Ram Kumar M",
    role: "Creative Lead",
    image: "/images/about/team/Ram.png",
    linkedin: "#",
    description:
      "Building creative concepts and visual experiences for brands.",
  },
  {
    name: "Harish K",
    role: "Sales & Marketing Lead",
    image: "/images/about/team/Harish.png",
    linkedin: "#",
    description:
      "Helping businesses connect with the right digital solutions.",
  },
  {
    name: "Kamalesh G",
    role: "Production Control Lead",
    image: "/images/about/team/Kamalesh.png",
    linkedin: "#",
    description:
      "Managing production workflows and ensuring quality delivery.",
  },
  {
    name: "Muskan S",
    role: "Associate Lead & PC",
    image: "/images/about/team/Muskan.png",
    linkedin: "#",
    description:
      "Coordinating projects and supporting smooth execution.",
  },
  {
    name: "Sudheesh G",
    role: "Senior Video Editor",
    image: "/images/about/team/Sudheesh.png",
    linkedin: "#",
    description:
      "Creating engaging visual stories through professional editing.",
  },
  {
    name: "Ganesh K",
    role: "Associate Lead & Graphic Designer",
    image: "/images/about/team/Ganesh.png",
    linkedin: "#",
    description:
      "Designing creative visuals that strengthen brand identity.",
  },
];

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TeamSection() {
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Very subtle vertical grid */}

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "120px 100%",
          }}
        />

        {/* Very subtle yellow atmosphere */}

        <div
          className="
            absolute
            -right-40
            top-[35%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#FFCC00]/10
            blur-[150px]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-[1600px]
          px-6
          lg:px-12
          xl:px-20
          2xl:px-24
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Eyebrow */}

          <motion.div
            variants={reveal}
            className="flex items-center gap-4"
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.4em]
                text-[#ffcc00]
                sm:text-xs
              "
            >
              Our Team
            </span>

            <span className="h-[2px] w-10 bg-[#FFCC00]" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              08 Creative Minds
            </span>
          </motion.div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.div
            variants={reveal}
            className="
              relative
              mt-6
              lg:mt-7
            "
          >
            <h2
              className="
                max-w-5xl
                text-[56px]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.075em]
                text-black
                sm:text-[74px]
                md:text-[96px]
                lg:text-[120px]
                xl:text-[145px]
              "
            >
              THE
              <br />

              <span className="text-[#FFCC00]">TEAM</span>
              <span className="text-black">.</span>
            </h2>

            {/* Small supporting line */}

            <div
              className="
                mt-6
                max-w-[260px]
                lg:absolute
                lg:bottom-2
                lg:right-[5%]
                lg:mt-0
              "
            >
              <div className="border-l-2 border-[#FFCC00] pl-4">
                <p
                  className="
                    text-xs
                    font-medium
                    leading-5
                    text-neutral-500
                  "
                >
                  Different skills.
                  <br />
                  One creative direction.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================================
            TEAM GALLERY
        ======================================================== */}

        <div className="relative mt-10 lg:mt-12">
          {/* Gallery label */}

          <div className="mb-4 flex items-center justify-between">
            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-neutral-400
              "
            >
              Creative Cast
            </span>

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-neutral-300
              "
            >
              01 — 08
            </span>
          </div>

          {/* =====================================================
              DESKTOP
          ====================================================== */}

          <div className="hidden lg:block">
            <div className="grid grid-cols-8 gap-3 xl:gap-4">
              {teamMembers.map((member, index) => (
                <TeamPortrait
                  key={member.name}
                  member={member}
                  index={index}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              TABLET / MOBILE
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-10
              sm:grid-cols-3
              lg:hidden
            "
          >
            {teamMembers.map((member, index) => (
              <TeamPortrait
                key={member.name}
                member={member}
                index={index}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* =======================================================
            BOTTOM LINE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mt-10
            flex
            items-center
            gap-4
            border-t
            border-neutral-200
            pt-4
            lg:mt-12
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-neutral-400
            "
          >
            Hatsoff Media
          </span>

          <div className="h-px flex-1 bg-neutral-200" />

          <span
            className="
              hidden
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#ffcc00]
              sm:block
            "
          >
            Creative / Digital
          </span>
        </motion.div>
      </div>

      {/* =========================================================
          TEAM MODAL
      ========================================================== */}

      {selectedMember && (
        <TeamModal
          member={selectedMember}
          close={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}

/* ===============================================================
   TEAM PORTRAIT
================================================================ */

function TeamPortrait({
  member,
  index,
  onClick,
}: {
  member: TeamMember;
  index: number;
  onClick: () => void;
}) {
  const desktopOffset = [
    "lg:translate-y-5",
    "lg:-translate-y-1",
    "lg:translate-y-8",
    "lg:translate-y-1",
    "lg:translate-y-11",
    "lg:-translate-y-2",
    "lg:translate-y-6",
    "lg:translate-y-1",
  ][index];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className={`
        group
        relative
        block
        w-full
        text-left
        ${desktopOffset}
      `}
      aria-label={`View ${member.name}'s profile`}
    >
      {/* =======================================================
          PORTRAIT
      ======================================================== */}

      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          bg-neutral-100
        "
      >
        <img
          src={member.image}
          alt={member.name}
          loading={index < 3 ? "eager" : "lazy"}
          className="
            h-full
            w-full
            object-cover
            object-top
            grayscale
            transition-all
            duration-700
            ease-out
            group-hover:scale-[1.035]
            group-hover:grayscale-0
          "
        />

        {/* Minimal dark overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-black
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-[0.06]
          "
        />

        {/* =====================================================
            NUMBER
        ====================================================== */}

        <div
          className="
            absolute
            left-2.5
            top-2.5
            z-10
            flex
            h-7
            w-7
            items-center
            justify-center
            bg-white
            text-[8px]
            font-black
            text-black
            transition-all
            duration-300
            group-hover:bg-[#FFCC00]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* =====================================================
            ARROW
        ====================================================== */}

        <div
          className="
            absolute
            right-2.5
            top-2.5
            z-10
            flex
            h-8
            w-8
            items-center
            justify-center
            bg-[#FFCC00]
            text-black
            opacity-0
            translate-y-1
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={15} strokeWidth={2} />
        </div>

        {/* =====================================================
            ROLE
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-black/60
            to-transparent
            p-3
            pt-10
          "
        >
          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#FFCC00]
              sm:text-[9px]
            "
          >
            {member.role}
          </span>
        </div>
      </div>

      {/* =======================================================
          NAME
      ======================================================== */}

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <h3
            className="
              text-[14px]
              font-black
              leading-none
              tracking-[-0.035em]
              text-black
              transition-colors
              duration-300
              group-hover:text-[#ffcc00]
              sm:text-base
            "
          >
            {member.name}
          </h3>

          <span
            className="
              h-[2px]
              w-4
              shrink-0
              bg-[#FFCC00]
              transition-all
              duration-300
              group-hover:w-7
            "
          />
        </div>
      </div>
    </motion.button>
  );
}