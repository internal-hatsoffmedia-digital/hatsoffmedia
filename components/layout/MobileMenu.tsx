"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Work", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[999] bg-white"
        >
          <div className="flex h-20 items-center justify-between border-b border-neutral-200 px-6">
            <h2 className="text-2xl font-bold">Hatsoff</h2>

            <button
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col px-8 pt-12">
            {links.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.4,
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-neutral-100 py-6 text-3xl font-semibold transition hover:text-[#F4C430]"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-12 flex h-14 items-center justify-center rounded-full bg-black text-lg font-semibold text-white transition hover:bg-[#F4C430] hover:text-black"
            >
              Start Project
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}