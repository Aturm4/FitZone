"use client";

import { Check, Zap } from "lucide-react";
import { PLANS } from "@/lib/data";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

export function Membership() {
  useScrollAnimations();

  return (
    <section id="membership" className="py-24 lg:py-32 bg-[#040406] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No contracts. No joining fees. Cancel anytime. Just pick the level
            that matches your ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={`animate-on-scroll relative rounded-2xl flex flex-col delay-${i * 150 + 100} ${
                plan.highlighted
                  ? "bg-gradient-to-b from-brand-600/30 to-brand-900/20 border-2 border-brand-500/60 shadow-2xl shadow-brand-500/20 scale-105"
                  : "bg-dark-800 border border-white/5"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-brand-500/30">
                  <Zap className="w-3 h-3 fill-white" />
                  {plan.badge}
                </div>
              )}

              <div className="p-7 lg:p-8 flex flex-col h-full">
                {/* Plan name */}
                <div className="mb-6">
                  <h3
                    className={`font-display text-3xl tracking-wider mb-1 ${
                      plan.highlighted ? "text-brand-400" : "text-white/70"
                    }`}
                  >
                    {plan.name.toUpperCase()}
                  </h3>
                  <p className="text-white/40 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-7 flex items-end gap-2">
                  <span className="font-display text-6xl text-white leading-none">
                    ${plan.price}
                  </span>
                  <span className="text-white/40 text-sm mb-2">
                    /{plan.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="section-divider mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlighted
                            ? "text-brand-400"
                            : "text-white/40"
                        }`}
                      />
                      <span className="text-white/65 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200 ${
                    plan.highlighted
                      ? "btn-primary"
                      : "border border-white/10 text-white/50 hover:border-brand-500/40 hover:text-brand-400"
                  }`}
                >
                  Get Started — {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <p className="text-center text-white/30 text-sm mt-8 animate-on-scroll">
          All plans include a{" "}
          <span className="text-brand-400">30-day money-back guarantee</span> if
          you are not completely satisfied.
        </p>
      </div>
    </section>
  );
}
