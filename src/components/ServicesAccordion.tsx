"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Brain, Eye, Code, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { WaveformVisualizer } from "@/components/animations/WaveformVisualizer";
import { BiometricScanner } from "@/components/animations/BiometricScanner";

export default function ServicesAccordion() {
  const [activeId, setActiveId] = useState<string>("ai-nlp");

  const iconsMap: Record<string, React.ReactNode> = {
    "ai-nlp": <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-accent" />,
    "cv-biometrics": <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-accent" />,
    "python-fullstack": <Code className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-accent" />,
  };

  return (
    <section id="services" className="py-10 md:py-20 px-3 sm:px-6 md:px-12 border-t border-dark-border/60 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
        {/* ============================================================== */}
        {/* 01. ABOUT ME Bento Card (Matches Stitch Design)               */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 sm:p-5 rounded-2xl bg-dark-surface-card border border-white/10 shadow-lg">
          <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-4 md:border-r border-white/10 pb-2.5 md:pb-0 border-b md:border-b-0">
            <div>
              <span className="font-mono text-[8.5px] sm:text-[10px] text-crimson-accent font-bold tracking-wider uppercase block">
                01 — ABOUT
              </span>
              <h2 className="font-heading text-sm sm:text-lg md:text-xl font-extrabold text-white uppercase leading-tight mt-1">
                PRACTICAL AI &amp; LOCAL SYSTEMS
              </h2>
            </div>
            <div className="mt-2">
              <span className="px-2 py-0.5 rounded bg-[#08080a] font-mono text-[9px] sm:text-[10px] text-zinc-300 border border-white/10 inline-block font-medium">
                AI/ML &amp; PYTHON DEVELOPER
              </span>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between gap-2.5">
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-zinc-300">
              Developing lightweight offline AI tools, real-time computer vision applications, and responsive full-stack platforms. Built with clean Python architectures, local NLP models, and zero unnecessary cloud dependencies.
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
              <span className="px-2 py-0.5 rounded bg-dark-surface-hover font-mono text-[9px] sm:text-xs text-crimson-accent border border-crimson-accent/20">
                #MachineLearning
              </span>
              <span className="px-2 py-0.5 rounded bg-dark-surface-hover font-mono text-[9px] sm:text-xs text-white border border-white/10">
                #ComputerVision
              </span>
              <span className="px-2 py-0.5 rounded bg-dark-surface-hover font-mono text-[9px] sm:text-xs text-crimson-accent border border-crimson-accent/20">
                #Python
              </span>
              <span className="px-2 py-0.5 rounded bg-dark-surface-hover font-mono text-[9px] sm:text-xs text-white border border-white/10">
                #OfflineAI
              </span>
              <span className="px-2 py-0.5 rounded bg-dark-surface-hover font-mono text-[9px] sm:text-xs text-zinc-400 border border-white/10">
                #FullStack
              </span>
            </div>
          </div>
        </div>

        {/* Section Header with Inline Avatar Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <span className="font-mono text-[10px] sm:text-xs text-crimson-accent font-semibold tracking-widest uppercase">
              {"CAPABILITIES"}
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight uppercase flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1">
              <span>Core</span>
              <motion.span
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-dark-surface border border-crimson-accent/40 shadow-[0_0_15px_rgba(255,43,78,0.2)] align-middle my-auto"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden relative border border-white/20 shrink-0">
                  <Image
                    src="/affan-portrait.png"
                    alt="Affan Portrait"
                    fill
                    sizes="20px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-slate-200 uppercase font-semibold">
                  AI / ML DEVELOPER
                </span>
                <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-crimson-accent"></span>
                </span>
              </motion.span>
              <span>Capabilities</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-300 max-w-md">
            Sourced strictly from verified expertise: machine learning pipelines, OpenCV biometric tracking, and modern Python web development.
          </p>
        </div>

        {/* Rich Accordion Stack with Responsive Physics */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {RESUME_DATA.services.map((service) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                onClick={() => setActiveId(isActive ? "" : service.id)}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className={`rounded-2xl sm:rounded-3xl border transition-colors duration-300 cursor-pointer overflow-hidden relative group ${
                  isActive
                    ? "bg-gradient-to-r from-crimson-accent/15 via-dark-surface-card to-dark-surface-card border-crimson-accent shadow-[0_15px_40px_rgba(255,43,78,0.18)]"
                    : "bg-dark-surface border-dark-border hover:border-dark-border-light hover:bg-dark-surface-hover"
                }`}
              >
                {/* Header Row */}
                <div className="p-3.5 sm:p-6 md:p-8 flex items-center justify-between gap-3 sm:gap-6">
                  {/* Left: Number + Title */}
                  <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold transition-colors shrink-0 ${
                        isActive ? "text-crimson-accent" : "text-slate-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center shrink-0">
                      {iconsMap[service.id]}
                    </div>

                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0">
                      <h3 className="text-sm sm:text-xl md:text-2xl font-heading font-bold text-white group-hover:text-crimson-accent transition-colors truncate">
                        {service.title}
                      </h3>
                      {!isActive && (
                        <p className="text-[11px] sm:text-sm text-slate-400 line-clamp-1">
                          {service.subtitle || service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Circular Arrow Action Button */}
                  <motion.div
                    animate={{
                      rotate: isActive ? 45 : 0,
                      scale: isActive ? 1.05 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm ${
                      isActive
                        ? "bg-crimson-accent text-white shadow-[0_0_20px_rgba(255,43,78,0.5)]"
                        : "bg-dark-bg border border-dark-border text-slate-300 group-hover:border-crimson-accent/60 group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </div>

                {/* Expanded Rich Media Area */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="px-3.5 pb-5 sm:px-8 sm:pb-8 pt-0 flex flex-col gap-4 sm:gap-6 border-t border-dark-border/60"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start pt-4 sm:pt-6">
                        {/* Domain Knowledge & Structured Pillars */}
                        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                          {/* Scope & Philosophy */}
                          <div className="flex flex-col gap-1.5">
                            <span className="font-mono text-[9px] sm:text-[10px] text-crimson-accent font-bold tracking-widest uppercase">
                              DOMAIN EXPERTISE
                            </span>
                            <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Knowledge Pillars: What Affan knows in this field */}
                          <div className="flex flex-col gap-2">
                            <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                              CORE COMPETENCIES
                            </span>
                            <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
                              {service.knowledgePillars?.map((pillar, pIdx) => (
                                <div
                                  key={pIdx}
                                  className="p-3 sm:p-3.5 rounded-xl bg-dark-bg/90 border border-dark-border/80 hover:border-crimson-accent/40 transition-colors flex flex-col gap-1.5"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent shrink-0" />
                                      <h4 className="text-xs sm:text-sm font-heading font-bold text-white truncate">
                                        {pillar.title}
                                      </h4>
                                    </div>
                                    <span className="font-mono text-[8.5px] sm:text-[9.5px] text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 shrink-0">
                                      {pillar.context}
                                    </span>
                                  </div>
                                  <p className="text-[11px] sm:text-xs text-slate-300 leading-normal pl-3.5">
                                    {pillar.summary}
                                  </p>
                                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pl-3.5 pt-0.5">
                                    {pillar.skills.map((skill, sIdx) => (
                                      <span
                                        key={sIdx}
                                        className="text-[8.5px] sm:text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-dark-surface border border-white/10 text-slate-300 font-medium"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technical Skill Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                            {service.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-dark-bg border border-dark-border text-[9.5px] sm:text-xs font-mono text-slate-200 flex items-center gap-1.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Exploration Link */}
                          <div className="pt-0.5">
                            <a
                              href="#projects"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-crimson-accent hover:underline font-semibold"
                            >
                              <span>Explore Applied Project Implementations</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>

                        {/* Interactive Live Capability & Telemetry HUD */}
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="lg:col-span-5 rounded-xl sm:rounded-2xl bg-dark-bg/95 border border-dark-border p-3.5 sm:p-5 flex flex-col gap-3 sm:gap-3.5 shadow-2xl relative overflow-hidden"
                        >
                          {/* Visual decorative background glow */}
                          <div className="absolute -top-16 -right-16 w-36 h-36 bg-crimson-accent/10 rounded-full blur-3xl pointer-events-none" />

                          {service.id === "ai-nlp" && (
                            <>
                              <div className="flex items-center justify-between pb-2.5 border-b border-dark-border/80">
                                <span className="text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-1.5 font-bold">
                                  <Terminal className="w-3.5 h-3.5 text-crimson-accent" />
                                  AI/ML INTELLIGENCE MONITOR
                                </span>
                                <span className="text-[8.5px] sm:text-[9.5px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  LIVE PREVIEW
                                </span>
                              </div>

                              {/* NLP Sentiment Polarity Telemetry */}
                              <div className="p-2.5 sm:p-3 rounded-lg bg-dark-surface/90 border border-dark-border flex flex-col gap-2">
                                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                                  <span className="text-slate-300 font-medium">TextBlob Sentiment Polarity</span>
                                  <span className="text-crimson-accent font-bold">+0.82 POSITIVE</span>
                                </div>
                                <div className="w-full h-1.5 bg-dark-bg rounded-full overflow-hidden flex">
                                  <div className="w-[82%] bg-gradient-to-r from-crimson-accent to-pink-500 h-full rounded-full" />
                                </div>
                                <div className="flex items-center justify-between text-[8.5px] sm:text-[9.5px] font-mono text-slate-400">
                                  <span>Subjectivity: 0.42 (Objective)</span>
                                  <span>Classification: Pros &amp; Cons</span>
                                </div>
                              </div>

                              {/* Data Science Intelligence Workflow */}
                              <div className="p-2.5 sm:p-3 rounded-lg bg-dark-surface/90 border border-dark-border flex flex-col gap-1.5">
                                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                                  <span className="text-slate-300 font-medium">Sumago Infotech ML Pipeline</span>
                                  <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                                    DATA-DRIVEN
                                  </span>
                                </div>
                                <p className="text-[9.5px] sm:text-[10.5px] font-mono text-slate-400 leading-snug">
                                  Feature extraction, data preprocessing &amp; predictive workflow models
                                </p>
                              </div>

                              {/* Offline Speech & Local Audio Buffer */}
                              <div className="p-2.5 sm:p-3 rounded-lg bg-dark-surface/90 border border-dark-border flex flex-col gap-2">
                                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono">
                                  <span className="text-slate-300 font-medium">Offline Audio Stream</span>
                                  <span className="text-zinc-400 text-[8.5px] sm:text-[9px] font-mono">OFFLINE PROCESSING</span>
                                </div>
                                <div className="flex items-center justify-between py-1">
                                  <span className="text-[10px] font-mono text-slate-400">Speech Buffer:</span>
                                  <WaveformVisualizer isActive={true} barCount={14} />
                                </div>
                              </div>

                              <div className="pt-1 flex items-center justify-between text-[8.5px] sm:text-[9.5px] font-mono text-slate-400 border-t border-dark-border/60">
                                <span>Stack: Python • TextBlob • Local LLM</span>
                                <span className="text-zinc-500">Privacy First</span>
                              </div>
                            </>
                          )}

                          {service.id === "cv-biometrics" && (
                            <>
                              <div className="flex items-center justify-between pb-2.5 border-b border-dark-border/80">
                                <span className="text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-1.5 font-bold">
                                  <Eye className="w-3.5 h-3.5 text-crimson-accent" />
                                  OPENCV BIOMETRIC RETICLE
                                </span>
                                <span className="text-[8.5px] sm:text-[9.5px] font-mono text-crimson-accent bg-crimson-accent/10 px-2 py-0.5 rounded border border-crimson-accent/30 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent animate-pulse" />
                                  TARGET 60 FPS
                                </span>
                              </div>

                              {/* Scanner Centerpiece */}
                              <div className="flex items-center justify-center py-1 sm:py-2">
                                <BiometricScanner className="w-20 h-20 sm:w-24 sm:h-24" />
                              </div>

                              {/* Biometric Telemetry Matrix */}
                              <div className="grid grid-cols-2 gap-2 text-[9.5px] sm:text-[10.5px] font-mono">
                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border">
                                  <span className="text-slate-400 block text-[8.5px]">Detection Engine</span>
                                  <span className="text-white font-semibold">Haar Cascade</span>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border">
                                  <span className="text-slate-400 block text-[8.5px]">Match Accuracy</span>
                                  <span className="text-emerald-400 font-semibold">High Accuracy (99%+)</span>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border">
                                  <span className="text-slate-400 block text-[8.5px]">Database Sync</span>
                                  <span className="text-white font-semibold">MySQL Relational</span>
                                </div>
                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border">
                                  <span className="text-slate-400 block text-[8.5px]">Target Interface</span>
                                  <span className="text-white font-semibold">Desktop GUI</span>
                                </div>
                              </div>

                              <div className="pt-1 flex items-center justify-between text-[8.5px] sm:text-[9.5px] font-mono text-slate-400 border-t border-dark-border/60">
                                <span>Pipeline: OpenCV • Real-Time Stream</span>
                                <span className="text-emerald-400">DB Sync: Logged</span>
                              </div>
                            </>
                          )}

                          {service.id === "python-fullstack" && (
                            <>
                              <div className="flex items-center justify-between pb-2.5 border-b border-dark-border/80">
                                <span className="text-[10px] sm:text-[11px] font-mono text-white flex items-center gap-1.5 font-bold">
                                  <Code className="w-3.5 h-3.5 text-crimson-accent" />
                                  FULL-STACK ARCHITECTURE MATRIX
                                </span>
                                <span className="text-[8.5px] sm:text-[9.5px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  PRODUCTION READY
                                </span>
                              </div>

                              {/* Multi-Tier Topology Cards */}
                              <div className="flex flex-col gap-2 font-mono text-[9.5px] sm:text-[10.5px]">
                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border flex items-center justify-between">
                                  <div>
                                    <span className="text-slate-400 block text-[8.5px]">Client &amp; Platform Layer (AwnNet)</span>
                                    <span className="text-white font-semibold">Next.js • Tailwind CSS • Responsive UI</span>
                                  </div>
                                  <span className="text-[8.5px] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded bg-white/5">
                                    Founder
                                  </span>
                                </div>

                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border flex items-center justify-between">
                                  <div>
                                    <span className="text-slate-400 block text-[8.5px]">Backend &amp; Service Logic</span>
                                    <span className="text-white font-semibold">Python • RESTful APIs • Automation</span>
                                  </div>
                                  <span className="text-[8.5px] text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded bg-emerald-500/10">
                                    Modular
                                  </span>
                                </div>

                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border flex items-center justify-between">
                                  <div>
                                    <span className="text-slate-400 block text-[8.5px]">Relational Persistence</span>
                                    <span className="text-white font-semibold">MySQL Schemas • ACID Integrity</span>
                                  </div>
                                  <span className="text-[8.5px] text-zinc-400 border border-white/10 px-1.5 py-0.5 rounded bg-white/5">
                                    Structured
                                  </span>
                                </div>

                                <div className="p-2 sm:p-2.5 rounded-lg bg-dark-surface/90 border border-dark-border flex items-center justify-between">
                                  <div>
                                    <span className="text-slate-400 block text-[8.5px]">Academic &amp; Competitive Distinction</span>
                                    <span className="text-crimson-accent font-semibold">90.82% Distinction • 4x Winner</span>
                                  </div>
                                  <span className="text-[8.5px] text-crimson-accent border border-crimson-accent/20 px-1.5 py-0.5 rounded bg-crimson-accent/10">
                                    Batch Topper
                                  </span>
                                </div>
                              </div>

                              <div className="pt-1 flex items-center justify-between text-[8.5px] sm:text-[9.5px] font-mono text-slate-400 border-t border-dark-border/60">
                                <span>End-to-End Client Delivery</span>
                                <span className="text-zinc-500">AwnNet Platform</span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
