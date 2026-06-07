"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const words = headlineRef.current?.querySelectorAll(".word");
    words?.forEach((word, i) => {
      (word as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      (word as HTMLElement).style.opacity = "0";
      (word as HTMLElement).classList.add("animate-fade-up");
      setTimeout(() => {
        (word as HTMLElement).style.opacity = "1";
      }, i * 80);
    });
  }, []);

  const scrollToMembership = () => {
    document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="FitZone gym hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040406] via-[#040406]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040406] via-transparent to-[#040406]/40" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-20 z-[1]" />

      {/* Orange accent glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse-slow" />
            <span className="text-brand-400 text-sm font-medium tracking-wide">
              Now Open 24/7 — All Plans
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wide text-white mb-6"
          >
            <div className="overflow-hidden">
              <span
                className="word inline-block"
                style={{
                  animation: "fadeUp 0.7s ease-out forwards",
                  animationDelay: "0.1s",
                  opacity: 0,
                }}
              >
                TRANSFORM
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="word inline-block text-gradient"
                style={{
                  animation: "fadeUp 0.7s ease-out forwards",
                  animationDelay: "0.25s",
                  opacity: 0,
                }}
              >
                YOUR BODY.
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="word inline-block"
                style={{
                  animation: "fadeUp 0.7s ease-out forwards",
                  animationDelay: "0.4s",
                  opacity: 0,
                }}
              >
                TRANSFORM
              </span>
            </div>
            <div className="overflow-hidden">
              <span
                className="word inline-block text-white/40"
                style={{
                  animation: "fadeUp 0.7s ease-out forwards",
                  animationDelay: "0.55s",
                  opacity: 0,
                }}
              >
                YOUR LIFE.
              </span>
            </div>
          </h1>

          {/* Subtext */}
          <p
            className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
            style={{
              animation: "fadeUp 0.7s ease-out forwards",
              animationDelay: "0.7s",
              opacity: 0,
            }}
          >
            Elite coaching. World-class equipment. A community that pushes you
            further than you thought possible. Your transformation starts the
            moment you walk through our doors.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              animation: "fadeUp 0.7s ease-out forwards",
              animationDelay: "0.85s",
              opacity: 0,
            }}
          >
            <button
              onClick={scrollToMembership}
              className="btn-primary flex items-center gap-2 group"
            >
              Start Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-500/50 transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="text-sm font-medium tracking-wide">
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Quick Stats */}
          <div
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            style={{
              animation: "fadeUp 0.7s ease-out forwards",
              animationDelay: "1s",
              opacity: 0,
            }}
          >
            {[
              { value: "5,000+", label: "Members" },
              { value: "25", label: "Elite Trainers" },
              { value: "10 Yrs", label: "Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-brand-500 leading-none">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
