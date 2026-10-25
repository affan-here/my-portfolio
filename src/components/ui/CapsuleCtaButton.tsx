"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CapsuleCtaButtonProps {
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
  className?: string;
}

export function CapsuleCtaButton({
  label,
  href,
  isExternal = false,
  onClick,
  className = "",
}: CapsuleCtaButtonProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic cursor physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Magnetic pull range of 15px
    mouseX.set((e.clientX - centerX) * 0.25);
    mouseY.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      ref={containerRef}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-flex items-center gap-2 p-1.5 pr-2 rounded-full bg-dark-surface/90 border border-dark-border hover:border-crimson-accent/60 transition-colors duration-300 group cursor-pointer shadow-lg backdrop-blur-md ${className}`}
    >
      {/* Pill Capsule Text */}
      <span className="px-5 py-2.5 rounded-full bg-transparent font-heading font-bold text-sm sm:text-base text-white tracking-wide group-hover:text-white transition-colors">
        {label}
      </span>

      {/* Docked Circular Action Button with Spring & 45deg Arrow Rotation */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-crimson-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,43,78,0.4)] shrink-0"
      >
        <ArrowUpRight className="w-5 h-5 transition-transform" />
      </motion.div>
    </motion.a>
  );
}
