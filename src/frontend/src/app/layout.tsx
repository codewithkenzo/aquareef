import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aquareef - Automate Your Social Empire with AI Magic",
  description: "Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.",
  keywords: ["social media automation", "AI content generation", "social media scheduling", "digital marketing", "social media management"],
  authors: [{ name: "Aquareef Team" }],
  openGraph: {
    title: "Aquareef - Automate Your Social Empire with AI Magic",
    description: "Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.",
    type: "website",
    url: "https://aquareef.ai",
    siteName: "Aquareef",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquareef - Automate Your Social Empire with AI Magic",
    description: "Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
