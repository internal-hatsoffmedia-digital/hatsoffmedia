"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode } from "react";

interface StoryMouseProps {
  children: ReactNode;
}

export default function StoryMouse({
  children,
}: StoryMouseProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.4,
  });

  const rotateY = useTransform(
    smoothX,
    [-150, 150],
    [-6, 6]
  );

  const rotateX = useTransform(
    smoothY,
    [-150, 150],
    [6, -6]
  );

  const translateX = useTransform(
    smoothX,
    [-150, 150],
    [-10, 10]
  );

  const translateY = useTransform(
    smoothY,
    [-150, 150],
    [-10, 10]
  );

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        x: translateX,
        y: translateY,
        transformStyle: "preserve-3d",
        perspective: 1500,
      }}
      className="relative h-full w-full"
    >
      {children}
    </motion.div>
  );
}