import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Send, Zap, DollarSign, Clock } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
          <Breadcrumbs
            items={[
              { label: "Compare", href: "/compare/asana" },
              { label: "vs Asana", href: "/compare/asana" },
            ]}
          />

          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Whatstask vs Asana
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Asana is enterprise-focused and complex. Whatstask is simple and works for everyone.
              Here's an honest comparison.
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
                    <li>• You want AI features without Enterprise pricing</li>
                    <li>• You need to start immediately</li>
                    <li>• You want built-in time tracking</li>
                    <li>• You prefer simplicity</li>
                    <li>• You're a small to medium team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-600 mb-2">Choose Asana if:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• You need portfolio management</li>
                    <li>• You want workload balancing</li>
                    <li>• You need goals & OKR tracking</li>
                    <li>• You're an enterprise with budget</li>
                    <li>• You need advanced forms</li>
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
                <h3 className="text-lg font-bold mb-2">AI Access</h3>
                <p className="text-slate-600 text-sm mb-4">Asana: Enterprise tier only</p>
                <p className="text-violet-400 font-medium">Whatstask: Free for everyone</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Clock className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Setup Time</h3>
                <p className="text-slate-600 text-sm mb-4">Asana: Weeks of configuration</p>
                <p className="text-violet-400 font-medium">Whatstask: 30 seconds</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Zap className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Complexity</h3>
                <p className="text-slate-600 text-sm mb-4">Asana: Steep learning curve</p>
                <p className="text-violet-400 font-medium">Whatstask: Start instantly</p>
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
                    <th className="text-center p-4 font-bold text-slate-500">Asana</th>
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
                      <td className={`p-4 text-center ${row.winner === "asana" ? "text-slate-700" : "text-slate-500"}`}>
                        {row.asana}
                        {row.winner === "asana" && <Check className="h-4 w-4 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why teams switch from Asana</h2>
            <div className="space-y-4">
              {[
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
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-3xl font-bold mb-4">Try the simpler alternative</h2>
              <p className="text-slate-600 mb-8">
                AI included. Time tracking built-in. Ready in 30 seconds.
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
            headline: "Whatstask vs Asana: Complete Comparison",
            description: "Compare Whatstask and Asana project management tools",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
