import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TALKO IT Solutions - Professional IT Services",
  description: "Szwajcarski partner doradczy IT dostarczający szyte na miarę architekturę, technologię i strategie rozwoju — od systemów IT, przez automatyzację/DevOps i IoT, po AI.",
  keywords: "IT consulting, DevOps, IoT, AI, automation, Switzerland, technology solutions",
  authors: [{ name: "TALKO IT Solutions" }],
  openGraph: {
    title: "TALKO IT Solutions - Professional IT Services",
    description: "Szwajcarski partner doradczy IT dostarczający szyte na miarę architekturę, technologię i strategie rozwoju.",
    url: "https://gentle-tree-02afc0e0f.2.azurestaticapps.net",
    siteName: "TALKO IT Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TALKO IT Solutions - Professional IT Services",
    description: "Szwajcarski partner doradczy IT dostarczający szyte na miarę architekturę, technologię i strategie rozwoju.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Dodaj swój kod weryfikacyjny
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TALKO IT" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
