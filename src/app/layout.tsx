// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Agam Labs — Privacy-First Android Apps",
    template: "%s — Agam Labs",
  },
  description:
    "Agam Labs builds privacy-first Android apps for Indian users. No data collected. No cloud. Everything stays on your device.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dot-grid relative flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
