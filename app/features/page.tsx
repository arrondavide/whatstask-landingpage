import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - Task Management, Time Tracking & Teams | Whatstask",
  description:
    "Complete task management with subtasks, built-in time tracking, 3-tier team roles, multi-company workspaces, and real-time analytics. All in Telegram. Start free →",
  keywords:
    "telegram mini app features, work management features, time tracking app, team collaboration features, task management telegram, company workspace, project management telegram",
  openGraph: {
    title: "Features - Work Management Mini App | Whatstask",
    description:
      "Task management, time tracking, team collaboration, analytics - complete work management platform in Telegram.",
    url: "https://www.whatstask.com/features",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - Work Management Mini App | Whatstask",
    description: "Task management, time tracking, teams, analytics - all in one Telegram Mini App.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/features",
  },
}

export default function FeaturesPage() {
  const features = [
    {
      title: "Complete Task Management",
      description: "Create tasks with subtasks, priorities, due dates, file attachments, and recurring schedules.",
      category: "Task Management",
    },
    {
      title: "Subtasks & Checklists",
      description: "Break down complex tasks into manageable subtasks. Track progress as you complete each item.",
      category: "Task Management",
    },
    {
      title: "Recurring Tasks",
      description: "Set up daily, weekly, or monthly recurring tasks. Automatic creation based on your schedule.",
      category: "Task Management",
    },
    {
      title: "Time Tracking",
      description: "Track time with one-tap clock in/out. Automatic duration calculation. Generate time reports.",
      category: "Time Tracking",
    },
    {
      title: "Time Reports & Analytics",
      description: "View detailed time logs per task. Generate reports for invoicing. Export data for billing.",
      category: "Time Tracking",
    },
    {
      title: "Team Collaboration",
      description: "Invite unlimited team members. 3-tier roles: Admin, Manager, Employee. Role-based permissions.",
      category: "Team Features",
    },
    {
      title: "Comments & Activity",
      description: "Comment on tasks. Mention team members. Track all activity with complete audit trail.",
      category: "Team Features",
    },
    {
      title: "Multi-Company Workspaces",
      description: "Switch between multiple companies or projects. Perfect for freelancers and agencies.",
      category: "Company Management",
    },
    {
      title: "Simple Invitation Codes",
      description: "Invite team members with simple codes. No email verification needed. Start collaborating instantly.",
      category: "Company Management",
    },
    {
      title: "Analytics Dashboard",
      description: "Personal and team productivity metrics. Task completion rates, time analysis, visual charts.",
      category: "Analytics",
    },
    {
      title: "Notifications",
      description: "In-app and Telegram push notifications. Never miss task updates, comments, or deadlines.",
      category: "Notifications",
    },
    {
      title: "Offline Mode",
      description: "Work offline and changes sync automatically. Never lose your work due to connection issues.",
      category: "Advanced Features",
    },
  ]

  const categories = Array.from(new Set(features.map((f) => f.category)))

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Features</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Complete work management
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Task management, time tracking, team collaboration, and analytics. Everything you need, nothing you don't.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="mb-24">
            <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { stat: "4", label: "Views (all you need)" },
                { stat: "Free", label: "AI task creation" },
                { stat: "30s", label: "To get started" },
              ].map((item, index) => (
                <div key={index} className="bg-[#111] p-10 text-center">
                  <p className="text-4xl font-light text-white mb-2">{item.stat}</p>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features by Category */}
          <section className="space-y-20">
            {categories.map((category) => (
              <div key={category}>
                <div className="text-center mb-12">
                  <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">{category}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features
                    .filter((f) => f.category === category)
                    .map((feature, idx) => (
                      <div
                        key={idx}
                        className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </section>

          {/* Comparison Table */}
          <section className="mt-24 mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Whatstask vs Traditional Apps</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">Feature</th>
                    <th className="text-center p-6 font-semibold text-violet-400">Whatstask</th>
                    <th className="text-center p-6 font-medium text-neutral-500">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Natural Language Input", whatstask: true, traditional: false },
                    { feature: "No App Installation", whatstask: true, traditional: false },
                    { feature: "Works in Telegram", whatstask: true, traditional: false },
                    { feature: "Free Core Features", whatstask: true, traditional: false },
                    { feature: "PDF Tools Included", whatstask: true, traditional: false },
                    { feature: "Cross-Platform Sync", whatstask: true, traditional: true },
                    { feature: "Team Collaboration", whatstask: true, traditional: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-300">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.whatstask ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-600 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.traditional ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-600 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                Manage tasks without switching apps. Free to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start on Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/pricing">View Pricing</Link>
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

        {/* FAQ Schema */}
        <Script
          id="schema-faq-features"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What features does Whatstask offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask offers natural language task creation, smart scheduling, intelligent reminders, team collaboration, PDF tools, progress analytics, and cross-platform sync - all within Telegram.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I collaborate with my team on Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can share tasks with colleagues, assign deadlines, and track team progress directly in Telegram.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-features"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.whatstask.com" },
                { "@type": "ListItem", position: 2, name: "Features", item: "https://www.whatstask.com/features" },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
