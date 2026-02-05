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
  title: "Whatstask - Complete Work Management Platform in Telegram",
  description:
    "Full-featured Telegram Mini App for task management, time tracking, and team collaboration. Manage teams, track hours, analyze productivity - all in Telegram. Free for teams.",
  keywords:
    "telegram mini app, telegram webapp, work management platform, task management, time tracking app, team collaboration, company workspace, project management telegram, telegram time tracker, team task management",
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
    title: "Whatstask - Work Management Platform in Telegram",
    description:
      "Full-featured Telegram Mini App: Task management, time tracking, team collaboration & analytics. Manage teams, track hours, boost productivity.",
    url: "https://www.whatstask.com",
    siteName: "Whatstask",
    images: [
      {
        url: "/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Whatstask - Telegram Work Management Mini App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask - Work Management Platform in Telegram",
    description:
      "Full-featured Telegram Mini App: Task management, time tracking, team collaboration & analytics. Free for teams.",
    images: ["/logo-black.png"],
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
  // Note: Add your Google Search Console verification code here after setting up GSC
  // verification: {
  //   google: "google-site-verification=your-verification-code",
  // },
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
        <meta name="theme-color" content="#8B5CF6" />

        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
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
              logo: "https://www.whatstask.com/logo-black.png",
              description: "Manage tasks in Telegram with AI reminders. Free online PDF tools.",
              sameAs: [
                "https://t.me/whatstask_bot",
                "https://twitter.com/whatstask",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Whatstask",
              url: "https://www.whatstask.com",
              description: "Telegram task management bot and free PDF tools",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.whatstask.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Project Management Software",
              operatingSystem: "Telegram Mini App, iOS, Android, Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Complete work management platform in Telegram. Full-featured Mini App for task management, time tracking, team collaboration, and productivity analytics. Free for teams.",
              featureList: [
                "Task Management with subtasks and recurring tasks",
                "Time Tracking with clock in/out",
                "Team Collaboration with roles and permissions",
                "Company Workspaces and multi-tenancy",
                "Real-time Statistics and Analytics",
                "In-app and Telegram Push Notifications",
                "Comments and Activity Feed",
                "Offline Mode with Auto-sync"
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1024",
              },
            }),
          }}
        />

        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask is a Telegram bot that helps you manage tasks, set reminders, and convert PDFs directly within Telegram. No app switching required - just chat with the bot to create tasks, schedule reminders, and handle documents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I use Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply start a conversation with @whatstaskbot on Telegram. Type your tasks in natural language, and Whatstask will understand and organize them. You can create tasks, set reminders, and use PDF tools all through simple chat messages.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Whatstask free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Whatstask is free to start. All basic task management features and PDF tools are available at no cost. No signup or credit card required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What PDF tools does Whatstask offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask offers free PDF tools including: PDF Merger, PDF Compressor, PDF to JPG converter, JPG to PDF converter, PDF Splitter, and QR Code Generator. All tools work directly in your browser without requiring signup.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Whatstask work on mobile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Whatstask works perfectly on mobile devices through the Telegram app. Since it's a Telegram bot, you can access all features on iOS, Android, and desktop without downloading any additional apps.",
                  },
                },
              ],
            }),
          }}
        />

        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.whatstask.com",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
