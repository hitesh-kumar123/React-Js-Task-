import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Next Blog",
    template: "%s | Next Blog",
  },
  description: "Modern blog built with Next.js 16",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Frontend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
