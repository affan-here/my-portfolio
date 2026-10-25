"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

export function BiometricScanner({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scanLine = containerRef.current.querySelector(".scan-line");
    const corners = containerRef.current.querySelectorAll(".reticle-corner");
    if (!scanLine || corners.length === 0) return;

    // Laser scan beam translation animation
    const scanAnim = animate(scanLine, {
      translateY: [0, 80],
      opacity: [0.3, 0.9],
      ease: "inOutQuad",
      duration: 1800,
      loop: true,
      alternate: true,
    });

    // Reticle corner breathing pulse
    const cornerAnim = animate(corners, {
      opacity: [0.3, 1],
      delay: stagger(120),
      duration: 1200,
      ease: "inOutSine",
      loop: true,
      alternate: true,
    });

    return () => {
      scanAnim.pause();
      cornerAnim.pause();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-24 h-24 rounded-lg bg-dark-bg/80 border border-dark-border flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* SVG Targeting Reticle */}
      <svg
        className="w-full h-full p-2"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-Left Corner */}
        <path
          className="reticle-corner"
          d="M 15 30 L 15 15 L 30 15"
          stroke="#ff2b4e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Top-Right Corner */}
        <path
          className="reticle-corner"
          d="M 70 15 L 85 15 L 85 30"
          stroke="#ff2b4e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Bottom-Left Corner */}
        <path
          className="reticle-corner"
          d="M 15 70 L 15 85 L 30 85"
          stroke="#ff2b4e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Bottom-Right Corner */}
        <path
          className="reticle-corner"
          d="M 70 85 L 85 85 L 85 70"
          stroke="#ff2b4e"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center Target Crosshair */}
        <circle cx="50" cy="50" r="14" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="2.5" fill="#ff2b4e" />
      </svg>

      {/* Laser Scanning Beam */}
      <div className="scan-line absolute top-2 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-crimson-accent to-transparent shadow-[0_0_8px_#ff2b4e] pointer-events-none" />
    </div>
  );
}
