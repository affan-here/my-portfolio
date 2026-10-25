"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Cpu, GitBranch, Share2, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { KineticHeading } from "@/components/animations/KineticHeading";
import { AnimeCounter } from "@/components/animations/AnimeCounter";
import { CapsuleCtaButton } from "@/components/ui/CapsuleCtaButton";
import HalftoneNebula from "@/components/ui/halftone-nebula";

export default function Hero() {
  const [terminalTab, setTerminalTab] = useState<"bio" | "sayra" | "stack">("bio");

  return (
    <HalftoneNebula
      id="home"
      preset="crimson"
      className="relative min-h-screen pt-16 pb-12 md:pt-36 md:pb-20 px-2.5 sm:px-6 md:px-12 flex flex-col justify-center"
    >
      {/* ============================================================== */}
      {/* MOBILE HERO: DENSE 2-COLUMN BENTO (Matches Stitch Design)     */}
      {/* ============================================================== */}
      <div className="block md:hidden w-full relative z-10 mt-1 pointer-events-none select-none">
        <div className="grid grid-cols-12 gap-2">
          {/* Left Column: Core Identity + Live HUD + Mini Metrics (Col 7) */}
          <div className="col-span-7 flex flex-col justify-between p-2.5 rounded-2xl bg-[#08080c]/95 backdrop-blur-xl border border-white/15 ring-1 ring-white/5 relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="space-y-1.5">
              {/* Availability Chip */}
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-crimson-accent/15 border border-crimson-accent/30 pointer-events-auto shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent animate-ping"></span>
                <span className="font-mono text-[9px] text-crimson-accent font-bold uppercase tracking-wider">
                  AVAILABLE FOR AI/ML
                </span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-heading text-lg leading-tight font-extrabold tracking-tight uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  I AM MD ALI{" "}
                  <span className="text-crimson-accent">AFFAN</span>
                </h1>
                <p className="font-mono text-[9.5px] text-crimson-accent font-semibold tracking-wide uppercase leading-tight mt-0.5">
                  AI/ML Intern &amp; Python Developer
                </p>
              </div>

              {/* Bio Snippet */}
              <p className="font-sans text-xs leading-relaxed text-zinc-300">
                Building offline AI assistants, computer vision biometrics, and full-stack software. Batch topper (90.82%) &amp; 4x hackathon winner.
              </p>
            </div>

            {/* Inline HUD Terminal Readout */}
            <div className="mt-2 p-2 rounded-lg bg-[#040406]/95 border border-white/10 font-mono text-[9.5px] leading-tight text-zinc-300 shadow-inner">
              <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                </div>
                <span className="text-crimson-accent text-[9px] font-bold">PROFILE_STATUS</span>
              </div>
              <p className="text-white truncate">
                <span className="text-crimson-accent font-bold">$</span> affan --status [OPEN TO ROLES]
              </p>
              <p className="text-emerald-400 text-[9px] truncate">
                &gt; Offline AI • Computer Vision • Python
              </p>
            </div>

            {/* 3-Cell Micro Metrics Grid */}
            <div className="grid grid-cols-3 gap-1 mt-2 pt-1 border-t border-white/10 text-center">
              <div className="p-1.5 rounded bg-black/40 border border-white/5">
                <span className="font-heading text-xs font-bold text-crimson-accent block leading-none">
                  90.8%
                </span>
                <span className="font-mono text-[8.5px] text-zinc-400 uppercase tracking-tight">
                  Topper
                </span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-white/5">
                <span className="font-heading text-xs font-bold text-white block leading-none">
                  4x
                </span>
                <span className="font-mono text-[8.5px] text-zinc-400 uppercase tracking-tight">
                  Awards
                </span>
              </div>
              <div className="p-1.5 rounded bg-black/40 border border-white/5">
                <span className="font-heading text-xs font-bold text-white block leading-none">
                  3+
                </span>
                <span className="font-mono text-[8.5px] text-zinc-400 uppercase tracking-tight">
                  Systems
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Shrunk Desktop Portrait Card + Fast Actions (Col 5) */}
          <div className="col-span-5 flex flex-col rounded-2xl bg-[#08080c]/95 backdrop-blur-xl border border-white/15 ring-1 ring-white/5 p-1.5 relative overflow-hidden justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-[#12131d]/90 via-[#0a0a0f]/95 to-[#060608] border border-white/10">
              {/* Studio Backplate Lighting & Crimson Halo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,43,78,0.36)_0%,rgba(133,13,33,0.14)_50%,transparent_75%)] pointer-events-none" />

              {/* Biometric Target Radar Graphic */}
              <svg
                className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 opacity-25 pointer-events-none text-crimson-accent"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
              </svg>

              <Image
                src="/affan-portrait.png"
                alt="MD ALI AFFAN"
                fill
                priority
                sizes="(max-width: 768px) 40vw, 380px"
                className="object-contain object-top scale-110 -translate-y-1 filter contrast-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)] drop-shadow-[0_0_15px_rgba(255,43,78,0.3)]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 0%, black 48%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.15) 80%, transparent 94%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 48%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.15) 80%, transparent 94%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08080c] via-[#08080c]/85 via-40% to-transparent pointer-events-none"></div>

              {/* Floating Pill Top Right */}
              <div className="absolute top-1.5 right-1.5 z-10">
                <span className="px-2 py-0.5 rounded bg-black/85 backdrop-blur-md font-mono text-[9px] text-crimson-accent font-bold border border-crimson-accent/40 shadow-md">
                  TOPPER 90.8%
                </span>
              </div>

              {/* Floating Pill Bottom */}
              <div className="absolute bottom-1.5 left-1.5 right-1.5 z-10">
                <span className="block px-1.5 py-0.5 rounded bg-[#101015]/90 backdrop-blur-md font-mono text-[7.5px] text-white text-center truncate border border-white/10">
                  Edge AI • PyTorch
                </span>
              </div>
            </div>

            {/* Shrunk Social Action Strip */}
            <div className="grid grid-cols-3 gap-1 mt-1.5 pointer-events-auto">
              <a
                className="py-1 rounded-lg bg-white/[0.06] hover:bg-white/10 border border-white/5 flex flex-col items-center justify-center text-zinc-300 hover:text-white transition-colors"
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <GitBranch className="w-3 h-3 text-crimson-accent" />
                <span className="font-mono text-[7px] text-zinc-400 uppercase">Git</span>
              </a>
              <a
                className="py-1 rounded-lg bg-white/[0.06] hover:bg-white/10 border border-white/5 flex flex-col items-center justify-center text-zinc-300 hover:text-white transition-colors"
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Share2 className="w-3 h-3 text-crimson-accent" />
                <span className="font-mono text-[7px] text-zinc-400 uppercase">Link</span>
              </a>
              <a
                className="py-1 rounded-lg bg-crimson-accent hover:bg-crimson-hover text-white flex flex-col items-center justify-center shadow transition-opacity"
                href={`mailto:${RESUME_DATA.personal.email}`}
                title="Email"
              >
                <Mail className="w-3 h-3 text-white" />
                <span className="font-mono text-[7px] font-bold uppercase">Hire</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP HERO: SPACIOUS 12-COL LAYOUT (Preserves Full Controls)  */}
      {/* ============================================================== */}
      <div className="hidden md:grid max-w-7xl mx-auto w-full grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 items-start">
          {/* Availability Pill Badge */}
          <div className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-crimson-accent/10 backdrop-blur-md border border-crimson-accent/35 shadow-[0_0_15px_rgba(255,43,78,0.12)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson-accent"></span>
            </span>
            <span className="text-xs font-mono text-slate-200 uppercase tracking-wider font-semibold select-none">
              {RESUME_DATA.personal.statusBadge}
            </span>
            <span className="text-crimson-accent text-xs font-bold">↗</span>
          </div>

          {/* Heading Block: 'I AM MD ALI AFFAN' with 'AI/ML Engineer & Python Developer' */}
          <div className="flex flex-col gap-3 pointer-events-none select-none">
            <KineticHeading />

            <div className="flex flex-col gap-1">
              <h2 className="text-lg sm:text-xl font-heading font-semibold tracking-wide text-slate-100 uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {RESUME_DATA.personal.title}
              </h2>
              <p className="font-mono text-xs text-crimson-accent font-medium tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                Based in {RESUME_DATA.personal.location}
              </p>
            </div>
          </div>

          {/* Body Text */}
          <p className="text-sm sm:text-base text-slate-200 max-w-xl font-normal leading-relaxed pointer-events-none select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Specialized in offline AI assistants, computer vision biometric pipelines, and high-performance Python web solutions. Transforming machine learning concepts into production-grade systems.
          </p>

          {/* Hero Action Trigger - Capsule CTA */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pointer-events-auto">
            <CapsuleCtaButton
              label="Explore Featured Work"
              href="#projects"
            />
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full text-xs font-mono font-semibold bg-dark-surface/90 hover:bg-dark-surface text-slate-200 hover:text-white border border-dark-border hover:border-crimson-accent transition-all duration-300 shadow-lg group"
            >
              <GithubIcon className="w-4 h-4 text-crimson-accent group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Stats Banner Strip: Double-Bezel Architecture */}
          <div
            className="w-full p-1 sm:p-1.5 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-xl shadow-2xl pointer-events-none select-none"
            data-purpose="hero-metrics-strip"
          >
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-5 px-6 rounded-xl bg-[#09090e]/90 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              {RESUME_DATA.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-1.5 ${idx !== RESUME_DATA.metrics.length - 1
                    ? "sm:border-r sm:border-white/10 sm:pr-4"
                    : ""
                    }`}
                >
                  <AnimeCounter
                    value={metric.value}
                    className={`font-heading font-extrabold text-2xl sm:text-3xl block ${metric.highlight ? "text-crimson-accent" : "text-white"
                      }`}
                  />
                  <span className="font-mono text-xs text-slate-200 font-semibold block leading-tight">
                    {metric.label}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400 block leading-tight">
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Assistant Console / Developer Terminal */}
          <div className="w-full p-1 sm:p-1.5 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 backdrop-blur-xl shadow-2xl pointer-events-auto">
            <div className="w-full rounded-xl bg-[#08080c]/95 border border-white/5 overflow-hidden font-mono text-xs shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
              {/* Terminal Header */}
              <div className="bg-[#101017] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs text-slate-300 ml-2 font-mono">
                    affan@dev-portfolio:~$
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setTerminalTab("bio")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer font-medium ${terminalTab === "bio"
                      ? "bg-crimson-accent text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    BIO.md
                  </button>
                  <button
                    onClick={() => setTerminalTab("sayra")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer font-medium ${terminalTab === "sayra"
                      ? "bg-crimson-accent text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    SAYRA.py
                  </button>
                  <button
                    onClick={() => setTerminalTab("stack")}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer font-medium ${terminalTab === "stack"
                      ? "bg-crimson-accent text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                      }`}
                  >
                    STACK.json
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 flex flex-col gap-2.5 text-slate-200">
                {terminalTab === "bio" && (
                  <>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-crimson-accent font-bold">$</span>
                      <span>cat bio.md</span>
                    </div>
                    <p className="text-emerald-400 text-xs">
                      &gt; Hi, I&apos;m Affan — AI/ML Intern &amp; Python Engineer based in Maharashtra.
                    </p>
                    <p className="text-slate-300 text-xs">
                      &gt; Batch Topper (90.82% Distinction) • 4x Hackathon Winner • Founder of AwnNet
                    </p>
                    <p className="text-slate-300 text-xs">
                      &gt; Focused on privacy-first offline AI systems and OpenCV biometric vision.
                    </p>
                    <p className="text-slate-200 text-xs flex items-center gap-1.5 pt-1">
                      <span className="text-crimson-accent">&gt;</span> Status:{" "}
                      <span className="text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-semibold text-[11px]">
                        Open to AI/ML &amp; Python Roles
                      </span>
                    </p>
                  </>
                )}

                {terminalTab === "sayra" && (
                  <>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-crimson-accent font-bold">$</span>
                      <span>python -m sayra.assistant --offline</span>
                    </div>
                    <p className="text-emerald-400 text-xs">
                      &gt; SAYRA: Privacy-first offline assistant with real-time vocal feedback.
                    </p>
                    <p className="text-slate-300 text-xs">
                      &gt; Local LLM / NLP + SpeechRecognition pipeline running without external cloud APIs.
                    </p>
                    <p className="text-slate-200 text-xs flex items-center gap-1.5 pt-1">
                      <span className="text-crimson-accent">&gt;</span> Live App:{" "}
                      <a
                        href="https://sayra.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crimson-accent underline hover:text-white transition-colors"
                      >
                        sayra.pages.dev ↗
                      </a>
                    </p>
                  </>
                )}

                {terminalTab === "stack" && (
                  <>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-crimson-accent font-bold">$</span>
                      <span>jq .core_competencies stack.json</span>
                    </div>
                    <p className="text-emerald-400 text-xs">
                      &gt; Languages: Python, C++, Java, JavaScript/TypeScript
                    </p>
                    <p className="text-slate-300 text-xs">
                      &gt; AI &amp; CV: OpenCV, TextBlob NLP, SpeechRecognition, Scikit-Learn
                    </p>
                    <p className="text-slate-300 text-xs">
                      &gt; Web &amp; Systems: Next.js, React, Tailwind CSS, FastAPI, MySQL
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Pop-Out Profile Portrait Spotlight (Awwwards Style) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center pointer-events-auto relative pt-14 sm:pt-16">
          {/* Layer 1: Ambient Volumetric Crimson Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-crimson-accent/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Layer 2: Pop-Out Stage Wrapper */}
          <div className="relative w-full max-w-[390px] group">
            {/* Glassmorphism Frame (The Card being popped out of) */}
            <div className="w-full rounded-3xl bg-white/[0.04] p-1.5 ring-1 ring-white/10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
              <div className="relative w-full rounded-[calc(1.5rem-0.375rem)] bg-gradient-to-b from-[#13141f]/90 via-[#0a0a0f]/95 to-[#060608] border border-white/5 overflow-hidden flex flex-col justify-end">
                {/* Internal Studio Backplate Lighting & Crimson Halo */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,43,78,0.32)_0%,rgba(133,13,33,0.12)_45%,transparent_75%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* Biometric Target Radar Graphic (Concentric rings aligned behind face) */}
                <svg
                  className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-52 h-52 opacity-25 pointer-events-none text-crimson-accent"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
                  <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                  <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                </svg>

                {/* Card Canvas Height - sets the frame body */}
                <div className="w-full h-[330px] sm:h-[360px]" />
              </div>
            </div>

            {/* Layer 3: The 3D Pop-Out Subject (Breaks out of the card top into negative space!) */}
            <div className="absolute inset-x-0 -top-14 sm:-top-20 bottom-0 pointer-events-none z-10 flex justify-center overflow-hidden rounded-b-3xl">
              <div className="relative w-[135%] max-w-[500px] h-full">
                <Image
                  src="/affan-portrait.png"
                  alt="MD ALI AFFAN - AI/ML Engineer & Python Developer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain object-top filter contrast-105 drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(255,43,78,0.35)] group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 0%, black 44%, rgba(0,0,0,0.7) 58%, rgba(0,0,0,0.15) 76%, transparent 94%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 44%, rgba(0,0,0,0.7) 58%, rgba(0,0,0,0.15) 76%, transparent 94%)",
                  }}
                />

                {/* Black Faded Gradient from Bottom to Chest */}
                <div className="absolute inset-x-0 bottom-0 h-28 sm:h-56 bg-gradient-to-t from-[#060608] via-[#060608]/90 via-35% to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Layer 4: In-Flow Tech Badges Dock (Crisp on top of the bottom chest fade) */}
            <div className="absolute inset-x-1.5 bottom-1.5 z-20 flex flex-wrap items-center justify-between gap-2 p-3 rounded-b-[calc(1.5rem-0.375rem)] border-t border-white/5 bg-[#08080c]/80 backdrop-blur-md">
              <div className="glass-pill px-3 py-1.5 rounded-full border border-white/10 bg-black/40 flex items-center gap-2 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-crimson-accent" />
                <span className="text-xs font-mono font-medium text-white">
                  Python • OpenCV
                </span>
              </div>
              <div className="glass-pill px-3 py-1.5 rounded-full border border-white/10 bg-black/40 flex items-center gap-2 shadow-sm">
                <Shield className="w-3.5 h-3.5 text-crimson-accent" />
                <span className="text-xs font-mono font-medium text-white">
                  Local AI &amp; Biometrics
                </span>
              </div>
            </div>

            {/* Layer 4: Floating Biometric HUD Badges */}
            {/* Top Right Status Badge - overlapping the frame edge */}
            <div className="absolute -top-3 right-2 sm:-right-2 z-30">
              <div className="glass-pill-crimson px-3 py-1 rounded-full text-xs font-mono text-white flex items-center gap-2 border border-crimson-accent/50 shadow-[0_4px_20px_rgba(255,43,78,0.4)] backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-crimson-accent animate-ping" />
                <span className="font-bold tracking-wider">AI / ML DEVELOPER</span>
              </div>
            </div>

            {/* Top Left Biometric Telemetry Tag */}
            <div className="absolute top-8 -left-2 sm:-left-3 z-30 hidden sm:flex">
              <div className="glass-pill px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 border border-white/10 shadow-xl backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-zinc-200">CONFIDENCE: 99.4%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HalftoneNebula>
  );
}
