"use client";

import { motion } from "framer-motion";
import NumberTicker from "@/components/common/NumberTicker";

const stats = [
  {
    value: "120+",
    label: "Projects Delivered",
  },
  {
    value: "60+",
    label: "Happy Clients",
  },
  {
    value: "8+",
    label: "Years Experience",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.9,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        flex
        flex-wrap
        items-center
        gap-10
        border-t
        border-neutral-200
        pt-8
      "
    >
      {stats.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center"
        >
          <div>
            <h3
              className="
                text-3xl
                font-black
                tracking-tight
                text-neutral-900
                lg:text-4xl
              "
            >
              <NumberTicker value={item.value} delay={0.2 + index * 0.1} />
            </h3>

            <p
              className="
                mt-1
                text-sm
                font-medium
                text-neutral-500
              "
            >
              {item.label}
            </p>
          </div>

          {index !== stats.length - 1 && (
            <div
              className="
                ml-10
                h-12
                w-px
                bg-neutral-200
              "
            />
          )}
        </div>
      ))}
    </motion.div>
  );
}