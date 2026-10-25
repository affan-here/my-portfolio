"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { RESUME_DATA } from "@/data/resume";

export default function SocialBar() {
  const socials = [
    {
      name: "GitHub",
      href: RESUME_DATA.personal.github,
      icon: <GithubIcon className="w-4 h-4" />,
      label: "affan-here",
      target: "_blank",
    },
    {
      name: "LinkedIn",
      href: RESUME_DATA.personal.linkedin,
      icon: <LinkedInIcon className="w-4 h-4" />,
      label: "affan-here",
      target: "_blank",
    },
    {
      name: "Email",
      href: `mailto:${RESUME_DATA.personal.email}`,
      icon: <Mail className="w-4 h-4" />,
      label: RESUME_DATA.personal.email,
      target: "_self",
    },
    {
      name: "Phone",
      href: `tel:${RESUME_DATA.personal.phone}`,
      icon: <Phone className="w-4 h-4" />,
      label: RESUME_DATA.personal.phone,
      target: "_self",
    },
  ];

  return (
    <aside
      aria-label="Social and contact links"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-center"
      data-purpose="vertical-social-bar"
    >
      <div className="flex flex-col gap-4 p-2 rounded-full glass-pill border border-dark-border/80 shadow-2xl">
        {socials.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target={item.target}
            rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
            title={`${item.name}: ${item.label}`}
            className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-zinc-300 hover:text-white hover:bg-crimson-accent hover:border-crimson-accent transition-all duration-300 shadow-md group relative"
          >
            {item.icon}

            {/* Hover Expansion Tooltip to the left */}
            <span className="hidden group-hover:flex items-center gap-1.5 absolute right-12 px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-[11px] font-mono text-white whitespace-nowrap shadow-2xl pointer-events-none transition-all duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent"></span>
              <span>{item.name}</span>
            </span>
          </a>
        ))}
      </div>

      {/* Decorative vertical track line with indicator */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-1 h-8 rounded-full bg-dark-border"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-crimson-accent animate-pulse"></span>
      </div>
    </aside>
  );
}
