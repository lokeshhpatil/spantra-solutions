import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/common/footer";

const geistSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Spantra Solutions",
  description: "Spantra Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
