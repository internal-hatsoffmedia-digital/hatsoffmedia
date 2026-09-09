"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 89258 81695",
    description: "Speak directly with our team.",
    href: "tel:+918925881695",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Start a Conversation",
    description: "Quick responses for your enquiries.",
    href: "https://wa.me/918925881695",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@hatsoffmedia.in",
    description: "Send your project requirements.",
    href: "mailto:contact@hatsoffmedia.in",
  },
  {
    icon: MapPin,
    title: "Visit Office",
    value: "Chennai, Tamil Nadu",
    description: "Meet us for a discussion.",
    href: "#map",
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-[#fafafa] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
            inline-flex
            rounded-full
            border
            border-[#ffcc00]/30
            bg-[#fceb77]/40
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-[#4c4c4c]
            "
          >
            CONTACT OPTIONS
          </span>

          <h2
            className="
            mt-6
            text-5xl
            font-black
            leading-tight
            tracking-[-0.05em]
            text-[#4c4c4c]
            md:text-6xl
            "
          >
            Multiple Ways
            <br />
            To
            <span className="text-[#ffcc00]"> Reach Us.</span>
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[#4c4c4c]/70
            "
          >
            Choose the communication method that's most convenient for
            you. We're here to answer your questions and help your
            business grow.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactMethods.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <Link
                  href={item.href}
                  className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-[#4c4c4c]/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
                  hover:border-[#ffcc00]
                  hover:shadow-[0_25px_60px_rgba(255,204,0,.18)]
                  "
                >
                  {/* Glow */}

                  <div
                    className="
                    absolute
                    -right-10
                    -top-10
                    h-32
                    w-32
                    rounded-full
                    bg-[#ffcc00]/10
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#ffcc00]
                    transition-all
                    duration-300
                    group-hover:rotate-6
                    group-hover:scale-110
                    "
                  >
                    <Icon
                      size={30}
                      className="text-[#4c4c4c]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-black text-[#4c4c4c]">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-semibold text-[#ffcc00]">
                    {item.value}
                  </p>

                  <p className="mt-5 leading-7 text-[#4c4c4c]/70">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/50">
                      Connect
                    </span>

                    <div
                      className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#4c4c4c]/10
                      transition-all
                      duration-300
                      group-hover:border-[#ffcc00]
                      group-hover:bg-[#ffcc00]
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        className="text-[#4c4c4c]"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}