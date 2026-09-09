"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa6";
import { MessageSquareShare, X, ChevronLeft } from "lucide-react";

interface SocialItem {
  name: string;
  href: string;
  icon: typeof FaInstagram;
  color: string;
  hoverBg: string;
}

const socials: SocialItem[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918925881695",
    icon: FaWhatsapp,
    color: "#25D366",
    hoverBg: "hover:bg-[#25D366] hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hatsoff_media/",
    icon: FaInstagram,
    color: "#E1306C",
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/HatsoffMedia/",
    icon: FaFacebookF,
    color: "#1877F2",
    hoverBg: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@hatsoff_media",
    icon: FaYoutube,
    color: "#FF0000",
    hoverBg: "hover:bg-[#FF0000] hover:text-white",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/112455932/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
    hoverBg: "hover:bg-[#0A66C2] hover:text-white",
  },
];

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <aside
      aria-label="Floating social links"
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-7"
    >
      {/* Social Items Dock */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2.5 rounded-3xl border border-black/10 bg-white/90 p-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl animate-float-slow"
          >
            {socials.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.name}
                  className="relative flex items-center justify-end"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Floating Tooltip (Left Side) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: 10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-neutral-900 px-3.5 py-1.5 text-xs font-bold text-white shadow-xl"
                      >
                        {item.name}
                        {/* Little Arrow */}
                        <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-neutral-900" />
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Icon Button */}
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.name}`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className={`
                      group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200/80 bg-white text-neutral-700 shadow-sm transition-all duration-300
                      ${item.hoverBg}
                    `}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                    {/* WhatsApp Pulse Notification Dot */}
                    {item.name === "WhatsApp" && (
                      <span className="absolute -right-1 -top-1 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-white" />
                      </span>
                    )}
                  </motion.a>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Trigger Button */}
      <motion.button
        type="button"
        aria-label={isOpen ? "Hide social links" : "Show social links"}
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="
          flex h-12 w-12 items-center justify-center rounded-full
          bg-[#FFCC00] text-neutral-900 shadow-[0_8px_25px_rgba(255,204,0,0.45)]
          transition-all duration-300 hover:bg-neutral-900 hover:text-white
        "
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquareShare className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </aside>
  );
}
