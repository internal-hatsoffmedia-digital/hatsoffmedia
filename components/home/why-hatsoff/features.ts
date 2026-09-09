import {
  Lightbulb,
  Palette,
  Globe,
  TrendingUp,
} from "lucide-react";

export interface Feature {
  id: number;
  icon: typeof Lightbulb;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Strategy First",
    description:
      "Every project begins with research, planning, and a clear business strategy.",
  },
  {
    id: 2,
    icon: Palette,
    title: "Creative Design",
    description:
      "Beautiful visual experiences crafted to leave a lasting impression.",
  },
  {
    id: 3,
    icon: Globe,
    title: "Modern Development",
    description:
      "Fast, scalable, and SEO-friendly websites built with the latest technologies.",
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "We build digital experiences that help businesses attract, engage, and convert customers.",
  },
];