import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TALKO_IT - Profesjonalne Rozwiązania IT",
  description: "Tworzymy przyszłość technologii poprzez innowacyjne rozwiązania IT. Aplikacje webowe, mobilne i rozwiązania chmurowe.",
  keywords: "IT, aplikacje webowe, aplikacje mobilne, rozwiązania chmurowe, React, Next.js",
  authors: [{ name: "TALKO_IT" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
