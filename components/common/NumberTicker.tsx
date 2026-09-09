"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface NumberTickerProps {
  value: string | number;
  duration?: number;
  className?: string;
  delay?: number;
}

export default function NumberTicker({
  value,
  duration = 1.6,
  className = "",
  delay = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Extract number and prefix/suffix from strings like "120+", "24 hrs", "5★", "8+"
  const stringVal = String(value);
  const numericMatch = stringVal.match(/\d+(\.\d+)?/);
  const targetNumber = numericMatch ? parseFloat(numericMatch[0]) : 0;
  
  const prefix = numericMatch ? stringVal.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? stringVal.slice((numericMatch.index || 0) + numericMatch[0].length)
    : "";

  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutExpo for a premium feeling deceleration
        const easeOut =
          progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const current = Math.floor(easeOut * targetNumber);
        setDisplayNumber(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayNumber(targetNumber);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNumber, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? displayNumber : 0}
      {suffix}
    </span>
  );
}
