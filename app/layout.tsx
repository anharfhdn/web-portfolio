import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/main/StarsBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com/"),
  title: "Anhar Fahrudin - Software Programmer | Full-Stack Dev | Embedded System | Ubuntu User - Developer Portfolio",
  description: "Developer Portfolio with expertise in Full-Stack Development and Embedded Systems.",
  keywords: ["Developer", "Portfolio", "Next.js", "React.js"],
  openGraph: {
    title: "Anhar Fahrudin - Software Programmer | Full-Stack Dev | Embedded System | Ubuntu User",
    description: "Full-Stack Developer with expertise in web technologies and embedded systems.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://yourdomain.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Anhar Fahrudin",
              jobTitle: "Software Engineer",
              url: "https://yourdomain.com",
              sameAs: [
                "https://www.linkedin.com/in/yourprofile/",
                "https://github.com/yourusername",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
