export interface BotAction {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface BotResponse {
  answer: string;
  suggestions?: string[];
  actions?: BotAction[];
}

export interface FaqItem {
  keywords: string[];
  intent: string;
  response: BotResponse;
}

export const STARTER_SUGGESTIONS = [
  "What services does Hatsoff offer?",
  "Tell me about your retainers & packages",
  "How much does web design or branding cost?",
  "Where is your office in Chennai?",
  "How do I start a project with Hatsoff?",
];

export const HATSOFF_FAQS: FaqItem[] = [
  // Greetings
  {
    intent: "greeting",
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "greetings", "start", "help", "who are you"],
    response: {
      answer: `Hello! 👋 I'm **Hatty**, your personal guide to Hatsoff Media.\n\nWe are a premier creative advertising and digital marketing agency based in Chennai, India. I can help you with:\n\n• **Services**: Branding, UI/UX Web Design, Performance Marketing, Social Media & AI Video.\n• **Retainers & Packages**: Predictable monthly creative scale.\n• **Pricing & Timelines**: Customized quotes and project kickoff.\n• **Office & Contact**: Direct access to our strategy leads.\n\nWhat can I help you discover today?`,
      suggestions: [
        "What services does Hatsoff offer?",
        "Tell me about your retainers & packages",
        "How do I start a project?",
      ],
    },
  },

  // Services Overview
  {
    intent: "services_overview",
    keywords: ["services", "what do you do", "what you do", "offer", "solutions", "capabilities", "what does hatsoff offer"],
    response: {
      answer: `Hatsoff Media provides end-to-end creative and digital growth services tailored for high-growth brands:\n\n1. **Brand Identity & Strategy**: Distinct visual systems, logos, typography, brand guidelines, and positioning.\n2. **UI/UX & Web Development**: High-conversion Next.js/React websites, modern interactive animations, and responsive digital products.\n3. **Performance Marketing**: Google, Meta & LinkedIn ad campaigns with laser-targeted ROI and transparent reporting.\n4. **Social Media & Content**: Daily creative storytelling, viral reels, community building, and influencer collaborations.\n5. **AI-Driven Creative Production**: Rapid concept generation, high-fidelity visual assets, and dynamic motion graphics.`,
      suggestions: [
        "Tell me about your retainers & packages",
        "How much does a website cost?",
        "See your portfolio work",
      ],
      actions: [
        { label: "Explore All Services", href: "/services" },
        { label: "View Portfolio", href: "/portfolio" },
      ],
    },
  },

  // Packages & Retainers
  {
    intent: "packages",
    keywords: ["package", "packages", "pricing", "cost", "retainer", "retainers", "plans", "rates", "monthly", "fee", "budget"],
    response: {
      answer: `We offer **4 strategic creative packages** designed around your growth stage with zero long-term lock-in:\n\n• **Business Starter**: Essential branding, visual identity, foundational social creative, and starter web setup.\n• **Social Media Growth**: Dedicated monthly content creation, high-impact reels, graphic design, and audience engagement.\n• **Digital Growth (Most Popular)**: Full multi-channel scale, performance ad creative, weekly analytics, and website optimization.\n• **Premium Partner**: Comprehensive dedicated creative team, rapid on-demand execution, executive creative direction, and custom AI production.\n\nAll packages include dedicated project managers and weekly milestones.`,
      suggestions: [
        "How do I start a project?",
        "Can we get a custom package?",
        "Chat with our team on WhatsApp",
      ],
      actions: [
        { label: "View Package Details", href: "/packages" },
        { label: "Request Custom Proposal", href: "/contact" },
      ],
    },
  },

