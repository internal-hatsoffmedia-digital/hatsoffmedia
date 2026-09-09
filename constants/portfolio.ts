export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export const CATEGORIES = ["All", "Branding", "Websites", "Marketing", "Video"] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Apex Strategy",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Complete identity design & brand strategy for a luxury tech firm.",
    link: "/portfolio/apex-strategy",
  },
  {
    id: "2",
    title: "NextGen E-Commerce",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "High-conversion Next.js e-commerce application.",
    link: "/portfolio/nextgen-ecommerce",
  },
  {
    id: "3",
    title: "Vanguard Growth",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    description: "Omnichannel digital marketing campaign yielding 140% ROI.",
    link: "/portfolio/vanguard-growth",
  },
  {
    id: "4",
    title: "Aura Cinematic Showcase",
    category: "Video",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    description: "4K commercial video production for product release.",
    link: "/portfolio/aura-cinematic",
  },
];