"use client";

import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function useHeroAnimation() {
  useEffect(() => {
    const heading = document.querySelector(".hero-title");

    if (!heading) return;

    const split = new SplitType(heading as HTMLElement, {
      types: "lines,words",
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    tl.from(split.words, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.04,
      duration: 1,
    })

      .from(
        ".hero-description",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.7"
      )

      .from(
        ".hero-buttons",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.5"
      )

      .from(
        ".hero-services",
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
        },
        "-=0.4"
      );

    return () => {
      split.revert();
    };
  }, []);
}