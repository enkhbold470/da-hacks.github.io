import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>De Anza Hacks V2.5 2024</title>
        <meta
          name="description"
          content="Cupertino’s leading hackathon is back! Join us for our 3rd year with 200+ hackers across the state!"
          key="desc"
        />
        <meta
          property="og:title"
          content="De Anza Hacks Cupertino’s leading hackathon is back!"
        />
        <meta
          property="og:description"
          content="Join us for our De Anza Hacks with 200+ hackers across the state!"
        />
        <meta
          property="og:image"
          content="https://da-hacks.github.io/dadev-bg.jpg"
        />
      </Head>
      <body className={` ${openSans.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
