"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CapsuleCtaButton } from "@/components/ui/CapsuleCtaButton";
import confetti from "canvas-confetti";
import { RESUME_DATA } from "@/data/resume";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#ff2b4e", "#ffffff", "#22252c"],
    });
  };

  return (
    <footer id="contact" className="py-12 md:py-24 px-3 sm:px-6 md:px-12 border-t border-dark-border relative overflow-hidden bg-dark-bg pb-28 md:pb-16">
      {/* Intense Ambient Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-crimson-accent/15 blur-[120px] pointer-events-none"></div>

      {/* Giant Reference-Style Watermark Backdrop */}
      <div className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 select-none overflow-hidden text-center opacity-[0.035] z-0 whitespace-nowrap">
        <span className="font-heading font-extrabold text-7xl sm:text-9xl md:text-[13rem] tracking-tighter text-white block uppercase">
          COLLABORATE
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6 sm:gap-16">
        {/* ============================================================== */}
        {/* MOBILE TACTICAL CONTACT BANNER (Matches Stitch Design)         */}
        {/* ============================================================== */}
        <section className="md:hidden p-3.5 rounded-2xl bg-gradient-to-br from-dark-surface-card to-[#18181d] border border-crimson-accent/40 relative overflow-hidden shadow-xl flex flex-col gap-3">
          <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-crimson-accent/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-crimson-accent font-bold uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>

          <div className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-7">
              <h3 className="font-heading text-sm font-extrabold uppercase text-white leading-tight">
                LET&apos;S BUILD SOMETHING INTELLIGENT
              </h3>
              <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-normal">
                Available for AI/ML internships, Python development, and collaborative projects.
              </p>
            </div>
            <div className="col-span-5 flex flex-col justify-center">
              <a
                className="w-full py-2.5 px-2 rounded-lg bg-crimson-accent hover:bg-crimson-hover text-white font-heading text-xs font-extrabold flex items-center justify-center gap-1 shadow-lg active:scale-95 transition-all text-center"
                href={`mailto:${RESUME_DATA.personal.email}`}
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Contact Chips on Mobile */}
          <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10">
            <button
              onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
              className="p-2 rounded-lg bg-dark-bg border border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-300 hover:text-white"
            >
              <span className="truncate">{RESUME_DATA.personal.email}</span>
              {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
            </button>
            <button
              onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
              className="p-2 rounded-lg bg-dark-bg border border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-300 hover:text-white"
            >
              <span>{RESUME_DATA.personal.phone}</span>
              {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
            </button>
          </div>

          {/* Stitch Telemetry Footer Strip */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>UTC+5:30 · REMOTE OK</span>
            <span className="text-crimson-accent font-semibold">OPEN TO ROLES</span>
          </div>
        </section>

        {/* ============================================================== */}
        {/* DESKTOP GIANT CALLOUT POD (Preserved)                         */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex p-8 sm:p-14 md:p-20 rounded-3xl bg-gradient-to-b from-dark-surface to-dark-surface-card border border-dark-border text-center flex-col items-center justify-center shadow-2xl relative overflow-hidden gap-6"
        >
          <span className="font-mono text-xs text-crimson-accent font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-crimson-accent/10 border border-crimson-accent/30">
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white uppercase tracking-tight max-w-4xl leading-tight">
            Ready To Collaborate On AI/ML &amp; Python Projects?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
            Available for AI/ML Intern roles, Python developer engagements, and custom web architecture solutions through AwnNet.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <CapsuleCtaButton
              label="Let's Connect on LinkedIn"
              href={RESUME_DATA.personal.linkedin}
              isExternal={true}
              onClick={() => {
                confetti({
                  particleCount: 50,
                  spread: 70,
                  origin: { y: 0.8 },
                  colors: ["#ff2b4e", "#ffffff", "#ff1438"],
                });
              }}
            />
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-semibold bg-dark-surface/90 hover:bg-dark-surface text-slate-200 hover:text-white border border-dark-border hover:border-crimson-accent transition-all duration-300 shadow-lg group"
            >
              <GithubIcon className="w-4 h-4 text-crimson-accent group-hover:scale-110 transition-transform" />
              <span>Explore GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Direct Contact Cards Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-6 text-left">
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-dark-bg border border-dark-border flex flex-col justify-between gap-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Email</span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                  className="text-slate-400 hover:text-crimson-accent transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </motion.button>
              </div>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="text-xs font-mono text-white hover:text-crimson-accent transition-colors truncate"
              >
                {RESUME_DATA.personal.email}
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-dark-bg border border-dark-border flex flex-col justify-between gap-2 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Phone</span>
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                  className="text-slate-400 hover:text-crimson-accent transition-colors cursor-pointer"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </motion.button>
              </div>
              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="text-xs font-mono text-white hover:text-crimson-accent transition-colors"
              >
                {RESUME_DATA.personal.phone}
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-dark-bg border border-dark-border flex flex-col justify-between gap-2 shadow-sm"
            >
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Location</span>
              <span className="text-xs font-mono text-white flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-crimson-accent" />
                {RESUME_DATA.personal.location}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-8 border-t border-dark-border/60">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-dark-surface border border-dark-border flex items-center justify-center font-heading font-bold text-crimson-accent text-xs">
              A
            </div>
            <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
              © {new Date().getFullYear()} {RESUME_DATA.personal.name}. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton strength={0.2}>
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs text-slate-300 hover:text-crimson-accent transition-colors font-mono flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs text-slate-300 hover:text-crimson-accent transition-colors font-mono flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href={`mailto:${RESUME_DATA.personal.email}`}
                className="text-[11px] sm:text-xs text-slate-300 hover:text-crimson-accent transition-colors font-mono flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href={`tel:${RESUME_DATA.personal.phone}`}
                className="text-[11px] sm:text-xs text-slate-300 hover:text-crimson-accent transition-colors font-mono flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
