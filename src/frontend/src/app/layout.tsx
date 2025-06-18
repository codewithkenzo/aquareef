import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
