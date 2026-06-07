import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kaixin Zhang | University of Oxford",
  description:
    "Academic portfolio for Kaixin Zhang, DPhil Student in Clinical Medicine at the University of Oxford."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} bg-paper font-sans text-ink`}>
        {children}
      </body>
    </html>
  );
}
