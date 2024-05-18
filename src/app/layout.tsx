import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "De Anza Hacks V2.5 2024",
  description:
    "Cupertino’s leading hackathon is back! Join us for our 3rd year with 200+ hackers across the state!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${openSans.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
