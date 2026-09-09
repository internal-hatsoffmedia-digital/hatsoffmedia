import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import LeftNavbar from "@/components/layout/LeftNavbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/common/MouseGlow";
import PageLoader from "@/components/common/PageLoader";
import Cursor from "@/components/common/Cursor";
import FloatingSocials from "@/components/common/FloatingSocials";
import FaqBot from "@/components/common/FaqBot";
import { cn } from "@/lib/utils";

// 2 Standardized Font Families for Hatsoff Media:
// 1. Heading/Display: Plus Jakarta Sans (Bold, modern geometric agency headline font)
// 2. Body/UI: Inter (High-clarity, ultra-legible modern interface font)
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hatsoff Media",
  description: "Hatsoff Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(plusJakartaSans.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="bg-white text-black antialiased overflow-x-hidden font-sans">
        {/* Page Loader */}
        <PageLoader />

        {/* Interactive Mouse Cursor */}
        <Cursor />

        {/* App */}
        <div className="relative min-h-screen">
          <MouseGlow />

          <Navbar />
          <LeftNavbar />

          <main>{children}</main>

          <Footer />

          {/* Floating Social Media Dock (Bottom-Right) */}
          <FloatingSocials />

          {/* Custom ChatGPT-Style FAQ Assistant (Bottom-Left) */}
          <FaqBot />
        </div>
      </body>
    </html>
  );
}