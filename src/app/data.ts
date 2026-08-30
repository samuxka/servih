import { Shield, Truck, BadgeCheck } from "lucide-react";
import { Product, Feature } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Travesseiro",
    category: "Quarto",
    price: "200",
    badge: "Mais vendido",
    img: "https://res.cloudinary.com/dtxa1leih/image/upload/v1787693398/travesseiro_gbg9gv.png",
    description: "Perfeito para melhorar a qualidade do seu sono.",
  },
];

export const CATEGORIES = ["Todos", "Organização", "Decoração", "Cama, Mesa e Banho"];

export const FEATURES: Feature[] = [
  {
    icon: BadgeCheck,
    title: "Materiais de qualidade",
    desc: "Todos os nossos produtos são fabricados com materiais de alta qualidade.",
  },
  {
    icon: Shield,
    title: "Segurança em primeiro lugar",
    desc: "Nossos produtos são projetados com a segurança do usuário em mente, garantindo uma experiência confiável.",
  },
  {
    icon: Truck,
    title: "Entrega grátis & devoluções",
    desc: "Nos orgulhamos de oferecer frete grátis e devoluções fáceis para todos os pedidos.",
  },
];
