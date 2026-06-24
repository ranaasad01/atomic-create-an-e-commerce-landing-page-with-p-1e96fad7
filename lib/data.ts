export const APP_NAME = "Lumière";
export const APP_TAGLINE = "Curated for the way you live.";
export const APP_ACCENT = "indigo-600";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#products" },
  { label: "Collections", href: "#collections" },
  { label: "Sale", href: "#sale" },
  { label: "About", href: "#about" },
];

export const navCTA = {
  label: "Shop Now",
  href: "#products",
};

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
}

export type CartItem = Product & { quantity: number };

export const CATEGORIES = [
  "All",
  "Living",
  "Kitchen",
  "Bedroom",
  "Outdoor",
  "Lighting",
];