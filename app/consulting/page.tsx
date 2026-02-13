import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bot, FileText, Workflow, Zap } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "IT Consulting Services – Custom Bot & Workflow Solutions | Whatstask",
  description:
    "Enterprise-grade IT consulting for custom Telegram bots, PDF workflow automation, and task management integrations. Scale your business with Whatstask.",
  openGraph: {
    title: "IT Consulting Services – Custom Solutions | Whatstask",
    description: "Custom bot development, PDF automation, and workflow integration services.",
    url: "https://www.whatstask.com/consulting",
    siteName: "Whatstask",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ConsultingPage() {
  const services = [
    {
      icon: Bot,
      title: "Custom Telegram Bot Development",
      description:
        "Build tailored task management bots for your team. Integrate with your existing tools, add custom workflows, and automate repetitive processes.",
    },
    {
      icon: FileText,
      title: "PDF Workflow Automation",
      description:
        "Automate document processing at scale. Merge, split, compress, and convert PDFs programmatically with our custom integration services.",
    },
    {
      icon: Workflow,
      title: "Task Management Integration",
      description:
        "Connect Whatstask with your CRM, project management, or business intelligence tools. Create seamless workflows across platforms.",
    },
    {
      icon: Zap,
      title: "White-Label Solutions",
      description:
        "Launch your own branded task management platform. We handle the infrastructure while you focus on your customers.",
    },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Scale Your Workflows with Expert IT Consulting</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Custom bot development, workflow automation, and enterprise integrations. Our team helps businesses
            streamline operations with tailored task management solutions.
          </p>
          <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
            <a href="mailto:contact@whatstask.com">Get a Free Consultation</a>
          </Button>
        </section>

        {/* Services */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <service.icon className="h-12 w-12 mb-4 text-violet-500" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflows?</h2>
            <p className="text-neutral-300 mb-6">
              Contact us today for a free consultation. We'll analyze your needs and propose a custom solution.
            </p>
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="mailto:contact@whatstask.com">Contact Us</a>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
