import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Monday.com: Honest Comparison [2026] | Simpler Alternative",
  description:
    "Compare Whatstask vs Monday.com: Free AI vs $12/seat, instant setup vs complex configuration. See which project management tool fits your team.",
  keywords: [
    "whatstask vs monday",
    "monday.com alternative",
    "simple monday alternative",
    "monday comparison",
    "monday.com pricing",
  ],
  openGraph: {
    title: "Whatstask vs Monday.com: Complete Comparison [2026]",
    description: "Free AI vs $12/seat. Instant setup vs complex configuration. Which is right for you?",
    url: "https://www.whatstask.com/compare/monday",
    siteName: "Whatstask",
    type: "article",
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/monday",
  },
}

export default function MondayComparisonPage() {
  const comparison = [
    { feature: "AI Features", whatstask: "Free", monday: "$12/seat/month", winner: "whatstask" },
    { feature: "Setup Time", whatstask: "30 seconds", monday: "Hours to days", winner: "whatstask" },
    { feature: "Time Tracking", whatstask: "Built-in free", monday: "Add-on required", winner: "whatstask" },
    { feature: "Learning Curve", whatstask: "Minimal", monday: "Moderate", winner: "whatstask" },
    { feature: "Mobile Experience", whatstask: "Mobile-first", monday: "Desktop-first", winner: "whatstask" },
    { feature: "Free Tier", whatstask: "Generous", monday: "Very limited", winner: "whatstask" },
    { feature: "Pricing Transparency", whatstask: "Simple", monday: "Complex tiers", winner: "whatstask" },
    { feature: "Integrations", whatstask: "Growing", monday: "200+", winner: "monday" },
    { feature: "Automations", whatstask: "Basic", monday: "Extensive", winner: "monday" },
    { feature: "Visual Dashboards", whatstask: "Basic", monday: "Advanced", winner: "monday" },
    { feature: "Team Size Scaling", whatstask: "Any size", monday: "Better for larger", winner: "tie" },
  ]

  const keyDifferences = [
    { title: "AI Pricing", monday: "$12/seat/month extra", whatstask: "Included free" },
    { title: "Time Tracking", monday: "Requires add-on", whatstask: "Built-in free" },
    { title: "Getting Started", monday: "Complex setup", whatstask: "30 seconds" },
  ]

  const pricingComparison = [
    { tier: "Basic (per seat/month)", price: "$9" },
    { tier: "Standard (per seat/month)", price: "$12" },
    { tier: "Pro (per seat/month)", price: "$19" },
    { tier: "AI add-on (per seat/month)", price: "+$12" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Comparison</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Whatstask vs Monday.com
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Monday.com is feature-rich but expensive. Whatstask is simple and affordable. Here's an honest look at both.
            </p>
          </section>

          {/* Quick Verdict */}
          <section className="mb-24">
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Quick Verdict</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Choose Whatstask if:</h3>
                  <ul className="space-y-2">
                    {[
                      "You want free AI features",
                      "Budget matters to you",
                      "You want instant setup",
                      "You need built-in time tracking",
                      "You prefer simple pricing",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-500 mb-4">Choose Monday if:</h3>
                  <ul className="space-y-2">
                    {[
                      "You need visual dashboards",
                      "You want extensive automations",
                      "You need 200+ integrations",
                      "Budget isn't a constraint",
                      "You need advanced reporting",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
                        <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The key differences</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyDifferences.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-2">Monday: {item.monday}</p>
                  <p className="text-slate-900 text-sm font-medium">Whatstask: {item.whatstask}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Feature comparison</h2>
            </div>
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-6 font-semibold text-slate-900">Whatstask</th>
                    <th className="text-center p-6 font-medium text-slate-500">Monday.com</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0">
                      <td className="p-6 text-slate-900">{row.feature}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "monday" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.monday}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Reality */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Monday.com pricing reality</h2>
            </div>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12">
              <p className="text-slate-500 mb-8 text-center font-light">
                Monday.com's pricing can be confusing. Here's what you actually pay:
              </p>
              <div className="space-y-4 max-w-md mx-auto">
                {pricingComparison.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-700">{item.tier}</span>
                    <span className="text-slate-500">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center p-4 border border-slate-900 rounded-xl">
                  <span className="text-slate-900 font-medium">Whatstask Pro (flat)</span>
                  <span className="text-slate-900 font-medium">$4.99/month (AI included)</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try the affordable alternative</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">
                Same core features. Free AI. Fraction of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Try Whatstask Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>

      <Script
        id="schema-comparison"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Whatstask vs Monday.com: Complete Comparison",
            description: "Compare Whatstask and Monday.com project management tools",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
