"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger, JSAnimation } from "animejs";

interface WaveformProps {
  isActive?: boolean;
  barCount?: number;
  className?: string;
}

export function WaveformVisualizer({
  isActive = true,
  barCount = 14,
  className = "",
}: WaveformProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animeRef = useRef<JSAnimation | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const bars = containerRef.current.querySelectorAll(".wave-bar");
    if (bars.length === 0) return;

    if (isActive) {
      animeRef.current = animate(bars, {
        scaleY: [0.2, 0.95],
        delay: stagger(45, { from: "center" }),
        ease: "inOutSine",
        loop: true,
        alternate: true,
        duration: 350,
      });
    } else {
      animate(bars, {
        scaleY: 0.15,
        ease: "outQuad",
        duration: 300,
      });
    }

    return () => {
      if (animeRef.current) animeRef.current.pause();
    };
  }, [isActive, barCount]);

  return (
    <div
      ref={containerRef}
      aria-label="Vocal waveform activity"
      className={`flex items-center gap-[3px] h-6 ${className}`}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[3px] h-full bg-crimson-accent rounded-full transform origin-bottom transition-colors"
          style={{ transform: "scaleY(0.2)" }}
        />
      ))}
    </div>
  );
}
