import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import { ArrowRight, Check, Zap, Shield, Terminal, Webhook, ExternalLink, Copy, AlertCircle, Clock, Users, Code2, GitBranch, CreditCard, Globe, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "Developer API - Send Telegram Notifications | WhatsTask",
  description:
    "Send Telegram notifications from any application with WhatsTask Developer API. Simple REST API, webhook support for GitHub, Stripe, Vercel. No bot management required.",
  keywords:
    "telegram api, telegram notifications api, send telegram message api, telegram bot api alternative, webhook telegram, github telegram notifications, stripe telegram alerts",
  openGraph: {
    title: "Developer API - Send Telegram Notifications | WhatsTask",
    description:
      "Send Telegram notifications from any application. Simple REST API, webhook support. No bot management required.",
    url: "https://www.whatstask.com/developers",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer API - Send Telegram Notifications | WhatsTask",
    description: "Send Telegram notifications from any application. Simple REST API, webhook support.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/developers",
  },
}

export default function DevelopersPage() {
  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Developer API</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Telegram notifications
              <br />in 3 lines of code
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              Send notifications to Telegram from any application. No bot management. No complexity. Just one API call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Get API Key Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <a href="#quickstart">Quick Start Guide</a>
              </Button>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-20">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <h2 className="text-lg font-semibold text-white mb-6">Documentation</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { href: "#quickstart", label: "Quick Start", icon: Zap },
                  { href: "#authentication", label: "Authentication", icon: Shield },
                  { href: "#webhooks", label: "Webhook Integration", icon: Webhook },
                  { href: "#service-examples", label: "Service Examples", icon: GitBranch },
                  { href: "#api-reference", label: "API Reference", icon: Code2 },
                  { href: "#recipients", label: "Recipients", icon: Users },
                  { href: "#rate-limits", label: "Rate Limits", icon: Clock },
                  { href: "#troubleshooting", label: "Troubleshooting", icon: AlertCircle },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
                  >
                    <item.icon className="w-5 h-5 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* What You Can Do */}
          <section className="mb-24">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Terminal,
                  title: "Receive Notifications",
                  description: "Get alerts from GitHub, Stripe, Vercel, etc. directly in Telegram.",
                },
                {
                  icon: Webhook,
                  title: "Auto-Create Tasks",
                  description: "Webhooks automatically create tasks in your projects.",
                },
                {
                  icon: Shield,
                  title: "Custom Integrations",
                  description: "Connect any service that supports webhooks.",
                },
              ].map((item, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Quick Start</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Send your first notification</h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">1</div>
                  <h3 className="text-xl font-semibold text-white">Get your API key</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Open WhatsTask in Telegram, go to <strong className="text-white">Profile → Developer API → Create Key</strong>. Copy and save your key securely.
                </p>
                <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-emerald-400 border border-white/10">
                  wt_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</div>
                  <h3 className="text-xl font-semibold text-white">Get your Webhook URL</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  You will receive a webhook URL that looks like:
                </p>
                <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-emerald-400 border border-white/10">
                  https://app.whatstask.com/api/v1/webhook/abc123def456
                </div>
                <p className="text-neutral-500 text-sm mt-4">
                  This is the URL you&apos;ll add to your external services like GitHub, Stripe, or Vercel.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</div>
                  <h3 className="text-xl font-semibold text-white">Send a test notification</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Make a POST request to your webhook URL. The notification arrives in Telegram instantly.
                </p>
                <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <span className="text-xs text-neutral-500">cURL</span>
                  </div>
                  <pre className="p-6 text-sm overflow-x-auto">
                    <code className="text-neutral-300">
{`curl -X POST "https://app.whatstask.com/api/v1/webhook/abc123def456" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Deployment Complete",
    "message": "Production v2.1.0 is now live!",
    "priority": "high"
  }'`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Authentication</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">API Key Security</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Your API Key</h3>
                <div className="bg-black/50 rounded-xl p-4 font-mono text-sm text-emerald-400 border border-white/10 mb-6">
                  wt_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4
                </div>
                <div className="space-y-3">
                  {[
                    "Keep your API key SECRET - treat it like a password",
                    "Never share it publicly or commit to repositories",
                    "If compromised, contact admin to revoke and get a new key",
                  ].map((rule, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-400 text-sm">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Using Your API Key</h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Include the API key in the header of your requests:
                </p>
                <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-neutral-300">
{`curl -X GET "https://app.whatstask.com/api/developer/webhooks" \\
  -H "x-api-key: wt_your_api_key_here"`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Webhook Integration */}
          <section id="webhooks" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Webhook Integration</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How Webhooks Work</h2>
            </div>

            {/* Flow Diagram */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-neutral-800 border border-white/10 flex items-center justify-center mb-3 mx-auto">
                    <Server className="w-8 h-8 text-neutral-400" />
                  </div>
                  <p className="text-sm font-medium text-white">Your Service</p>
                  <p className="text-xs text-neutral-500">GitHub, Stripe, etc.</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="md:hidden">
                  <ArrowRight className="w-8 h-8 text-emerald-400 rotate-90" />
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-3 mx-auto">
                    <Webhook className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-white">WhatsTask</p>
                  <p className="text-xs text-neutral-500">Webhook Endpoint</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="md:hidden">
                  <ArrowRight className="w-8 h-8 text-emerald-400 rotate-90" />
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-3 mx-auto">
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-white">Telegram</p>
                  <p className="text-xs text-neutral-500">Notification</p>
                </div>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-black/30">
                  <p className="text-xs text-emerald-400 font-medium mb-1">Step 1</p>
                  <p className="text-sm text-neutral-400">Event occurs (PR opened, payment received)</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30">
                  <p className="text-xs text-emerald-400 font-medium mb-1">Step 2</p>
                  <p className="text-sm text-neutral-400">Process webhook & parse data</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30">
                  <p className="text-xs text-emerald-400 font-medium mb-1">Step 3</p>
                  <p className="text-sm text-neutral-400">You receive notification instantly</p>
                </div>
              </div>
            </div>

            {/* Webhook Actions */}
            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">Webhook Target Types</h3>
              <p className="text-neutral-400 mb-6">Choose what happens when a webhook is received:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { action: "notification", desc: "Sends Telegram notification only", icon: "🔔" },
                  { action: "task", desc: "Creates a task in your project", icon: "📋" },
                  { action: "both", desc: "Sends notification AND creates task", icon: "⚡" },
                ].map((item, index) => (
                  <div key={index} className="bg-black/50 rounded-xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{item.icon}</span>
                      <code className="text-sm font-semibold text-emerald-400">{item.action}</code>
                    </div>
                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Examples */}
          <section id="service-examples" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Step-by-Step Examples</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Connect Your Services</h2>
            </div>

            <div className="space-y-8">
              {/* GitHub */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connect GitHub</h3>
                    <p className="text-sm text-neutral-400">Get notified when someone opens a PR or issue</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 1: Go to your GitHub repository</p>
                      <p className="text-neutral-400 text-sm">Click <strong className="text-white">Settings → Webhooks → Add webhook</strong></p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 2: Fill in the form</p>
                      <div className="bg-black/50 rounded-xl border border-white/10 overflow-hidden">
                        <table className="w-full text-sm">
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="p-4 text-neutral-400">Payload URL</td>
                              <td className="p-4 font-mono text-emerald-400">https://app.whatstask.com/api/v1/webhook/abc123def456</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="p-4 text-neutral-400">Content type</td>
                              <td className="p-4 text-white">application/json</td>
                            </tr>
                            <tr className="border-b border-white/5">
                              <td className="p-4 text-neutral-400">Secret</td>
                              <td className="p-4 text-neutral-500">Leave empty (or set if provided)</td>
                            </tr>
                            <tr>
                              <td className="p-4 text-neutral-400">Events</td>
                              <td className="p-4 text-white">Pull requests, Issues, Pushes</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 3: Test it</p>
                      <p className="text-neutral-400 text-sm">Create a test PR or issue - you should receive a Telegram notification within seconds!</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-sm text-emerald-300 font-medium mb-2">Example Notification:</p>
                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-neutral-300">
                      <p className="text-white font-semibold">PR opened: Add new feature</p>
                      <p className="text-neutral-400 mt-1">john_doe opened a pull request in company/repo</p>
                      <p className="text-neutral-500 mt-2 text-xs">via GitHub → WhatsTask</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stripe */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connect Stripe</h3>
                    <p className="text-sm text-neutral-400">Get notified when payments are received</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 1: Go to Stripe Dashboard</p>
                      <p className="text-neutral-400 text-sm">Open <strong className="text-white">Developers → Webhooks → Add endpoint</strong></p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 2: Configure Webhook</p>
                      <div className="bg-black/50 rounded-xl border border-white/10 overflow-hidden">
                        <table className="w-full text-sm">
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="p-4 text-neutral-400">Endpoint URL</td>
                              <td className="p-4 font-mono text-emerald-400">https://app.whatstask.com/api/v1/webhook/abc123def456</td>
                            </tr>
                            <tr>
                              <td className="p-4 text-neutral-400">Events</td>
                              <td className="p-4 text-white">payment_intent.succeeded, invoice.paid</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-sm text-purple-300 font-medium mb-2">Example Notification:</p>
                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-neutral-300">
                      <p className="text-white font-semibold">Stripe: payment intent succeeded</p>
                      <p className="text-neutral-400 mt-1">Amount: 99.00 USD</p>
                      <p className="text-neutral-500 mt-2 text-xs">via Stripe → WhatsTask</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vercel */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connect Vercel</h3>
                    <p className="text-sm text-neutral-400">Get notified when deployments complete</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 1: Go to Vercel Project Settings</p>
                      <p className="text-neutral-400 text-sm">Open <strong className="text-white">Settings → Webhooks</strong> or <strong className="text-white">Settings → Git → Deploy Hooks</strong></p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-400 mb-3">Step 2: Add Webhook URL</p>
                      <div className="bg-black/50 rounded-xl border border-white/10 overflow-hidden">
                        <table className="w-full text-sm">
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td className="p-4 text-neutral-400">URL</td>
                              <td className="p-4 font-mono text-emerald-400">https://app.whatstask.com/api/v1/webhook/abc123def456</td>
                            </tr>
                            <tr>
                              <td className="p-4 text-neutral-400">Events</td>
                              <td className="p-4 text-white">deployment.created, deployment.succeeded, deployment.failed</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-xl bg-neutral-500/10 border border-neutral-500/20">
                    <p className="text-sm text-neutral-300 font-medium mb-2">Example Notification:</p>
                    <div className="bg-black/30 rounded-lg p-4 font-mono text-sm text-neutral-300">
                      <p className="text-white font-semibold">Deployment deployment.succeeded</p>
                      <p className="text-neutral-400 mt-1">my-app - deployment.succeeded</p>
                      <p className="text-emerald-400 mt-1 text-xs">View: https://my-app-xyz.vercel.app</p>
                      <p className="text-neutral-500 mt-2 text-xs">via Vercel → WhatsTask</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Service */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-8 py-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Connect Any Custom Service</h3>
                    <p className="text-sm text-neutral-400">Send notifications from your own app or script</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  {/* cURL */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Terminal className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm font-medium text-white">cURL</span>
                    </div>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`curl -X POST "https://app.whatstask.com/api/v1/webhook/abc123def456" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Server Alert",
    "message": "CPU usage exceeded 90%",
    "priority": "high",
    "source": "Monitoring System"
  }'`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* JavaScript */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded bg-yellow-500/20 flex items-center justify-center">
                        <span className="text-yellow-400 text-[10px] font-bold">JS</span>
                      </div>
                      <span className="text-sm font-medium text-white">JavaScript / Node.js</span>
                    </div>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`const sendNotification = async () => {
  const response = await fetch(
    "https://app.whatstask.com/api/v1/webhook/abc123def456",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "New Order Received",
        message: "Order #12345 - $150.00",
        priority: "medium",
        source: "E-commerce System"
      })
    }
  );
  return response.json();
};`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* Python */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded bg-blue-500/20 flex items-center justify-center">
                        <span className="text-blue-400 text-[10px] font-bold">PY</span>
                      </div>
                      <span className="text-sm font-medium text-white">Python</span>
                    </div>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`import requests

webhook_url = "https://app.whatstask.com/api/v1/webhook/abc123def456"

data = {
    "title": "Backup Completed",
    "message": "Daily backup finished successfully. Size: 2.3 GB",
    "priority": "low",
    "source": "Backup System"
}

response = requests.post(webhook_url, json=data)
print(response.json())`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  {/* PHP */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 rounded bg-indigo-500/20 flex items-center justify-center">
                        <span className="text-indigo-400 text-[10px] font-bold">PHP</span>
                      </div>
                      <span className="text-sm font-medium text-white">PHP</span>
                    </div>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`<?php
$webhook_url = "https://app.whatstask.com/api/v1/webhook/abc123def456";

$data = [
    "title" => "Form Submission",
    "message" => "New contact form submission from john@example.com",
    "source" => "Website"
];

$ch = curl_init($webhook_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Services */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Auto-Detection</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Supported Services</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Auto-Detected Services</h3>
                <p className="text-neutral-400 text-sm mb-6">These services are automatically detected and formatted nicely:</p>
                <div className="space-y-3">
                  {[
                    { name: "GitHub", events: "Pull Requests, Issues, Pushes, Reviews" },
                    { name: "Stripe", events: "Payments, Invoices, Subscriptions" },
                    { name: "Vercel", events: "Deployments (created, succeeded, failed)" },
                    { name: "Linear", events: "Issues, Comments, Status changes" },
                  ].map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                      <span className="font-medium text-white">{service.name}</span>
                      <span className="text-xs text-neutral-500">{service.events}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Generic Webhooks</h3>
                <p className="text-neutral-400 text-sm mb-6">For any other service, we look for these common fields:</p>
                <div className="space-y-2">
                  {[
                    { field: "title", desc: "Main heading of the notification" },
                    { field: "message / description / text", desc: "Body content" },
                    { field: "priority", desc: "low, medium, high, urgent" },
                    { field: "status", desc: "Any status information" },
                    { field: "url / link", desc: "Link to view details" },
                    { field: "source", desc: "Name of the sending service" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-black/30">
                      <code className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded">{item.field}</code>
                      <span className="text-sm text-neutral-400">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">API Reference</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Endpoints</h2>
            </div>

            <div className="space-y-8">
              {/* GET Verify Webhook */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">GET</span>
                  <code className="text-white font-mono">/api/v1/webhook/{"{hookId}"}</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-400 mb-6">Check if your webhook is active:</p>
                  <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="text-neutral-300">
{`curl -X GET "https://app.whatstask.com/api/v1/webhook/abc123def456"`}
                      </code>
                    </pre>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-neutral-500 mb-2">Response:</p>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`{
  "success": true,
  "data": {
    "name": "GitHub Notifications",
    "isActive": true,
    "targetType": "notification",
    "usageCount": 42
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* POST Send Webhook */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">POST</span>
                  <code className="text-white font-mono">/api/v1/webhook/{"{hookId}"}</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-400 mb-6">Send data to your webhook with custom recipients:</p>
                  <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="text-neutral-300">
{`curl -X POST "https://app.whatstask.com/api/v1/webhook/abc123def456" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Your Title",
    "message": "Your message here",
    "priority": "medium",
    "url": "https://example.com/details",
    "source": "Your App",
    "recipients": ["123456789", "987654321"]
  }'`}
                      </code>
                    </pre>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-neutral-500 mb-2">Response:</p>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`{
  "success": true,
  "message": "Webhook processed successfully",
  "data": {
    "type": "notification",
    "recipientCount": 2,
    "parsed": {
      "title": "Your Title",
      "hasMessage": true,
      "source": "Your App"
    }
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* POST Create Webhook */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">POST</span>
                  <code className="text-white font-mono">/api/developer/webhooks</code>
                </div>
                <div className="p-6">
                  <p className="text-neutral-400 mb-6">Create a new webhook with default recipients:</p>
                  <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                    <pre className="p-4 text-sm overflow-x-auto">
                      <code className="text-neutral-300">
{`curl -X POST "https://app.whatstask.com/api/developer/webhooks" \\
  -H "Content-Type: application/json" \\
  -H "x-telegram-id: YOUR_TELEGRAM_ID" \\
  -d '{
    "name": "Team Alerts",
    "companyId": "YOUR_COMPANY_ID",
    "targetType": "notification",
    "recipients": ["111111111", "222222222", "333333333"]
  }'`}
                      </code>
                    </pre>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-neutral-500 mb-2">Response:</p>
                    <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code className="text-neutral-300">
{`{
  "success": true,
  "data": {
    "hookId": "abc123def456",
    "url": "https://app.whatstask.com/api/v1/webhook/abc123def456",
    "defaultRecipients": ["111111111", "222222222", "333333333"]
  },
  "message": "Webhook created. Notifications will be sent to 3 recipient(s)."
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recipients */}
          <section id="recipients" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Targeting</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Specifying Recipients</h2>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">3 Ways to Specify Recipients</h3>
              <div className="space-y-4 mb-8">
                {[
                  { method: "In payload", priority: "1st (highest)", desc: "Send recipients array in webhook payload" },
                  { method: "Default recipients", priority: "2nd", desc: "Set when creating webhook" },
                  { method: "Webhook creator", priority: "3rd (fallback)", desc: "If nothing else specified" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-white">{item.method}</span>
                      <span className="text-xs text-neutral-500 ml-2">({item.priority})</span>
                    </div>
                    <span className="text-sm text-neutral-400">{item.desc}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">Payload Fields for Recipients</h3>
              <p className="text-neutral-400 text-sm mb-4">Any of these work:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { field: "recipients", example: '["123456789", "987654321"]' },
                  { field: "telegram_ids", example: '["123456789"]' },
                  { field: "telegram_id", example: '"123456789"' },
                  { field: "chat_ids", example: '["123456789"]' },
                  { field: "chat_id", example: '"123456789"' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                    <code className="text-sm text-emerald-400 font-mono">{item.field}</code>
                    <code className="text-xs text-neutral-500">{item.example}</code>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rate Limits */}
          <section id="rate-limits" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Limits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Rate Limits</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">Limit</th>
                    <th className="text-left p-6 font-semibold text-white">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { limit: "Requests per minute", value: "60" },
                    { limit: "API keys per user", value: "10" },
                    { limit: "Webhooks per user", value: "20" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-300">{row.limit}</td>
                      <td className="p-6"><code className="text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded text-sm">{row.value}</code></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-neutral-500 text-sm mt-4 text-center">
              If you exceed limits, you&apos;ll receive a <code className="text-red-400">429 Too Many Requests</code> response.
            </p>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-24 scroll-mt-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Help</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Troubleshooting</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  error: "Webhook not found or inactive",
                  cause: "The webhook URL is incorrect or has been deactivated.",
                  solutions: ["Double-check the webhook URL", "Contact WhatsTask admin to verify the webhook is active"],
                },
                {
                  error: "Not receiving notifications",
                  cause: "The webhook is working but notifications aren't arriving.",
                  solutions: [
                    "Check you've started a conversation with the WhatsTask bot on Telegram",
                    "Make sure your Telegram notifications are enabled",
                    "Verify the webhook is set to 'notification' or 'both' target type",
                  ],
                },
                {
                  error: "Webhook returns 500 error",
                  cause: "Server-side processing error.",
                  solutions: [
                    "Ensure your payload is valid JSON",
                    'Try a simpler payload: {"title": "Test", "message": "Hello"}',
                    "Contact WhatsTask admin with the error details",
                  ],
                },
                {
                  error: "GitHub/Stripe not connecting",
                  cause: "Usually a URL copy/paste issue.",
                  solutions: [
                    "Make sure you copied the FULL webhook URL including https://",
                    "Ensure there are no extra spaces",
                    'For Stripe, ensure the endpoint is NOT set to "Test mode only" if you\'re in production',
                  ],
                },
              ].map((item, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-6 bg-white/5">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">&quot;{item.error}&quot;</h3>
                      <p className="text-neutral-400 text-sm mb-4"><strong className="text-neutral-300">Cause:</strong> {item.cause}</p>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-emerald-400 font-medium">Solutions:</p>
                        {item.solutions.map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-neutral-300">{solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Reference Card */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Cheat Sheet</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Quick Reference</h2>
            </div>

            <div className="border border-emerald-500/30 rounded-2xl p-8 bg-emerald-500/5 font-mono text-sm">
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-500 mb-2"># Your Webhook URL</p>
                  <p className="text-emerald-400">https://app.whatstask.com/api/v1/webhook/[YOUR_HOOK_ID]</p>
                </div>
                <div>
                  <p className="text-neutral-500 mb-2"># Simple Test</p>
                  <pre className="text-neutral-300 overflow-x-auto">
{`curl -X POST [YOUR_WEBHOOK_URL] \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Test","message":"Hello!"}'`}
                  </pre>
                </div>
                <div>
                  <p className="text-neutral-500 mb-2"># Send to Multiple People</p>
                  <pre className="text-neutral-300 overflow-x-auto">
{`curl -X POST [YOUR_WEBHOOK_URL] \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Alert","message":"Check this!",
       "recipients":["123456789","987654321"]}'`}
                  </pre>
                </div>
                <div>
                  <p className="text-neutral-500 mb-2"># Payload Format</p>
                  <pre className="text-neutral-300 overflow-x-auto">
{`{
  "title": "...",       // Required - notification title
  "message": "...",     // Optional - notification body
  "recipients": [...],  // Optional - Telegram IDs to notify
  "priority": "...",    // Optional - low/medium/high/urgent
  "url": "...",         // Optional - link to details
  "source": "..."       // Optional - your app name
}`}
                  </pre>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-neutral-500 mb-1">Supported Services</p>
                      <p className="text-white">GitHub, Stripe, Vercel, Linear, + any webhook</p>
                    </div>
                    <div>
                      <p className="text-neutral-500 mb-1">Rate Limit</p>
                      <p className="text-white">60 requests/minute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-emerald-500/30 bg-emerald-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start sending?</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                Get your API key for free. 1,000 notifications/month included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Get API Key Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <a href="mailto:charlesaarondavid@gmail.com">Contact Support</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
            <p className="mt-2 text-xs">Last Updated: February 2026</p>
          </div>
        </footer>

        {/* Schema */}
        <Script
          id="schema-developer-api"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TechArticle",
              headline: "WhatsTask Developer API Documentation",
              description: "Send Telegram notifications from any application with WhatsTask Developer API.",
              author: {
                "@type": "Organization",
                name: "WhatsTask",
              },
            }),
          }}
        />
      </div>
    </>
  )
}
