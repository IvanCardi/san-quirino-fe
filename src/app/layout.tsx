import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PullToRefresh from "@/components/pull-to-refresh";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andromeda",
  description: "Andromeda App",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Andromeda" />
      </head>
      <body className={`${inter.variable} antialiased flex flex-col h-screen`}>
        <main className="h-full flex-1 overflow-y-auto">{children}</main>
        <Navbar />
        <PullToRefresh />
        <Toaster />
      </body>
    </html>
  );
}
