"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

const CONTACT_INFO = [
  {
    Icon: MapPin,
    label: "Address",
    value: "1847 Athletic Drive, Suite 100\nDowntown District, NY 10001",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-FITZONE",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "hello@fitzone.com",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Staff: Mon–Fri 6am–9pm\nWeekends: 7am–7pm\nMembers: 24/7",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useScrollAnimations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#040406] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            START YOUR
            <br />
            <span className="text-gradient">JOURNEY TODAY</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Have a question or ready to sign up? Reach out and one of our team
            members will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info + Map */}
          <div className="animate-on-scroll from-left space-y-6">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_INFO.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-dark-800 border border-white/5 rounded-xl p-5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-brand-500/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-brand-400" />
                    </div>
                    <span className="text-white/40 text-xs uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm whitespace-pre-line leading-relaxed">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-dark-800 border border-white/5 rounded-xl overflow-hidden h-64 relative">
              {/* Styled map placeholder */}
              <div className="absolute inset-0 bg-dark-700 bg-grid opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/40 mb-3 animate-pulse-slow">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/50 text-sm">
                  1847 Athletic Drive, NY 10001
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-400 text-xs mt-2 hover:text-brand-300 underline underline-offset-2"
                >
                  Open in Google Maps →
                </a>
              </div>
              {/* Grid lines decoration */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-white/5"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 border-l border-white/5"
                  style={{ left: `${(i + 1) * 16.67}%` }}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll from-right">
            <div className="bg-dark-800 border border-white/5 rounded-2xl p-7 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-500 mb-4" />
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out. A team member will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-semibold text-xl mb-6">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="John Smith"
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-500/50 focus:bg-dark-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@email.com"
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-500/50 focus:bg-dark-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-500/50 focus:bg-dark-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                        I&apos;m Interested In
                      </label>
                      <select
                        value={formState.interest}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            interest: e.target.value,
                          })
                        }
                        className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-brand-500/50 focus:bg-dark-600 transition-colors"
                      >
                        <option value="" className="bg-dark-700">
                          Select option...
                        </option>
                        <option value="membership" className="bg-dark-700">
                          Membership
                        </option>
                        <option value="training" className="bg-dark-700">
                          Personal Training
                        </option>
                        <option value="classes" className="bg-dark-700">
                          Group Classes
                        </option>
                        <option value="nutrition" className="bg-dark-700">
                          Nutrition Coaching
                        </option>
                        <option value="other" className="bg-dark-700">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell us about your goals or ask us anything..."
                      className="w-full bg-dark-700 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-500/50 focus:bg-dark-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
