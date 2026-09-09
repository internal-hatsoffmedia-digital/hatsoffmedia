"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Check,
  Copy,
  MessageCircle,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Branding & Identity", href: "/services" },
  { name: "Website Design & Dev", href: "/services" },
  { name: "Social Media Growth", href: "/services" },
  { name: "Video & Motion Editing", href: "/services" },
  { name: "Performance Marketing", href: "/services" },
  { name: "Content Strategy & PR", href: "/services" },
];

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/hatsoff_media/",
    handle: "@hatsoff_media",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/112455932/",
    handle: "Hatsoff Media",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@hatsoff_media",
    handle: "@hatsoff_media",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/HatsoffMedia/",
    handle: "HatsoffMedia",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/918925881695",
    handle: "+91 89258 81695",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live Chennai, IST Time
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime("IST (UTC+5:30)");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@hatsoffmedia.in");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0A0A0C] text-white selection:bg-[#FFCC00] selection:text-black">
      {/* Dynamic Background Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle dot matrix grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient Brand Glows */}
        <div className="absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-[#FFCC00]/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#FFCC00]/8 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[400px] rounded-full bg-[#FCEB77]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            1. PRE-FOOTER CTA CARD (Call to Collaboration)
        ========================================================== */}
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-5 sm:p-7 lg:p-8 shadow-2xl backdrop-blur-xl"
          >
            {/* Top Accent Line */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent opacity-80" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left text */}
              <div className="max-w-2xl">
                {/* Live project status */}
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Accepting Projects for 2026
                </div>

                <h2 className="mt-3 text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  Ready to scale your brand&apos;s digital presence?
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-neutral-300">
                  Let&apos;s discuss how high-impact branding, web development, and performance marketing can accelerate your growth.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#FFCC00] px-6 py-3 text-xs font-bold text-black transition-all duration-300 hover:bg-[#ffe04d] hover:shadow-[0_10px_30px_rgba(255,204,0,0.3)] sm:px-6 sm:text-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href="https://wa.me/918925881695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-[#FFCC00]/50 hover:bg-white/10 sm:text-sm"
                >
                  <MessageCircle className="h-4 w-4 text-[#FFCC00]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            2. MAIN FOOTER MULTI-COLUMN GRID
        ========================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-10"
        >
          {/* Col 1: Brand & Studio Info (4 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block transition-transform duration-300 hover:opacity-90">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo3.png"
                    alt="Hatsoff Media"
                    width={180}
                    height={50}
                    className="h-9 w-auto object-contain brightness-100"
                  />
                </div>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
                A modern creative growth agency engineering standout visual identities, high-conversion websites, and culture-shaping digital campaigns.
              </p>

              {/* Chennai Live Time Badge */}
              <div className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-neutral-300 backdrop-blur-md">
                <Clock className="h-3.5 w-3.5 text-[#FFCC00]" />
                <span>Chennai, India</span>
                <span className="text-neutral-500">•</span>
                <span className="font-mono text-[#FFCC00]">
                  {currentTime || "IST (UTC+5:30)"}
                </span>
              </div>
            </div>

            {/* Micro Accreditations */}
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-neutral-400">
              <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
              <span>Strategy • Design • Performance</span>
            </div>
          </motion.div>

          {/* Col 2: Navigation Links (2 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
              Navigation
            </h3>
            <ul className="mt-3.5 space-y-2">
              {navigationLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-600 opacity-0 transition-opacity duration-200 group-hover:bg-[#FFCC00] group-hover:opacity-100" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services (3 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
              Capabilities
            </h3>
            <ul className="mt-3.5 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-600 opacity-0 transition-opacity duration-200 group-hover:bg-[#FFCC00] group-hover:opacity-100" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Direct Inquiries (3 cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFCC00]">
              Get In Touch
            </h3>

            {/* Interactive 1-Click Copy Email Card */}
            <div className="relative mt-1 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#FFCC00]/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <Mail className="h-3.5 w-3.5 text-[#FFCC00]" />
                  <span>Official Email</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-neutral-300 transition-colors hover:bg-[#FFCC00] hover:text-black"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="mailto:contact@hatsoffmedia.in"
                className="mt-1.5 block text-xs sm:text-sm font-medium text-white transition-colors hover:text-[#FFCC00]"
              >
                contact@hatsoffmedia.in
              </a>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex flex-col gap-1.5 pt-0.5 text-xs sm:text-sm text-neutral-300">
              <a
                href="tel:+918925881695"
                className="group flex items-center gap-2 transition-colors hover:text-[#FFCC00]"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-400 transition-colors group-hover:border-[#FFCC00]/40 group-hover:text-[#FFCC00]">
                  <Phone className="h-3 w-3" />
                </div>
                <span className="font-mono">+91 89258 81695</span>
              </a>

              <div className="flex items-center gap-2 text-neutral-400">
                <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-white/5">
                  <MapPin className="h-3 w-3 text-[#FFCC00]" />
                </div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =========================================================
            3. SOCIAL PRESENCE STRIP
        ========================================================== */}
        <div className="border-t border-white/10 py-4 sm:py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Follow Our Channels
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {socials.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  aria-label={item.name}
                  className="group flex h-8 sm:h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-neutral-300 backdrop-blur-md transition-all duration-300 hover:border-[#FFCC00] hover:bg-[#FFCC00] hover:text-black hover:shadow-[0_4px_16px_rgba(255,204,0,0.25)]"
                >
                  <item.icon size={13} />
                  <span className="text-xs font-semibold">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            4. BOTTOM COPYRIGHT & LEGAL BAR (Compact)
        ========================================================== */}
        <div className="flex flex-col-reverse items-center justify-between gap-3 border-t border-white/10 py-4 sm:py-5 text-xs text-neutral-400 sm:flex-row">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Hatsoff Media Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 transition-all duration-300 hover:border-[#FFCC00] hover:bg-[#FFCC00] hover:text-black"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}