import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Check,
  Zap,
  Shield,
  Users,
  Settings,
  FileText,
  BarChart3,
  Headphones,
  ArrowRight,
  Building2,
} from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Enterprise & Custom Solutions - B2B Project Management | Whatstask",
  description:
    "Custom project management solutions for enterprises. White-label options, custom development, integrations with your existing tools. Same philosophy: simple, fast, no bloat.",
  keywords: [
    "enterprise project management",
    "custom project management",
    "white label project management",
    "B2B project management",
    "custom workflow solutions",
    "enterprise task management",
    "custom pm development",
  ],
  openGraph: {
    title: "Enterprise & Custom Solutions | Whatstask",
    description:
      "Custom project management solutions for teams with specific needs. Simple at scale.",
    url: "https://www.whatstask.com/enterprise",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/enterprise",
  },
}

export default function EnterprisePage() {
  const services = [
    {
      icon: Settings,
      title: "Custom Development",
      description:
        "Tailored project management tools built for your specific workflow. We understand your needs and build exactly what you require.",
    },
    {
      icon: Building2,
      title: "White-Label Solutions",
      description:
        "Launch your own branded project management platform. Your brand, our infrastructure. Full customization available.",
    },
    {
      icon: Zap,
      title: "System Integrations",
      description:
        "Connect with your existing tools - CRM, ERP, communication platforms. Seamless data flow across your tech stack.",
    },
    {
      icon: FileText,
      title: "Migration Services",
      description:
        "Moving from ClickUp, Monday, or Asana? We handle the migration. Zero data loss, minimal disruption.",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliance ready, data encryption, SSO integration, audit logs.",
    },
    {
      icon: Users,
      title: "Unlimited Scale",
      description: "From 50 to 50,000 users. Our architecture scales with your growth.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Direct access to our engineering team. Priority response times.",
    },
    {
      icon: BarChart3,
      title: "Custom Analytics",
      description: "Build the dashboards and reports that matter to your business.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We learn about your workflow, pain points, and goals. No sales pitch, just understanding.",
    },
    {
      step: "02",
      title: "Solution Design",
      description: "We propose a solution tailored to your needs. Clear scope, timeline, and pricing.",
    },
    {
      step: "03",
      title: "Build & Iterate",
      description: "Agile development with regular check-ins. You see progress every week.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Smooth deployment with training. Ongoing support and maintenance included.",
    },
  ]

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
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <Breadcrumbs items={[{ label: "Enterprise", href: "/enterprise" }]} />

          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Building2 className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">B2B Custom Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Simple at scale
            </h1>

            <p className="text-xl text-gray-400 mb-4 leading-relaxed">
              Custom project management solutions for teams with specific needs.
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Same philosophy: simple, fast, no bloat. Just built exactly for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                <a href="mailto:charlesaarondavid@gmail.com">
                  Schedule a Call
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20">
                <Link href="/project-management">See Standard Product</Link>
              </Button>
            </div>
          </section>

          {/* Our Philosophy */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Enterprise doesn't mean complex
              </h2>
              <p className="text-gray-400 text-center text-lg leading-relaxed mb-8">
                The software industry has been selling complexity as a feature for too long.
                Your 500-person company doesn't need 500 features. They need tools that work.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { stat: "Same", label: "philosophy as our standard product" },
                  { stat: "Custom", label: "built for your specific needs" },
                  { stat: "Scale", label: "from 50 to 50,000 users" },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="text-2xl font-bold text-teal-400 mb-1">{item.stat}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What we build</h2>
              <p className="text-gray-400 text-lg">
                Custom solutions that fit your workflow, not the other way around.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all"
                >
                  <service.icon className="h-10 w-10 text-teal-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Enterprise-grade capabilities</h2>
              <p className="text-gray-400 text-lg">
                Built for scale, security, and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <benefit.icon className="h-8 w-8 text-gray-400 mb-4" />
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How we work</h2>
              <p className="text-gray-400 text-lg">
                Transparent process from first call to launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full">
                    <span className="text-4xl font-black text-white/10 mb-2 block">{step.step}</span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/10 h-6 w-6" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Who we work with</h2>
              <p className="text-gray-400 text-lg">
                Teams that need more than off-the-shelf solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Growing Companies",
                  description: "Outgrowing your current tools? We build systems that scale with you.",
                  examples: "50-500 employees, Series A-C startups",
                },
                {
                  title: "Agencies & Consultancies",
                  description: "Multi-client workflows, white-label needs, custom reporting.",
                  examples: "Marketing agencies, consulting firms",
                },
                {
                  title: "Enterprises",
                  description: "Complex requirements, legacy integrations, compliance needs.",
                  examples: "Fortune 500, regulated industries",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <p className="text-xs text-gray-600">{item.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's talk about your project</h2>
              <p className="text-gray-400 mb-8 text-lg">
                No sales pitch. Just a conversation about what you need and how we can help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                  <a href="mailto:charlesaarondavid@gmail.com">
                    Email Us Directly
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                charlesaarondavid@gmail.com
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
