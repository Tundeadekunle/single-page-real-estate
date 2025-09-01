// src/types/index.ts
export interface Property {
  id: number;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}