import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/common/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Spantra Solutions | Modern Operations & Data Entry Services",
  description: "Spantra Solutions provides comprehensive data entry, cleaning, and operations support to help your business scale efficiently.",
  keywords: ["Data Entry", "Data Cleaning", "CRM Updates", "Back-Office Operations", "Spantra Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
