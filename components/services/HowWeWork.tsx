"use client";

import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We understand your goals, audience, challenges, and brand requirements before creating solutions.",
    icon: Search,
  },

  {
    number: "02",
    title: "Plan The Right Creative Direction",
    description:
      "We create a clear strategy, visual direction, and roadmap aligned with your business goals.",
    icon: Lightbulb,
  },

  {
    number: "03",
    title: "Create Content & Assets",
    description:
      "Our creative team builds designs, videos, websites, and digital assets that represent your brand.",
    icon: PenTool,
  },

  {
    number: "04",
    title: "Execute Consistently",
    description:
      "We deliver campaigns, content, and digital experiences while maintaining brand consistency.",
    icon: Rocket,
  },

  {
    number: "05",
    title: "Review & Improve",
    description:
      "We analyse performance, collect insights, and improve strategies for better growth.",
    icon: BarChart3,
  },
];

const containerAnimation = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HowWeWork() {
  return (
    <section
      className="
relative
overflow-hidden
bg-[#FFFDF7]
py-14
sm:py-16
lg:py-20
"
    >
      {/* Background Elements */}

      <div
        className="
absolute
right-[-150px]
top-20
h-[500px]
w-[500px]
rounded-full
bg-[#FFCC00]/20
blur-[180px]
"
      />

      <div
        className="
absolute
bottom-0
left-[-200px]
h-[400px]
w-[400px]
rounded-full
bg-[#FFE9A8]/40
blur-[150px]
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
        {/* Heading */}

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
          }}
          transition={{
            duration: 0.8,
          }}
          className="
max-w-4xl
"
        >
          <p
            className="
text-xs
font-bold
uppercase
tracking-[0.4em]
text-[#ffcc00]
"
          >
            Our Process
          </p>

          <h2
            className="
mt-8
text-5xl
font-black
leading-[0.9]
tracking-[-0.07em]
text-black
md:text-7xl
"
          >
            How We Turn Ideas
            <br />
            Into{" "}
            <span
              className="
text-[#FFCC00]
"
            >
              Reality.
            </span>
          </h2>

          <p
            className="
mt-8
max-w-2xl
text-lg
leading-8
text-neutral-600
"
          >
            A simple and structured process that transforms your business goals
            into powerful brand experiences.
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
relative
mt-24
space-y-10
"
        >
          {/* Vertical Line */}

          <div
            className="
absolute
left-8
top-0
hidden
h-full
w-[2px]
bg-gradient-to-b
from-[#FFCC00]
via-neutral-200
to-transparent
lg:block
"
          />

          {process.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={cardAnimation}
                className="
group
relative
grid
gap-8
lg:grid-cols-12
"
              >
                {/* Icon + Number */}

                <div
                  className="
flex
items-start
gap-6
lg:col-span-3
"
                >
                  <div
                    className="
relative
z-10
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-black
text-[#FFCC00]
shadow-xl
transition-all
duration-500
group-hover:scale-110
group-hover:bg-[#FFCC00]
group-hover:text-black
"
                  >
                    <Icon size={26} />
                  </div>

                  <span
                    className="
pt-3
text-5xl
font-black
tracking-tight
text-neutral-200
transition
duration-500
group-hover:text-[#FFCC00]
"
                  >
                    {item.number}
                  </span>
                </div>

                {/* Content Card */}

                <div
                  className="
relative
overflow-hidden
rounded-[36px]
border
border-neutral-200
bg-white
p-8
shadow-sm
transition-all
duration-500
lg:col-span-9
group-hover:-translate-y-3
group-hover:shadow-2xl
"
                >
                  {/* Hover Glow */}

                  <div
                    className="
absolute
right-0
top-0
h-40
w-40
rounded-full
bg-[#FFCC00]/20
opacity-0
blur-3xl
transition
duration-500
group-hover:opacity-100
"
                  />

                  <div
                    className="
relative
"
                  >
                    <h3
                      className="
text-2xl
font-black
text-black
md:text-3xl
"
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
mt-4
max-w-3xl
text-lg
leading-8
text-neutral-600
"
                    >
                      {item.description}
                    </p>

                    <div
                      className="
mt-6
flex
items-center
gap-2
text-sm
font-bold
text-[#ffcc00]
opacity-0
transition-all
duration-500
group-hover:opacity-100
"
                    >
                      Explore Process
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
