import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Shield, Users, Settings, BarChart3, ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
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
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliance ready, data encryption at rest and in transit, SSO integration, comprehensive audit logs.",
    },
    {
      icon: Users,
      title: "Unlimited Scale",
      description: "From 50 to 50,000 users. Our architecture handles enterprise workloads without compromising simplicity.",
    },
    {
      icon: Settings,
      title: "Custom Development",
      description: "Need specific features? We build custom solutions tailored to your exact workflow requirements.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Custom dashboards, detailed reports, and insights that matter to your business.",
    },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              <a href="mailto:charlesaarondavid@gmail.com">Contact Sales</a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-slate-600" />
              <span className="text-sm text-slate-600">Enterprise Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Enterprise-grade. Not enterprise-complex.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Your 500-person company doesn't need 500 features. They need tools that work,
              with security and scale that matches your requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                <a href="mailto:charlesaarondavid@gmail.com">Talk to Sales</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300">
                <Link href="/enterprise">Custom Solutions</Link>
              </Button>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold mb-4 text-center">Our philosophy for enterprise</h2>
              <p className="text-center text-slate-600 text-lg leading-relaxed">
                The software industry sold complexity as a feature. We believe the opposite.
                <br />
                <span className="text-white font-medium">Simple scales. Complexity doesn't.</span>
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Enterprise capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <cap.icon className="h-10 w-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{cap.title}</h3>
                  <p className="text-slate-600">{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What enterprise gets</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
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
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Check className="h-5 w-5 text-violet-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why enterprises switch to Whatstask</h2>
            <div className="space-y-4">
              {[
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
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4">Let's discuss your needs</h2>
              <p className="text-slate-600 mb-8">
                Every enterprise is different. Let's talk about what you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                  <a href="mailto:charlesaarondavid@gmail.com">Email Us</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
              <p className="text-sm text-slate-500">charlesaarondavid@gmail.com</p>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
