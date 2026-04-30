'use client';

import React, { useEffect, useRef } from 'react';

export const UniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 1);

    let rafId: number;
    let particles: Particle[] = [];
    let frameCount = 0;

    class Particle {
      x: number; y: number;
      size: number;
      vx: number; vy: number;
      opacity: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 2 + 0.4;
        const spd = isMobile ? 0.05 : 0.11;
        this.vx = (Math.random() - 0.5) * spd;
        this.vy = (Math.random() - 0.5) * spd;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.color = Math.random() > 0.5 ? '#15156B' : '#05D89C';
      }

      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x > w) this.x = 0;
        else if (this.x < 0) this.x = w;
        if (this.y > h) this.y = 0;
        else if (this.y < 0) this.y = h;
      }

      draw(c: CanvasRenderingContext2D) {
        c.fillStyle = this.color;
        c.globalAlpha = this.opacity;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
      }
    }

    const drawLines = () => {
      const THRESH = 110;
      const THRESH_SQ = THRESH * THRESH;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < THRESH_SQ) {
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - Math.sqrt(dSq) / THRESH) * 0.1;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const init = (w: number, h: number) => {
      particles = [];
      const density = isMobile ? 15000 : 8000;
      const count = Math.min(Math.floor((w * h) / density), isMobile ? 35 : 110);
      for (let i = 0; i < count; i++) particles.push(new Particle(w, h));
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      if (dpr !== 1) ctx.scale(dpr, dpr);
      init(w, h);
    };

    const animate = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      frameCount++;

      if (isMobile && frameCount % 2 !== 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      for (const p of particles) { p.update(w, h); p.draw(ctx); }
      ctx.globalAlpha = 1;
      if (!isMobile) drawLines();

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none opacity-35"
    />
  );
};
