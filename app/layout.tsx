import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./styles.module.css";
import Header from "./components/header";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicholas Hansen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  1;

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧙</text></svg>"
        />
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <div className="sm:flex  md:flex-col">
          <div className="bg-orange top-0 fixed w-screen z-10">
            <Header></Header>
          </div>
          <div className="mx-20 pt-48">{children}</div>
        </div>
      </body>
    </html>
  );
}
