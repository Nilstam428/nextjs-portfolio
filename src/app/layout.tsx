import type { Metadata } from "next";
import { Manrope, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nilesh | AI & Full Stack Developer",
    template: "%s | Nilesh",
  },
  description:
    "Portfolio showcasing projects in AI, ML, and SaaS. Building intelligent products with modern tech.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning",
    "SaaS",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Nilesh" }],
  openGraph: {
    title: "Nilesh | AI & Full Stack Developer",
    description:
      "Portfolio showcasing projects in AI, ML, and SaaS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilesh | AI & Full Stack Developer",
    description:
      "Portfolio showcasing projects in AI, ML, and SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
