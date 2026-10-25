"use client";

import React from "react";
import { Trophy, Award, Briefcase, CheckCircle2, School } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";

export default function ExperienceTimeline() {
  const awards = [
    { title: "Project Competition 2026", label: "Award Winner" },
    { title: "Blind Coding Competition 2025", label: "Award Winner" },
    { title: "Byte Battle C++ 2024", label: "Award Winner" },
    { title: "Diploma Distinction (Topper of Batch 2026)", label: "90.82% Distinction" },
  ];

  return (
    <section id="experience" className="py-10 md:py-24 px-3 sm:px-6 md:px-12 border-t border-dark-border/60 relative bg-dark-surface/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-12">
        {/* ============================================================== */}
        {/* MOBILE 2-COLUMN SPLIT (Matches Stitch Screen Design)           */}
        {/* ============================================================== */}
        <div className="flex flex-col gap-2 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-crimson-accent uppercase font-bold tracking-wider">
              04 — TRAJECTORY
            </span>
            <span className="font-mono text-[9px] text-zinc-400">
              CAREER MILESTONES
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Left Column: Experience */}
            <div className="p-2.5 rounded-xl bg-dark-surface-card border border-white/10 flex flex-col justify-between space-y-2 shadow-sm">
              <div>
                <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/10 mb-2 text-crimson-accent">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] font-bold uppercase text-white">Experience</span>
                </div>

                {/* Role 1 */}
                <div className="space-y-0.5 mb-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8.5px] text-crimson-accent font-bold">2024 · 3 MOS</span>
                    <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8px] text-white">Intern</span>
                  </div>
                  <h4 className="font-heading text-xs font-bold text-white leading-tight">AI/ML &amp; DS Intern</h4>
                  <p className="font-sans text-[10px] text-zinc-300 leading-normal">
                    Sumago Infotech. Machine learning workflows, model evaluation &amp; data pipelines.
                  </p>
                </div>

                {/* Role 2 */}
                <div className="space-y-0.5 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8.5px] text-zinc-400 font-bold">2024 · FOUNDER</span>
                    <span className="px-1.5 py-0.5 rounded bg-dark-bg text-[8px] text-zinc-300">Active</span>
                  </div>
                  <h4 className="font-heading text-xs font-bold text-white leading-tight">Founder • AwnNet</h4>
                  <p className="font-sans text-[10px] text-zinc-300 leading-normal">
                    Custom web architectures, Next.js client deployments, and local digital growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Credentials & Distinction */}
            <div className="p-2.5 rounded-xl bg-dark-surface-card border border-white/10 flex flex-col justify-between space-y-2 shadow-sm">
              <div>
                <div className="flex items-center gap-1.5 pb-1.5 border-b border-white/10 mb-2 text-crimson-accent">
                  <School className="w-3.5 h-3.5" />
                  <span className="font-mono text-[10px] font-bold uppercase text-white">Credentials</span>
                </div>

                <div className="space-y-1">
                  <div>
                    <span className="font-heading text-xs font-bold text-white block leading-tight">
                      Computer Engineering
                    </span>
                    <span className="font-mono text-[9px] text-crimson-accent font-bold block">
                      90.82% Distinction (Topper 2026)
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1.5 border-t border-white/5">
                    <div className="flex items-start gap-1 font-mono text-[9px] text-zinc-300">
                      <span className="text-crimson-accent font-bold">✓</span>
                      <span className="leading-tight">4x Hackathon Winner</span>
                    </div>
                    <div className="flex items-start gap-1 font-mono text-[9px] text-zinc-300">
                      <span className="text-crimson-accent font-bold">✓</span>
                      <span className="leading-tight">Blind Coding &amp; C++ Battles</span>
                    </div>
                    <div className="flex items-start gap-1 font-mono text-[9px] text-zinc-300">
                      <span className="text-crimson-accent font-bold">✓</span>
                      <span className="leading-tight">OpenCV Biometrics Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP 12-COL TIMELINE (Preserved)                           */}
        {/* ============================================================== */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Experience Timeline (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="font-mono text-xs text-crimson-accent font-semibold tracking-widest uppercase">
                {"TRACK RECORD"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white uppercase">
                Work Experience
              </h2>
            </motion.div>

            {/* Timeline Items with Staggered whileInView */}
            <div className="relative pl-6 border-l-2 border-dark-border flex flex-col gap-8">
              {RESUME_DATA.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.015 }}
                  className="relative group"
                >
                  {/* Crimson node pip */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-crimson-accent group-hover:scale-125 transition-transform"></div>

                  <div className="p-6 rounded-2xl bg-dark-surface-card border border-dark-border group-hover:border-dark-border-light transition-all flex flex-col gap-3 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-lg font-heading font-bold text-white group-hover:text-crimson-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-crimson-accent font-semibold">
                        {exp.duration}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Distinction & Hackathon Awards (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Academics Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.015 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-crimson-accent font-semibold tracking-widest uppercase">
                  {"ACADEMICS"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white uppercase">
                  Education &amp; Rank
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface-card border border-dark-border flex flex-col gap-3 shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading font-bold text-white text-base">
                    Computer Engineering
                  </h3>
                  <span className="font-mono text-xs text-crimson-accent font-bold px-2 py-0.5 rounded bg-crimson-accent/10 border border-crimson-accent/30">
                    90.82% Distinction
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-300">
                  Topper of Batch, 2026 • Distinction Honor
                </p>
                <div className="text-xs text-slate-300 border-t border-dark-border/60 pt-3 flex flex-col gap-1">
                  <p>
                    <strong className="text-white">Core Focus:</strong> Computer Engineering, Python Development, Machine Learning, and Computer Vision Systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Competition Awards List */}
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-heading font-bold text-white text-xl uppercase flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-crimson-accent" />
                <span>Hackathon &amp; Awards (4x)</span>
              </motion.h3>

              <div className="flex flex-col gap-3">
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-between hover:border-crimson-accent/50 transition-colors shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-dark-bg flex items-center justify-center text-crimson-accent text-xs">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-xs font-bold text-white">{award.title}</h4>
                        <span className="text-[11px] font-mono text-slate-300">{award.label}</span>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
