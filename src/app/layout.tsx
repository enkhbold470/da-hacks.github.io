import type { Metadata } from "next";
import type { Viewport } from "next";
import Script from "next/script";

import Head from "next/head";

import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});
export async function generateMetadata() {
  return {
    title: "DAHacks 2024 Fall",
    description:
      "Cupertino’s leading hackathon is back! Join us for our 4th year with 200+ hackers across the state!",
    applicationName: "De Anza Hacks",
    keywords: ["De Anza Hacks", "Hackathon", "Cupertino", "California"],
    generator: "De Anza Hacks",

    robots: "index, follow",
    icons: [
      "./favicon_io/android-chrome-192x192.png",
      "./favicon_io/android-chrome-512x512.png",
      "favicon-16x16.png",
      "favicon-32x32.png",
      "apple-touch-icon.png",
    ],
  };
}
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QH905KTVTL"
        />
        <Script id="google-analytics">
          {`
        
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QH905KTVTL');
      `}
        </Script>
      </head>
      <body className={`${openSans.className} bg-da_red`}>{children}</body>
    </html>
  );
}
