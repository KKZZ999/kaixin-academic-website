import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
      <body className="bg-paper font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
