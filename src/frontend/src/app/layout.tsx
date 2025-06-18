import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blaze - Automate Your Social Empire with AI Magic",
  description: "Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.",
  keywords: ["social media automation", "AI content generation", "social media scheduling", "digital marketing", "social media management"],
  authors: [{ name: "Blaze Team" }],
  openGraph: {
    title: "Blaze - Automate Your Social Empire with AI Magic",
    description: "Build a thriving social media empire across 8+ platforms. AI creates your content, schedules strategically, and optimizes for maximum engagement—all while you sleep.",
    type: "website",
    url: "https://blaze.social",
    siteName: "Blaze",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaze - Automate Your Social Empire with AI Magic",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
