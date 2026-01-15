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
      icon: <List className="h-8 w-8" />,
      title: "Complete Task Management",
      description:
        "Create tasks with full details: subtasks, priorities, due dates, file attachments, and recurring schedules (daily/weekly/monthly). Organize with categories and tags. Complete project management in Telegram.",
      category: "Task Management",
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Subtasks & Checklists",
      description:
        "Break down complex tasks into manageable subtasks. Create checklists for step-by-step workflows. Track progress as you complete each item. Perfect for project planning and execution.",
      category: "Task Management",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Recurring Tasks",
      description:
        "Set up daily, weekly, or monthly recurring tasks for habits and regular responsibilities. Automatic creation based on your schedule. Never forget routine tasks again.",
      category: "Task Management",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking with Clock In/Out",
      description:
        "Track time spent on tasks with one-tap clock in/out. Automatic duration calculation with millisecond precision. Generate daily, weekly, and monthly time reports. Bill clients accurately.",
      category: "Time Tracking",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Time Reports & Analytics",
      description:
        "View detailed time logs per task and project. Generate reports for invoicing. See where your time goes with visual analytics. Export data for billing systems.",
      category: "Time Tracking",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration & Roles",
      description:
        "Invite unlimited team members. Assign 3-tier roles: Admin (full control), Manager (team oversight), Employee (task execution). Role-based permissions for security.",
      category: "Team Features",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Task Comments & Activity Feed",
      description:
        "Comment on tasks for collaboration. Mention team members with @username. Track all activity with complete audit trail. Real-time updates for everyone.",
      category: "Team Features",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Multi-Company Workspaces",
      description:
        "Create and switch between multiple companies or projects. Perfect for freelancers managing multiple clients or agencies handling different accounts. Separate workspace for each context.",
      category: "Company Management",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "8-Character Invitation Codes",
      description:
        "Invite team members with simple 8-character hex codes. Secure, easy to share, and instantly join teams. No email verification needed. Just share the code and start collaborating.",
      category: "Company Management",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Statistics & Analytics Dashboard",
      description:
        "Personal and team productivity metrics. Task completion rates, time spent analysis, busiest days tracking. Visual charts and graphs. Make data-driven decisions.",
      category: "Analytics",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Dual Notification System",
      description:
        "In-app notifications within the Mini App plus Telegram push notifications. Never miss task updates, comments, assignments, or deadlines. 6 notification types for different events.",
      category: "Notifications",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Offline Mode with Auto-Sync",
      description:
        "Work offline and changes sync automatically when back online. Optimistic UI updates for instant feel. LocalStorage persistence. Never lose your work due to connection issues.",
      category: "Advanced Features",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Access Control",
      description:
        "Telegram OAuth authentication. HMAC-SHA256 validation. Role-based access control. Secure API endpoints. Your data is protected with enterprise-grade security.",
      category: "Advanced Features",
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
              Complete Work Management Platform
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Full-featured Telegram Mini App with task management, time tracking, team collaboration, and analytics. Everything you need to manage work - built right into Telegram.
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
