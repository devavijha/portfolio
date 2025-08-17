import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Jha - Computer Science Engineer | Web Developer | AI Enthusiast",
  description: "Portfolio of Abhishek Jha - A passionate Computer Science Engineering student with 2+ years of experience in building scalable web applications, AI-driven solutions, and optimizing system performance.",
  keywords: "Abhishek Jha, Computer Science Engineer, Web Developer, AI Enthusiast, Full Stack Developer, React, Node.js, Python, Machine Learning",
  authors: [{ name: "Abhishek Jha" }],
  openGraph: {
    title: "Abhishek Jha - Computer Science Engineer & Web Developer",
    description: "Building scalable apps, AI-driven solutions, and future-ready systems.",
    url: "https://abhishekjha.vercel.app",
    siteName: "Abhishek Jha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha - Computer Science Engineer & Web Developer",
    description: "Building scalable apps, AI-driven solutions, and future-ready systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
