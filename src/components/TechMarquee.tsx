"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Shield, Sparkles, Terminal, Database, Code2, Scan, Activity, Eye, Layers, Server } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ROW_ONE: TechItem[] = [
  { name: "Python", category: "Core Language", icon: Code2 },
  { name: "OpenCV", category: "Computer Vision", icon: Scan },
  { name: "SpeechRecognition", category: "Audio Input", icon: Activity },
  { name: "Local LLM / NLP", category: "Offline Machine Learning", icon: Cpu },
  { name: "TextBlob", category: "Sentiment Lexicon", icon: Sparkles },
  { name: "Privacy-First AI", category: "Architecture", icon: Shield },
  { name: "Haar Cascade", category: "Face Detection", icon: Scan },
  { name: "SAYRA Engine", category: "Vocal Feedback", icon: Terminal },
];

const ROW_TWO: TechItem[] = [
  { name: "Java", category: "Core Language", icon: Code2 },
  { name: "MySQL", category: "Relational Database", icon: Database },
  { name: "Biometric Attendance", category: "CV Automation", icon: Shield },
  { name: "Sentiment Polarity", category: "Text Processing", icon: Sparkles },
  { name: "Swing / Tkinter", category: "Desktop GUI", icon: Terminal },
  { name: "AwnNet Web", category: "Production Delivery", icon: Code2 },
  { name: "Offline Inference", category: "Zero-Cloud Pipeline", icon: Cpu },
  { name: "Real-time Diagnostic", category: "Vocal Loop", icon: Activity },
];

export default function TechMarquee() {
  const rowOneItems = [...ROW_ONE, ...ROW_ONE];
  const rowTwoItems = [...ROW_TWO, ...ROW_TWO];

  return (
    <section
      aria-label="Core Tech Stack Marquee"
      className="py-8 sm:py-14 border-y border-dark-border/60 bg-dark-bg relative overflow-hidden"
    >
      {/* Edge Vignette Blur Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-dark-bg via-dark-bg/80 to-transparent z-20" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 mb-4 sm:mb-8 flex flex-col gap-4 sm:gap-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] sm:text-xs text-crimson-accent font-semibold tracking-widest uppercase">
            {"03 — TOOLING"}
          </span>
          <span className="font-mono text-[8.5px] sm:text-xs text-zinc-400">
            PRODUCTION STACK
          </span>
        </div>

        {/* ============================================================== */}
        {/* COMPACT TOOLING MATRIX (Matches Stitch Screen Design)          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {/* Pod 1: Languages */}
          <div className="p-2.5 sm:p-4 rounded-xl bg-dark-surface-card border border-white/10 shadow-sm">
            <div className="flex items-center gap-1.5 text-crimson-accent pb-1.5 border-b border-white/5">
              <Code2 className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                Languages
              </span>
            </div>
            <ul className="font-mono text-[10px] sm:text-xs space-y-1 text-zinc-400 mt-2">
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Python</span>
                <span className="text-crimson-accent text-[9px] sm:text-[10px]">Primary</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">C++</span>
                <span className="text-crimson-accent text-[9px] sm:text-[10px]">Competitions</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Java</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-400">Desktop Apps</span>
              </li>
              <li className="flex items-center justify-between">
                <span>SQL</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500">MySQL</span>
              </li>
            </ul>
          </div>

          {/* Pod 2: DL Frameworks */}
          <div className="p-2.5 sm:p-4 rounded-xl bg-dark-surface-card border border-white/10 shadow-sm">
            <div className="flex items-center gap-1.5 text-crimson-accent pb-1.5 border-b border-white/5">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                AI &amp; Data Science
              </span>
            </div>
            <ul className="font-mono text-[10px] sm:text-xs space-y-1 text-zinc-400 mt-2">
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">PyTorch</span>
                <span className="text-crimson-accent text-[9px] sm:text-[10px]">Deep Learning</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">NLP</span>
                <span className="text-crimson-accent text-[9px] sm:text-[10px]">TextBlob</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">SpeechRecognition</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-400">Offline Audio</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Scikit-Learn</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500">ML Pipelines</span>
              </li>
            </ul>
          </div>

          {/* Pod 3: Vision & Biometrics */}
          <div className="p-2.5 sm:p-4 rounded-xl bg-dark-surface-card border border-white/10 shadow-sm">
            <div className="flex items-center gap-1.5 text-crimson-accent pb-1.5 border-b border-white/5">
              <Eye className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                Computer Vision
              </span>
            </div>
            <ul className="font-mono text-[10px] sm:text-xs space-y-1 text-zinc-400 mt-2">
              <li className="flex items-center justify-between">
                <span className="text-crimson-accent font-bold">OpenCV</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-400">Haar Cascades</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Face Tracking</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-400">Biometrics</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Video Capture</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500">Camera Feed</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Desktop GUI</span>
                <span className="text-emerald-400 text-[9px] sm:text-[10px]">Swing / Tkinter</span>
              </li>
            </ul>
          </div>

          {/* Pod 4: Full-Stack & Tools */}
          <div className="p-2.5 sm:p-4 rounded-xl bg-dark-surface-card border border-white/10 shadow-sm">
            <div className="flex items-center gap-1.5 text-crimson-accent pb-1.5 border-b border-white/5">
              <Server className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white">
                Web &amp; Tools
              </span>
            </div>
            <ul className="font-mono text-[10px] sm:text-xs space-y-1 text-zinc-400 mt-2">
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Next.js 16</span>
                <span className="text-crimson-accent text-[9px] sm:text-[10px]">React 19</span>
              </li>
              <li className="flex items-center justify-between">
                <span>FastAPI / REST</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500">Backend</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Tailwind CSS</span>
                <span className="text-[9px] sm:text-[10px] text-zinc-500">Responsive</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-white font-medium">Git &amp; GitHub</span>
                <span className="text-emerald-400 text-[9px] sm:text-[10px]">Version Control</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Infinite Drift Marquee */}
      <div className="flex flex-col gap-2.5 sm:gap-4 mt-2">
        {/* Row 1: Leftward Drift */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            }}
            className="flex items-center gap-2.5 sm:gap-4 shrink-0 will-change-transform"
          >
            {rowOneItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-dark-surface/90 border border-dark-border hover:border-crimson-accent/60 transition-colors shadow-sm shrink-0 group cursor-default"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-crimson-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-heading font-bold text-white group-hover:text-crimson-accent transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[8.5px] sm:text-[10px] font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Row 2: Rightward Drift */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 32,
              repeat: Infinity,
            }}
            className="flex items-center gap-2.5 sm:gap-4 shrink-0 will-change-transform"
          >
            {rowTwoItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-dark-surface/90 border border-dark-border hover:border-crimson-accent/60 transition-colors shadow-sm shrink-0 group cursor-default"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-dark-bg border border-dark-border flex items-center justify-center text-crimson-accent group-hover:scale-110 transition-transform">
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-heading font-bold text-white group-hover:text-crimson-accent transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[8.5px] sm:text-[10px] font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
