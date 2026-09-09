"use client";

import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Every brand starts with a story.",
    description:
      "We understand your business, customers, challenges, and goals before creating any solution.",
  },

  {
    number: "02",
    title: "Build",
    subtitle: "Ideas become meaningful experiences.",
    description:
      "We combine strategy, branding, design, technology, and creativity to build powerful digital experiences.",
  },

  {
    number: "03",
    title: "Connect",
    subtitle: "Brands grow through connection.",
    description:
      "We create content and digital experiences that help businesses communicate clearly and build trust.",
  },

  {
    number: "04",
    title: "Scale",
    subtitle: "Creative solutions built for growth.",
    description:
      "We help businesses improve visibility, attract customers, and grow through digital platforms.",
  },
];

export default function Philosophy() {
  return (
    <section
      className="
relative
overflow-hidden
bg-[#FAFAFA]
py-32
lg:py-40
"
    >
      {/* Background Elements */}

      <div
        className="
absolute
right-[-200px]
top-20
h-[500px]
w-[500px]
rounded-full
bg-[#FFCC00]/15
blur-[180px]
"
      />

      <div
        className="
absolute
left-[-200px]
bottom-20
h-[400px]
w-[400px]
rounded-full
bg-neutral-200/50
blur-[160px]
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
        {/* Header */}

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
max-w-5xl
"
        >
          <span
            className="
text-xs
font-bold
uppercase
tracking-[0.4em]
text-[#ffcc00]
"
          >
            Our Approach
          </span>

          <h2
            className="
mt-8
text-5xl
font-black
leading-[0.9]
tracking-[-0.07em]
text-black
md:text-7xl
xl:text-[96px]
"
          >
            From Ideas
            <br />
            To Brands
            <br />
            That
            <span className="text-[#FFCC00]">Grow.</span>
          </h2>

          <p
            className="
mt-8
max-w-3xl
text-xl
leading-9
text-neutral-600
"
          >
            Our process combines business thinking, creative execution, and
            technology to transform ideas into memorable brand experiences.
          </p>
        </motion.div>

        {/* Journey */}

        <div
          className="
relative
mt-28
"
        >
          {/* Center Line */}

          <div
            className="
absolute
left-6
top-0
h-full
w-[2px]
bg-neutral-200
md:left-1/2
md:-translate-x-1/2
"
          >
            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{
                height: "100%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 2,
              }}
              className="
w-full
bg-[#FFCC00]
"
            />
          </div>

          <div
            className="
space-y-20
"
          >
            {journey.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                className="
relative
grid
md:grid-cols-2
md:gap-20
"
              >
                {/* Dot */}

                <div
                  className="
absolute
left-[1px]
top-0
flex
h-12
w-12
items-center
justify-center
rounded-full
border-4
border-white
bg-[#FFCC00]
shadow-lg
md:left-1/2
md:-translate-x-1/2
"
                >
                  <span
                    className="
text-xs
font-black
text-black
"
                  >
                    {item.number}
                  </span>
                </div>

                {/* Left / Right Content */}

                <div
                  className={`
pl-20
md:pl-0

${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}

`}
                >
                  <h3
                    className="
text-4xl
font-black
tracking-tight
text-black
"
                  >
                    {item.title}
                  </h3>

                  <h4
                    className="
mt-3
text-xl
font-bold
text-[#ffcc00]
"
                  >
                    {item.subtitle}
                  </h4>

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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
mt-28
rounded-[40px]
border
border-neutral-200
bg-white
p-10
text-center
shadow-sm
md:p-16
"
        >
          <h3
            className="
text-4xl
font-black
tracking-tight
text-black
md:text-6xl
"
          >
            We don't just create brands.
            <br />
            <span className="text-[#FFCC00]">We build connections.</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
