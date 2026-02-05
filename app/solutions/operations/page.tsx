import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Send,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Workflow,
  Clock,
  Users,
  FileCheck,
  Target,
  Zap,
  Repeat,
  Settings,
  ClipboardList,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Project Management for Operations Teams | Whatstask",
  description:
    "Streamline operations workflows, track processes, and coordinate teams. Simple project management for operations managers who need visibility without complexity.",
  keywords:
    "operations project management, process management, operations workflow, team coordination, operations task management",
  openGraph: {
    title: "Project Management for Operations Teams | Whatstask",
    description:
      "Streamline workflows and coordinate teams with simple project management.",
    url: "https://www.whatstask.com/solutions/operations",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Operations Teams | Whatstask",
    description: "Simple project management for operations teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/solutions/operations",
  },
}

export default function OperationsSolutionPage() {
  const features = [
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Process Management",
      description:
        "Document and track standard processes with repeatable task templates. Ensure consistency across the team.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Resource Visibility",
      description:
        "See who's working on what across projects. Identify bottlenecks and balance workloads.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking",
      description:
        "Track time on operational tasks and projects. Generate reports for capacity planning.",
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Recurring Tasks",
      description:
        "Set up daily, weekly, or monthly recurring tasks. Never forget routine operational work.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cross-Team Coordination",
      description:
        "Coordinate handoffs between departments. Clear ownership means nothing falls through the cracks.",
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Checklists & SOPs",
      description:
        "Create detailed checklists for complex processes. Subtasks ensure every step is completed.",
    },
  ]

  const useCases = [
    {
      title: "Vendor Management",
      description: "Track vendor relationships, renewals, and deliverables in one place.",
    },
    {
      title: "Facility Requests",
      description: "Manage facility maintenance requests with clear status tracking.",
    },
    {
      title: "Onboarding Workflows",
      description: "Standardized onboarding processes for new employees or clients.",
    },
    {
      title: "Compliance Tracking",
      description: "Track compliance tasks and deadlines across the organization.",
    },
  ]

  const benefits = [
    "Visibility into all operational tasks without overhead",
    "Templates for repeatable processes save setup time",
    "Timeline view shows dependencies and deadlines",
    "Mobile-friendly for on-the-go operations managers",
  ]

  return (
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
            { label: "Solutions", href: "/solutions/operations" },
            { label: "Operations", href: "/solutions/operations" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <BarChart3 className="h-4 w-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">For Operations Teams</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Operations Without the Operational Overhead
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            You keep the business running. Your project management shouldn't be another thing to
            manage. Whatstask gives ops teams visibility without complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/templates">View Ops Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Built for Operational Excellence</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          From process documentation to resource tracking, Whatstask helps ops teams stay on top of everything.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-orange-500/30 transition-colors"
            >
              <div className="text-orange-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Operations Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-start gap-4">
              <ClipboardList className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-slate-600 text-sm">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Ops Teams Choose Whatstask</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-400 mt-0.5" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Operations?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join operations teams who've found a simpler way to stay organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
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

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
              <span className="font-bold">Whatstask</span>
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <Link href="/solutions/marketing" className="hover:text-slate-900 transition-colors">Marketing Teams</Link>
              <Link href="/solutions/development" className="hover:text-slate-900 transition-colors">Development Teams</Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
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
