import type React from "react"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: {
    template: "%s | WhatsTask",
    default: "WhatsTask — Free AI Project Management in Telegram",
  },
  description:
    "Free project management for teams on Telegram. AI creates tasks from documents, connects to Monday & Asana, tracks field workers. No signup needed.",
  keywords:
    "telegram mini app, telegram webapp, work management platform, task management, time tracking app, team collaboration, company workspace, project management telegram, telegram time tracker, team task management",
  authors: [{ name: "WhatsTask" }],
  creator: "WhatsTask",
  publisher: "WhatsTask",
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
    title: "WhatsTask — Free AI Project Management in Telegram",
    description:
      "Free project management for teams on Telegram. AI creates tasks from documents, connects to Monday & Asana, tracks field workers.",
    url: "https://www.whatstask.com",
    siteName: "WhatsTask",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WhatsTask - Free AI Project Management in Telegram",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsTask — Free AI Project Management in Telegram",
    description:
      "Free project management for teams on Telegram. AI creates tasks, connects to Monday & Asana. No signup needed.",
    images: ["/og-image.png"],
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
  category: "productivity",
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
        <meta name="theme-color" content="#8B5CF6" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Google Analytics */}
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
