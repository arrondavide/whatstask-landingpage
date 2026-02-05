import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Free Project Templates | Whatstask",
  description:
    "Browse free project management templates for marketing, development, operations, and more. Get started instantly with ready-to-use templates in Whatstask.",
  keywords:
    "project templates, task management templates, marketing templates, sprint planning template, project management templates free, kanban templates",
  openGraph: {
    title: "Free Project Templates | Whatstask",
    description:
      "Ready-to-use project templates for teams. Marketing campaigns, sprint planning, client onboarding, and more.",
    url: "https://www.whatstask.com/templates",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Project Templates | Whatstask",
    description: "Ready-to-use project templates for teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/templates",
  },
}

interface Template {
  id: string
  title: string
  description: string
  category: string
  tasks: number
  popular?: boolean
}

const templates: Template[] = [
  // Marketing Templates
  {
    id: "marketing-campaign",
    title: "Marketing Campaign",
    description: "Plan and execute marketing campaigns with tasks for content, design, launch, and analytics.",
    category: "Marketing",
    tasks: 12,
    popular: true,
  },
  {
    id: "content-calendar",
    title: "Content Calendar",
    description: "Organize your content strategy with scheduled posts, deadlines, and publishing workflows.",
    category: "Marketing",
    tasks: 8,
    popular: true,
  },
  {
    id: "social-media-planner",
    title: "Social Media Planner",
    description: "Schedule and track social media posts across platforms with approval workflows.",
    category: "Marketing",
    tasks: 10,
  },
  {
    id: "product-launch",
    title: "Product Launch",
    description: "Comprehensive checklist for launching a new product or feature successfully.",
    category: "Marketing",
    tasks: 18,
    popular: true,
  },

  // Development Templates
  {
    id: "sprint-planning",
    title: "Sprint Planning",
    description: "Agile sprint board with backlog, in-progress, review, and done columns.",
    category: "Development",
    tasks: 15,
    popular: true,
  },
  {
    id: "bug-tracker",
    title: "Bug Tracker",
    description: "Track and prioritize bugs with severity levels, assignees, and resolution status.",
    category: "Development",
    tasks: 6,
  },
  {
    id: "product-roadmap",
    title: "Product Roadmap",
    description: "Plan your product's future with quarterly goals, features, and milestones.",
    category: "Development",
    tasks: 10,
  },
  {
    id: "release-checklist",
    title: "Release Checklist",
    description: "Ensure smooth deployments with pre and post-release verification tasks.",
    category: "Development",
    tasks: 14,
  },

  // Operations Templates
  {
    id: "project-timeline",
    title: "Project Timeline",
    description: "Visual timeline for project phases, milestones, and key deliverables.",
    category: "Operations",
    tasks: 12,
    popular: true,
  },
  {
    id: "meeting-agenda",
    title: "Meeting Agenda",
    description: "Structured meeting template with topics, time allocations, and action items.",
    category: "Operations",
    tasks: 5,
  },
  {
    id: "process-documentation",
    title: "Process Documentation",
    description: "Document standard operating procedures with step-by-step task breakdowns.",
    category: "Operations",
    tasks: 8,
  },
  {
    id: "resource-allocation",
    title: "Resource Allocation",
    description: "Track team capacity, assignments, and workload distribution across projects.",
    category: "Operations",
    tasks: 7,
  },

  // Sales & Client Templates
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    description: "Smooth onboarding process for new clients with welcome tasks and setup guides.",
    category: "Sales",
    tasks: 11,
    popular: true,
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline",
    description: "Track leads through your sales funnel from prospect to closed deal.",
    category: "Sales",
    tasks: 8,
  },
  {
    id: "proposal-workflow",
    title: "Proposal Workflow",
    description: "Manage proposal creation, review, and submission with approval stages.",
    category: "Sales",
    tasks: 9,
  },

  // General Templates
  {
    id: "team-okrs",
    title: "Team OKRs",
    description: "Set and track Objectives and Key Results for your team's quarterly goals.",
    category: "General",
    tasks: 6,
  },
  {
    id: "weekly-planner",
    title: "Weekly Planner",
    description: "Organize your week with daily tasks, priorities, and time blocks.",
    category: "General",
    tasks: 7,
  },
  {
    id: "one-on-one-meeting",
    title: "1:1 Meeting",
    description: "Structured template for effective manager-report one-on-one meetings.",
    category: "General",
    tasks: 5,
  },
  {
    id: "brainstorming-session",
    title: "Brainstorming Session",
    description: "Capture and organize ideas during team brainstorming with voting and prioritization.",
    category: "General",
    tasks: 4,
  },
  {
    id: "event-planning",
    title: "Event Planning",
    description: "Comprehensive event planning checklist from venue booking to post-event follow-up.",
    category: "General",
    tasks: 16,
  },

  // Personal Templates
  {
    id: "daily-tasks",
    title: "Daily Tasks",
    description: "Simple daily task list with morning routines, work tasks, and evening wrap-up.",
    category: "Personal",
    tasks: 5,
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    description: "Track daily and weekly habits with streak counts and progress visualization.",
    category: "Personal",
    tasks: 7,
  },
  {
    id: "side-project",
    title: "Side Project",
    description: "Manage your passion project with milestones, tasks, and progress tracking.",
    category: "Personal",
    tasks: 10,
  },
]

const categories = ["All", "Marketing", "Development", "Operations", "Sales", "General", "Personal"]

export default function TemplatesPage() {
  const popularTemplates = templates.filter((t) => t.popular)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Templates", href: "/templates" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mt-8 mb-16">
          <p className="text-sm text-slate-500 mb-6">Project Templates</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Start Projects Faster with Templates
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Browse our collection of free project templates. From marketing campaigns to sprint
            planning, get started in seconds with pre-built task structures.
          </p>
          <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
            <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
              Use Templates Free
            </a>
          </Button>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular Templates</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {popularTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-colors text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* All Templates by Category */}
      {["Marketing", "Development", "Operations", "Sales", "General", "Personal"].map((category) => {
        const categoryTemplates = templates.filter((t) => t.category === category)
        return (
          <section key={category} className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{category} Templates</h2>
              <span className="text-sm text-slate-500">{categoryTemplates.length} templates</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryTemplates.map((template) => (
                <TemplateCardSmall key={template.id} template={template} />
              ))}
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-violet-500/20 to-violet-500/5 border border-violet-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            All templates are free to use. Start in Telegram and customize any template to fit your
            team's workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free in Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/pricing" className="flex items-center gap-2">
                View Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Request Template */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-3">Don't See What You Need?</h3>
          <p className="text-slate-600 mb-6">
            We're constantly adding new templates. Let us know what templates would help your team.
          </p>
          <Button asChild variant="outline" className="rounded-full px-6 border-slate-300">
            <Link href="/contact">Request a Template</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={24} height={24} />
              <span className="font-bold">Whatstask</span>
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <Link href="/features" className="hover:text-slate-900 transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Whatstask. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-violet-500/30 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold group-hover:text-violet-400 transition-colors">
          {template.title}
        </h3>
        {template.popular && (
          <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-full">Popular</span>
        )}
      </div>
      <p className="text-sm text-slate-600 mb-4 line-clamp-2">{template.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">{template.tasks} tasks</span>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{template.category}</span>
      </div>
    </div>
  )
}

function TemplateCardSmall({ template }: { template: Template }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-violet-500/30 transition-all group cursor-pointer">
      <h3 className="font-medium group-hover:text-violet-400 transition-colors text-sm mb-2">
        {template.title}
      </h3>
      <p className="text-xs text-slate-500">{template.tasks} tasks</p>
    </div>
  )
}
