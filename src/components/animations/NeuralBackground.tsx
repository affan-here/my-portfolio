"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

interface NodePoint {
  x: number;
  y: number;
  originX: number;
  originY: number;
  radius: number;
  alpha: number;
  vx: number;
  vy: number;
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate neural nodes based on screen size
    const nodeCount = Math.floor((width * height) / 32000);
    const nodes: NodePoint[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    // Animate node pulses with Anime.js v4
    const pulseObj = { glow: 0.15 };
    const animeInstance = animate(pulseObj, {
      glow: [0.12, 0.35],
      alternate: true,
      loop: true,
      ease: "inOutSine",
      duration: 3500,
    });

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting synaptic lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        // Bounce off edges gently
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * pulseObj.glow;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 43, 78, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw neural nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 43, 78, ${node.alpha * 1.5})`;
        ctx.shadowColor = "#ff2b4e";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      animeInstance.pause();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
    />
  );
}
