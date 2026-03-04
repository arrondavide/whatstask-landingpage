import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "WhatsTask Pricing: Free Tier, Pro 250 Stars/mo, Business 500 Stars/mo",
  description:
    "Free tier with 3 projects, 5 seats, and 5 AI queries/day. Pro at 250 Stars/month with unlimited projects. Business at 500 Stars/month. No per-seat pricing.",
  keywords: [
    "whatstask pricing",
    "telegram stars pricing",
    "project management pricing",
    "free project management",
    "affordable project management",
    "team pricing",
  ],
  openGraph: {
    title: "Pricing — Free, Pro & Business Plans | WhatsTask",
    description: "Free tier included. Pro at 250 Stars/month. Business at 500 Stars/month. Pay with Telegram Stars.",
    url: "https://www.whatstask.com/pricing",
    siteName: "WhatsTask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/pricing",
  },
}

export default function PricingPage() {
  const corePmPlans = [
    {
      name: "Free",
      price: "0",
      currency: "",
      period: "free",
      description: "For individuals getting started",
      features: [
        "3 projects",
        "5 team seats",
        "5 AI queries/day",
        "List + Kanban views",
        "AI task creation",
        "Time tracking",
        "Mobile & Telegram access",
      ],
      limitations: ["Basic analytics"],
      cta: "Start Free",
      ctaLink: "https://t.me/whatstaskbot",
      highlight: false,
    },
    {
      name: "Pro",
      price: "250",
      currency: "★",
      period: "per month",
      description: "For growing teams",
      features: [
        "Everything in Free",
        "Unlimited projects",
        "15 team seats",
        "50 AI queries/day",
        "All 5 views (List, Kanban, Table, Calendar, Timeline)",
        "Custom fields",
        "Advanced analytics",
        "Priority support",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      ctaLink: "https://t.me/whatstaskbot",
      highlight: true,
    },
    {
      name: "Business",
      price: "500",
      currency: "★",
      period: "per month",
      description: "For larger organizations",
      features: [
        "Everything in Pro",
        "50 team seats",
        "200 AI queries/day",
        "Automations",
        "GPS tracking",
        "Advanced analytics",
        "Dedicated support",
      ],
      limitations: [],
      cta: "Go Business",
      ctaLink: "https://t.me/whatstaskbot",
      highlight: false,
    },
  ]

  const pmConnectPlans = [
    {
      name: "Free",
      price: "0",
      currency: "",
      period: "free",
      description: "Try PM Connect",
      features: ["1 integration", "3 workers", "Basic task sync"],
      cta: "Start Free",
      ctaLink: "https://t.me/whatstaskbot",
    },
    {
      name: "Pro",
      price: "350",
      currency: "★",
      period: "per month",
      description: "For field teams",
      features: ["5 integrations", "25 workers", "Location tracking", "Photo attachments"],
      cta: "Upgrade",
      ctaLink: "https://t.me/whatstaskbot",
    },
    {
      name: "Business",
      price: "750",
      currency: "★",
      period: "per month",
      description: "Unlimited scale",
      features: ["Unlimited integrations", "Unlimited workers", "Photo proof", "Webhook callbacks", "Priority sync"],
      cta: "Go Business",
      ctaLink: "https://t.me/whatstaskbot",
    },
  ]

  const developerApiPlans = [
    {
      name: "Free",
      price: "0",
      currency: "",
      period: "free",
      description: "For testing & small projects",
      features: ["1,000 webhooks/month", "1 API key", "Basic support"],
      cta: "Get API Key",
      ctaLink: "/developers",
    },
    {
      name: "Pro",
      price: "200",
      currency: "★",
      period: "per month",
      description: "For production apps",
      features: ["10,000 webhooks/month", "5 API keys", "Priority support", "Webhook logs"],
      cta: "Upgrade",
      ctaLink: "/developers",
    },
    {
      name: "Business",
      price: "500",
      currency: "★",
      period: "per month",
      description: "High-volume needs",
      features: ["100,000 webhooks/month", "Unlimited API keys", "Dedicated support", "Custom SLA"],
      cta: "Go Business",
      ctaLink: "/developers",
    },
  ]

  const geoPlans = [
    {
      name: "Free",
      price: "0",
      description: "Try GEO Analyzer",
      features: ["3 analyses per day", "Basic recommendations", "AI search optimization tips"],
      cta: "Try Free",
      ctaLink: "https://geoanalyzer.whatstask.com",
    },
    {
      name: "Pro",
      price: "Coming Soon",
      description: "For serious marketers",
      features: ["Unlimited analyses", "Advanced insights", "Competitor tracking", "Priority processing"],
      cta: "Join Waitlist",
      ctaLink: "/geoanalyzer",
    },
  ]

  const comparison = [
    { feature: "AI Features", whatstask: "5/day free, 50 Pro, 200 Business", clickup: "$28/user", monday: "$12/seat", asana: "Enterprise" },
    { feature: "Time Tracking", whatstask: "Included", clickup: "Included", monday: "Add-on", asana: "Add-on" },
    { feature: "Team Members", whatstask: "5 Free / 15 Pro / 50 Business", clickup: "Per-seat", monday: "Per-seat", asana: "Per-seat" },
    { feature: "Setup Time", whatstask: "30 seconds", clickup: "Days", monday: "Days", asana: "Weeks" },
    { feature: "Payment Method", whatstask: "Telegram Stars", clickup: "Card only", monday: "Card only", asana: "Card only" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Three Pillars, Three Tiers
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light mb-4">
              Free tier included. Pro and Business plans paid with Telegram Stars.
            </p>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Each pillar — Core PM, PM Connect, Developer API — has independent Free, Pro, and Business tiers. Mix and match.
            </p>
          </section>

          {/* Core PM Pricing */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Core Project Management</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Tasks, Time Tracking & Teams</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {corePmPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border transition-all duration-300 ${
                    plan.highlight
                      ? "border-violet-500/50 bg-violet-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs uppercase tracking-widest text-violet-400 mb-4">Most Popular</div>
                  )}

                  <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-4xl font-light text-white">{plan.price}</span>
                    {plan.currency && <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />}
                    <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-8">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-500">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full py-6 ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    <a
                      href={plan.ctaLink}
                      target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
                      rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* PM Connect Pricing */}
          <section className="mb-24 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">PM Connect</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Bridge PM Tools to Telegram Workers</h2>
                <p className="text-neutral-400 mt-4">Connect Monday.com, ClickUp, Asana to field workers on Telegram</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pmConnectPlans.map((plan, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="text-3xl font-light text-white">{plan.price}</span>
                      {plan.currency && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                      <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                          <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full rounded-full py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      <a
                        href={plan.ctaLink}
                        target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
                        rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {plan.cta}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Developer API Pricing */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-green-400 mb-4">Developer API</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Send Telegram Notifications</h2>
              <p className="text-neutral-400 mt-4">REST API for webhooks and notifications from any app</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {developerApiPlans.map((plan, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-3xl font-light text-white">{plan.price}</span>
                    {plan.currency && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
                    <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full rounded-full py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* GEO Analyzer Pricing */}
          <section className="mb-24 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">GEO Analyzer</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">AI Search Optimization</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {geoPlans.map((plan, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                    <p className="text-3xl font-light text-white mb-2">{plan.price}</p>
                    <p className="text-sm text-neutral-400 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                          <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full rounded-full py-6 bg-white/10 text-white border border-white/20 hover:bg-white/20">
                      <a
                        href={plan.ctaLink}
                        target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
                        rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {plan.cta}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How we compare</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">Feature</th>
                    <th className="text-center p-4 font-semibold text-violet-400">WhatsTask</th>
                    <th className="text-center p-4 font-medium text-neutral-500">ClickUp</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Monday</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Asana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-4 font-medium text-neutral-300">{row.feature}</td>
                      <td className="p-4 text-center text-white text-sm">{row.whatstask}</td>
                      <td className="p-4 text-center text-neutral-500 text-sm">{row.clickup}</td>
                      <td className="p-4 text-center text-neutral-500 text-sm">{row.monday}</td>
                      <td className="p-4 text-center text-neutral-500 text-sm">{row.asana}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Link href="/compare/clickup" className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors">
                See full comparisons
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently asked</h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "Is the free tier really free?",
                  a: "Yes. 3 projects, 5 seats, 5 AI queries/day, List + Kanban views, time tracking. No credit card required. No time limit.",
                },
                {
                  q: "What are Telegram Stars?",
                  a: "Telegram Stars are Telegram's built-in payment method. You can buy Stars directly in Telegram and use them to pay for WhatsTask Pro and Business plans.",
                },
                {
                  q: "Why don't you charge per seat?",
                  a: "Our tiers are flat-rate, not per-seat. Free gives you 5 seats, Pro gives 15, Business gives 50. No surprise bills when your team grows.",
                },
                {
                  q: "How does this compare to ClickUp's AI pricing?",
                  a: "ClickUp charges $28/user/month for AI. We include 5 AI queries/day free. Pro (250 Stars/month) gives 50/day. Business (500 Stars/month) gives 200/day.",
                },
                {
                  q: "Can I mix different tiers across pillars?",
                  a: "Yes! You can use Core PM Free while paying for PM Connect Pro. Each pillar is independent.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. No contracts, no cancellation fees. Cancel whenever you want.",
                },
              ].map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-neutral-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start free today</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                No credit card required. Upgrade anytime with Telegram Stars.
              </p>
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                </a>
              </Button>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} WhatsTask. Simple scales.</p>
          </div>
        </footer>

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-pricing"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.whatstask.com" },
                { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.whatstask.com/pricing" },
              ],
            }),
          }}
        />

        {/* Pricing Schema */}
        <Script
          id="schema-pricing"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "WhatsTask",
              description: "AI-powered project management in Telegram",
              brand: {
                "@type": "Brand",
                name: "WhatsTask",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Free",
                  price: "0",
                  priceCurrency: "USD",
                  description: "3 projects, 5 seats, 5 AI queries/day",
                },
                {
                  "@type": "Offer",
                  name: "Pro",
                  price: "5",
                  priceCurrency: "USD",
                  description: "Unlimited projects, 15 seats, 50 AI queries/day (250 Telegram Stars/month)",
                },
                {
                  "@type": "Offer",
                  name: "Business",
                  price: "10",
                  priceCurrency: "USD",
                  description: "50 seats, 200 AI queries/day, automations (500 Telegram Stars/month)",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
