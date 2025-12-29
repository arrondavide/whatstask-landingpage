import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google"
import Script from "next/script"

// Import Plus Jakarta Sans font for headings per brand guidelines
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
})

// Import DM Sans font for body text per brand guidelines
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

// Import JetBrains Mono for code/technical content
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Whatstask: Tasks. Done. Right where you chat. | Telegram Bot & Free PDF Tools",
  description:
    "Task management that lives where you do—inside Telegram. Plus free online PDF tools: merge, compress, convert. No app switching, no learning curve, just results.",
  keywords:
    "telegram task bot, task management, productivity, PDF tools, PDF merger, PDF compressor, free online tools, telegram bot, ai task assistant",
  authors: [{ name: "Whatstask Team" }],
  creator: "Whatstask",
  publisher: "Whatstask",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.whatstask.com"),
  alternates: {
    canonical: "https://www.whatstask.com",
  },
  openGraph: {
    title: "Whatstask: Tasks. Done. Right where you chat.",
    description:
      "Task management that lives where you do—inside Telegram. Plus free online PDF tools. No signups, no complexity.",
    url: "https://www.whatstask.com",
    siteName: "Whatstask",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Whatstask - Telegram Task Management Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask: Tasks. Done. Right where you chat.",
    description:
      "Task management that lives where you do—inside Telegram. Plus free online PDF tools. No signups, no complexity.",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0F766E" />

        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        <link rel="canonical" href="https://www.whatstask.com" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="google-adsense-account" content="ca-pub-5344273951045281" />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5344273951045281"
          crossOrigin="anonymous"
        />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BPVBYV6G38" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BPVBYV6G38');
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} ${dmSans.variable} ${jetBrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Whatstask",
              url: "https://www.whatstask.com",
              logo: "https://www.whatstask.com/logo.png",
              description: "Manage tasks in Telegram with AI reminders. Free online PDF tools.",
              sameAs: ["https://t.me/whatstask_bot"],
            }),
          }}
        />

        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Whatstask",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Telegram, Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Manage tasks in Telegram with AI reminders. Free online PDF merger, compressor & more—secure, no signup.",
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
