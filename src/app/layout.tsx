import type { Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const ankacoder = localFont({
  src: "./fonts/ankacoder.ttf",
  variable: "--font-ankacoder",
  weight: "100 900",
});

export async function generateMetadata() {
  const version = new Date().getTime();
  
  return {
    title: "DAHacks 2024 Fall",
    description:
      "Cupertino’s leading hackathon is back! Join us for our 4th year with 200+ hackers across the state!",
    applicationName: "De Anza Hacks",
    keywords: ["De Anza Hacks", "Hackathon", "Cupertino", "California"],
    generator: "De Anza Hacks",

    robots: "index, follow",
    icons: [
      { rel: "icon", href: `/favicon_io/android-chrome-192x192.png?v=${version}`, sizes: "192x192" },
      { rel: "icon", href: `/favicon_io/android-chrome-512x512.png?v=${version}`, sizes: "512x512" },
      { rel: "icon", href: `/favicon_io/favicon-16x16.png?v=${version}`, sizes: "16x16" },
      { rel: "icon", href: `/favicon_io/favicon-32x32.png?v=${version}`, sizes: "32x32" },
      { rel: "apple-touch-icon", href: `/favicon_io/apple-touch-icon.png?v=${version}`, sizes: "180x180" },
      { rel: "manifest", href: `/favicon_io/site.webmanifest?v=${version}` },
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
      <body className={`bg-da_dark ${ankacoder.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
