import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Monopoly-style font (using Inter as fallback since Monopoly isn't available on Google Fonts)
// For a true Monopoly font, you'd need to import a custom font file
const monopolyFont = Inter({
  variable: "--font-monopoly",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Monospace font for smaller text elements
const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${monopolyFont.variable} ${monoFont.variable} antialiased font-monopoly`}
      >
        {children}
      </body>
    </html>
  );
}
