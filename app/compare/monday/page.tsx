import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Send, Zap, DollarSign, Clock } from "lucide-react"
import PageLoader from "@/components/page-loader"
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

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Try Free
              </a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Whatstask vs Monday.com
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Monday.com is feature-rich but expensive. Whatstask is simple and affordable.
              Here's an honest look at both.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-violet-400" />
                Quick Verdict
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-violet-400 mb-2">Choose Whatstask if:</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• You want free AI features</li>
                    <li>• Budget matters to you</li>
                    <li>• You want instant setup</li>
                    <li>• You need built-in time tracking</li>
                    <li>• You prefer simple pricing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-600 mb-2">Choose Monday if:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• You need visual dashboards</li>
                    <li>• You want extensive automations</li>
                    <li>• You need 200+ integrations</li>
                    <li>• Budget isn't a constraint</li>
                    <li>• You need advanced reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The key differences</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <DollarSign className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">AI Pricing</h3>
                <p className="text-slate-600 text-sm mb-4">Monday: $12/seat/month extra</p>
                <p className="text-violet-400 font-medium">Whatstask: Included free</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Clock className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Time Tracking</h3>
                <p className="text-slate-600 text-sm mb-4">Monday: Requires add-on</p>
                <p className="text-violet-400 font-medium">Whatstask: Built-in free</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Zap className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Getting Started</h3>
                <p className="text-slate-600 text-sm mb-4">Monday: Complex setup</p>
                <p className="text-violet-400 font-medium">Whatstask: 30 seconds</p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Feature comparison</h2>
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-center p-4 font-bold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-bold text-slate-500">Monday.com</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className={`p-4 text-center ${row.winner === "whatstask" ? "text-violet-400" : ""}`}>
                        {row.whatstask}
                        {row.winner === "whatstask" && <Check className="h-4 w-4 inline ml-2" />}
                      </td>
                      <td className={`p-4 text-center ${row.winner === "monday" ? "text-slate-700" : "text-slate-500"}`}>
                        {row.monday}
                        {row.winner === "monday" && <Check className="h-4 w-4 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Monday.com pricing reality</h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <p className="text-slate-600 mb-6">
                Monday.com's pricing can be confusing. Here's what you actually pay:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span>Basic (per seat/month)</span>
                  <span className="text-slate-600">$9</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span>Standard (per seat/month)</span>
                  <span className="text-slate-600">$12</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span>Pro (per seat/month)</span>
                  <span className="text-slate-600">$19</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                  <span>AI add-on (per seat/month)</span>
                  <span className="text-slate-600">+$12</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-violet-500/10 rounded-xl border border-violet-500/30">
                  <span className="text-violet-400 font-medium">Whatstask Pro (flat)</span>
                  <span className="text-violet-400 font-medium">$4.99/month (AI included)</span>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-3xl font-bold mb-4">Try the affordable alternative</h2>
              <p className="text-slate-600 mb-8">
                Same core features. Free AI. Fraction of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5 mr-2" />
                    Try Whatstask Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

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
