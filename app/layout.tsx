import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway"
})

export const metadata: Metadata = {
  title: { template: "%s | Safus — Developer, Designer & Innovator", default: "Safus — Developer, Designer & Innovator" },
  description: "Modern, performance-focused applications crafted with precision, clean architecture, and sleek user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
