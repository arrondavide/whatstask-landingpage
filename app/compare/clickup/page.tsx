import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X, Send, Zap, DollarSign, Clock } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs ClickUp: Honest Comparison [2026] | Simple Alternative",
  description:
    "Compare Whatstask vs ClickUp: 4 views vs 15+, free AI vs $28/user, 30-second setup vs days. See which project management tool is right for your team.",
  keywords: [
    "whatstask vs clickup",
    "clickup alternative",
    "simple clickup alternative",
    "clickup comparison",
    "project management comparison",
    "clickup too complex",
  ],
  openGraph: {
    title: "Whatstask vs ClickUp: Complete Comparison [2026]",
    description: "4 views vs 15+. Free AI vs $28/user. Which project management tool is right for you?",
    url: "https://www.whatstask.com/compare/clickup",
    siteName: "Whatstask",
    type: "article",
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/clickup",
  },
}

export default function ClickUpComparisonPage() {
  const comparison = [
    { feature: "Views Available", whatstask: "4 essential views", clickup: "15+ views", winner: "depends" },
    { feature: "AI Task Creation", whatstask: "Free", clickup: "$28/user/month", winner: "whatstask" },
    { feature: "Time Tracking", whatstask: "Built-in free", clickup: "Available", winner: "whatstask" },
    { feature: "Setup Time", whatstask: "30 seconds", clickup: "Days to weeks", winner: "whatstask" },
    { feature: "Learning Curve", whatstask: "Minimal", clickup: "Steep", winner: "whatstask" },
    { feature: "Mobile Experience", whatstask: "Mobile-first", clickup: "Desktop-first", winner: "whatstask" },
    { feature: "Free Tier", whatstask: "Generous", clickup: "Limited", winner: "whatstask" },
    { feature: "Integrations", whatstask: "Telegram + growing", clickup: "1000+", winner: "clickup" },
    { feature: "Custom Fields", whatstask: "Basic", clickup: "Advanced", winner: "clickup" },
    { feature: "Automations", whatstask: "Coming soon", clickup: "Extensive", winner: "clickup" },
    { feature: "Team Collaboration", whatstask: "Full support", clickup: "Full support", winner: "tie" },
    { feature: "Pricing (Pro)", whatstask: "$4.99/month", clickup: "$7-19/user/month", winner: "whatstask" },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
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
          <Breadcrumbs
            items={[
              { label: "Compare", href: "/compare/clickup" },
              { label: "vs ClickUp", href: "/compare/clickup" },
            ]}
          />

          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Whatstask vs ClickUp
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              An honest comparison. ClickUp is powerful but complex. Whatstask is simple and scales.
              Which is right for you?
            </p>
          </section>

          {/* Quick Verdict */}
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
                    <li>• You want simplicity over features</li>
                    <li>• You need free AI task creation</li>
                    <li>• You want to start in 30 seconds</li>
                    <li>• You prefer mobile-first tools</li>
                    <li>• You're tired of complex software</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-600 mb-2">Choose ClickUp if:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• You need 1000+ integrations</li>
                    <li>• You want extensive automations</li>
                    <li>• You need advanced custom fields</li>
                    <li>• Complexity doesn't bother you</li>
                    <li>• You have time for setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* The Core Difference */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The core difference</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Zap className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Complexity</h3>
                <p className="text-slate-600 text-sm mb-4">ClickUp: 15+ views to learn</p>
                <p className="text-violet-400 font-medium">Whatstask: 4 views that matter</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <DollarSign className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">AI Features</h3>
                <p className="text-slate-600 text-sm mb-4">ClickUp: $28/user/month extra</p>
                <p className="text-violet-400 font-medium">Whatstask: Included free</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Clock className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Setup Time</h3>
                <p className="text-slate-600 text-sm mb-4">ClickUp: Days to weeks</p>
                <p className="text-violet-400 font-medium">Whatstask: 30 seconds</p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Feature-by-feature comparison</h2>
            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-center p-4 font-bold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-bold text-slate-500">ClickUp</th>
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
                      <td className={`p-4 text-center ${row.winner === "clickup" ? "text-slate-700" : "text-slate-500"}`}>
                        {row.clickup}
                        {row.winner === "clickup" && <Check className="h-4 w-4 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why People Switch */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why teams switch from ClickUp</h2>
            <div className="space-y-4">
              {[
                {
                  title: '"We never use most of the features"',
                  description: "Teams pay for 15+ views but only use 3-4. Whatstask gives you exactly what you need.",
                },
                {
                  title: '"Onboarding new team members takes forever"',
                  description: "ClickUp's complexity means training. Whatstask's simplicity means people just start working.",
                },
                {
                  title: '"AI features are too expensive"',
                  description: "ClickUp charges $28/user/month for AI. We include it free.",
                },
                {
                  title: '"We wanted something faster"',
                  description: "Whatstask loads instantly. Works in Telegram. No heavy desktop app.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When ClickUp is Better */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">When ClickUp is the better choice</h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <p className="text-slate-600 mb-6">We're honest: ClickUp is better if you need:</p>
              <ul className="space-y-3">
                {[
                  "1000+ native integrations with other tools",
                  "Complex automation workflows",
                  "Advanced custom fields and databases",
                  "Detailed permission structures",
                  "You have dedicated time for setup and training",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700">
                    <Check className="h-5 w-5 text-slate-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-3xl font-bold mb-4">Try the simpler way</h2>
              <p className="text-slate-600 mb-8">
                No credit card. No signup forms. Start managing tasks in 30 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5 mr-2" />
                    Try Whatstask Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                  <Link href="/project-management">See All Features</Link>
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
            headline: "Whatstask vs ClickUp: Complete Comparison",
            description: "Compare Whatstask and ClickUp project management tools",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
