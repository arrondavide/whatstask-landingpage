import type { Metadata } from "next"
import HomeClient from "./home-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask - AI-Powered Work Infrastructure in Telegram | Project Management",
  description:
    "Upload a document. AI creates every task and assigns your team. Connect your existing PM tools to Telegram workers. Send notifications from any app. Simple scales.",
  keywords: [
    "AI project management",
    "Telegram task manager",
    "AI task creation",
    "team management",
    "project management software",
    "Telegram mini app",
    "PM Connect",
    "developer API notifications",
    "work infrastructure",
    "Monday.com Telegram integration",
    "ClickUp Telegram",
    "Asana alternative",
  ],
  authors: [{ name: "Whatstask" }],
  creator: "Whatstask",
  publisher: "Whatstask",
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
  openGraph: {
    title: "Whatstask - AI-Powered Work Infrastructure in Telegram",
    description:
      "Upload a document. AI creates every task and assigns your team. Connect your existing PM tools. Send notifications. All inside Telegram.",
    url: "https://www.whatstask.com",
    siteName: "Whatstask",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Whatstask - AI-Powered Work Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask - AI-Powered Work Infrastructure in Telegram",
    description:
      "Upload a document. AI creates every task and assigns your team. Connect your tools. All inside Telegram.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.whatstask.com",
  },
  category: "Technology",
}

export default function HomePage() {
  return (
    <>
      <HomeClient />

      {/* Organization Schema */}
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
            description: "AI-powered work infrastructure for teams. Project management, PM Connect, and Developer API - all in Telegram.",
            sameAs: [
              "https://t.me/whatstaskbot"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "charlesaarondavid@gmail.com",
              contactType: "customer support"
            }
          }),
        }}
      />

      {/* Software Application Schema */}
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Whatstask",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Telegram",
            description: "AI-powered project management that runs inside Telegram. Upload documents, create tasks with AI, manage teams, track time.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "500"
            },
            featureList: [
              "AI task creation from documents",
              "5 project views",
              "Time tracking",
              "Team collaboration",
              "PM Connect integration",
              "Developer notification API"
            ]
          }),
        }}
      />

      {/* FAQ Schema */}
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
                name: "What is a Telegram Mini App?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mini Apps are web applications that run inside Telegram. They look and feel native but are actually web pages. You don't need to install anything—just tap to open."
                }
              },
              {
                "@type": "Question",
                name: "Do I need to create a new account?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. WhatsTask uses your Telegram account for authentication. Just open the Mini App and you're logged in instantly. No passwords, no sign-up forms."
                }
              },
              {
                "@type": "Question",
                name: "How does AI task creation work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Upload a document (PDF, Word, etc.) or describe your project in plain language. Our AI reads the content, extracts tasks, sets priorities and deadlines, and can even assign team members based on their skills and availability."
                }
              },
              {
                "@type": "Question",
                name: "What is PM Connect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PM Connect lets you bridge existing PM tools (Monday.com, ClickUp, Asana, Trello) to Telegram. Tasks from your PM tool automatically flow to workers on Telegram, and their updates sync back."
                }
              },
              {
                "@type": "Question",
                name: "Is my data secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We use industry-standard encryption. Your data is stored securely and never shared with third parties. We don't have access to your Telegram messages—only the data you create in WhatsTask."
                }
              }
            ]
          }),
        }}
      />
    </>
  )
}
