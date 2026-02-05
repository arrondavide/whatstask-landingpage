import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Send, Zap, FileText, Clock } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"
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
              { label: "Compare", href: "/compare/notion" },
              { label: "vs Notion", href: "/compare/notion" },
            ]}
          />

          <section className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Whatstask vs Notion
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Notion does everything. Whatstask does one thing really well: project management.
              Here's an honest look at both approaches.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-violet-400" />
                The Fundamental Difference
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-violet-400 mb-2">Whatstask</h3>
                  <p className="text-slate-700">
                    <strong>Focused tool.</strong> Does project management and does it well.
                    4 views, built-in time tracking, free AI. Opinionated about how work should flow.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-600 mb-2">Notion</h3>
                  <p className="text-slate-600">
                    <strong>Everything tool.</strong> Docs, wikis, databases, tasks, notes.
                    Infinitely flexible but requires significant setup and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key differences</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Zap className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Philosophy</h3>
                <p className="text-slate-600 text-sm mb-4">Notion: Build anything you want</p>
                <p className="text-violet-400 font-medium">Whatstask: We built it for you</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <Clock className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Time to Productive</h3>
                <p className="text-slate-600 text-sm mb-4">Notion: Hours/days of setup</p>
                <p className="text-violet-400 font-medium">Whatstask: 30 seconds</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                <FileText className="h-10 w-10 text-violet-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Scope</h3>
                <p className="text-slate-600 text-sm mb-4">Notion: Everything in one place</p>
                <p className="text-violet-400 font-medium">Whatstask: Tasks done right</p>
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
                    <th className="text-center p-4 font-bold text-slate-500">Notion</th>
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
                      <td className={`p-4 text-center ${row.winner === "notion" ? "text-slate-700" : "text-slate-500"}`}>
                        {row.notion}
                        {row.winner === "notion" && <Check className="h-4 w-4 inline ml-2" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-2xl p-6 border border-violet-500/30">
                <h3 className="font-bold text-violet-400 mb-4">Choose Whatstask if:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• You want a tool that works immediately</li>
                  <li>• You don't want to build your own system</li>
                  <li>• You need built-in time tracking</li>
                  <li>• You want free AI features</li>
                  <li>• You're focused on task management</li>
                  <li>• You prefer opinionated over flexible</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-600 mb-4">Choose Notion if:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• You need docs, wikis, AND tasks</li>
                  <li>• You want to build custom systems</li>
                  <li>• You have time to set things up</li>
                  <li>• You need extensive templates</li>
                  <li>• Flexibility is more important than speed</li>
                  <li>• You're comfortable with complexity</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Can you use both?</h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <p className="text-slate-600 text-center text-lg">
                Yes! Many teams use <strong className="text-white">Notion for documentation</strong> and{" "}
                <strong className="text-white">Whatstask for task management</strong>.
                <br /><br />
                Notion is great for knowledge bases, meeting notes, and long-form content.
                Whatstask is great for actually getting tasks done.
              </p>
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-3xl font-bold mb-4">Want focused task management?</h2>
              <p className="text-slate-600 mb-8">
                No setup required. No databases to build. Just start managing tasks.
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
            headline: "Whatstask vs Notion: Complete Comparison",
            description: "Compare Whatstask and Notion for project management",
            author: { "@type": "Organization", name: "Whatstask" },
          }),
        }}
      />
    </>
  )
}
