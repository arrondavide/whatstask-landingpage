import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X, DollarSign, Zap, Users, Shield } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Skeddy: Which Telegram Bot is Better? [2025]",
  description:
    "Detailed comparison of Whatstask and Skeddy for Telegram task management. Compare features, pricing, ease of use, and which bot is best for your needs in 2025.",
  keywords:
    "whatstask vs skeddy, skeddy alternative, telegram task bot comparison, best telegram reminder bot, whatstask comparison",
  openGraph: {
    title: "Whatstask vs Skeddy: Which Telegram Bot is Better? [2025]",
    description:
      "Compare Whatstask and Skeddy features, pricing, and usability. See which Telegram task bot wins.",
    url: "https://www.whatstask.com/compare/skeddy",
    siteName: "Whatstask",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask vs Skeddy: Which Telegram Bot is Better?",
    description: "Detailed comparison to help you choose the right Telegram task management bot.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/skeddy",
  },
}

export default function WhatstaskVsSkeddyPage() {
  const comparison = [
    {
      category: "Pricing",
      whatstask: "Free + $4.99/mo Pro",
      skeddy: "Free + $9.99/mo Premium",
      winner: "whatstask",
    },
    {
      category: "Natural Language Input",
      whatstask: "Full support",
      skeddy: "Limited",
      winner: "whatstask",
    },
    {
      category: "PDF Tools",
      whatstask: "Included (merge, compress, convert)",
      skeddy: "Not available",
      winner: "whatstask",
    },
    {
      category: "Smart Reminders",
      whatstask: "AI-powered, context-aware",
      skeddy: "Basic reminders",
      winner: "whatstask",
    },
    {
      category: "Team Collaboration",
      whatstask: "Yes (Pro)",
      skeddy: "Yes (Premium)",
      winner: "tie",
    },
    {
      category: "Recurring Tasks",
      whatstask: "Yes",
      skeddy: "Yes",
      winner: "tie",
    },
    {
      category: "Cross-Platform Sync",
      whatstask: "Automatic via Telegram",
      skeddy: "Automatic via Telegram",
      winner: "tie",
    },
    {
      category: "Time Zone Support",
      whatstask: "Intelligent detection",
      skeddy: "Manual setup",
      winner: "whatstask",
    },
    {
      category: "User Interface",
      whatstask: "Modern, intuitive",
      skeddy: "Clean, functional",
      winner: "tie",
    },
    {
      category: "Setup Time",
      whatstask: "< 60 seconds",
      skeddy: "~2 minutes",
      winner: "whatstask",
    },
  ]

  const prosAndCons = {
    whatstask: {
      pros: [
        "More affordable pricing ($4.99 vs $9.99/mo)",
        "Better natural language understanding",
        "Free PDF tools included",
        "AI-powered smart reminders",
        "Faster setup and onboarding",
        "Automatic time zone detection",
      ],
      cons: [
        "Newer product (smaller user base)",
        "Fewer third-party integrations (currently)",
        "Analytics in Pro tier only",
      ],
    },
    skeddy: {
      pros: [
        "Established user base",
        "More integrations with external tools",
        "Detailed analytics in free tier",
      ],
      cons: [
        "Higher pricing for premium features",
        "Limited natural language support",
        "No PDF tools",
        "Manual time zone configuration",
        "Basic reminder system",
      ],
    },
  }

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Whatstask vs Skeddy: Which Telegram Bot is Better?
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive comparison of the two leading Telegram task management bots. Updated for 2025.
            </p>
          </div>

          {/* Quick Verdict */}
          <div className="bg-gradient-to-br from-teal-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20 max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-teal-500" />
              Quick Verdict
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>Whatstask wins</strong> on pricing, natural language input, PDF tools, and ease of setup. It's
              the better choice for individuals and small teams who want powerful task management without complexity.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Skeddy</strong> is a solid option if you need extensive third-party integrations and don't mind
              the higher price tag. It's more established but lacks some modern features like AI reminders and PDF
              tools.
            </p>
          </div>

          {/* Detailed Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Feature-by-Feature Comparison</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-bold">Feature</th>
                    <th className="text-center p-6 font-bold">Whatstask</th>
                    <th className="text-center p-6 font-bold">Skeddy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition">
                      <td className="p-6 font-medium">{row.category}</td>
                      <td
                        className={`p-6 text-center ${row.winner === "whatstask" ? "bg-teal-500/10" : ""}`}
                      >
                        {row.whatstask}
                        {row.winner === "whatstask" && (
                          <span className="ml-2 text-teal-500">✓</span>
                        )}
                      </td>
                      <td
                        className={`p-6 text-center ${row.winner === "skeddy" ? "bg-blue-500/10" : ""}`}
                      >
                        {row.skeddy}
                        {row.winner === "skeddy" && (
                          <span className="ml-2 text-blue-500">✓</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Whatstask Pros/Cons */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} className="h-6 w-6" />
                  Whatstask
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.whatstask.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-red-400 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.whatstask.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skeddy Pros/Cons */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Skeddy</h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.skeddy.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-red-400 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.skeddy.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-teal-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Whatstask</h3>
                  <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    Better Value
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-extrabold mb-2">$0</div>
                  <div className="text-gray-400 mb-4">Free Forever Plan</div>
                  <div className="text-3xl font-extrabold mb-2">$4.99<span className="text-lg">/mo</span></div>
                  <div className="text-gray-400">Pro Plan</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Unlimited tasks (Free)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    AI reminders (Pro)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Free PDF tools
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Skeddy</h3>
                <div className="mb-6">
                  <div className="text-4xl font-extrabold mb-2">$0</div>
                  <div className="text-gray-400 mb-4">Basic Plan</div>
                  <div className="text-3xl font-extrabold mb-2">$9.99<span className="text-lg">/mo</span></div>
                  <div className="text-gray-400">Premium Plan</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Limited tasks (Free)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Basic reminders
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    No PDF tools
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Case Recommendations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Which Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-teal-500" />
                  Choose Whatstask if:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want the best value for money
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Natural language input is important
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need PDF tools alongside tasks
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You're a freelancer or small team
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want modern AI features
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  Choose Skeddy if:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need many third-party integrations
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You prefer an established product
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Budget is not a concern
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You don't need natural language
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-br from-teal-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-teal-500/20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Try Whatstask?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Start free today - no credit card required. Upgrade to Pro only if you need advanced features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teal-500 text-white hover:bg-teal-700 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start on Telegram
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20">
                <Link href="/features">View All Features</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Takes less than 60 seconds to set up</p>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script
          id="schema-faq-comparison"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the main difference between Whatstask and Skeddy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask offers better natural language processing, includes free PDF tools, and costs less ($4.99/mo vs $9.99/mo for premium). Skeddy has more third-party integrations but lacks AI-powered features and PDF tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is cheaper: Whatstask or Skeddy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask is significantly cheaper. The Pro plan costs $4.99/month compared to Skeddy's Premium at $9.99/month. Both offer free tiers, but Whatstask includes more features in the free plan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I switch from Skeddy to Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can start using Whatstask immediately by adding @whatstaskbot on Telegram. Both bots can coexist, so you can test Whatstask before fully switching from Skeddy.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-comparison"
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Compare",
                  item: "https://www.whatstask.com/compare",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Whatstask vs Skeddy",
                  item: "https://www.whatstask.com/compare/skeddy",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
