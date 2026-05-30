export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  iconName: string; // Dynamic icon rendering matching Lucide icon names
  duration: string;
  price: string;
  suitedFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'coaching' | 'logistics' | 'pricing';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
}

export interface Booking {
  name: string;
  email: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  message: string;
}
