"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#FFCC00]"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Background Glow */}
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-white/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: {
                duration: 0.5,
              },
              scale: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/logo-black.png" // Use your black logo here
              alt="Hatsoff Media"
              width={240}
              height={240}
              priority
              className="h-auto w-[220px] select-none object-contain md:w-[260px]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}