  // Web Design & Development
  {
    intent: "web_design",
    keywords: ["website", "web design", "web development", "nextjs", "react", "frontend", "ecommerce", "ui", "ux", "landing page"],
    response: {
      answer: `Our Web Design & Engineering team builds award-caliber digital experiences:\n\n• **High Performance**: Built with modern frameworks (Next.js, React, Tailwind CSS) for sub-second load times and 100/100 Lighthouse performance.\n• **Bespoke Aesthetics**: Custom micro-interactions, smooth scroll physics, and responsive layouts tailored to your brand identity.\n• **Conversion Optimized**: Strategic copy placement, frictionless user flows, and SEO foundations built directly into the codebase.\n• **Turnaround**: Standard landing pages take **7–14 days**, while full corporate platforms take **3–5 weeks**.`,
      suggestions: [
        "What packages do you offer?",
        "How do we kick off web development?",
      ],
      actions: [
        { label: "See Web Design Services", href: "/services" },
        { label: "Start Web Project", href: "/contact" },
      ],
    },
  },

  // Branding & Identity
  {
    intent: "branding",
    keywords: ["brand", "branding", "logo", "identity", "guidelines", "typography", "colors", "rebranding"],
    response: {
      answer: `A great brand identity makes your business unforgettable. Our branding process covers:\n\n• **Strategic Positioning**: Discovery sessions to define your brand core, mission, tone of voice, and competitive edge.\n• **Visual Identity System**: Logo design, dynamic variations, color psychology palette, and typography system.\n• **Brand Guidelines Book**: Comprehensive PDF covering rules for print, digital, packaging, and social assets.\n• **Collateral Design**: Business cards, stationery, pitch decks, and digital banners ready for launch.`,
      suggestions: [
        "What services does Hatsoff offer?",
        "How much does branding cost?",
      ],
      actions: [
        { label: "View Portfolio Work", href: "/portfolio" },
        { label: "Book a Discovery Call", href: "/contact" },
      ],
    },
  },

  // Performance Marketing & Social Media
  {
    intent: "marketing",
    keywords: ["marketing", "ads", "seo", "social media", "instagram", "meta ads", "google ads", "growth", "lead generation", "traffic"],
    response: {
      answer: `We deliver full-funnel digital marketing focused on measurable revenue, not just vanity metrics:\n\n• **Targeted Paid Advertising**: High-converting Meta (Instagram & Facebook), Google Search, YouTube, and LinkedIn campaigns.\n• **Organic Social Authority**: Engaging content calendars, trend-jacking reels, carousels, and community management.\n• **Lead Generation**: Conversion rate optimization (CRO), landing page A/B testing, and automated lead routing.\n• **Transparent Reporting**: Real-time dashboards with cost-per-lead (CPL), customer acquisition cost (CAC), and ROAS tracking.`,
      suggestions: [
        "What packages do you offer?",
        "Talk to a growth strategist",
      ],
      actions: [
        { label: "Explore Services", href: "/services" },
        { label: "Schedule Strategy Call", href: "/contact" },
      ],
    },
  },

  // Office Location & Operating Hours
  {
    intent: "location",
    keywords: ["office", "location", "address", "where", "chennai", "hours", "timing", "visit", "directions"],
    response: {
      answer: `Hatsoff Media is headquartered in Chennai, India:\n\n📍 **Location**: Chennai, Tamil Nadu, India\n⏰ **Operating Hours**: Monday to Saturday, 09:30 AM – 06:30 PM IST\n☕ **Visits**: We welcome prospective clients for in-person strategy sessions by appointment.\n🌍 **Global Reach**: In addition to our India-based clients, we actively partner with brands across the US, UK, Middle East, and Southeast Asia.`,
      suggestions: [
        "What is your phone number?",
        "Email the team directly",
      ],
      actions: [
        { label: "View Map & Contact Details", href: "/contact" },
        { label: "Chat on WhatsApp", href: "https://wa.me/918925881695", isExternal: true },
      ],
    },
  },

