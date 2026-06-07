import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitZone — Transform Your Body. Transform Your Life.",
  description:
    "FitZone is a premium fitness gym offering state-of-the-art equipment, certified personal trainers, nutrition guidance, and 24/7 access. Join 5,000+ members who have transformed their lives.",
  keywords: "gym, fitness, personal training, workout, health, FitZone",
  openGraph: {
    title: "FitZone — Transform Your Body. Transform Your Life.",
    description:
      "Premium fitness gym with certified trainers and state-of-the-art equipment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
