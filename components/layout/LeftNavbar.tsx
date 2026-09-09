"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Layers,
  Package,
  FolderKanban,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Users },
  { name: "Services", href: "/services", icon: Layers },
  { name: "Packages", href: "/packages", icon: Package, badge: "Plans" },
  { name: "Portfolio", href: "/portfolio", icon: FolderKanban },
  { name: "Contact", href: "/contact", icon: Send },
];

export default function LeftNavbar() {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOverDark, setIsOverDark] = useState(false);

  // Detect if the side rail is over the dark footer or dark sections
  useEffect(() => {
    const checkDarkOverlap = () => {
      const rail = document.getElementById("left-nav-rail");
      const footer = document.querySelector("footer");
      if (!rail || !footer) return;

      const railRect = rail.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      // Rail overlaps with dark footer
      const overlaps =
        railRect.bottom >= footerRect.top && railRect.top <= footerRect.bottom;
      setIsOverDark(overlaps);
    };

    window.addEventListener("scroll", checkDarkOverlap, { passive: true });
    window.addEventListener("resize", checkDarkOverlap, { passive: true });
    checkDarkOverlap();

    return () => {
      window.removeEventListener("scroll", checkDarkOverlap);
      window.removeEventListener("resize", checkDarkOverlap);
    };
  }, []);

  return (
    <aside
      id="left-nav-rail"
      aria-label="Side Navigation Rail"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none"
    >
      {/* Floating Vertical Transparent Glass Capsule */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`
          relative
          flex
          flex-col
          items-center
          gap-2
          rounded-full
          p-2
          backdrop-blur-2xl
          transition-all
          duration-300
          ${
            isOverDark
              ? "bg-black/40 border border-white/25 shadow-[0_16px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:bg-black/55"
              : "bg-white/[0.16] border border-white/70 shadow-[0_10px_35px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.03)] hover:bg-white/[0.28] hover:shadow-[0_14px_40px_rgba(0,0,0,0.09)]"
          }
        `}
      >
        {/* Brand Insignia / Monogram */}
        <Link
          href="/"
          title="Hatsoff Media Home"
          className={`
            group relative flex h-10 w-10 items-center justify-center rounded-full
            transition-all duration-300 hover:scale-105
            ${
              isOverDark
                ? "bg-white/10 hover:bg-[#ffcc00]/25 text-[#ffcc00]"
                : "bg-white/40 hover:bg-[#ffcc00] text-black border border-white/60 shadow-xs hover:text-black"
            }
          `}
        >
          <span className="font-heading text-sm font-extrabold transition-colors">
            H
          </span>
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffcc00] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffcc00]" />
          </span>

          {/* Hover Tooltip */}
          <div className="pointer-events-none absolute left-full ml-3 hidden items-center rounded-md border border-white/15 bg-neutral-950/95 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md group-hover:flex whitespace-nowrap">
            Hatsoff Media
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-neutral-950" />
          </div>
        </Link>

        {/* Subtle Divider */}
        <div
          className={`h-[1px] w-6 my-0.5 transition-colors duration-300 ${
            isOverDark ? "bg-white/20" : "bg-black/10"
          }`}
        />

        {/* Navigation Items */}
        <nav className="flex flex-col items-center gap-1.5">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <div
                key={item.href}
                className="relative flex items-center"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link
                  href={item.href}
                  className={`
                    relative
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#ffcc00] text-neutral-950 shadow-[0_0_20px_rgba(255,204,0,0.55)] font-bold scale-105"
                        : isOverDark
                        ? "text-neutral-200 hover:text-white hover:bg-white/15"
                        : "text-neutral-700 hover:text-black hover:bg-white/50 hover:shadow-xs"
                    }
                  `}
                  aria-label={item.name}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={17} strokeWidth={isActive ? 2.5 : 1.9} />

                  {/* Active indicator dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSideNavDot"
                      className="absolute -right-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-[#ffcc00] ring-2 ring-neutral-950"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Flyout Tooltip Card */}
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, x: -8, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="pointer-events-none absolute left-full ml-3.5 z-50 flex items-center gap-2 rounded-xl border border-white/15 bg-neutral-950/95 px-3 py-1.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-xl whitespace-nowrap"
                    >
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="rounded-full bg-[#ffcc00]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#ffcc00]">
                          {item.badge}
                        </span>
                      )}
                      {/* Arrow caret pointing to the rail icon */}
                      <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-neutral-950" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Subtle Divider */}
        <div
          className={`h-[1px] w-6 my-0.5 transition-colors duration-300 ${
            isOverDark ? "bg-white/15" : "bg-black/10"
          }`}
        />

        {/* Bottom CTA / Quick Project Trigger */}
        <Link
          href="/contact"
          title="Start a Project"
          className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-[#FFCC00] via-[#FFD633] to-[#FFE066] text-neutral-950 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,204,0,0.6)]"
        >
          <ArrowUpRight
            size={17}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />

          {/* Hover Tooltip */}
          <div className="pointer-events-none absolute left-full ml-3 hidden items-center gap-1.5 rounded-md border border-[#ffcc00]/30 bg-neutral-950/95 px-3 py-1.5 text-xs font-bold text-[#ffcc00] shadow-xl backdrop-blur-md group-hover:flex whitespace-nowrap">
            <Sparkles size={12} />
            Start Project
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent border-r-neutral-950" />
          </div>
        </Link>
      </motion.div>
    </aside>
  );
}
