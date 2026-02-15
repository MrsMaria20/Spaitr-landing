import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Fonts: exposed as CSS variables for use in theme. */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPAITR",
  description: "SPAITR — performance AI for athletes.",
};

/**
 * Root layout: html + body, theme script, global header, and page content.
 * Theme script runs beforeInteractive to set .dark on html from prefers-color-scheme.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-bg text-text`}
      >
        {/* Keep .dark on html so the UI stays dark (default theme). */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');`,
          }}
        />
        {/* Site-wide header: logo, anchor nav links, Join Beta CTA. Sticky with backdrop blur. */}
        <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            {/* Logo: image + wordmark, links to #top. */}
            <a href="#top" className="flex items-center gap-3 text-text">
              <img
                src="/logo.png"
                alt="SPAITR"
                className="h-9 w-auto"
              />
              <span className="font-semibold tracking-tight">SPAITR</span>
            </a>

            {/* Desktop nav: anchor links to each section (Brand Story, How It Works, etc.). */}
            <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
              <a href="#story" className="hover:text-text">
                Brand Story
              </a>
              <a href="#how" className="hover:text-text">
                How It Works
              </a>
              <a href="#preview" className="hover:text-text">
                Product Preview
              </a>
              <a href="#proof" className="hover:text-text">
                Proof
              </a>
              <a href="#features" className="hover:text-text">
                Features
              </a>
            </nav>

            {/* Header CTA: primary button to beta signup section. */}
            <a href="#beta" className="btn-primary rounded-full px-4 py-2">
              Join Beta
            </a>
          </div>
        </header>

        {/* Main page content: rendered from app/page.tsx (landing sections). */}
        {children}
      </body>
    </html>
  );
}