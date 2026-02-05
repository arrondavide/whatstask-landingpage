import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X, DollarSign, Zap, Smartphone, Send } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask Mini App vs Todoist: Complete Comparison [2025]",
  description:
    "Whatstask Telegram Mini App vs Todoist: Compare time tracking, team collaboration, pricing, and features. Which work management platform is right for you in 2025?",
  keywords:
    "telegram mini app vs todoist, whatstask vs todoist, todoist alternative telegram, work management comparison, time tracking todoist, team collaboration telegram",
  openGraph: {
    title: "Whatstask Mini App vs Todoist: Full Comparison [2025]",
    description: "Compare Whatstask (Telegram Mini App with time tracking & teams) vs Todoist. Features, pricing, and which is best for you.",
    url: "https://www.whatstask.com/compare/todoist",
    siteName: "Whatstask",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask Mini App vs Todoist: Which is Better?",
    description: "Honest comparison: Telegram Mini App with time tracking vs Todoist's standalone app.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/todoist",
  },
}

export default function WhatstaskVsTodoistPage() {
  const comparison = [
    {
      category: "Platform Type",
      whatstask: "Full Mini App (complete UI)",
      todoist: "Native App (requires installation)",
      winner: "whatstask",
    },
    {
      category: "Time Tracking",
      whatstask: "Built-in (clock in/out, reports)",
      todoist: "Not available (need Toggl integration)",
      winner: "whatstask",
    },
    {
      category: "Team Collaboration",
      whatstask: "Full support with 3-tier roles (Free)",
      todoist: "Limited on free, full on Business plan",
      winner: "whatstask",
    },
    {
      category: "Multi-Company Workspaces",
      whatstask: "Unlimited companies/workspaces",
      todoist: "Not available",
      winner: "whatstask",
    },
    {
      category: "Subtasks & Checklists",
      whatstask: "Full support",
      todoist: "Full support",
      winner: "tie",
    },
    {
      category: "Analytics Dashboard",
      whatstask: "Personal & team time tracking metrics",
      todoist: "Karma points & productivity trends",
      winner: "tie",
    },
    {
      category: "Platform",
      whatstask: "Works in Telegram (no app needed)",
      todoist: "Dedicated app required",
      winner: "whatstask",
    },
    {
      category: "Pricing",
      whatstask: "Free + $4.99/mo Pro",
      todoist: "Free + $4/mo Pro + $6/mo Business",
      winner: "tie",
    },
    {
      category: "Setup Time",
      whatstask: "< 60 seconds (just open Mini App)",
      todoist: "~5 minutes (download, signup, setup)",
      winner: "whatstask",
    },
    {
      category: "Integrations",
      whatstask: "Telegram ecosystem",
      todoist: "1000+ app integrations",
      winner: "todoist",
    },
    {
      category: "PDF Tools",
      whatstask: "Yes (free)",
      todoist: "No",
      winner: "whatstask",
    },
    {
      category: "Task Organization",
      whatstask: "Categories, tags, companies",
      todoist: "Projects, sections, labels, filters",
      winner: "todoist",
    },
    {
      category: "Mobile Experience",
      whatstask: "Mini App in Telegram",
      todoist: "Native iOS/Android apps",
      winner: "tie",
    },
    {
      category: "Learning Curve",
      whatstask: "Easy - familiar UI",
      todoist: "Moderate - need to learn features",
      winner: "whatstask",
    },
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
                <Send className="h-4 w-4 mr-2" />
                Try Free
              </a>
            </Button>
          </div>
        </header>

        {/* Hero */}
        <section className="container mx-auto px-4 py-12">
          <Breadcrumbs
            items={[
              { label: "Compare", href: "/compare/todoist" },
              { label: "vs Todoist", href: "/compare/todoist" },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center mb-12 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Telegram Task Bot vs Todoist: Pros & Cons
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Honest comparison between Whatstask (Telegram-based) and Todoist (standalone app). Which is better for
              your workflow?
            </p>
          </div>

          {/* Quick Verdict */}
          <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20 max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-violet-500" />
              Quick Verdict
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong>Choose Whatstask</strong> if you live in Telegram and want task management without app
              switching. It's faster to set up, includes free PDF tools, and has better natural language
              understanding. Perfect for individuals and small teams.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>Choose Todoist</strong> if you need deep integrations with other productivity tools, advanced
              project organization, or prefer a dedicated app experience. It's more mature with better analytics and
              gamification features.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Head-to-Head Comparison</h2>
            <div className="bg-slate-50 backdrop-blur-lg rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-6 font-bold">Feature</th>
                    <th className="text-center p-6 font-bold">Whatstask (Telegram)</th>
                    <th className="text-center p-6 font-bold">Todoist</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition">
                      <td className="p-6 font-medium">{row.category}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "bg-violet-500/10" : ""}`}>
                        {row.whatstask}
                        {row.winner === "whatstask" && <span className="ml-2 text-violet-500">✓</span>}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "todoist" ? "bg-red-500/10" : ""}`}>
                        {row.todoist}
                        {row.winner === "todoist" && <span className="ml-2 text-red-500">✓</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Differences */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Differences</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <Smartphone className="h-8 w-8 text-violet-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Platform Philosophy</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Whatstask:</strong> Lives inside Telegram. No app switching, instant access via chat.
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  <strong>Todoist:</strong> Standalone app. More powerful but requires separate installation.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <DollarSign className="h-8 w-8 text-violet-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Value Proposition</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Whatstask:</strong> Task management + PDF tools + no learning curve.
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  <strong>Todoist:</strong> Deep task organization + analytics + 1000+ integrations.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <Zap className="h-8 w-8 text-violet-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Target User</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Whatstask:</strong> Telegram power users, freelancers, small teams.
                </p>
                <p className="text-slate-600 leading-relaxed mt-2">
                  <strong>Todoist:</strong> Productivity enthusiasts, large teams, power organizers.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Which Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Whatstask Use Cases */}
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4">✅ Choose Whatstask if:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need built-in time tracking for billing clients accurately
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want team collaboration with roles (Admin/Manager/Employee)
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You manage multiple companies or client workspaces
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You already use Telegram daily and want everything in one app
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want zero setup time (no app installation needed)
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need unlimited team members on the free tier
                  </li>
                </ul>
              </div>

              {/* Todoist Use Cases */}
              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-4">✅ Choose Todoist if:</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need 1000+ app integrations
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You manage complex projects with many subtasks
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want detailed productivity analytics
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You prefer a dedicated task management app
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You love the Karma points system
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You work in a large team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Real User Scenarios */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Real-World Scenarios</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold mb-2">Scenario: "I need to quickly capture a task while messaging someone"</h4>
                <p className="text-slate-600 mb-2">
                  <strong className="text-violet-500">Whatstask wins:</strong> Open Telegram, type task to bot - done in
                  10 seconds without leaving your current chat.
                </p>
                <p className="text-slate-600">
                  <strong className="text-red-400">Todoist:</strong> Switch apps, wait for load, navigate to add
                  task, type, save, switch back - takes 30+ seconds.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold mb-2">
                  Scenario: "I need to organize 50 tasks across 5 projects with custom filters"
                </h4>
                <p className="text-slate-600 mb-2">
                  <strong className="text-red-400">Todoist wins:</strong> Advanced project hierarchy, custom
                  filters, labels, and sections make complex organization effortless.
                </p>
                <p className="text-slate-600">
                  <strong className="text-violet-500">Whatstask:</strong> Can handle this but organization features
                  are simpler - better for straightforward task lists.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold mb-2">Scenario: "I need to merge 3 PDFs and set a reminder to send them"</h4>
                <p className="text-slate-600 mb-2">
                  <strong className="text-violet-500">Whatstask wins:</strong> All-in-one solution. Merge PDFs in the
                  web tools, create reminder in the bot - seamless workflow.
                </p>
                <p className="text-slate-600">
                  <strong className="text-red-400">Todoist:</strong> Need separate PDF tool + Todoist app. More app
                  switching and friction.
                </p>
              </div>
            </div>
          </div>

          {/* Migration Guide */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold mb-4">Can I Use Both?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Yes! Many users keep Todoist for long-term project planning and use Whatstask for quick daily tasks
                and Telegram-based workflows.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Pro tip:</strong> Start with Whatstask (it's instant to set up). If you find yourself needing
                more advanced features after a few weeks, add Todoist to your toolkit. There's no lock-in with either
                platform.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-violet-500/20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Try Whatstask Free Today</h2>
            <p className="text-xl text-slate-600 mb-8">
              Start in 30 seconds. No app download, no signup forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Start Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                <Link href="/project-management">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>

        {/* FAQ Schema */}
        <Script
          id="schema-faq-todoist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Whatstask better than Todoist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask is better if you use Telegram daily and want instant task management without app switching. Todoist is better if you need advanced project organization and 1000+ app integrations. Both are excellent - it depends on your workflow.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use Whatstask and Todoist together?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Many users keep Todoist for long-term project planning and use Whatstask for quick daily tasks in Telegram. There's no conflict between the two tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is cheaper: Whatstask or Todoist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Both have similar pricing. Whatstask Pro is $4.99/month, while Todoist Pro is $4/month. Whatstask includes free PDF tools which adds extra value. Both offer generous free tiers.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-todoist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.whatstask.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Compare",
                  item: "https://www.whatstask.com/compare",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Whatstask vs Todoist",
                  item: "https://www.whatstask.com/compare/todoist",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