  // Contact Details & Phone/Email
  {
    intent: "contact_info",
    keywords: ["phone", "contact", "email", "call", "whatsapp", "number", "talk", "reach", "inquiry"],
    response: {
      answer: `You can reach the Hatsoff Media team directly through any of these channels:\n\n• 📧 **Email**: [contact@hatsoffmedia.in](mailto:contact@hatsoffmedia.in)\n• 📱 **WhatsApp / Call**: [+91 89258 81695](tel:+918925881695)\n• 📍 **Headquarters**: Chennai, India\n• 💬 **Social Media**: Follow us on Instagram, LinkedIn, YouTube & Facebook.\n\nOur team typically responds within **2 hours** during business hours.`,
      suggestions: [
        "How do I start a project with Hatsoff?",
        "What packages do you offer?",
      ],
      actions: [
        { label: "Open Contact Form", href: "/contact" },
        { label: "Message on WhatsApp", href: "https://wa.me/918925881695", isExternal: true },
      ],
    },
  },

  // Project Kickoff & Workflow
  {
    intent: "kickoff",
    keywords: ["start", "kickoff", "workflow", "process", "how it works", "begin", "hire", "onboarding"],
    response: {
      answer: `Starting a project with Hatsoff Media is seamless and transparent:\n\n1. **Discovery & Goal Alignment**: We review your business objectives, target audience, and project scope.\n2. **Tailored Proposal**: Within 24–48 hours, you receive a clear scope, milestone timeline, and transparent pricing.\n3. **Kickoff & Strategy**: Meet your dedicated account lead and design sprint team.\n4. **Execution & Feedback**: Structured weekly reviews with live previews and collaborative iterations.\n5. **Launch & Scale**: Final QA, live rollout, and ongoing post-launch analytics.`,
      suggestions: [
        "View packages & retainers",
        "Book a free strategy session",
      ],
      actions: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Explore Packages", href: "/packages" },
      ],
    },
  },

  // Turnaround Time & Deliverables
  {
    intent: "timeline",
    keywords: ["timeline", "turnaround", "how long", "time", "speed", "deadline", "fast"],
    response: {
      answer: `We pride ourselves on 100% on-time delivery with predictable turnaround schedules:\n\n• **Brand Identity & Guidelines**: 10–14 business days\n• **High-Impact Landing Page**: 7–10 business days\n• **Full Corporate Website**: 3–5 weeks\n• **Monthly Social Media Creative**: Delivered in 2-week advance content batches\n• **Performance Ad Campaigns**: Setup & live within 3–5 days after creative approval.`,
      suggestions: [
        "What packages do you offer?",
        "Start a project today",
      ],
      actions: [
        { label: "View Our Services", href: "/services" },
        { label: "Discuss Your Deadline", href: "/contact" },
      ],
    },
  },
];

export function getBotResponse(userMessage: string): BotResponse {
  const query = userMessage.toLowerCase().trim();

  // Direct exact/partial keyword match scoring
  let bestMatch: FaqItem | null = null;
  let highestScore = 0;

  for (const faq of HATSOFF_FAQS) {
    let score = 0;
    for (const keyword of faq.keywords) {
      if (query === keyword) {
        score += 10;
      } else if (query.includes(keyword)) {
        score += keyword.length > 4 ? 4 : 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = faq;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch.response;
  }

  // Fallback intelligent response
  return {
    answer: `Thanks for asking! While I might not have a pre-written answer for that exact phrasing, Hatsoff Media specializes in comprehensive **Branding**, **Web Development**, **Social Media**, and **Performance Marketing**.\n\nYou can speak directly with our founders and senior strategists for tailored advice regarding your specific goals.`,
    suggestions: [
      "What services does Hatsoff offer?",
      "Tell me about your retainers & packages",
      "Connect on WhatsApp with our team",
    ],
    actions: [
      { label: "Message on WhatsApp", href: "https://wa.me/918925881695", isExternal: true },
      { label: "Submit an Inquiry", href: "/contact" },
    ],
  };
}
