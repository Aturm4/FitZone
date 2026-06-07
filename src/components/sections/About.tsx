"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

const HIGHLIGHTS = [
  "NSCA, ACE, and NASM certified trainers on staff",
  "18,000 sq ft premium training facility",
  "Recovery lounge with infrared sauna & cold plunge",
  "Monthly body composition tracking available",
  "Free nutritional assessment for all members",
];

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl lg:text-6xl text-brand-500 leading-none mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export function About() {
  useScrollAnimations();

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#040406] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image side */}
          <div className="animate-on-scroll from-left relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=85"
                alt="FitZone training facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-brand-500 rounded-2xl p-5 shadow-xl shadow-brand-500/30">
              <div className="font-display text-4xl text-white leading-none">
                10+
              </div>
              <div className="text-white/80 text-xs font-medium mt-1">
                Years of Excellence
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-brand-500/40 rounded-tl-lg" />
          </div>

          {/* Text side */}
          <div className="animate-on-scroll from-right lg:pl-4">
            <span className="accent-line block" />
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-6 leading-none">
              MORE THAN
              <br />
              <span className="text-gradient">A GYM.</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-4">
              Founded in 2014 by competitive athletes frustrated with mediocre
              facilities, FitZone was built from the ground up to be different.
              We invested in equipment that professionals actually use, hired
              trainers with real competitive experience, and created a culture
              where accountability and results come before anything else.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Today, over 5,000 members from weekend warriors to elite athletes
              train under our roof. Our trainers have collectively helped clients
              lose thousands of pounds, compete in their first 5Ks, qualify for
              national powerlifting meets, and simply feel like themselves again.
            </p>

            <ul className="space-y-3">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div className="animate-on-scroll bg-dark-800 border border-white/5 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={5000} suffix="+" label="Active Members" />
            <StatCounter value={25} suffix="" label="Expert Trainers" />
            <StatCounter value={10} suffix="" label="Years Experience" />
            <StatCounter value={98} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </div>
    </section>
  );
}
