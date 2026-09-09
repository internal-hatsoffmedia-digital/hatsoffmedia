import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata: Metadata = {
  title: "Contact Us | Hatsoff Media Pvt Ltd",
  description:
    "Get in touch with Hatsoff Media Pvt Ltd. Let's discuss your branding, website, social media, video production, AI content, and digital marketing requirements.",
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <ContactHero />

      <ContactMethods />

      <ContactForm />

      <GoogleMap />

      <ContactFAQ />

    </main>
  );
}