"use client";

import Image from "next/image";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

const GALLERY = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    alt: "Strength training floor",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    alt: "Personal training session",
    className: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    alt: "Group fitness class",
    className: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    alt: "Cardio equipment zone",
    className: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=600&q=80",
    alt: "Free weights area",
    className: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=900&q=80",
    alt: "Recovery lounge",
    className: "col-span-2",
  },
];

export function Gallery() {
  useScrollAnimations();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#040406] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <span className="accent-line block mx-auto" />
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Facility
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white tracking-wide mb-4">
            SEE THE SPACE
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            18,000 square feet of premium training space, meticulously designed
            to fuel performance at every level.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] lg:auto-rows-[220px] animate-on-scroll">
          {GALLERY.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040406]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-sm">{img.alt}</p>
              </div>
              {/* Orange border glow on hover */}
              <div className="absolute inset-0 rounded-xl ring-2 ring-brand-500/0 group-hover:ring-brand-500/30 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
