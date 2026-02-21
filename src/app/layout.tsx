import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Keshan Wijesinghe",
  description:
    "Modern portfolio showcasing cutting-edge web development and UI/UX design expertise.",
  keywords: [
    "frontend",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "ui/ux",
  ],
  authors: [{ name: "Keshan Wijesinghe" }],
  creator: "Keshan Wijesinghe",
  publisher: "Keshan Wijesinghe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yourportfolio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keshan Wijesinghe",
    description:
      "Modern portfolio showcasing cutting-edge web development and UI/UX design expertise.",
    url: "https://yourportfolio.com",
    siteName: "Keshan Wijesinghe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keshan Wijesinghe Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keshan Wijesinghe - Senior Frontend Engineer",
    description:
      "Modern portfolio showcasing cutting-edge web development and UI/UX design expertise.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={cn(
          geistSans.variable,
          "font-sans antialiased overflow-x-hidden",
        )}
      >
        <div className="relative min-h-screen bg-gradient-mesh">
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
