import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  MessageSquare,
  Calendar,
  Clock,
  List,
  Check,
  Bell,
  Users,
  Zap,
  FileText,
  BarChart3,
  Shield,
  Smartphone,
} from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Features - Telegram Task Management Bot | Whatstask",
  description:
    "Explore all Whatstask features: natural language task creation, smart reminders, PDF tools, team collaboration, and more. Everything you need to stay organized in Telegram.",
  keywords:
    "telegram task bot features, task management features, telegram reminder bot, natural language tasks, smart scheduling, team collaboration telegram",
  openGraph: {
    title: "Features - Telegram Task Management Bot | Whatstask",
    description:
      "Natural language task creation, smart reminders, PDF tools, and team collaboration - all in Telegram.",
    url: "https://www.whatstask.com/features",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - Telegram Task Management Bot | Whatstask",
    description: "All features for task management, reminders, and PDF tools in Telegram.",
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
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Natural Language Input",
      description:
        "Create tasks using everyday language. Simply type 'Meeting with John tomorrow at 3pm' and Whatstask automatically understands, schedules, and sets reminders. No complex commands or syntax to learn.",
      category: "Core Features",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Smart Scheduling",
      description:
        "Automatically detects dates and times in your messages. Mentions like 'next Monday', 'in 2 hours', or 'December 15th' are converted to scheduled tasks without extra steps. Works across all time zones.",
      category: "Core Features",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Intelligent Reminders",
      description:
        "Get notified at the perfect time with context-aware reminders that adapt to your habits. Set recurring reminders for daily, weekly, or custom intervals. Never miss an important deadline again.",
      category: "Core Features",
    },
    {
      icon: <List className="h-8 w-8" />,
      title: "Organized Categories",
      description:
        "Keep work, personal, and project tasks separate with automatic categorization. Create custom categories and use tags to organize complex workflows. Filter and search tasks instantly.",
      category: "Organization",
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "One-Tap Completion",
      description:
        "Mark tasks complete with a single tap, keeping your productivity flowing smoothly. View completion history and track your progress over time. Undo accidental completions easily.",
      category: "Productivity",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description:
        "Share tasks with friends or colleagues without them leaving Telegram. Assign tasks, set deadlines, and track team progress. Perfect for remote teams and group projects.",
      category: "Collaboration",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF Tools Suite",
      description:
        "Free online PDF tools: merge multiple PDFs, compress large files, convert PDFs to images, and more. All processing happens in your browser - secure and private. No uploads to external servers.",
      category: "Productivity",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Actions",
      description:
        "Use shortcuts for common tasks. Type '/today' to see today's tasks, '/upcoming' for the week ahead, or '/done' to mark recent tasks complete. Lightning-fast workflow.",
      category: "Productivity",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Progress Analytics",
      description:
        "Track your productivity with visual analytics. See completion rates, busiest days, and category breakdowns. Understand your patterns and optimize your workflow.",
      category: "Analytics",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy-First Design",
      description:
        "Your data stays secure with end-to-end encryption. We never sell or share personal information. All PDF processing happens locally in your browser. Full GDPR compliance.",
      category: "Security",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Cross-Platform Sync",
      description:
        "Access your tasks on any device - iOS, Android, desktop, or web. Everything syncs instantly via Telegram. Start on mobile, finish on desktop seamlessly.",
      category: "Accessibility",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Zone Intelligence",
      description:
        "Works perfectly for remote teams across different time zones. Automatically adjusts reminders to your local time. Schedule meetings without timezone confusion.",
      category: "Collaboration",
    },
  ]

  const categories = Array.from(new Set(features.map((f) => f.category)))

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }]} />

          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Everything You Need to Stay Organized
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Whatstask combines powerful task management with intelligent automation - all inside Telegram. No app
              switching, no learning curve, just results.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-extrabold mb-2">10,000+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-extrabold mb-2">500K+</div>
              <div className="text-gray-400">Tasks Completed</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-extrabold mb-2">4.8/5</div>
              <div className="text-gray-400">User Rating</div>
            </div>
          </div>

          {/* Features by Category */}
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category}>
                <h2 className="text-3xl font-bold mb-8 text-center">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features
                    .filter((f) => f.category === category)
                    .map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="mb-4 text-teal-500">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Whatstask vs Traditional Task Apps</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 font-bold">Feature</th>
                    <th className="text-center p-6 font-bold">Whatstask</th>
                    <th className="text-center p-6 font-bold">Traditional Apps</th>
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
                    <tr key={idx} className="border-b border-white/10 last:border-0">
                      <td className="p-6">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.whatstask ? (
                          <Check className="h-6 w-6 text-green-500 inline" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {row.traditional ? (
                          <Check className="h-6 w-6 text-green-500 inline" />
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join 10,000+ users who manage tasks without switching apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teal-500 text-white hover:bg-teal-700 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start on Telegram
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

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
                    text: "Whatstask offers natural language task creation, smart scheduling, intelligent reminders, team collaboration, PDF tools (merge, compress, convert), progress analytics, and cross-platform sync - all within Telegram.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I collaborate with my team on Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can share tasks with colleagues, assign deadlines, and track team progress directly in Telegram. Perfect for remote teams and group projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Whatstask work across different time zones?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Whatstask automatically adjusts reminders to your local time zone and handles timezone conversions for remote teams seamlessly.",
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.whatstask.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Features",
                  item: "https://www.whatstask.com/features",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
