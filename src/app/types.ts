import { LucideIcon } from "lucide-react";

export type Page = "home" | "about" | "contact" | "construction";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  badge: string | null;
  img: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}
