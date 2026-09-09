export interface Story {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export const storyData: Story[] = [
  {
    id: 1,
    number: "01",
    title: "Strategy",
    subtitle: "Everything starts with understanding.",
    description:
      "We dive deep into your business, audience, competitors, and goals before creating anything. Strong strategy creates brands that last.",
    image: "/images/why/strategy.webp",
  },
  {
    id: 2,
    number: "02",
    title: "Design",
    subtitle: "Designed to impress. Built to convert.",
    description:
      "Every interaction is carefully crafted to build trust, elevate perception, and guide users toward meaningful action.",
    image: "/images/why/design.webp",
    reverse: true,
  },
  {
    id: 3,
    number: "03",
    title: "Technology",
    subtitle: "Modern engineering with future-ready architecture.",
    description:
      "From lightning-fast websites to scalable digital platforms, we build products that perform today and grow tomorrow.",
    image: "/images/why/technology.webp",
  },
  {
    id: 4,
    number: "04",
    title: "Growth",
    subtitle: "Your launch is only the beginning.",
    description:
      "Branding, SEO, content, AI automation, and performance marketing work together to create sustainable business growth.",
    image: "/images/why/growth.webp",
    reverse: true,
  },
];