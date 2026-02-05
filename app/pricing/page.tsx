import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, X, Send, Zap, Brain, ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Pricing - Simple, Transparent Plans | Whatstask",
  description:
    "Free forever tier with unlimited tasks and AI features. Pro at $4.99/month. Enterprise custom solutions. No hidden fees, no per-seat surprises.",
  keywords: [
    "whatstask pricing",
    "project management pricing",
    "free project management",
    "affordable project management",
    "team pricing",
  ],
  openGraph: {
    title: "Pricing - Free Forever + Pro Plans | Whatstask",
    description: "Free AI features included. Pro at $4.99/month. No per-seat pricing.",
    url: "https://www.whatstask.com/pricing",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/pricing",
  },
}

export default function PricingPage() {
  const pmPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "For individuals and small teams getting started",
      features: [
        "Unlimited tasks",
        "4 views (List, Kanban, Calendar, Timeline)",
        "AI task creation",
        "Smart suggestions",
        "Time tracking",
        "Team collaboration (up to 5)",
        "Mobile & Telegram access",
      ],
      limitations: ["Limited analytics", "Basic support"],
      cta: "Start Free",
      ctaLink: "https://t.me/whatstaskbot",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$4.99",
      period: "per month",
      description: "For growing teams who need more power",
      features: [
        "Everything in Free",
        "Unlimited team members",
        "Advanced AI features",
        "Daily digest & risk detection",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
      ],
      limitations: [],
      cta: "Upgrade to Pro",
      ctaLink: "https://t.me/whatstaskbot",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For organizations with specific needs",
      features: [
        "Everything in Pro",
        "Custom development",
        "White-label options",
        "SSO / SAML",
        "Dedicated support",
        "SLA guarantees",
        "On-premise (on request)",
        "Custom analytics",
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "mailto:charlesaarondavid@gmail.com",
      highlight: false,
    },
  ]

  const geoPlans = [
    {
      name: "Free",
      price: "$0",
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
    { feature: "AI Features", whatstask: "Free", clickup: "$28/user", monday: "$12/seat", asana: "Enterprise" },
    { feature: "Time Tracking", whatstask: "Included", clickup: "Included", monday: "Add-on", asana: "Add-on" },
    { feature: "Team Members", whatstask: "Unlimited (Pro)", clickup: "Per-seat", monday: "Per-seat", asana: "Per-seat" },
    { feature: "Setup Time", whatstask: "30 seconds", clickup: "Days", monday: "Days", asana: "Weeks" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-12">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />

          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Simple pricing. No surprises.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Free forever tier with AI included. No per-seat pricing games. No feature-gating tricks.
            </p>
          </section>

          {/* Project Management Pricing */}
          <section className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="h-6 w-6 text-violet-400" />
              <h2 className="text-2xl font-bold">Project Management</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pmPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border ${
                    plan.highlight
                      ? "bg-gradient-to-br from-violet-500/10 to-white/5 border-violet-500/30 relative"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.period !== "contact us" && (
                      <span className="text-slate-600 ml-2">{plan.period}</span>
                    )}
                    {plan.period === "contact us" && (
                      <span className="text-slate-600 ml-2 text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                        <X className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full py-5 ${
                      plan.highlight
                        ? "bg-violet-500 text-white hover:bg-violet-600"
                        : "bg-slate-200 text-slate-900 hover:bg-slate-300"
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

          {/* GEO Analyzer Pricing */}
          <section className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Brain className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold">GEO Analyzer</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {geoPlans.map((plan, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-2xl font-extrabold mb-2">{plan.price}</p>
                  <p className="text-sm text-slate-500 mb-4">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full rounded-full py-5 bg-slate-200 text-slate-900 hover:bg-slate-300">
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

          {/* Comparison with competitors */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">How we compare</h2>
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-center p-4 font-bold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-bold text-slate-500">ClickUp</th>
                    <th className="text-center p-4 font-bold text-slate-500">Monday</th>
                    <th className="text-center p-4 font-bold text-slate-500">Asana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-violet-400">{row.whatstask}</td>
                      <td className="p-4 text-center text-slate-500">{row.clickup}</td>
                      <td className="p-4 text-center text-slate-500">{row.monday}</td>
                      <td className="p-4 text-center text-slate-500">{row.asana}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-6">
              <Link href="/compare/clickup" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-2">
                See full comparisons <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently asked</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the free tier really free?",
                  a: "Yes. Unlimited tasks, AI features, time tracking. No credit card required. No time limit.",
                },
                {
                  q: "Why don't you charge per seat?",
                  a: "Per-seat pricing punishes teams for growing. We want you to add team members freely.",
                },
                {
                  q: "How does this compare to ClickUp's AI pricing?",
                  a: "ClickUp charges $28/user/month for AI. We include AI free. On Pro, you get advanced AI for $4.99/month total.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. No contracts, no cancellation fees. Cancel whenever you want.",
                },
                {
                  q: "What if I need custom features?",
                  a: "Contact us about Enterprise plans. We build custom solutions for teams with specific needs.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-3xl font-bold mb-4">Start free today</h2>
              <p className="text-slate-600 mb-8">
                No credit card required. No time limits. Just start working.
              </p>
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Get Started Free
                </a>
              </Button>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
