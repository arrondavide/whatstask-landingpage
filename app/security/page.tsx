import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  Globe,
  CheckCircle2,
  ArrowRight,
  Send,
  ShieldCheck,
  KeyRound,
  Database,
  CloudCog,
  Bell,
  Fingerprint,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

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
      icon: <Lock className="h-8 w-8" />,
      title: "End-to-End Encryption",
      description:
        "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Your tasks and team communications are protected at every stage.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Secure Infrastructure",
      description:
        "Our infrastructure runs on enterprise-grade cloud providers with SOC 2 Type II certified data centers. We use isolated environments and regular security audits.",
    },
    {
      icon: <KeyRound className="h-8 w-8" />,
      title: "Access Controls",
      description:
        "Role-based access control (RBAC) ensures team members only see what they need. Admins have full control over permissions and user management.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Privacy by Design",
      description:
        "We collect only the minimum data necessary to provide our service. Your data is never sold or shared with third parties for advertising.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Residency",
      description:
        "Your data is stored in secure data centers. Enterprise customers can request specific data residency locations to meet regulatory requirements.",
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Incident Response",
      description:
        "We have a dedicated security team monitoring 24/7. Any security incidents are promptly investigated and communicated transparently.",
    },
  ]

  const complianceItems = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "GDPR Compliant",
      description: "Full compliance with EU General Data Protection Regulation",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Data Processing Agreement",
      description: "DPA available for enterprise customers upon request",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Right to Data Portability",
      description: "Export your data anytime in standard formats",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Security", href: "/security" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mt-8 mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-violet-400" />
            <span className="text-violet-400 text-sm font-medium">Security & Trust</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Your Data Security is Our Priority
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            We understand that you're trusting us with your team's work. That's why we've built
            Whatstask with enterprise-grade security from the ground up.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
              <Lock className="h-4 w-4 text-violet-400" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
              <Globe className="h-4 w-4 text-violet-400" />
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
              <Server className="h-4 w-4 text-violet-400" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
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
              <div className="text-violet-400 mb-4">{feature.icon}</div>
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
              <div className="flex items-center gap-2 mb-4">
                <Fingerprint className="h-6 w-6 text-violet-400" />
                <span className="text-violet-400 font-medium">Telegram Integration Security</span>
              </div>
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
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-violet-400 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-semibold mb-6">Telegram Bot Permissions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="font-medium">Send messages</p>
                    <p className="text-sm text-slate-500">To deliver task notifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="font-medium">Receive messages</p>
                    <p className="text-sm text-slate-500">To process your commands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium line-through">Read private chats</p>
                    <p className="text-sm text-slate-500">Never requested</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-600 mt-0.5" />
                  <div>
                    <p className="font-medium line-through">Access contacts</p>
                    <p className="text-sm text-slate-500">Never requested</p>
                  </div>
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 mb-4">
                {item.icon}
              </div>
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
                className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-100"
              >
                <CheckCircle2 className="h-5 w-5 text-violet-400 flex-shrink-0" />
                <span className="text-slate-700">{practice}</span>
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
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Database className="h-5 w-5 text-violet-400" />
                  Account Information
                </h3>
                <p className="text-slate-600">
                  Your Telegram user ID and display name to identify your account. We don't have access to your phone number or email unless you provide it.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-violet-400" />
                  Task & Project Data
                </h3>
                <p className="text-slate-600">
                  The tasks, projects, and notes you create within Whatstask. This data is encrypted and only accessible to you and your team members.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CloudCog className="h-5 w-5 text-violet-400" />
                  Usage Analytics
                </h3>
                <p className="text-slate-600">
                  Anonymous usage data to improve our service (feature usage, performance metrics). This data cannot be used to identify individual users.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-violet-400" />
                  What We Don't Collect
                </h3>
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
          <Shield className="h-12 w-12 text-violet-400 mx-auto mb-6" />
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
              <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
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
  )
}
