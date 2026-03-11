// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agamlabs.dev"),
  title: {
    default: "Agam Labs — Privacy-First Android Apps",
    template: "%s — Agam Labs",
  },
  description:
    "Privacy-first, offline-first Android apps for Indian users. Your data stays yours — always by default.",
  icons: { icon: "/brand/favicon.svg" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Agam Labs — Privacy-First Android Apps",
    description:
      "Privacy-first, offline-first Android apps for Indian users. Your data stays yours — always by default.",
    url: "https://agamlabs.dev",
    siteName: "Agam Labs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agam Labs — Privacy-First Android Apps",
    description:
      "Privacy-first, offline-first Android apps for Indian users. Your data stays yours — always by default.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-dot-grid relative flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
