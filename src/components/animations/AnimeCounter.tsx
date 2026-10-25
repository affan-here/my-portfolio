"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface AnimeCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimeCounter({ value, className = "", duration = 2000 }: AnimeCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract numeric part and suffix/prefix (e.g., "90.82%" -> 90.82, "%"; "4x" -> 4, "x"; "3+" -> 3, "+")
  const numericMatch = value.match(/[\d.]+/);
  const numericTarget = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const isFloat = value.includes(".");
  const suffix = value.replace(/[\d.]+/, "");

  useEffect(() => {
    if (!counterRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const counterObj = { val: 0 };
            animate(counterObj, {
              val: numericTarget,
              ease: "outExpo",
              duration: duration,
              onUpdate: () => {
                if (counterRef.current) {
                  const formatted = isFloat
                    ? counterObj.val.toFixed(2)
                    : Math.round(counterObj.val).toString();
                  counterRef.current.textContent = `${formatted}${suffix}`;
                }
              },
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [numericTarget, suffix, isFloat, duration, hasAnimated]);

  return (
    <span ref={counterRef} className={className}>
      0{suffix}
    </span>
  );
}
