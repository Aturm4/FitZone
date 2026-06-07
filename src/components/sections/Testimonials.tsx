"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

export function Testimonials() {
  useScrollAnimations();

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-brand-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            REAL RESULTS,
            <br />
            <span className="text-gradient">REAL PEOPLE</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`animate-on-scroll card-hover bg-dark-800 border border-white/5 rounded-2xl p-7 flex flex-col delay-${i * 150 + 100}`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-brand-400 fill-brand-400"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-500/20 mb-3" />

              {/* Content */}
              <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-500/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                  <div className="text-brand-500/60 text-xs mt-0.5">{t.since}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-white/40 text-sm mb-4">
            Join thousands of members who have already transformed their lives
          </p>
          <button
            className="btn-primary"
            onClick={() =>
              document
                .querySelector("#membership")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
