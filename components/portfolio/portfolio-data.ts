export type PortfolioCategory =
  | "Branding"
  | "Social Media"
  | "Websites"
  | "Videos"
  | "Ads"
  | "Posters"
  | "AI Content"
  | "Healthcare"
  | "Entertainment";

export interface PortfolioItem {
  id: number;
  title: string;
  client: string;
  category: PortfolioCategory;
  industry: string;
  service: string;
  description: string;
  image: string;
  video?: string;
  website?: string;
  featured?: boolean;
}

export const categories: PortfolioCategory[] = [
  "Branding",
  "Social Media",
  "Websites",
  "Videos",
  "Ads",
  "Posters",
  "AI Content",
  "Healthcare",
  "Entertainment",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Healthcare Digital Growth",
    client: "Aashara Hospital",
    category: "Healthcare",
    industry: "Healthcare",
    service: "Social Media & Digital Growth",
    description:
      "Built a premium digital presence with engaging healthcare content and performance-focused campaigns.",
    image: "/portfolio/aashara.jpg",
    video: "/videos/Dental_Video.mp4",
    website: "https://aasharahospitals.com",
    featured: true,
  },

  {
    id: 2,
    title: "Creative YouTube Production",
    client: "Color Pencil",
    category: "Videos",
    industry: "Entertainment",
    service: "Creative Production",
    description:
      "Produced engaging YouTube content with premium editing and creative storytelling.",
    image: "/portfolio/color-pencil.jpg",
    video: "/videos/Thailand_part_2.mp4",
    featured: true,
  },

  {
    id: 3,
    title: "Comic Creative Execution",
    client: "Pratilipi Comics",
    category: "Entertainment",
    industry: "Entertainment",
    service: "Creative Design",
    description:
      "Designed visually engaging comic creatives for digital storytelling campaigns.",
    image: "/portfolio/pratilipi.jpg",
  },

  {
    id: 4,
    title: "School Branding",
    client: "Little Feet Play School",
    category: "Social Media",
    industry: "Education",
    service: "Website & Social Media",
    description:
      "Created a cheerful and professional online presence for a growing educational institution.",
    image: "/portfolio/little-feet.jpg",
  },

  {
    id: 5,
    title: "Campaign Creative Direction",
    client: "Langhar Rice",
    category: "Ads",
    industry: "Food & Beverage",
    service: "Advertising",
    description:
      "Developed campaign creatives that improved product visibility across digital platforms.",
    image: "/portfolio/langhar.jpg",
    website: "https://langharrice.com",
    featured: true,
  },

  {
    id: 6,
    title: "Website Support",
    client: "Lara",
    category: "Websites",
    industry: "Corporate",
    service: "Website Development",
    description:
      "Designed and maintained a modern business website focused on usability and performance.",
    image: "/portfolio/lara.jpg",
  },

  {
    id: 7,
    title: "Business Website",
    client: "Souvik Website Project",
    category: "Websites",
    industry: "Corporate",
    service: "Website Design",
    description:
      "Designed a responsive website with premium UI and optimized user experience.",
    image: "/portfolio/souvik.jpg",
  },

  {
    id: 8,
    title: "Professional Video Editing",
    client: "Evolve Media",
    category: "Videos",
    industry: "Media",
    service: "Video Editing",
    description:
      "Delivered high-quality video editing solutions for commercial and digital media projects.",
    image: "/portfolio/evolve.jpg",
    video: "/videos/Next_Stop.mp4",
  },
  {
    id: 9,
    title: "Admission Campaign Posters",
    client: "Little Feet Academy",
    category: "Posters",
    industry: "Education",
    service: "Creative Poster Design",
    description:
      "High-conversion, playful promotional poster sets and flyers designed for admission season campaigns.",
    image: "/images/portfolio/sipcode.jpg",
    featured: true,
  },
  {
    id: 10,
    title: "Promotional Film & Reels",
    client: "Cinema Kichdy",
    category: "Videos",
    industry: "Entertainment",
    service: "Cinematic Editing",
    description:
      "Produced cinematic short-form promotional films and engaging digital video packages.",
    image: "/images/portfolio/cinema-kichdy.jpg",
    video: "/videos/Amma_Naana_Reels.mp4",
  },
  {
    id: 11,
    title: "Broadcast Poster Creatives",
    client: "San TV Network",
    category: "Posters",
    industry: "Media",
    service: "Print & Digital Posters",
    description:
      "Designed dynamic television show key art and social promotional posters for prime broadcast releases.",
    image: "/images/portfolio/suntv.jpg",
    featured: true,
  },
  {
    id: 12,
    title: "Commercial 4K Video Production",
    client: "Prime Studio VFX",
    category: "Videos",
    industry: "Media",
    service: "Motion & Color Grading",
    description:
      "End-to-end video production including sound design, visual effects, color grading, and commercial mastering.",
    image: "/images/portfolio/videos-preview.jpg",
    featured: true,
  },
];
