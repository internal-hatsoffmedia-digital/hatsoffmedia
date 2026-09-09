"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScroll = useRef(0);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 20);

      // Only hide when scrolling down past 150px with a buffer
      if (current > lastScroll.current && current > 150) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up or near top
        setVisible(true);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`
            w-full
            max-w-[1400px]
            rounded-full
            border
            transition-all
            duration-300
            ${
              scrolled
                ? "border-neutral-200/90 bg-white/95 shadow-[0_10px_35px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
                : "border-white/70 bg-white/80 shadow-[0_6px_25px_rgba(0,0,0,0.04)] backdrop-blur-xl"
            }
          `}
        >
          <div
            className={`
              flex
              items-center
              justify-between
              px-6
              transition-all
              duration-300
              sm:px-8
              lg:grid
              lg:grid-cols-[200px_1fr_auto]
              ${scrolled ? "h-[70px]" : "h-[76px]"}
            `}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex w-[150px] shrink-0 items-center transition-transform duration-200 hover:scale-105 sm:w-[170px]"
              >
                <Image
                  src="/logo1.png"
                  alt="Hatsoff Media"
                  width={240}
                  height={60}
                  priority
                  sizes="(max-width: 640px) 150px, 170px"
                  className="h-auto w-full select-none object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center justify-center gap-1 lg:flex">
              {menuItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={`
                        relative
                        flex
                        items-center
                        rounded-full
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        transition-colors
                        duration-200
                        ${
                          active
                            ? "text-black font-bold"
                            : "text-neutral-600 hover:text-black hover:bg-black/[0.04]"
                        }
                      `}
                    >
                      {active && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-full bg-[#FFCC00]/25 border border-[#FFCC00]/40"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center justify-end gap-3">
              {/* Desktop CTA Button */}
              <Link
                href="/contact"
                className="
                  group/btn
                  relative
                  hidden
                  items-center
                  gap-2.5
                  overflow-hidden
                  rounded-full
                  bg-[#FFCC00]
                  px-6
                  py-2.5
                  text-sm
                  font-bold
                  text-black
                  shadow-[0_4px_16px_rgba(255,204,0,0.35)]
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  hover:shadow-[0_6px_25px_rgba(0,0,0,0.25)]
                  hover:scale-105
                  lg:flex
                "
              >
                {/* Live radar ping */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/60 opacity-75 group-hover/btn:bg-[#FFCC00]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black group-hover/btn:bg-[#FFCC00]" />
                </span>

                <span>Start Project</span>

                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={15} strokeWidth={2.5} />
                </motion.span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  text-black
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-neutral-100
                  hover:scale-105
                  active:scale-95
                  lg:hidden
                "
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X size={22} strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu size={22} strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Navigation Menu */}
      <StaggeredMenu
        open={mobileOpen}
        close={() => setMobileOpen(false)}
      />
    </>
  );
}