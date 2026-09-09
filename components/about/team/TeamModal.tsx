"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export default function TeamModal({ member, close }: any) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[200]
        flex
        items-center
        justify-center
        bg-black/20
        backdrop-blur-sm
        px-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.95,
          y: 20,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="
          relative
          w-full
          max-w-[800px]
          rounded-[32px]
          bg-white
          p-10
          shadow-2xl
          md:p-16
        "
      >
        <button
          onClick={close}
          className="
            absolute
            right-6
            top-6
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-neutral-400
            transition-colors
            hover:bg-neutral-100
            hover:text-black
          "
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div
          className="
            flex
            flex-col
            items-center
            gap-10
            md:flex-row
            md:gap-14
          "
        >
          {/* Image */}
          <div
            className="
              relative
              h-64
              w-64
              shrink-0
              overflow-hidden
              rounded-full
              bg-neutral-100
              shadow-inner
              md:h-80
              md:w-80
            "
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col text-center md:text-left">
            <h2
              className="
                text-3xl
                font-bold
                tracking-tight
                text-black
                md:text-4xl
              "
            >
              {member.name}
            </h2>

            <p
              className="
                mt-2
                text-sm
                font-semibold
                text-neutral-500
              "
            >
              {member.role}
            </p>

            <p
              className="
                mt-6
                text-sm
                leading-relaxed
                text-neutral-600
                md:text-base
                md:leading-7
              "
            >
              {member.description}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-transform
                  hover:scale-105
                  active:scale-95
                "
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
