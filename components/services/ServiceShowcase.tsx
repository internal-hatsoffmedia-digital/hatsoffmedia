"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Palette,
  Share2,
  Code2,
  Video,
  Megaphone,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    title: "Branding & Identity",
    description:
      "Logo, brand identity, company profile, brochures, and launch kits.",
    details:
      "We create complete brand systems that help businesses build recognition and trust.",
    icon: Palette,
  },

  {
    title: "Social Media Management",
    description:
      "Creatives, reels, captions, stories, content calendar, and reports.",
    details:
      "From strategy to daily content execution, we help brands stay active and connected.",
    icon: Share2,
  },

  {
    title: "Website Design & Development",
    description:
      "Business websites, landing pages, e-commerce, revamps, and integrations.",
    details:
      "We design modern digital experiences focused on performance, user experience, and growth.",
    icon: Code2,
  },

  {
    title: "Video Production & Editing",
    description:
      "Reels, corporate videos, YouTube editing, podcasts, and motion graphics.",
    details:
      "Creative storytelling through professional video production and editing.",
    icon: Video,
  },

  {
    title: "Performance Marketing",
    description:
      "Meta ads, Google ads, lead campaigns, sales campaigns, and retargeting.",
    details:
      "Data-driven campaigns designed to increase reach, leads, and conversions.",
    icon: Megaphone,
  },

  {
    title: "AI Creative Production",
    description:
      "AI videos, character content, product visuals, and creative automation.",
    details:
      "Using AI tools to create faster, smarter, and innovative brand content.",
    icon: Sparkles,
  },
];

export default function ServiceShowcase() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      className="
relative
bg-white
py-14
sm:py-16
lg:py-20
"
    >
      <div
        className="
mx-auto
max-w-7xl
px-6
lg:px-8
"
      >
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
        >
          <h2
            className="
text-5xl
font-black
tracking-[-0.06em]
md:text-7xl
"
          >
            Everything Your Brand
            <br />
            Needs To <span className="text-[#FFCC00]"> Grow.</span>
          </h2>
        </motion.div>

        <div
          className="
mt-20
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -15,
                  rotateX: 5,
                  scale: 1.03,
                }}
                onClick={() => setSelected(service)}
                className="
group
cursor-pointer
rounded-[32px]
border
border-neutral-200
bg-[#FFFDF7]
p-8
shadow-sm
transition-all
hover:border-[#FFCC00]
hover:shadow-2xl
"
              >
                <div
                  className="
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-black
text-[#FFCC00]
transition
duration-500
group-hover:rotate-12
"
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
mt-8
text-2xl
font-black
"
                >
                  {service.title}
                </h3>

                <p
                  className="
mt-4
leading-7
text-neutral-600
"
                >
                  {service.description}
                </p>

                <p
                  className="
mt-6
text-sm
font-bold
text-[#ffcc00]
"
                >
                  Click to explore →
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/40
px-6
backdrop-blur-md
"
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
relative
max-w-xl
rounded-[40px]
bg-[#FFFDF7]
p-10
shadow-2xl
"
            >
              <button
                onClick={() => setSelected(null)}
                className="
absolute
right-6
top-6
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-black
text-white
"
              >
                <X size={20} />
              </button>

              <div
                className="
flex
h-20
w-20
items-center
justify-center
rounded-3xl
bg-black
text-[#FFCC00]
"
              >
                <selected.icon size={35} />
              </div>

              <h3
                className="
mt-8
text-4xl
font-black
"
              >
                {selected.title}
              </h3>

              <p
                className="
mt-5
text-lg
leading-8
text-neutral-600
"
              >
                {selected.details}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="
mt-8
rounded-full
bg-[#FFCC00]
px-8
py-3
font-bold
"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
