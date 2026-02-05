import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Security & Trust Center | Whatstask",
  description:
    "Learn how Whatstask protects your data with enterprise-grade security. End-to-end encryption, GDPR compliance, secure infrastructure, and transparent data practices.",
  keywords:
    "whatstask security, data protection, GDPR compliant, encrypted task management, secure project management, telegram security",
  openGraph: {
    title: "Security & Trust Center | Whatstask",
    description:
      "Enterprise-grade security for your team's data. Learn about our encryption, compliance, and data protection practices.",
    url: "https://www.whatstask.com/security",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Trust Center | Whatstask",
    description: "Enterprise-grade security for your team's data.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/security",
  },
}

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description:
        "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your tasks and team communications are protected at every stage.",
    },
    {
      title: "Secure Infrastructure",
      description:
        "Our infrastructure runs on enterprise-grade cloud providers with SOC 2 Type II certified data centers. We use isolated environments and regular security audits.",
    },
    {
      title: "Access Controls",
      description:
        "Role-based access control (RBAC) ensures team members only see what they need. Admins have full control over permissions and user management.",
    },
    {
      title: "Privacy by Design",
      description:
        "We collect only the minimum data necessary to provide our service. Your data is never sold or shared with third parties for advertising.",
    },
    {
      title: "Data Residency",
      description:
        "Your data is stored in secure data centers. Enterprise customers can request specific data residency locations to meet regulatory requirements.",
    },
    {
      title: "Incident Response",
      description:
        "We have a dedicated security team monitoring 24/7. Any security incidents are promptly investigated and communicated transparently.",
    },
  ]

  const complianceItems = [
    {
      title: "GDPR Compliant",
      description: "Full compliance with EU General Data Protection Regulation",
    },
    {
      title: "Data Processing Agreement",
      description: "DPA available for enterprise customers upon request",
    },
    {
      title: "Right to Data Portability",
      description: "Export your data anytime in standard formats",
    },
    {
      title: "Right to Erasure",
      description: "Request complete deletion of your data at any time",
    },
  ]

  const securityPractices = [
    "Regular third-party security assessments and penetration testing",
    "Automated vulnerability scanning and dependency monitoring",
    "Secure software development lifecycle (SDLC) practices",
    "Employee security training and background checks",
    "Multi-factor authentication for all internal systems",
    "Encrypted backups with point-in-time recovery",
    "Network segmentation and firewall protection",
    "Continuous monitoring and anomaly detection",
  ]

  return (
    <>
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm text-slate-500 mb-6">Security & Trust</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Your Data Security is Our Priority
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We understand that you're trusting us with your team's work. That's why we've built
            Whatstask with enterprise-grade security from the ground up.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-slate-50 rounded-full px-4 py-2">256-bit Encryption</span>
            <span className="bg-slate-50 rounded-full px-4 py-2">GDPR Compliant</span>
            <span className="bg-slate-50 rounded-full px-4 py-2">99.9% Uptime</span>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">How We Protect Your Data</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Security isn't an afterthought—it's built into every layer of Whatstask.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Telegram Security Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-500 text-sm mb-4">Telegram Integration Security</p>
              <h2 className="text-3xl font-bold mb-4">
                Secure by Design with Telegram
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whatstask leverages Telegram's robust security infrastructure, including their
                MTProto encryption protocol. We only access the minimum permissions needed to
                provide our service.
              </p>
              <ul className="space-y-3">
                {[
                  "No access to your private Telegram messages",
                  "Bot interactions are isolated and secure",
                  "You control exactly what data to share",
                  "Revoke access anytime from Telegram settings",
                ].map((item, index) => (
                  <li key={index} className="text-slate-700">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold mb-6">Telegram Bot Permissions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">✓ Send messages</p>
                  <p className="text-sm text-slate-500">To deliver task notifications</p>
                </div>
                <div>
                  <p className="font-medium">✓ Receive messages</p>
                  <p className="text-sm text-slate-500">To process your commands</p>
                </div>
                <div className="opacity-50">
                  <p className="font-medium line-through">✗ Read private chats</p>
                  <p className="text-sm text-slate-500">Never requested</p>
                </div>
                <div className="opacity-50">
                  <p className="font-medium line-through">✗ Access contacts</p>
                  <p className="text-sm text-slate-500">Never requested</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Compliance & Data Rights</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          We're committed to respecting your privacy rights and meeting regulatory requirements.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Practices */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Security Practices</h2>
          <p className="text-slate-600 text-center mb-12">
            We follow industry best practices to keep your data safe.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 border border-slate-100 text-slate-700"
              >
                • {practice}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Data We Collect</h2>
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">Account Information</h3>
                <p className="text-slate-600">
                  Your Telegram user ID and display name to identify your account. We don't have access to your phone number or email unless you provide it.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">Task & Project Data</h3>
                <p className="text-slate-600">
                  The tasks, projects, and notes you create within Whatstask. This data is encrypted and only accessible to you and your team members.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2">Usage Analytics</h3>
                <p className="text-slate-600">
                  Anonymous usage data to improve our service (feature usage, performance metrics). This data cannot be used to identify individual users.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What We Don't Collect</h3>
                <p className="text-slate-600">
                  We never access your private Telegram messages, contacts, or any data outside of your direct interactions with the Whatstask bot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Enterprise Security</h2>
          <p className="text-slate-600 mb-8">
            Need additional security features? Enterprise plans include advanced security controls
            and compliance options.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold mb-2">SSO Integration</h3>
              <p className="text-sm text-slate-600">SAML 2.0 single sign-on support</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold mb-2">Audit Logs</h3>
              <p className="text-sm text-slate-600">Detailed activity tracking</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="font-semibold mb-2">Custom DPA</h3>
              <p className="text-sm text-slate-600">Tailored data agreements</p>
            </div>
          </div>
          <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
            <Link href="/enterprise" className="flex items-center gap-2">
              Learn About Enterprise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-violet-500/20 to-violet-500/5 border border-violet-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Security Questions?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team is here to answer any questions about our security practices. For security
            researchers, we welcome responsible disclosure of any vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <Link href="/contact">
                Contact Security Team
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <a href="mailto:security@whatstask.com">
                security@whatstask.com
              </a>
            </Button>
          </div>
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
              <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Whatstask. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
