import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Pricing - Free Forever & Pro Plans | Whatstask",
  description:
    "Start free forever with unlimited tasks and team collaboration. Upgrade to Pro for $4.99/mo for advanced features. No credit card required. Try now →",
  openGraph: {
    title: "Pricing – Free & Pro Plans | Whatstask 2025",
    description: "Start free with unlimited tasks. Upgrade to Pro for $4.99/mo for AI-powered features.",
    url: "https://www.whatstask.com/pricing",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing – Free & Pro Plans | Whatstask 2025",
    description: "Start free. Upgrade to Pro for $4.99/mo for AI features.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  const freePlan = {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Unlimited tasks",
      "Natural language input",
      "Smart scheduling",
      "Task reminders",
      "Category organization",
      "Basic collaboration",
    ],
    limitations: ["No AI suggestions", "Standard support", "Basic integrations"],
  }

  const proPlan = {
    name: "Pro",
    price: "$4.99",
    period: "per month",
    features: [
      "Everything in Free",
      "AI-powered task suggestions",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Team collaboration tools",
      "API access",
    ],
    limitations: [],
  }

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-brand-black text-white">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Whatstask" className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-20">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Simple Pricing for Everyone</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start free and upgrade when you need advanced features. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-2">{freePlan.name}</h2>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">{freePlan.price}</span>
                <span className="text-gray-400 ml-2">{freePlan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {freePlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {freePlan.limitations.map((limitation, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-500">
                    <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start Free
                </a>
              </Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h2 className="text-2xl font-bold mb-2">{proPlan.name}</h2>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">{proPlan.price}</span>
                <span className="text-gray-400 ml-2">{proPlan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {proPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-white text-black hover:bg-white/90 rounded-full py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Upgrade to Pro
                </a>
              </Button>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="text-center mt-20 bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-gray-400 mb-6">
              For enterprise teams, custom bot integrations, or white-label solutions, our IT consulting services can
              help scale your workflows.
            </p>
            <Link href="/consulting">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                Explore Consulting Services
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
