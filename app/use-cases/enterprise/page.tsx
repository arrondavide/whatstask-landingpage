import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Enterprise Project Management | Whatstask",
  description:
    "Enterprise-grade project management without enterprise complexity. Custom solutions, security compliance, dedicated support. Simple scales.",
  keywords: [
    "enterprise project management",
    "enterprise task management",
    "custom project management",
    "scalable project management",
    "enterprise collaboration",
  ],
  openGraph: {
    title: "Enterprise Project Management | Whatstask",
    description: "Enterprise-grade without enterprise complexity. Simple scales.",
    url: "https://www.whatstask.com/use-cases/enterprise",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/use-cases/enterprise",
  },
}

export default function EnterpriseUseCasePage() {
  const capabilities = [
    {
      title: "Enterprise Security",
      description: "SOC 2 compliance ready, data encryption at rest and in transit, SSO integration, comprehensive audit logs.",
    },
    {
      title: "Unlimited Scale",
      description: "From 50 to 50,000 users. Our architecture handles enterprise workloads without compromising simplicity.",
    },
    {
      title: "Custom Development",
      description: "Need specific features? We build custom solutions tailored to your exact workflow requirements.",
    },
    {
      title: "Advanced Analytics",
      description: "Custom dashboards, detailed reports, and insights that matter to your business.",
    },
  ]

  const features = [
    "Dedicated account manager",
    "Priority support with SLA",
    "Custom onboarding and training",
    "SSO / SAML integration",
    "Advanced role permissions",
    "Custom analytics dashboards",
    "API access and webhooks",
    "Data export and compliance tools",
    "White-label options available",
    "On-premise deployment (on request)",
  ]

  const switchReasons = [
    {
      title: "Adoption actually happens",
      description: "Simple tools get used. Complex tools get ignored. Our simplicity means your teams actually adopt it.",
    },
    {
      title: "No training budget required",
      description: "30-second setup means no expensive training programs. New employees are productive immediately.",
    },
    {
      title: "AI included, not extra",
      description: "While competitors charge $28/user/month for AI, we include it. For everyone.",
    },
    {
      title: "Predictable pricing",
      description: "No per-seat surprises. No feature-gating. Know exactly what you're paying.",
    },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Enterprise Solutions</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Enterprise-grade. Not enterprise-complex.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              Your 500-person company doesn't need 500 features. They need tools that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="mailto:charlesaarondavid@gmail.com">Talk to Sales</a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-white/20 hover:bg-white/5">
                <Link href="/enterprise">Custom Solutions</Link>
              </Button>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-24">
            <div className="border border-white/10 rounded-2xl p-10 md:p-12 text-center">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our philosophy for enterprise</h2>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mx-auto">
                The software industry sold complexity as a feature. We believe the opposite.
                Simple scales. Complexity doesn't.
              </p>
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Enterprise capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{cap.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Included</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What enterprise gets</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-neutral-300 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Switch Reasons */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why enterprises switch to Whatstask</h2>
            </div>
            <div className="space-y-4">
              {switchReasons.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's discuss your needs</h2>
              <p className="text-neutral-400 mb-10 text-lg font-light">
                Every enterprise is different. Let's talk about what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="mailto:charlesaarondavid@gmail.com">Email Us</a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-white/20 hover:bg-white/5">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
              <p className="text-sm text-neutral-400">charlesaarondavid@gmail.com</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
