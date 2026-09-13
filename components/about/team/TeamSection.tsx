"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import TeamModal from "./TeamModal";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  github: string;
  tagline: string;
  specialties: string[];
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sabarinathan",
    role: "Director",
    image: "/images/about/team/Sabari.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Brand strategy and growth vision",
    specialties: ["Business Growth", "Creative Direction", "Leadership"],
    description:
      "Sabarinathan brings a strategic lens to every brand decision, blending business clarity with creative ambition to help teams grow with purpose.",
  },
  {
    name: "Veena Sai S",
    role: "Managing Director",
    image: "/images/about/team/Veena.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Operations, people and momentum",
    specialties: ["Operations", "Partnerships", "Execution"],
    description:
      "Veena keeps the engine moving with a calm, structured approach that connects ideas, talent, and client outcomes into one streamlined system.",
  },
  {
    name: "Ram Kumar M",
    role: "Creative Lead",
    image: "/images/about/team/Ram.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Turning ideas into memorable experiences",
    specialties: ["Brand Story", "Visual Systems", "Concept Design"],
    description:
      "Ram leads the creative conversation by shaping ideas into bold visual narratives that feel distinct, premium, and instantly recognizable.",
  },
  {
    name: "Harish K",
    role: "Sales & Marketing Lead",
    image: "/images/about/team/Harish.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Connecting brands with growth opportunities",
    specialties: ["Marketing", "Sales Strategy", "Business Development"],
    description:
      "Harish bridges the gap between brand positioning and revenue goals, helping businesses unlock the right market attention at the right time.",
  },
  {
    name: "Kamalesh G",
    role: "Production Control Lead",
    image: "/images/about/team/Kamalesh.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Smooth delivery, sharper output",
    specialties: ["Production", "Quality Control", "Workflow Design"],
    description:
      "Kamalesh ensures projects move with precision, balancing timelines, delivery standards, and creative intent so every output feels polished.",
  },
  {
    name: "Muskan S",
    role: "Associate Lead & PC",
    image: "/images/about/team/Muskan.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Keeping big ideas organized and on track",
    specialties: ["Project Coordination", "Client Support", "Operations"],
    description:
      "Muskan is the calm behind the chaos, coordinating timelines, communication, and execution so each project feels effortless for clients.",
  },
  {
    name: "Sudheesh G",
    role: "Senior Video Editor",
    image: "/images/about/team/Sudheesh.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Crafting stories that keep attention",
    specialties: ["Editing", "Motion Stories", "Visual Rhythm"],
    description:
      "Sudheesh turns raw footage into sharp, emotional storytelling that feels cinematic, clear, and deeply aligned with brand tone.",
  },
  {
    name: "Ganesh K",
    role: "Associate Lead & Graphic Designer",
    image: "/images/about/team/Ganesh.png",
    linkedin: "#",
    github: "https://github.com/",
    tagline: "Designing identities people remember",
    specialties: ["Graphics", "Brand Assets", "Visual Identity"],
    description:
      "Ganesh blends design thinking and execution to create visuals that elevate identity, clarify messaging, and feel premium across every touchpoint.",
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
          rounded-[24px]
          border
          border-white/30
          bg-neutral-100
          shadow-[0_18px_45px_rgba(0,0,0,0.12)]
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
            group-hover:scale-[1.06]
            group-hover:grayscale-0
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-[#0f0f10]/25 to-transparent" />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-br
            from-[#FFCC00]/10
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

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
            rounded-full
            bg-white/90
            text-[8px]
            font-black
            text-black
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:bg-[#FFCC00]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

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
            rounded-full
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

        <div className="absolute inset-x-3 bottom-3 z-10">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#FFCC00]
                sm:text-[9px]
              "
            >
              {member.role}
            </span>
            <span className="h-px flex-1 bg-white/20" />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {member.specialties.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/8 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <div>
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
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              {member.tagline}
            </p>
          </div>

          <span
            className="
              h-[2px]
              w-4
              shrink-0
              bg-[#FFCC00]
              transition-all
              duration-300
              group-hover:w-8
            "
          />
        </div>
      </div>
    </motion.button>
  );
}