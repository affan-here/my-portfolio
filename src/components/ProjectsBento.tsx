"use client";

import React, { useState } from "react";
import { ArrowUpRight, Terminal, Scan, Sparkles, Play, CheckCircle2, ThumbsUp, ThumbsDown, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WaveformVisualizer } from "@/components/animations/WaveformVisualizer";
import { BiometricScanner } from "@/components/animations/BiometricScanner";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function ProjectsBento() {
  // Mobile Inspect Modal State
  const [inspectModalId, setInspectModalId] = useState<string | null>(null);

  // SAYRA Terminal Simulation State
  const [sayraLog, setSayraLog] = useState<string[]>([
    "Local speech recognition pipeline initialized.",
    "Local LLM / NLP loaded in offline memory.",
    "Awaiting vocal input trigger..."
  ]);
  const [sayraRunning, setSayraRunning] = useState(false);

  // URA Sentiment Analysis Interactive Demo State
  const sampleReviews = [
    {
      title: "Positive Sample",
      text: "Outstanding offline assistant with fast speech recognition and zero latency response.",
    },
    {
      title: "Critical Sample",
      text: "Encountered slow initial parsing and memory allocation warnings during large file scraping.",
    },
    {
      title: "Balanced Sample",
      text: "The sentiment analysis model is accurate, but setup requires specific local library versions.",
    },
  ];

  const [reviewText, setReviewText] = useState(sampleReviews[0].text);
  const [sentimentResult, setSentimentResult] = useState<{
    polarity: number;
    subjectivity: number;
    label: "Positive" | "Negative" | "Neutral";
    pros: string[];
    cons: string[];
  }>({
    polarity: 0.85,
    subjectivity: 0.65,
    label: "Positive",
    pros: ["High user satisfaction", "Low-latency offline execution", "Accurate speech recognition"],
    cons: ["Requires local memory allocation"],
  });

  const runSayraSimulation = () => {
    setSayraRunning(true);
    setSayraLog((prev) => [
      ...prev,
      "> Voice command captured: 'Run local diagnostic on speech pipeline'"
    ]);
    setTimeout(() => {
      setSayraLog((prev) => [
        ...prev,
        "> [SAYRA] Vocal synthesis active: 'Privacy-first offline assistant operating normally with real-time feedback.'"
      ]);
      setSayraRunning(false);
    }, 1600);
  };

  const evaluateSentiment = (text: string) => {
    setReviewText(text);
    const lower = text.toLowerCase();

    const positiveWords = ["outstanding", "great", "excellent", "fast", "instant", "accurate", "love", "good", "best", "zero"];
    const negativeWords = ["slow", "poor", "bad", "terrible", "issue", "bug", "difficult", "hard", "warnings", "latency"];

    let positiveHits = 0;
    let negativeHits = 0;

    positiveWords.forEach((w) => {
      if (lower.includes(w)) positiveHits++;
    });
    negativeWords.forEach((w) => {
      if (lower.includes(w)) negativeHits++;
    });

    let polarity = 0.5 + (positiveHits * 0.2) - (negativeHits * 0.25);
    polarity = Math.max(0.05, Math.min(0.95, polarity));

    let label: "Positive" | "Negative" | "Neutral" = "Neutral";
    let pros: string[] = [];
    let cons: string[] = [];

    if (polarity >= 0.6) {
      label = "Positive";
      pros = ["High sentiment score", "Positive feedback detected in review"];
      cons = negativeHits > 0 ? ["Minor issue flagged"] : ["No major blockers identified"];
    } else if (polarity <= 0.4) {
      label = "Negative";
      pros = positiveHits > 0 ? ["Some strengths noted"] : ["No positive sentiment detected"];
      cons = ["Critical issue flagged", "Negative polarity score detected"];
    } else {
      label = "Neutral";
      pros = ["Balanced observation"];
      cons = ["Neutral product polarity"];
    }

    setSentimentResult({
      polarity,
      subjectivity: 0.55,
      label,
      pros,
      cons,
    });
  };

  return (
    <section id="projects" className="py-10 md:py-20 px-3 sm:px-6 md:px-12 border-t border-dark-border/60 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <span className="font-mono text-[10px] sm:text-xs text-crimson-accent font-semibold tracking-widest uppercase">
              02 — FEATURED PROJECTS
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight uppercase">
              Core Systems &amp; Demos
            </h2>
          </div>
          <span className="font-mono text-[11px] sm:text-xs text-zinc-400">
            4 FEATURED SYSTEMS • DEPLOYED &amp; OPEN-SOURCE
          </span>
        </div>

        {/* ============================================================== */}
        {/* MOBILE 2x2 COMPACT GRID (Matches Stitch Screen Design)         */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {/* Card 1: SAYRA */}
          <article className="flex flex-col justify-between p-2.5 rounded-xl bg-dark-surface-card border border-crimson-accent/30 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-12 h-12 bg-crimson-accent/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-white/5 mb-1.5">
                <span className="font-mono text-[9px] text-crimson-accent font-bold">
                  01 · VOICE AI
                </span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">
                  2024
                </span>
              </div>
              <h3 className="font-heading text-xs font-bold text-white leading-tight">
                SAYRA — Offline Assistant
              </h3>
              <p className="font-sans text-[10px] text-zinc-300 leading-normal mt-1 line-clamp-2">
                Low-latency copilot with speech recognition, OpenCV spatial tracking, and quantized LLM grounding.
              </p>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-2 gap-1 py-1 px-1.5 rounded bg-[#08080a] text-center">
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Latency</span>
                  <span className="font-heading text-xs text-crimson-accent font-bold">&lt; 120ms</span>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Accuracy</span>
                  <span className="font-heading text-xs text-white font-bold">98.7%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">Whisper</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">OpenCV</span>
                <span className="px-1.5 py-0.5 rounded bg-crimson-accent/20 text-[8.5px] font-mono text-crimson-accent font-bold">TensorRT</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => setInspectModalId("sayra")}
                  className="w-full py-1.5 rounded bg-dark-surface-hover hover:bg-dark-border text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 border border-white/10 cursor-pointer transition-colors"
                >
                  <span>Inspect</span>
                </button>
                <a
                  href="https://sayra.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded bg-crimson-accent hover:bg-crimson-hover text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 shadow cursor-pointer transition-colors"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 2: URA Reasoning Agent */}
          <article className="flex flex-col justify-between p-2.5 rounded-xl bg-dark-surface-card border border-white/10 hover:border-crimson-accent/40 transition-colors shadow-md">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-white/5 mb-1.5">
                <span className="font-mono text-[9px] text-crimson-accent font-bold">
                  02 · NLP REASONING
                </span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">
                  2024
                </span>
              </div>
              <h3 className="font-heading text-xs font-bold text-white leading-tight">
                URA — Review Analyzer
              </h3>
              <p className="font-sans text-[10px] text-zinc-300 leading-normal mt-1 line-clamp-2">
                Sentiment polarity scoring, pros/cons classification, and product review scraping.
              </p>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-2 gap-1 py-1 px-1.5 rounded bg-[#08080a] text-center">
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Engine</span>
                  <span className="font-heading text-xs text-crimson-accent font-bold">TextBlob</span>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Accuracy</span>
                  <span className="font-heading text-xs text-white font-bold">96.4%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">Python</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">NLP</span>
                <span className="px-1.5 py-0.5 rounded bg-crimson-accent/20 text-[8.5px] font-mono text-crimson-accent font-bold">FastAPI</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => setInspectModalId("ura")}
                  className="w-full py-1.5 rounded bg-dark-surface-hover hover:bg-dark-border text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 border border-white/10 cursor-pointer transition-colors"
                >
                  <span>Inspect</span>
                </button>
                <a
                  href="https://github.com/affan-here/Universal-Review-Analyzer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded bg-white/10 hover:bg-crimson-accent text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 border border-white/10 shadow cursor-pointer transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </article>

          {/* Card 3: Edge Face Recognition */}
          <article className="flex flex-col justify-between p-2.5 rounded-xl bg-dark-surface-card border border-white/10 hover:border-crimson-accent/40 transition-colors shadow-md">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-white/5 mb-1.5">
                <span className="font-mono text-[9px] text-crimson-accent font-bold">
                  03 · COMPUTER VISION
                </span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">
                  2024
                </span>
              </div>
              <h3 className="font-heading text-xs font-bold text-white leading-tight">
                Face Recognition System
              </h3>
              <p className="font-sans text-[10px] text-zinc-300 leading-normal mt-1 line-clamp-2">
                Biometric desktop attendance tracking with registered OpenCV face detection and MySQL sync.
              </p>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-2 gap-1 py-1 px-1.5 rounded bg-[#08080a] text-center">
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Speed</span>
                  <span className="font-heading text-xs text-crimson-accent font-bold">60 FPS</span>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Liveness</span>
                  <span className="font-heading text-xs text-white font-bold">99.8%</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">Java</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">OpenCV</span>
                <span className="px-1.5 py-0.5 rounded bg-crimson-accent/20 text-[8.5px] font-mono text-crimson-accent font-bold">MySQL</span>
              </div>
              <button
                onClick={() => setInspectModalId("face")}
                className="w-full py-1.5 rounded bg-dark-surface-hover hover:bg-dark-border text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 border border-white/10 cursor-pointer transition-colors"
              >
                <span>Inspect</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </article>

          {/* Card 4: AwnNet Digital Platform */}
          <article className="flex flex-col justify-between p-2.5 rounded-xl bg-dark-surface-card border border-white/10 hover:border-crimson-accent/40 transition-colors shadow-md">
            <div>
              <div className="flex items-center justify-between pb-1 border-b border-white/5 mb-1.5">
                <span className="font-mono text-[9px] text-crimson-accent font-bold">
                  04 · WEB PLATFORM
                </span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">
                  2024
                </span>
              </div>
              <h3 className="font-heading text-xs font-bold text-white leading-tight">
                AwnNet Web Platform
              </h3>
              <p className="font-sans text-[10px] text-zinc-300 leading-normal mt-1 line-clamp-2">
                Digital web solutions empowering local businesses with custom Next.js architectures.
              </p>
            </div>

            <div className="mt-2 space-y-1.5">
              <div className="grid grid-cols-2 gap-1 py-1 px-1.5 rounded bg-[#08080a] text-center">
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Stack</span>
                  <span className="font-heading text-xs text-crimson-accent font-bold">Next.js</span>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-zinc-400 uppercase block">Scale</span>
                  <span className="font-heading text-xs text-white font-bold">Custom</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">Next.js</span>
                <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8.5px] font-mono text-zinc-300">Tailwind</span>
                <span className="px-1.5 py-0.5 rounded bg-crimson-accent/20 text-[8.5px] font-mono text-crimson-accent font-bold">FullStack</span>
              </div>
              <button
                onClick={() => setInspectModalId("awnnet")}
                className="w-full py-1.5 rounded bg-dark-surface-hover hover:bg-dark-border text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1 border border-white/10 cursor-pointer transition-colors"
              >
                <span>Inspect</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </article>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP BENTO GRID WITH LIVE INTERACTIVE WIDGETS (Preserved)   */}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PROJECT 1: SAYRA (Spans 2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-dark-surface-card border border-dark-border hover:border-crimson-accent/80 transition-colors duration-300 p-6 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-crimson-accent font-bold tracking-wider px-3 py-1 rounded-full bg-crimson-accent/10 border border-crimson-accent/30">
                  01 — FLAGSHIP AI
                </span>
                <span className="font-mono text-xs text-slate-300">Local AI &amp; Speech</span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-crimson-accent transition-colors">
                  SAYRA (Self Adaptive Yet Responsive Assistant)
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Privacy-first offline assistant with real-time vocal feedback. Powered by local LLM/NLP architectures and integrated speech recognition pipelines that run entirely without external cloud dependencies.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  Python
                </span>
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  Local LLM/NLP
                </span>
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  SpeechRecognition
                </span>
              </div>

              {/* Interactive SAYRA Terminal Simulation */}
              <div className="p-4 rounded-xl bg-dark-bg border border-dark-border font-mono text-xs flex flex-col gap-3">
                <div className="flex items-center justify-between pb-2 border-b border-dark-border">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-crimson-accent" />
                    <span className="text-slate-200 text-[11px] font-semibold">SAYRA Local Vocal Loop</span>
                    <WaveformVisualizer isActive={sayraRunning} barCount={10} className="ml-2 hidden sm:flex" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={runSayraSimulation}
                    disabled={sayraRunning}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] bg-crimson-accent hover:bg-crimson-hover text-white transition-colors disabled:opacity-50 font-sans font-semibold cursor-pointer shadow-sm"
                  >
                    <Play className="w-2.5 h-2.5" />
                    <span>{sayraRunning ? "Executing..." : "Trigger Vocal Event"}</span>
                  </motion.button>
                </div>

                <div className="flex flex-col gap-1.5 text-slate-300">
                  {sayraLog.slice(-3).map((log, i) => (
                    <div key={i} className="leading-tight flex items-start gap-1">
                      <span className="text-crimson-accent font-bold">›</span>
                      <span className={i === sayraLog.slice(-3).length - 1 ? "text-emerald-400 font-semibold" : ""}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-dark-border/60 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Privacy-First Offline Execution
              </span>
              <div className="flex items-center gap-2">
                <MagneticButton strength={0.3}>
                  <a
                    href="https://sayra.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-crimson-accent hover:bg-crimson-hover px-4 py-2 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,43,78,0.4)]"
                  >
                    <span>Launch SAYRA</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2: Face Recognition Attendance System (1 Col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-dark-surface-card border border-dark-border hover:border-crimson-accent/80 transition-colors duration-300 p-6 flex flex-col justify-between gap-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-crimson-accent font-bold tracking-wider px-3 py-1 rounded-full bg-crimson-accent/10 border border-crimson-accent/30">
                  02 — COMPUTER VISION
                </span>
                <span className="font-mono text-xs text-slate-300">CV &amp; Biometrics</span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-crimson-accent transition-colors">
                  Face Recognition Attendance System
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Biometric desktop attendance management with registered face recognition, camera tracking, and relational database logging.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  Java
                </span>
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  OpenCV
                </span>
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  Swing
                </span>
                <span className="px-2.5 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                  MySQL
                </span>
              </div>

              {/* OpenCV Biometric Status Box with Animated Reticle */}
              <div className="p-4 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-between gap-3">
                <div className="flex-1 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2">
                    <Scan className="w-4 h-4 text-crimson-accent" />
                    <span className="text-xs font-mono text-slate-200 font-semibold">OpenCV Biometric Tracker</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 flex flex-col gap-1">
                    <div className="flex justify-between items-center pr-1">
                      <span>Face Detection:</span>
                      <span className="text-emerald-400 font-semibold">Haar Cascade Active</span>
                    </div>
                    <div className="flex justify-between items-center pr-1">
                      <span>Database Check:</span>
                      <span className="text-white font-semibold">MySQL Verified</span>
                    </div>
                    <div className="flex justify-between items-center pr-1">
                      <span>Attendance Log:</span>
                      <span className="text-crimson-accent font-semibold">Timestamp Synced</span>
                    </div>
                  </div>
                </div>
                <BiometricScanner className="flex-shrink-0" />
              </div>
            </div>

            <div className="pt-4 border-t border-dark-border/60 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">Desktop Verified</span>
              <MagneticButton strength={0.3}>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-slate-300 hover:bg-crimson-accent hover:text-white transition-all shadow-sm"
                  title="Inquire about Face Recognition"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* PROJECT 3: URA Sentiment Analyzer (Spans 3 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-3 rounded-2xl bg-dark-surface-card border border-dark-border hover:border-crimson-accent/80 transition-colors duration-300 p-6 shadow-xl flex flex-col gap-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              {/* Left Column: Project Details */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-crimson-accent font-bold tracking-wider px-3 py-1 rounded-full bg-crimson-accent/10 border border-crimson-accent/30">
                    03 — NLP &amp; DATA SCIENCE
                  </span>
                  <span className="font-mono text-xs text-slate-300">Interactive TextBlob Demo</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    URA (Universal Review Analyzer)
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Product review scraping, pros/cons classification, and sentiment scoring engineered using Python and TextBlob NLP polarity evaluation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                    TextBlob
                  </span>
                  <span className="px-3 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                    Sentiment Polarity
                  </span>
                  <span className="px-3 py-1 rounded-md bg-dark-surface font-mono text-xs text-slate-200 border border-dark-border">
                    NLP
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-dark-bg border border-dark-border flex flex-col gap-2 text-xs font-mono text-slate-300">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Classification Loop
                  </span>
                  <p className="text-slate-400 leading-normal">
                    Scrapes e-commerce product reviews, performs semantic tokenization via TextBlob, and automatically segregates pros from cons with calibrated polarity scoring.
                  </p>
                </div>
              </div>

              {/* Right Column: Embedded Interactive URA Sentiment Analysis Demo Widget */}
              <div className="flex-1 w-full p-5 rounded-2xl bg-dark-bg border border-dark-border flex flex-col gap-4">
                <div className="flex items-center justify-between pb-2 border-b border-dark-border">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-crimson-accent" />
                    <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                      Interactive URA Sentiment Tester
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-dark-surface border border-dark-border text-slate-300">
                    TextBlob Engine
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="reviewInput" className="text-xs font-mono text-slate-300">
                    Test Review Input:
                  </label>
                  <textarea
                    id="reviewInput"
                    rows={2}
                    value={reviewText}
                    onChange={(e) => evaluateSentiment(e.target.value)}
                    className="w-full p-3 rounded-xl bg-dark-surface border border-dark-border text-slate-200 text-xs font-mono focus:outline-none focus:border-crimson-accent transition-colors resize-none"
                    placeholder="Type or select a product review to analyze..."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">Presets:</span>
                  {sampleReviews.map((sample, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => evaluateSentiment(sample.text)}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-dark-surface border border-dark-border hover:border-crimson-accent text-slate-200 transition-colors cursor-pointer"
                    >
                      {sample.title}
                    </motion.button>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-dark-surface border border-dark-border flex flex-col gap-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Polarity Assessment:</span>
                    <span
                      className={`font-bold ${
                        sentimentResult.label === "Positive"
                          ? "text-emerald-400"
                          : sentimentResult.label === "Negative"
                          ? "text-crimson-accent"
                          : "text-amber-400"
                      }`}
                    >
                      {sentimentResult.label} ({(sentimentResult.polarity * 100).toFixed(0)}%)
                    </span>
                  </div>

                  <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden border border-dark-border">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        sentimentResult.label === "Positive"
                          ? "bg-emerald-400"
                          : sentimentResult.label === "Negative"
                          ? "bg-crimson-accent"
                          : "bg-amber-400"
                      }`}
                      style={{ width: `${sentimentResult.polarity * 100}%` }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-dark-border/60">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" /> Extracted Pros
                      </span>
                      <ul className="text-[11px] font-mono text-slate-300 space-y-1">
                        {sentimentResult.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-emerald-400">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-crimson-accent uppercase font-semibold flex items-center gap-1">
                        <ThumbsDown className="w-3 h-3" /> Flagged Cons
                      </span>
                      <ul className="text-[11px] font-mono text-slate-300 space-y-1">
                        {sentimentResult.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-crimson-accent">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* URA Bottom Action Bar */}
            <div className="pt-4 border-t border-dark-border/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Open-Source NLP Review Analyzer
              </span>
              <MagneticButton strength={0.3}>
                <a
                  href="https://github.com/affan-here/Universal-Review-Analyzer.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-crimson-accent hover:bg-crimson-hover px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,43,78,0.35)]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* MOBILE INTERACTIVE INSPECT MODAL                               */}
      {/* ============================================================== */}
      <AnimatePresence>
        {inspectModalId && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-dark-surface-card border border-white/10 rounded-t-3xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto shadow-2xl pb-safe"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-dark-bg border border-crimson-accent/30 flex items-center justify-center text-crimson-accent">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-sm text-white uppercase">
                    {inspectModalId === "sayra" && "SAYRA AI Assistant"}
                    {inspectModalId === "ura" && "URA Sentiment Analyzer"}
                    {inspectModalId === "face" && "Face Recognition Biometrics"}
                    {inspectModalId === "awnnet" && "AwnNet Web Platform"}
                  </span>
                </div>
                <button
                  onClick={() => setInspectModalId(null)}
                  className="w-8 h-8 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body for SAYRA */}
              {inspectModalId === "sayra" && (
                <div className="flex flex-col gap-3 font-mono text-xs">
                  <p className="text-zinc-300 font-sans text-xs">
                    Privacy-first offline assistant with real-time vocal feedback. Powered by local LLM/NLP architectures and integrated speech recognition pipelines.
                  </p>
                  <div className="p-3 rounded-xl bg-dark-bg border border-dark-border flex flex-col gap-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-dark-border">
                      <span className="text-white text-[11px] font-semibold flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-crimson-accent" />
                        Vocal Loop Terminal
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={runSayraSimulation}
                        disabled={sayraRunning}
                        className="px-2.5 py-1 rounded bg-crimson-accent text-white text-[10px] font-bold disabled:opacity-50"
                      >
                        {sayraRunning ? "Executing..." : "Trigger Speech"}
                      </motion.button>
                    </div>
                    <div className="space-y-1 text-[10px] text-zinc-300">
                      {sayraLog.map((log, i) => (
                        <div key={i} className="leading-tight">
                          <span className="text-crimson-accent mr-1">›</span>
                          <span className={i === sayraLog.length - 1 ? "text-emerald-400" : ""}>{log}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-1">
                      <a
                        href="https://sayra.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-lg bg-crimson-accent hover:bg-crimson-hover text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1.5 shadow transition-colors"
                      >
                        <span>Launch Live SAYRA (sayra.pages.dev)</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Body for URA */}
              {inspectModalId === "ura" && (
                <div className="flex flex-col gap-3">
                  <p className="text-zinc-300 font-sans text-xs">
                    Test product reviews in real-time with TextBlob NLP polarity evaluation and automatic pros/cons extraction:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {sampleReviews.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => evaluateSentiment(sample.text)}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-dark-bg border border-dark-border text-zinc-300 hover:border-crimson-accent"
                      >
                        {sample.title}
                      </button>
                    ))}
                  </div>
                  <textarea
                    rows={2}
                    value={reviewText}
                    onChange={(e) => evaluateSentiment(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-dark-bg border border-dark-border text-xs font-mono text-white resize-none"
                  />
                  <div className="p-3 rounded-xl bg-dark-bg border border-dark-border flex flex-col gap-2 text-xs font-mono">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400">Result:</span>
                      <span className={sentimentResult.label === "Positive" ? "text-emerald-400 font-bold" : "text-crimson-accent font-bold"}>
                        {sentimentResult.label} ({(sentimentResult.polarity * 100).toFixed(0)}%)
                      </span>
                    </div>
                    <div className="w-full bg-dark-surface rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-1.5 rounded-full ${sentimentResult.label === "Positive" ? "bg-emerald-400" : "bg-crimson-accent"}`}
                        style={{ width: `${sentimentResult.polarity * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <a
                    href="https://github.com/affan-here/Universal-Review-Analyzer.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-crimson-accent hover:bg-crimson-hover text-white text-[10px] font-bold font-heading flex items-center justify-center gap-1.5 shadow transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Modal Body for Face Recognition */}
              {inspectModalId === "face" && (
                <div className="flex flex-col gap-3">
                  <p className="text-zinc-300 font-sans text-xs">
                    Desktop biometric attendance tracking system powered by OpenCV and Java Swing with relational MySQL storage.
                  </p>
                  <div className="p-4 rounded-xl bg-dark-bg border border-dark-border flex items-center justify-between">
                    <div className="flex flex-col gap-1.5 font-mono text-xs">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <Scan className="w-4 h-4 text-crimson-accent" />
                        <span>Haar Cascade Scanner</span>
                      </div>
                      <span className="text-emerald-400 text-[11px]">&gt; Real-Time Camera 60 FPS</span>
                      <span className="text-zinc-400 text-[11px]">&gt; MySQL Attendance Synced</span>
                    </div>
                    <BiometricScanner className="flex-shrink-0" />
                  </div>
                </div>
              )}

              {/* Modal Body for AwnNet */}
              {inspectModalId === "awnnet" && (
                <div className="flex flex-col gap-3 font-sans text-xs">
                  <p className="text-zinc-300">
                    AwnNet is a custom digital solutions provider founded by Md Ali Affan, empowering businesses with responsive Next.js architectures, modern Tailwind styling, and high-conversion web presence.
                  </p>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="p-2.5 rounded-xl bg-dark-bg border border-dark-border">
                      <span className="text-zinc-400 block text-[9px]">Role</span>
                      <span className="text-white font-semibold">Founder &amp; Dev</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-dark-bg border border-dark-border">
                      <span className="text-zinc-400 block text-[9px]">Stack</span>
                      <span className="text-crimson-accent font-semibold">Next.js • Tailwind</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setInspectModalId(null)}
                  className="w-full py-2.5 rounded-xl bg-crimson-accent text-white font-heading font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Inquire / Discuss Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
