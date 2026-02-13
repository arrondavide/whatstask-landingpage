import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Asana: Honest Comparison [2026] | Simpler Alternative",
  description:
    "Compare Whatstask vs Asana: Free AI vs Enterprise-only, instant setup vs weeks of configuration. Find the right project management tool for your team.",
  keywords: [
    "whatstask vs asana",
    "asana alternative",
    "simple asana alternative",
    "asana comparison",
    "asana pricing",
    "free asana alternative",
  ],
  openGraph: {
    title: "Whatstask vs Asana: Complete Comparison [2026]",
    description: "Free AI vs Enterprise-only. Instant setup vs weeks. Which project management tool is right for you?",
    url: "https://www.whatstask.com/compare/asana",
    siteName: "Whatstask",
    type: "article",
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/asana",
  },
}

export default function AsanaComparisonPage() {
  const comparison = [
    { feature: "AI Features", whatstask: "Free", asana: "Enterprise only", winner: "whatstask" },
    { feature: "Setup Time", whatstask: "30 seconds", asana: "Weeks", winner: "whatstask" },
    { feature: "Time Tracking", whatstask: "Built-in free", asana: "Third-party integration", winner: "whatstask" },
    { feature: "Learning Curve", whatstask: "Minimal", asana: "Significant", winner: "whatstask" },
    { feature: "Mobile Experience", whatstask: "Mobile-first", asana: "Desktop-first", winner: "whatstask" },
    { feature: "Free Tier Tasks", whatstask: "Unlimited", asana: "Limited", winner: "whatstask" },
    { feature: "Portfolio Management", whatstask: "Basic", asana: "Advanced", winner: "asana" },
    { feature: "Workload Management", whatstask: "Basic", asana: "Advanced", winner: "asana" },
    { feature: "Goals & OKRs", whatstask: "Not yet", asana: "Available", winner: "asana" },
    { feature: "Forms", whatstask: "Not yet", asana: "Available", winner: "asana" },
    { feature: "Team Collaboration", whatstask: "Full support", asana: "Full support", winner: "tie" },
  ]

  const keyDifferences = [
    { title: "AI Access", asana: "Enterprise tier only", whatstask: "Free for everyone" },
    { title: "Setup Time", asana: "Weeks of configuration", whatstask: "30 seconds" },
    { title: "Complexity", asana: "Steep learning curve", whatstask: "Start instantly" },
  ]

  const switchReasons = [
    {
      title: '"AI features are locked behind Enterprise"',
      description: "Asana's AI requires Enterprise pricing. Whatstask includes AI free for everyone.",
    },
    {
      title: '"Setup took way too long"',
      description: "Asana projects can take weeks to configure properly. Whatstask works in 30 seconds.",
    },
    {
      title: '"We needed time tracking without extra tools"',
      description: "Asana requires third-party integrations for time tracking. Whatstask has it built-in.",
    },
    {
      title: '"It was overkill for our team"',
      description: "Asana's features are great for enterprises but overwhelming for smaller teams.",
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
              Whatstask vs Asana
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Asana is enterprise-focused and complex. Whatstask is simple and works for everyone. Here's an honest comparison.
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
                      "You want AI features without Enterprise pricing",
                      "You need to start immediately",
                      "You want built-in time tracking",
                      "You prefer simplicity",
                      "You're a small to medium team",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-500 mb-4">Choose Asana if:</h3>
                  <ul className="space-y-2">
                    {[
                      "You need portfolio management",
                      "You want workload balancing",
                      "You need goals & OKR tracking",
                      "You're an enterprise with budget",
                      "You need advanced forms",
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">The key differences</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyDifferences.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-2">Asana: {item.asana}</p>
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
                    <th className="text-center p-6 font-medium text-neutral-500">Asana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-300">{row.feature}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-white font-medium" : "text-neutral-500"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "asana" ? "text-white font-medium" : "text-neutral-500"}`}>
                        {row.asana}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why teams switch from Asana</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Try the simpler alternative</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                AI included. Time tracking built-in. Ready in 30 seconds.
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
            headline: "Whatstask vs Asana: Complete Comparison",
            description: "Compare Whatstask and Asana project management tools",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
