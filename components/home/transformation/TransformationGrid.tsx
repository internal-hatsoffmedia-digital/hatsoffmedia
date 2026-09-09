"use client";

import { motion } from "framer-motion";
import { transformationData } from "./transformationData";
import { useState } from "react";

export default function TransformationGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className="
      grid
      gap-8
      md:grid-cols-2
      lg:grid-cols-3
      "
    >
      {transformationData.map((item, index) => (
        <motion.div
          key={item.number}
          initial={{
            opacity: 0,
            y: 80,
            rotateX: -20,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.12,
            type: "spring",
            stiffness: 80,
          }}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          animate={{
            rotateY: active === index ? 5 : 0,

            scale: active === index ? 1.04 : 1,
          }}
          className="
          group
          relative
          min-h-[320px]
          overflow-hidden
          rounded-[40px]
          border
          border-neutral-200
          bg-white
          p-10
          perspective-1000
          transition-shadow
          duration-500
          hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)]
          "
        >
          {/* Animated Glow */}

          <motion.div
            animate={{
              opacity: active === index ? 1 : 0,
            }}
            className="
            absolute
            -right-20
            -top-20
            h-60
            w-60
            rounded-full
            bg-[#FFCC00]/20
            blur-[80px]
            "
          />

          {/* Number */}

          <motion.div
            animate={{
              y: active === index ? -10 : 0,
            }}
            className="
            relative
            text-[90px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-neutral-100
            transition-colors
            duration-500
            group-hover:text-[#FFCC00]/30
            "
          >
            {item.number}
          </motion.div>

          {/* Content */}

          <div
            className="
            relative
            mt-8
            "
          >
            <h3
              className="
              text-3xl
              font-black
              tracking-tight
              text-black
              "
            >
              {item.title}
            </h3>

            <p
              className="
              mt-5
              text-lg
              leading-8
              text-neutral-600
              "
            >
              {item.description}
            </p>
          </div>

          {/* Moving Border */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileHover={{
              width: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="
            absolute
            bottom-0
            left-0
            h-1
            bg-[#FFCC00]
            "
          />
        </motion.div>
      ))}
    </div>
  );
}
