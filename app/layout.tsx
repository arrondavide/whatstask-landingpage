import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import Script from "next/script"

// Import Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Whatstask - Advanced Telegram Task Management Bot",
  description: "Manage tasks and projects easily inside Telegram. Fast, simple, and made for productivity.",
  keywords: "task management, telegram bot, productivity, project management, to-do list, task organizer",
  authors: [{ name: "Whatstask Team" }],
  creator: "Whatstask",
  publisher: "Whatstask",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://whatstask.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Whatstask - Advanced Telegram Task Management Bot",
    description: "Manage tasks and projects easily inside Telegram. Fast, simple, and made for productivity.",
    url: "https://whatstask.com",
    siteName: "Whatstask",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Whatstask - Advanced Telegram Task Management Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask - Advanced Telegram Task Management Bot",
    description: "Manage tasks and projects easily inside Telegram. Fast, simple, and made for productivity.",
    images: ["/logo.png"],
    creator: "@whatstask",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification=your-verification-code",
  },
  category: "productivity",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://whatstask.com" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="google-adsense-account" content="ca-pub-5344273951045281" />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5344273951045281"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured data for SEO */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Whatstask",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Telegram",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description: "Manage tasks and projects easily inside Telegram. Fast, simple, and made for productivity.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1024",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
