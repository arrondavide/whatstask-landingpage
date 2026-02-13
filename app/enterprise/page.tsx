import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

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
    { title: "Enterprise Security", description: "SOC 2 compliance ready, data encryption, SSO integration" },
    { title: "Unlimited Scale", description: "From 50 to 50,000 users. Architecture that grows with you" },
    { title: "Dedicated Support", description: "Direct access to engineering. Priority response times" },
    { title: "Custom Analytics", description: "Build the dashboards and reports that matter" },
  ]

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your workflow and goals" },
    { step: "02", title: "Design", description: "Clear scope, timeline, and pricing" },
    { step: "03", title: "Build", description: "Agile development with weekly check-ins" },
    { step: "04", title: "Launch", description: "Smooth deployment with ongoing support" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-24">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Enterprise</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Simple at scale
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Custom project management solutions for teams with specific needs. Same philosophy: simple, fast, no bloat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="mailto:charlesaarondavid@gmail.com">Schedule a Call</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/project-management">See Standard Product</Link>
              </Button>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-24">
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center bg-white/5">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise doesn't mean complex
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                Your 500-person company doesn't need 500 features. They need tools that work.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { stat: "Same", label: "philosophy as standard" },
                  { stat: "Custom", label: "built for your needs" },
                  { stat: "Scale", label: "50 to 50,000 users" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-4xl font-light text-white mb-2">{item.stat}</p>
                    <p className="text-sm text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we build</h2>
              <p className="text-neutral-400 text-lg font-light">
                Custom solutions that fit your workflow
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-24 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Capabilities</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-grade</h2>
                <p className="text-neutral-400 text-lg font-light">
                  Built for scale, security, and reliability
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How we work</h2>
              <p className="text-neutral-400 text-lg font-light">
                Transparent from first call to launch
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-white/20 transition-all duration-300">
                  <span className="text-5xl font-light text-white/10 block mb-4">{step.step}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Clients</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who we work with</h2>
              <p className="text-neutral-400 text-lg font-light">
                Teams that need more than off-the-shelf
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Growing Companies",
                  description: "Outgrowing your current tools? We build systems that scale.",
                  examples: "50-500 employees, Series A-C",
                },
                {
                  title: "Agencies",
                  description: "Multi-client workflows, white-label needs, custom reporting.",
                  examples: "Marketing, consulting firms",
                },
                {
                  title: "Enterprises",
                  description: "Complex requirements, legacy integrations, compliance needs.",
                  examples: "Fortune 500, regulated industries",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 mb-4">{item.description}</p>
                  <p className="text-xs text-neutral-500">{item.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's talk about your project
              </h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                No sales pitch. Just a conversation about what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="mailto:charlesaarondavid@gmail.com">Email Us Directly</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
              <p className="text-sm text-neutral-500">charlesaarondavid@gmail.com</p>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
