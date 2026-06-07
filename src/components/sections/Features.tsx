"use client";

import { useEffect } from "react";
import {
  Dumbbell,
  Users,
  Apple,
  Activity,
  Clock,
  BarChart3,
} from "lucide-react";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    Icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Over 200 pieces of cutting-edge cardio and strength equipment from the world's leading brands, maintained and updated regularly.",
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-400",
  },
  {
    Icon: Users,
    title: "Certified Trainers",
    desc: "25 nationally certified personal trainers with specializations ranging from powerlifting to sports rehab and everything between.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    Icon: Apple,
    title: "Nutrition Guidance",
    desc: "Registered dietitians and certified nutrition coaches available for one-on-one consultations, meal planning, and supplement advice.",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400",
  },
  {
    Icon: Activity,
    title: "Group Classes",
    desc: "40+ weekly classes spanning HIIT, yoga, spin, boxing, pilates, and more — designed for every fitness level and schedule.",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    Icon: Clock,
    title: "24/7 Access",
    desc: "Pro and Elite members never have to plan around our schedule. Your goals do not wait for business hours, and neither should you.",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
  },
  {
    Icon: BarChart3,
    title: "Personalized Programs",
    desc: "Science-backed, individually tailored training programs built around your goals, body composition, fitness level, and lifestyle.",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
  },
];

export function Features() {
  useScrollAnimations();

  return (
    <section id="features" className="py-24 lg:py-32 bg-dark-900 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Why FitZone
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            EVERYTHING YOU NEED
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We have built a complete ecosystem for your transformation — not
            just a gym, but a total performance environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`animate-on-scroll card-hover bg-dark-800 border border-white/5 rounded-2xl p-7 group cursor-default delay-${(i % 3) * 100 + 100}`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.Icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-500/60 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
