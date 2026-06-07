import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Trainers } from "@/components/sections/Trainers";
import { Membership } from "@/components/sections/Membership";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Trainers />
      <Membership />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
