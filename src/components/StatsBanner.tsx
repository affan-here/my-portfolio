"use client";

import React from "react";
import { Trophy, CheckCircle2 } from "lucide-react";
import { AnimeCounter } from "@/components/animations/AnimeCounter";

export default function StatsBanner() {
  const stats = [
    {
      value: "90.82%",
      label: "Percentile",
      detail: "Diploma Distinction (Topper of Batch, 2026)",
      highlight: false,
    },
    {
      value: "4x",
      label: "Competitive Coding Winner",
      detail: "Project Comp 2026, Blind Coding 2025, Byte Battle C++ 2024",
      highlight: true,
    },
    {
      value: "3+",
      label: "AI/ML Projects",
      detail: "Core Production Systems Delivered (SAYRA, URA, Face Recognition)",
      highlight: false,
    },
  ];

  return (
    <section
      aria-label="Key Performance Metrics"
      className="py-10 md:py-14 px-3 sm:px-6 md:px-12 border-y border-dark-border/60 bg-gradient-to-b from-dark-surface/40 via-crimson-accent/[0.03] to-dark-surface/40 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
        <div className="flex flex-col gap-1 md:max-w-xs text-center md:text-left">
          <span className="font-mono text-[10px] sm:text-xs text-crimson-accent font-semibold tracking-widest uppercase">
            {"BENCHMARKS"}
          </span>
          <h2 className="text-lg sm:text-2xl font-heading font-bold text-white uppercase tracking-tight">
            Academic &amp; Project Track Record
          </h2>
          <p className="text-xs font-mono text-slate-300">
            Proven precision in engineering, algorithmic competitions, and AI deployments.
          </p>
        </div>

        {/* 3 Stats Pods */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 flex flex-col gap-1.5 sm:gap-2 relative overflow-hidden ${
                stat.highlight
                  ? "bg-gradient-to-br from-crimson-accent/15 via-dark-surface to-dark-surface border border-crimson-accent/50 shadow-[0_0_30px_rgba(255,43,78,0.16)]"
                  : "bg-dark-surface/90 border border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <AnimeCounter
                  value={stat.value}
                  className={`font-heading font-extrabold text-3xl sm:text-4xl ${
                    stat.highlight ? "text-crimson-accent" : "text-white"
                  }`}
                />
                {stat.highlight ? (
                  <Trophy className="w-5 h-5 text-crimson-accent" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-slate-400" />
                )}
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-slate-200 font-semibold tracking-tight">
                  {stat.label}
                </span>
                <span className="font-mono text-[11px] text-slate-400 leading-snug">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
