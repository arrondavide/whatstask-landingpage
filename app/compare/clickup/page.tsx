import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
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

  const keyDifferences = [
    { title: "Complexity", clickup: "15+ views to learn", whatstask: "4 views that matter" },
    { title: "AI Features", clickup: "$28/user/month extra", whatstask: "Included free" },
    { title: "Setup Time", clickup: "Days to weeks", whatstask: "30 seconds" },
  ]

  const switchReasons = [
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
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Whatstask vs ClickUp
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              ClickUp is powerful but complex. Whatstask is simple and scales. Which is right for you?
            </p>
          </section>

          {/* Quick Verdict */}
          <section className="mb-24">
            <div className="border border-white/10 rounded-2xl p-10 md:p-12 bg-white/5">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Quick Verdict</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-semibold text-white mb-4">Choose Whatstask if:</h3>
                  <ul className="space-y-2">
                    {[
                      "You want simplicity over features",
                      "You need free AI task creation",
                      "You want to start in 30 seconds",
                      "You prefer mobile-first tools",
                      "You're tired of complex software",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-500 mb-4">Choose ClickUp if:</h3>
                  <ul className="space-y-2">
                    {[
                      "You need 1000+ integrations",
                      "You want extensive automations",
                      "You need advanced custom fields",
                      "Complexity doesn't bother you",
                      "You have time for setup",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-500">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
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
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The core difference</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyDifferences.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-2">ClickUp: {item.clickup}</p>
                  <p className="text-white text-sm font-medium">Whatstask: {item.whatstask}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Feature comparison</h2>
            </div>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">Feature</th>
                    <th className="text-center p-6 font-semibold text-violet-400">Whatstask</th>
                    <th className="text-center p-6 font-medium text-neutral-500">ClickUp</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-300">{row.feature}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-white font-medium" : "text-neutral-500"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "clickup" ? "text-white font-medium" : "text-neutral-500"}`}>
                        {row.clickup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Switch Reasons */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Feedback</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why teams switch from ClickUp</h2>
            </div>
            <div className="space-y-4">
              {switchReasons.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Try the simpler way</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                No credit card. No signup forms. Start managing tasks in 30 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Try Whatstask Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/project-management">See All Features</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
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
