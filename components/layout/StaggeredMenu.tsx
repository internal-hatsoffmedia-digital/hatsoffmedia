"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/hatsoff_media/",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/HatsoffMedia/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/112455932/",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@hatsoff_media",
  },
];

interface Props {
  open: boolean;
  close: () => void;
}

export default function StaggeredMenu({ open, close }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col justify-between overflow-y-auto bg-[#0A0A0A] px-8 py-10 text-white sm:px-12 md:px-20"
        >
          {/* Header Row with Logo & Close Button */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFCC00]">
              Hatsoff Media
            </p>

            <button
              onClick={close}
              aria-label="Close Menu"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/5
                text-white
                backdrop-blur-md
                transition-all
                duration-200
                hover:border-[#FFCC00]
                hover:bg-[#FFCC00]
                hover:text-black
                active:scale-95
              "
            >
              <X size={22} strokeWidth={2.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="my-auto space-y-3 py-10">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-2
                    text-4xl
                    font-black
                    tracking-tight
                    transition-colors
                    duration-200
                    hover:text-[#FFCC00]
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                  "
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={32}
                    className="
                      text-[#FFCC00]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:opacity-100
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer Socials */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  text-white
                  transition-all
                  duration-200
                  hover:border-[#FFCC00]
                  hover:bg-[#FFCC00]
                  hover:text-black
                  hover:scale-110
                "
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
