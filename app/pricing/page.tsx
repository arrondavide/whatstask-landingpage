import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

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
      description: "For individuals and small teams",
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
      description: "For growing teams",
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
      description: "For specific needs",
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
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Simple pricing. No surprises.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Free forever tier with AI included. No per-seat pricing games.
            </p>
          </section>

          {/* Project Management Pricing */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Project Management</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pmPlans.map((plan, index) => (
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
                  <div className="mb-4">
                    <span className="text-4xl font-light text-white">{plan.price}</span>
                    {plan.period !== "contact us" && (
                      <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                    )}
                    {plan.period === "contact us" && (
                      <span className="text-neutral-500 ml-2 text-sm">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400 mb-8">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
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

          {/* GEO Analyzer Pricing */}
          <section className="mb-24 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">GEO Analyzer</p>
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
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">Feature</th>
                    <th className="text-center p-4 font-semibold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-medium text-neutral-500">ClickUp</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Monday</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Asana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-4 font-medium text-neutral-300">{row.feature}</td>
                      <td className="p-4 text-center text-white">{row.whatstask}</td>
                      <td className="p-4 text-center text-neutral-500">{row.clickup}</td>
                      <td className="p-4 text-center text-neutral-500">{row.monday}</td>
                      <td className="p-4 text-center text-neutral-500">{row.asana}</td>
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
                No credit card required. No time limits. Just start working.
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
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
