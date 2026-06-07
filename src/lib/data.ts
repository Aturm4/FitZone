import type { Trainer, Plan, Testimonial, FAQItem, GalleryImage } from "@/types";

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: "Marcus Reid",
    specialty: "Strength & Conditioning",
    bio: "Former collegiate athlete turned elite strength coach. Marcus has helped hundreds of clients build functional power and unlock athletic potential they never knew they had.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    experience: "12 Years",
    certifications: ["NSCA-CSCS", "CrossFit L3"],
  },
  {
    id: 2,
    name: "Sofia Mendez",
    specialty: "HIIT & Functional Training",
    bio: "World-class HIIT specialist and former national track athlete. Sofia designs high-intensity programs that burn fat, build endurance, and leave you energized, not destroyed.",
    image:
      "https://images.unsplash.com/photo-1609899464726-213b50257062?w=600&q=80",
    experience: "9 Years",
    certifications: ["ACE-CPT", "Precision Nutrition L2"],
  },
  {
    id: 3,
    name: "Darius Cole",
    specialty: "Bodybuilding & Hypertrophy",
    bio: "IFBB professional and physique transformation expert. Darius combines science-backed programming with motivational coaching to sculpt the body you have always envisioned.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    experience: "15 Years",
    certifications: ["NASM-CPT", "ISSA Specialist"],
  },
  {
    id: 4,
    name: "Yuki Tanaka",
    specialty: "Mobility & Mind-Body",
    bio: "Yoga master and mobility expert blending Eastern and Western training philosophies. Yuki helps clients move pain-free, recover faster, and build a resilient body from the inside out.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80",
    experience: "10 Years",
    certifications: ["RYT-500", "FRC Mobility Specialist"],
  },
];

export const PLANS: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 39,
    period: "month",
    description: "Everything you need to start your fitness journey",
    features: [
      "Full gym access (6am–10pm)",
      "Cardio & strength zones",
      "Locker room & showers",
      "Mobile app access",
      "2 guest passes per month",
      "Access to online resources",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    period: "month",
    description: "The complete package for serious athletes",
    features: [
      "24/7 unlimited gym access",
      "4 personal training sessions/month",
      "Nutrition consultation",
      "Group class unlimited access",
      "Recovery lounge & sauna",
      "Priority equipment booking",
      "Dedicated locker",
      "Bring a guest anytime",
    ],
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "elite",
    name: "Elite",
    price: 149,
    period: "month",
    description: "The ultimate performance experience",
    features: [
      "Everything in Pro",
      "8 personal training sessions/month",
      "Monthly body composition scan",
      "Custom meal & supplement plan",
      "Sports massage (2x/month)",
      "VIP lounge access",
      "Priority class booking",
      "Exclusive member events",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jordan Mitchell",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content:
      "I have been a member for two years and the transformation has been incredible. The trainers genuinely care about your progress, the equipment is always well-maintained, and the community keeps you accountable. I have lost 40 lbs and feel stronger than I did in my twenties.",
    rating: 5,
    since: "Member since 2022",
  },
  {
    id: 2,
    name: "Amara Johnson",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content:
      "FitZone completely changed my relationship with fitness. Sofia's HIIT classes are absolutely brutal in the best possible way, and the nutrition guidance I received helped me finally understand how to fuel my body properly. Best investment I have ever made in myself.",
    rating: 5,
    since: "Member since 2023",
  },
  {
    id: 3,
    name: "Carlos Rivera",
    role: "Physical Therapist",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content:
      "As a healthcare professional, I am extremely selective about gym quality and safety. FitZone exceeds every standard. The equipment is top-tier, the trainers are certified experts, and the recovery facilities are better than most sports medicine clinics. Highly recommended.",
    rating: 5,
    since: "Member since 2021",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "Is there a joining fee or contract required?",
    answer:
      "No joining fees, ever. All memberships are month-to-month — you can cancel anytime with 30 days' notice. We believe in earning your loyalty through results, not locking you into contracts.",
  },
  {
    id: 2,
    question: "What are the gym's operating hours?",
    answer:
      "Basic members have access from 6am to 10pm, 7 days a week. Pro and Elite members enjoy 24/7 keycard access, including all holidays. Our staffed hours are Monday–Friday 6am–9pm and weekends 7am–7pm.",
  },
  {
    id: 3,
    question: "Do you offer a free trial before I commit?",
    answer:
      "Absolutely. We offer a complimentary 3-day trial pass so you can explore the full facility, attend a group class, and meet our trainers before making any decision. No credit card required — just stop in or book online.",
  },
  {
    id: 4,
    question: "What equipment and facilities does FitZone have?",
    answer:
      "Our 18,000 sq ft facility features a full strength floor with free weights up to 200 lbs, 60+ cardio machines, functional training rig, turf sprint lane, recovery lounge with infrared sauna and cold plunge, private training studios, and fully-equipped changing rooms with showers and lockers.",
  },
  {
    id: 5,
    question: "Can I change or upgrade my membership plan?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your member app or by speaking with our front desk team. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
  },
  {
    id: 6,
    question: "How do personal training sessions work?",
    answer:
      "Personal training sessions are 60 minutes and conducted one-on-one with a certified trainer of your choice. Your first session includes a full fitness assessment and goal-setting consultation. Sessions must be scheduled at least 24 hours in advance and can be rescheduled with 12 hours' notice.",
  },
  {
    id: 7,
    question: "Is FitZone suitable for beginners?",
    answer:
      "100%. Every new member receives a complimentary orientation session where a trainer walks you through the facility, teaches proper form on key exercises, and helps you create a starting program. Our trainers are experienced working with all fitness levels, from first-timers to competitive athletes.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    alt: "Strength training floor",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    alt: "Personal training session",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    alt: "Group fitness class",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Cardio equipment",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=600&q=80",
    alt: "Free weights area",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80",
    alt: "Recovery lounge",
    span: "col-span-2",
  },
];
