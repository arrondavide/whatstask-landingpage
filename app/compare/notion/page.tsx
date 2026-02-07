import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Notion: Honest Comparison [2026] | Focused Alternative",
  description:
    "Compare Whatstask vs Notion for project management. Whatstask is focused on tasks. Notion is everything. See which is right for your team.",
  keywords: [
    "whatstask vs notion",
    "notion alternative",
    "notion project management alternative",
    "notion comparison",
    "notion for project management",
    "focused task management",
  ],
  openGraph: {
    title: "Whatstask vs Notion: Complete Comparison [2026]",
    description: "Focused task management vs everything-app. Which approach is right for you?",
    url: "https://www.whatstask.com/compare/notion",
    siteName: "Whatstask",
    type: "article",
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/notion",
  },
}

export default function NotionComparisonPage() {
  const comparison = [
    { feature: "Primary Focus", whatstask: "Project management", notion: "Everything (docs, wikis, tasks, etc.)", winner: "depends" },
    { feature: "AI Features", whatstask: "Free", notion: "$8-10/member/month", winner: "whatstask" },
    { feature: "Setup Time", whatstask: "30 seconds", notion: "Hours to weeks", winner: "whatstask" },
    { feature: "Learning Curve", whatstask: "Minimal", notion: "Significant", winner: "whatstask" },
    { feature: "Time Tracking", whatstask: "Built-in", notion: "Requires setup/integration", winner: "whatstask" },
    { feature: "Mobile Experience", whatstask: "Mobile-first", notion: "Desktop-first", winner: "whatstask" },
    { feature: "Document Creation", whatstask: "Basic task notes", notion: "Full docs/wikis", winner: "notion" },
    { feature: "Database Flexibility", whatstask: "Focused views", notion: "Highly flexible", winner: "notion" },
    { feature: "Templates", whatstask: "Task-focused", notion: "Extensive library", winner: "notion" },
    { feature: "Team Wiki", whatstask: "Not available", notion: "Full support", winner: "notion" },
  ]

  const keyDifferences = [
    { title: "Philosophy", notion: "Build anything you want", whatstask: "We built it for you" },
    { title: "Time to Productive", notion: "Hours/days of setup", whatstask: "30 seconds" },
    { title: "Scope", notion: "Everything in one place", whatstask: "Tasks done right" },
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
              Whatstask vs Notion
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Notion does everything. Whatstask does one thing really well: project management.
              Here's an honest look at both approaches.
            </p>
          </section>

          {/* Fundamental Difference */}
          <section className="mb-24">
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Overview</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The fundamental difference</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Whatstask</h3>
                  <p className="text-slate-500 leading-relaxed">
                    <span className="font-medium text-slate-900">Focused tool.</span> Does project management and does it well.
                    4 views, built-in time tracking, free AI. Opinionated about how work should flow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-500 mb-4">Notion</h3>
                  <p className="text-slate-500 leading-relaxed">
                    <span className="font-medium text-slate-500">Everything tool.</span> Docs, wikis, databases, tasks, notes.
                    Infinitely flexible but requires significant setup and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Key differences</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyDifferences.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-2">Notion: {item.notion}</p>
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
                    <th className="text-center p-6 font-medium text-slate-500">Notion</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0">
                      <td className="p-6 text-slate-900">{row.feature}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "notion" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.notion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Verdict */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Quick Verdict</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Choose Whatstask if:</h3>
                <ul className="space-y-2">
                  {[
                    "You want a tool that works immediately",
                    "You don't want to build your own system",
                    "You need built-in time tracking",
                    "You want free AI features",
                    "You're focused on task management",
                    "You prefer opinionated over flexible",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-slate-500 mb-4">Choose Notion if:</h3>
                <ul className="space-y-2">
                  {[
                    "You need docs, wikis, AND tasks",
                    "You want to build custom systems",
                    "You have time to set things up",
                    "You need extensive templates",
                    "Flexibility is more important than speed",
                    "You're comfortable with complexity",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Can you use both? */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Compatibility</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Can you use both?</h2>
            </div>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12 text-center">
              <p className="text-slate-500 leading-relaxed text-lg font-light">
                Yes! Many teams use <span className="text-slate-900 font-medium">Notion for documentation</span> and{" "}
                <span className="text-slate-900 font-medium">Whatstask for task management</span>.
              </p>
              <p className="text-slate-500 leading-relaxed mt-4 font-light">
                Notion is great for knowledge bases, meeting notes, and long-form content.
                Whatstask is great for actually getting tasks done.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Want focused task management?</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">
                No setup required. No databases to build. Just start managing tasks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Try Whatstask Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                  <Link href="/project-management">See All Features</Link>
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
            headline: "Whatstask vs Notion: Complete Comparison",
            description: "Compare Whatstask and Notion for project management",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
