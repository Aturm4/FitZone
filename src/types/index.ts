export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
  certifications: string[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  since: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: string;
}
