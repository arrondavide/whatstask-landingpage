import type { Metadata } from "next"
import HomeClient from "./home-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "WhatsTask — Free AI Project Management in Telegram",
  description:
    "Free project management in Telegram. AI creates tasks from documents, connects to Monday & Asana, tracks field workers. Free tier + Pro plans with Telegram Stars.",
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
    "free project management",
  ],
  authors: [{ name: "WhatsTask" }],
  creator: "WhatsTask",
  publisher: "WhatsTask",
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
            name: "WhatsTask",
            url: "https://www.whatstask.com",
            logo: "https://www.whatstask.com/logo-black.png",
            description: "AI-powered project management for teams on Telegram. Create tasks from documents, connect PM tools, track field workers.",
            sameAs: [
              "https://t.me/whatstask_bot",
              "https://twitter.com/whatstask"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@whatstask.com",
              contactType: "customer support",
              availableLanguage: ["English"]
            }
          }),
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "WhatsTask",
            url: "https://www.whatstask.com",
            description: "Free AI project management in Telegram",
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

      {/* Software Application Schema - NO aggregateRating */}
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "WhatsTask",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Project Management Software",
            operatingSystem: "Web, Telegram, iOS, Android",
            offers: [
              {
                "@type": "Offer",
                name: "Free",
                price: "0",
                priceCurrency: "USD",
                description: "3 projects, 5 seats, 5 AI queries/day"
              },
              {
                "@type": "Offer",
                name: "Pro",
                price: "5",
                priceCurrency: "USD",
                description: "Unlimited projects, 15 seats, 50 AI queries/day (250 Telegram Stars/month)"
              },
              {
                "@type": "Offer",
                name: "Business",
                price: "10",
                priceCurrency: "USD",
                description: "50 seats, 200 AI queries/day (500 Telegram Stars/month)"
              }
            ],
            description: "AI-powered project management that runs inside Telegram. Upload documents, create tasks with AI, manage teams, track time.",
            featureList: [
              "AI task creation from documents",
              "5 project views (List, Kanban, Calendar, Timeline, Table)",
              "Time tracking with clock in/out",
              "Team collaboration with roles",
              "PM Connect integration (Monday, ClickUp, Asana)",
              "Developer notification API",
              "Real-time analytics",
              "Telegram notifications"
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

      {/* BreadcrumbList Schema */}
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

      {/* SiteNavigationElement Schema — helps Google understand nav structure for Sitelinks */}
      <Script
        id="schema-sitenav"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "WhatsTask Site Navigation",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Features",
                description: "Task management, time tracking, team collaboration, and analytics",
                url: "https://www.whatstask.com/features",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Pricing",
                description: "Free tier, Pro 250 Stars/mo, Business 500 Stars/mo",
                url: "https://www.whatstask.com/pricing",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "How It Works",
                description: "Set up WhatsTask in Telegram in 4 simple steps",
                url: "https://www.whatstask.com/how-it-works",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Project Management",
                description: "AI project management with views, time tracking and collaboration",
                url: "https://www.whatstask.com/project-management",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "PM Connect",
                description: "Bridge Monday.com, ClickUp and Asana to Telegram field workers",
                url: "https://www.whatstask.com/pm-connect",
              },
              {
                "@type": "SiteNavigationElement",
                position: 6,
                name: "GEO Analyzer",
                description: "Analyze how AI search engines see your website",
                url: "https://www.whatstask.com/geoanalyzer",
              },
            ],
          }),
        }}
      />
    </>
  )
}
