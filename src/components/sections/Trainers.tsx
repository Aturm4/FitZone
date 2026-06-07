"use client";

import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";
import { TRAINERS } from "@/lib/data";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

export function Trainers() {
  useScrollAnimations();

  return (
    <section id="trainers" className="py-24 lg:py-32 bg-dark-900 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 animate-on-scroll">
          <div>
            <span className="accent-line block" />
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide leading-none">
              MEET THE
              <br />
              <span className="text-gradient">EXPERTS</span>
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-md lg:text-right">
            Every FitZone trainer is hand-selected for technical expertise,
            real-world competitive experience, and the ability to genuinely
            connect with and motivate our members.
          </p>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer, i) => (
            <div
              key={trainer.id}
              className={`animate-on-scroll group relative bg-dark-800 border border-white/5 rounded-2xl overflow-hidden cursor-pointer delay-${i * 100 + 100}`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {trainer.name}
                    </h3>
                    <p className="text-brand-400 text-sm font-medium mt-0.5">
                      {trainer.specialty}
                    </p>
                  </div>
                  <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-500 hover:border-brand-500/40 transition-all flex-shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-white/45 text-xs leading-relaxed mb-4">
                  {trainer.bio}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/30 text-xs uppercase tracking-wider">
                      Experience
                    </span>
                    <div className="text-white/70 text-sm font-medium">
                      {trainer.experience}
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors group/link">
                    Book Session
                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-brand-500/10 text-brand-400/80 px-2 py-0.5 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
