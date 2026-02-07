import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask Mini App vs Todoist: Complete Comparison [2026]",
  description:
    "Whatstask Telegram Mini App vs Todoist: Compare time tracking, team collaboration, pricing, and features. Which work management platform is right for you?",
  keywords:
    "telegram mini app vs todoist, whatstask vs todoist, todoist alternative telegram, work management comparison, time tracking todoist, team collaboration telegram",
  openGraph: {
    title: "Whatstask Mini App vs Todoist: Full Comparison [2026]",
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
    { category: "Platform Type", whatstask: "Full Mini App (complete UI)", todoist: "Native App (requires installation)", winner: "whatstask" },
    { category: "Time Tracking", whatstask: "Built-in (clock in/out, reports)", todoist: "Not available (need Toggl integration)", winner: "whatstask" },
    { category: "Team Collaboration", whatstask: "Full support with 3-tier roles (Free)", todoist: "Limited on free, full on Business plan", winner: "whatstask" },
    { category: "Multi-Company Workspaces", whatstask: "Unlimited companies/workspaces", todoist: "Not available", winner: "whatstask" },
    { category: "Subtasks & Checklists", whatstask: "Full support", todoist: "Full support", winner: "tie" },
    { category: "Analytics Dashboard", whatstask: "Personal & team time tracking metrics", todoist: "Karma points & productivity trends", winner: "tie" },
    { category: "Platform", whatstask: "Works in Telegram (no app needed)", todoist: "Dedicated app required", winner: "whatstask" },
    { category: "Pricing", whatstask: "Free + $4.99/mo Pro", todoist: "Free + $4/mo Pro + $6/mo Business", winner: "tie" },
    { category: "Setup Time", whatstask: "Less than 60 seconds", todoist: "~5 minutes (download, signup, setup)", winner: "whatstask" },
    { category: "Integrations", whatstask: "Telegram ecosystem", todoist: "1000+ app integrations", winner: "todoist" },
    { category: "Task Organization", whatstask: "Categories, tags, companies", todoist: "Projects, sections, labels, filters", winner: "todoist" },
    { category: "Learning Curve", whatstask: "Easy - familiar UI", todoist: "Moderate - need to learn features", winner: "whatstask" },
  ]

  const keyDifferences = [
    { title: "Platform Philosophy", todoist: "Standalone app", whatstask: "Lives inside Telegram" },
    { title: "Value Proposition", todoist: "Deep organization + 1000+ integrations", whatstask: "Task management + PDF tools" },
    { title: "Target User", todoist: "Productivity enthusiasts, power organizers", whatstask: "Telegram users, freelancers, small teams" },
  ]

  const scenarios = [
    {
      title: "Quick task capture while messaging",
      whatstask: "Open Telegram, type task to bot - done in 10 seconds without leaving your current chat.",
      todoist: "Switch apps, wait for load, navigate to add task, type, save, switch back - takes 30+ seconds.",
      winner: "whatstask",
    },
    {
      title: "Organize 50 tasks across 5 projects with custom filters",
      whatstask: "Can handle this but organization features are simpler - better for straightforward task lists.",
      todoist: "Advanced project hierarchy, custom filters, labels, and sections make complex organization effortless.",
      winner: "todoist",
    },
    {
      title: "Merge 3 PDFs and set a reminder to send them",
      whatstask: "All-in-one solution. Merge PDFs in the web tools, create reminder in the bot - seamless workflow.",
      todoist: "Need separate PDF tool + Todoist app. More app switching and friction.",
      winner: "whatstask",
    },
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
              Whatstask vs Todoist
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Honest comparison between Whatstask (Telegram-based) and Todoist (standalone app). Which is better for your workflow?
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
                  <p className="text-slate-500 leading-relaxed">
                    You live in Telegram and want task management without app switching. It's faster to set up,
                    includes free PDF tools, and has better natural language understanding. Perfect for individuals and small teams.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-500 mb-4">Choose Todoist if:</h3>
                  <p className="text-slate-500 leading-relaxed">
                    You need deep integrations with other productivity tools, advanced project organization,
                    or prefer a dedicated app experience. It's more mature with better analytics and gamification features.
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
                  <p className="text-slate-500 text-sm mb-2">Todoist: {item.todoist}</p>
                  <p className="text-slate-900 text-sm font-medium">Whatstask: {item.whatstask}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Head-to-head comparison</h2>
            </div>
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-6 font-semibold text-slate-900">Whatstask</th>
                    <th className="text-center p-6 font-medium text-slate-500">Todoist</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0">
                      <td className="p-6 text-slate-900">{row.category}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "todoist" ? "text-slate-900 font-medium" : "text-slate-500"}`}>
                        {row.todoist}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Real-World Scenarios */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Scenarios</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Real-world scenarios</h2>
            </div>
            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-slate-900 mb-4">{scenario.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-500">
                        <span className={scenario.winner === "whatstask" ? "text-slate-900 font-medium" : ""}>Whatstask:</span> {scenario.whatstask}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        <span className={scenario.winner === "todoist" ? "text-slate-900 font-medium" : ""}>Todoist:</span> {scenario.todoist}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Choose Whatstask / Choose Todoist */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Decision</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Which should you choose?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-slate-900 mb-4">Choose Whatstask if:</h3>
                <ul className="space-y-2">
                  {[
                    "You need built-in time tracking for billing clients",
                    "You want team collaboration with roles (Admin/Manager/Employee)",
                    "You manage multiple companies or client workspaces",
                    "You already use Telegram daily and want everything in one app",
                    "You want zero setup time (no app installation needed)",
                    "You need unlimited team members on the free tier",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-slate-500 mb-4">Choose Todoist if:</h3>
                <ul className="space-y-2">
                  {[
                    "You need 1000+ app integrations",
                    "You manage complex projects with many subtasks",
                    "You want detailed productivity analytics",
                    "You prefer a dedicated task management app",
                    "You love the Karma points system",
                    "You work in a large team",
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

          {/* Can I Use Both? */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Compatibility</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Can I use both?</h2>
            </div>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12 text-center">
              <p className="text-slate-500 leading-relaxed text-lg font-light mb-4">
                Yes! Many users keep Todoist for long-term project planning and use Whatstask for quick daily tasks
                and Telegram-based workflows.
              </p>
              <p className="text-slate-500 leading-relaxed font-light">
                <span className="text-slate-900 font-medium">Pro tip:</span> Start with Whatstask (it's instant to set up). If you find yourself needing
                more advanced features after a few weeks, add Todoist to your toolkit. There's no lock-in with either platform.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try Whatstask free today</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">
                Start in 30 seconds. No app download, no signup forms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                  <Link href="/project-management">Learn More</Link>
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
