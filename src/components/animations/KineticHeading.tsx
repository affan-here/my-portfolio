"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function KineticHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".kinetic-word");
    if (words.length === 0) return;
    animate(words, {
      translateY: [40, 0],
      opacity: [0, 1],
      filter: ["blur(8px)", "blur(0px)"],
      delay: stagger(120),
      duration: 900,
      ease: "outCubic",
    });
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tighter text-white leading-[1.05] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
    >
      <span className="inline-block kinetic-word mr-3 opacity-0">I</span>
      <span className="inline-block kinetic-word mr-3 opacity-0">AM</span>
      <span className="inline-block kinetic-word mr-3 opacity-0">MD</span>
      <span className="inline-block kinetic-word mr-3 opacity-0">ALI</span>
      <br />
      <span className="kinetic-word opacity-0 inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-crimson-accent drop-shadow-[0_2px_14px_rgba(255,43,78,0.35)]">
        AFFAN
      </span>
    </h1>
  );
}
