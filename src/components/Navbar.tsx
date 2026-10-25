"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Terminal, Brain, LayoutGrid, Briefcase, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { RESUME_DATA } from "@/data/resume";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section for mobile dock & desktop links
      const sections = ["home", "services", "projects", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Expertise", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const mobileDockItems = [
    { name: "Home", href: "#home", id: "home", icon: Terminal },
    { name: "About", href: "#services", id: "services", icon: Brain },
    { name: "Projects", href: "#projects", id: "projects", icon: LayoutGrid },
    { name: "Trajectory", href: "#experience", id: "experience", icon: Briefcase },
    { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* Top Sticky Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 pt-safe backdrop-blur-xl transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0b0b0d]/90 border-dark-border/80 shadow-2xl py-2.5 sm:py-3.5 px-3 sm:px-6 md:px-12"
            : "bg-[#0b0b0d]/75 border-dark-border/40 py-3 sm:py-4 px-3 sm:px-6 md:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo / Identity */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group"
            data-purpose="brand-logo"
          >
            {/* Desktop Emblem */}
            <div className="hidden md:flex w-9 h-9 rounded-lg bg-dark-surface border border-dark-border items-center justify-center font-heading font-extrabold text-crimson-accent text-lg group-hover:border-crimson-accent transition-colors shadow-sm">
              A
            </div>
            {/* Mobile Monogram Emblem (Matches Stitch design) */}
            <div className="md:hidden w-8 h-8 rounded-lg bg-dark-surface-card border border-crimson-accent/30 flex items-center justify-center font-heading font-extrabold text-crimson-accent text-[13px] tracking-tight">
              AA
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-white text-[12px] sm:text-base md:text-lg tracking-tight uppercase group-hover:text-crimson-accent transition-colors">
                {RESUME_DATA.personal.name}
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent animate-pulse"></span>
                <span className="font-mono text-[9px] sm:text-[10px] text-crimson-accent/90 uppercase tracking-widest font-semibold">
                  AI / ML DEVELOPER
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Center Floating Navigation Bar */}
          <nav
            className="hidden lg:flex items-center gap-1 glass-pill px-5 py-2 rounded-full border border-dark-border/70 shadow-2xl"
            data-purpose="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                    isActive
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action on Desktop / Live Indicator + Mini Avatar on Mobile */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Live Status Badge + Thumbnail (Matches Stitch design) */}
            <div className="flex md:hidden items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-dark-surface-card border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="font-mono text-[9px] text-zinc-300 uppercase font-semibold">
                  LIVE
                </span>
              </div>
              <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-crimson-accent/40 relative">
                <Image
                  src="/affan-portrait.png"
                  alt="MD ALI AFFAN"
                  fill
                  sizes="28px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Desktop Magnetic 'Let's Talk' Button */}
            <div className="hidden md:flex items-center gap-3">
              <MagneticButton strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-dark-bg hover:bg-crimson-accent hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,43,78,0.45)]"
                  data-purpose="nav-cta"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>

              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="w-9 h-9 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-zinc-300 hover:text-white hover:bg-dark-surface-hover hover:border-crimson-accent transition-all text-xs shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-zinc-300 hover:text-crimson-accent hover:border-crimson-accent transition-all text-xs shadow-sm"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Mobile Dock Navigation (Matches Stitch design) */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#08080a]/95 backdrop-blur-xl border-t border-white/10 md:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.7)]"
      >
        <div className="flex justify-around items-center h-13 px-1 py-1">
          {mobileDockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-0.5 min-w-[52px] py-1 transition-colors relative ${
                  isActive
                    ? "text-crimson-accent font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 w-3 h-0.5 rounded-full bg-crimson-accent shadow-[0_0_8px_#ff2b4e]"></span>
                )}
                <Icon className="w-4 h-4" />
                <span className="font-mono text-[9px] tracking-tight">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
