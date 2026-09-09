"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast spring for inner dot
  const dotX = useSpring(mouseX, { stiffness: 1200, damping: 45 });
  const dotY = useSpring(mouseY, { stiffness: 1200, damping: 45 });

  // Fluid trailing spring for outer ring
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 26 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 26 });

  useEffect(() => {
    // Only enable on devices with a mouse/fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mediaQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener("change", handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-pointer"
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleElementHover);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.7 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovered
            ? "rgba(255, 204, 0, 0.18)"
            : "rgba(255, 204, 0, 0.04)",
          borderColor: isHovered
            ? "rgba(255, 204, 0, 0.9)"
            : "rgba(255, 204, 0, 0.45)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 450, damping: 25 },
          opacity: { duration: 0.2 },
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          h-9
          w-9
          rounded-full
          border
          backdrop-blur-[1px]
        "
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.6 : isHovered ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.15 },
          opacity: { duration: 0.2 },
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          h-2.5
          w-2.5
          rounded-full
          bg-[#FFCC00]
          shadow-[0_0_12px_rgba(255,204,0,0.9)]
        "
      />
    </>
  );
}