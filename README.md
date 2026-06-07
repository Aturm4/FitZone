# FitZone — Premium Fitness Gym Landing Page

A complete, production-ready Next.js landing page for a premium fitness gym brand. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash (via next/image with remote patterns)
- **Fonts**: Bebas Neue (display) + DM Sans (body)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
fitzone/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, CSS variables, utility classes
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main page assembling all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │   │   └── Footer.tsx       # Footer with links & social icons
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero with animated headline
│   │       ├── Features.tsx     # 6 feature cards grid
│   │       ├── About.tsx        # About + animated stats counters
│   │       ├── Trainers.tsx     # 4 trainer profile cards
│   │       ├── Membership.tsx   # 3-tier pricing plans
│   │       ├── Testimonials.tsx # 3 customer reviews
│   │       ├── Gallery.tsx      # Masonry image gallery
│   │       ├── FAQ.tsx          # Accordion FAQ
│   │       └── Contact.tsx      # Contact form + info + map
│   ├── hooks/
│   │   ├── useScrollAnimation.ts  # Intersection Observer animations
│   │   └── useCounter.ts          # Animated number counter
│   ├── lib/
│   │   └── data.ts              # All content data (trainers, plans, etc.)
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── public/                      # Static assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Design System

| Token | Value |
|-------|-------|
| Primary Accent | `#f97316` (Orange 500) |
| Background Primary | `#040406` |
| Background Secondary | `#09090f` |
| Card Background | `#0f0f1a` |
| Display Font | Bebas Neue |
| Body Font | DM Sans |

## Sections

1. **Hero** — Full-screen with background image, animated headline, CTAs, and quick stats
2. **Features** — 6 feature cards with icons and hover effects
3. **About** — Story + animated counter stats (5000+ members, 25 trainers, etc.)
4. **Trainers** — 4 trainer cards with photos, specialties, and certifications
5. **Membership** — 3 pricing tiers (Basic $39/Pro $79/Elite $149) with highlighted Pro plan
6. **Testimonials** — 3 star-rated customer reviews
7. **Gallery** — Responsive masonry grid with hover effects
8. **FAQ** — Accordion with 7 questions
9. **Contact** — Form with validation + contact info + map placeholder
10. **Footer** — Links, social icons, copyright

## Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
