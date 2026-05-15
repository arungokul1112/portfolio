import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
import TargetCursor from "@/components/ui/TargetCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arun Gokul K | Backend & SaaS Engineer",
  description: "Arun Gokul K is a Software Engineer specializing in scalable backend systems, real-time applications, and SaaS architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
        <TargetCursor 
          targetSelector=".cursor-target" 
          spinDuration={2} 
          hideDefaultCursor={true} 
          parallaxOn={true} 
        />
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
