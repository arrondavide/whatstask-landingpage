import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
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
      title: "Custom Development",
      description:
        "Tailored project management tools built for your specific workflow. We understand your needs and build exactly what you require.",
    },
    {
      title: "White-Label Solutions",
      description:
        "Launch your own branded project management platform. Your brand, our infrastructure. Full customization available.",
    },
    {
      title: "System Integrations",
      description:
        "Connect with your existing tools - CRM, ERP, communication platforms. Seamless data flow across your tech stack.",
    },
    {
      title: "Migration Services",
      description:
        "Moving from ClickUp, Monday, or Asana? We handle the migration. Zero data loss, minimal disruption.",
    },
  ]

  const benefits = [
    {
      title: "Enterprise Security",
      description: "SOC 2 compliance ready, data encryption, SSO integration, audit logs.",
    },
    {
      title: "Unlimited Scale",
      description: "From 50 to 50,000 users. Our architecture scales with your growth.",
    },
    {
      title: "Dedicated Support",
      description: "Direct access to our engineering team. Priority response times.",
    },
    {
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
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-12">
          <Breadcrumbs items={[{ label: "Enterprise", href: "/enterprise" }]} />

          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-sm text-slate-500 mb-6">B2B Custom Solutions</p>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Simple at scale
            </h1>

            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              Custom project management solutions for teams with specific needs.
            </p>
            <p className="text-lg text-slate-500 mb-10">
              Same philosophy: simple, fast, no bloat. Just built exactly for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                <a href="mailto:charlesaarondavid@gmail.com">
                  Schedule a Call
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300">
                <Link href="/project-management">See Standard Product</Link>
              </Button>
            </div>
          </section>

          {/* Our Philosophy */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Enterprise doesn't mean complex
              </h2>
              <p className="text-slate-600 text-center text-lg leading-relaxed mb-8">
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
                    <p className="text-2xl font-bold text-violet-400 mb-1">{item.stat}</p>
                    <p className="text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What we build</h2>
              <p className="text-slate-600 text-lg">
                Custom solutions that fit your workflow, not the other way around.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Enterprise-grade capabilities</h2>
              <p className="text-slate-600 text-lg">
                Built for scale, security, and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <h3 className="font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">How we work</h2>
              <p className="text-slate-600 text-lg">
                Transparent process from first call to launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full">
                    <span className="text-4xl font-black text-white/10 mb-2 block">{step.step}</span>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.description}</p>
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
              <p className="text-slate-600 text-lg">
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
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                >
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <p className="text-xs text-gray-600">{item.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Let's talk about your project</h2>
              <p className="text-slate-600 mb-8 text-lg">
                No sales pitch. Just a conversation about what you need and how we can help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                  <a href="mailto:charlesaarondavid@gmail.com">
                    Email Us Directly
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>

              <p className="text-sm text-slate-500">
                charlesaarondavid@gmail.com
              </p>
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
    </>
  )
}
