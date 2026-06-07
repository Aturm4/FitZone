"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  useScrollAnimations();

  return (
    <section id="faq" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-brand-500/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            COMMON QUESTIONS
          </h2>
          <p className="text-white/50 text-lg">
            Everything you need to know before joining. Still have questions?{" "}
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-brand-400 hover:text-brand-300 underline underline-offset-2"
            >
              Contact us.
            </button>
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 animate-on-scroll">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-brand-500/30 bg-dark-800"
                    : "border-white/5 bg-dark-800/50 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span
                    className={`font-medium text-base transition-colors ${
                      isOpen ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "bg-brand-500 text-white"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-white/55 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
