import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import { ArrowRight, Check, Zap, Shield, Terminal, Webhook } from "lucide-react"

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

          {/* Why Use Our API */}
          <section className="mb-24">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Terminal,
                  title: "Simple Integration",
                  description: "One REST endpoint. One API key. Send notifications in seconds, not hours.",
                },
                {
                  icon: Webhook,
                  title: "Webhook Support",
                  description: "Auto-parse webhooks from GitHub, Stripe, Vercel, Linear. Just paste our URL.",
                },
                {
                  icon: Shield,
                  title: "No Bot Management",
                  description: "We handle the Telegram bot infrastructure. You just send requests.",
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
          <section id="quickstart" className="mb-24">
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
                  wt_sk_live_abc123def456ghi789jkl012mno345pqr678
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">2</div>
                  <h3 className="text-xl font-semibold text-white">Send a notification</h3>
                </div>
                <p className="text-neutral-400 mb-6">
                  Make a POST request to our API. The user receives your message on Telegram instantly.
                </p>
                <div className="bg-black rounded-xl overflow-hidden border border-white/10">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                    <span className="text-xs text-neutral-500">cURL</span>
                  </div>
                  <pre className="p-6 text-sm overflow-x-auto">
                    <code className="text-neutral-300">
{`curl -X POST https://whatstask.com/api/v1/notify \\
  -H "Authorization: Bearer wt_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "telegram_id": "123456789",
    "title": "Deployment Complete",
    "message": "Production v2.1.0 is now live!",
    "priority": "high"
  }'`}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">3</div>
                  <h3 className="text-xl font-semibold text-white">That's it!</h3>
                </div>
                <p className="text-neutral-400">
                  The message is delivered to the user's Telegram instantly. No webhooks to configure, no callbacks to handle.
                </p>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">API Reference</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">POST /api/v1/notify</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
              {/* Request Parameters */}
              <div className="p-8 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white mb-6">Request Body</h3>
                <div className="space-y-4">
                  {[
                    { name: "telegram_id", type: "string", required: true, desc: "Telegram user ID to notify (get this from users)" },
                    { name: "message", type: "string", required: true, desc: "The notification message (supports markdown)" },
                    { name: "title", type: "string", required: false, desc: "Bold title displayed above the message" },
                    { name: "project", type: "string", required: false, desc: "Project name to display in the notification" },
                    { name: "priority", type: "string", required: false, desc: "One of: low, medium, high, urgent" },
                    { name: "link", type: "string", required: false, desc: "URL to include as a button in the notification" },
                  ].map((param, index) => (
                    <div key={index} className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-semibold text-emerald-400">{param.name}</code>
                          <span className="text-xs text-neutral-500">{param.type}</span>
                          {param.required && (
                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded">required</span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-400">{param.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response */}
              <div className="p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Response</h3>
                <div className="bg-black rounded-xl border border-white/10 overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/10">
                    <span className="text-xs text-green-400 font-medium">200 OK</span>
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-neutral-300">
{`{
  "success": true,
  "message": "Notification sent successfully",
  "data": {
    "sent_to": "123456789",
    "timestamp": "2026-02-12T10:30:00.000Z"
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section id="code-examples" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Code Examples</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">In your language</h2>
            </div>

            <div className="space-y-6">
              {/* Node.js */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold text-xs">JS</span>
                  </div>
                  <span className="font-semibold text-white">Node.js</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-black">
                  <code className="text-neutral-300">
{`const axios = require('axios');

async function sendNotification(telegramId, message) {
  const response = await axios.post(
    'https://whatstask.com/api/v1/notify',
    {
      telegram_id: telegramId,
      message: message,
      title: 'My App Alert',
      priority: 'high'
    },
    {
      headers: {
        'Authorization': \`Bearer \${process.env.WHATSTASK_API_KEY}\`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data;
}

// Usage
sendNotification('123456789', 'Deployment complete!');`}
                  </code>
                </pre>
              </div>

              {/* Python */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xs">PY</span>
                  </div>
                  <span className="font-semibold text-white">Python</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-black">
                  <code className="text-neutral-300">
{`import requests
import os

def send_notification(telegram_id: str, message: str):
    response = requests.post(
        'https://whatstask.com/api/v1/notify',
        json={
            'telegram_id': telegram_id,
            'message': message,
            'title': 'My App Alert',
            'priority': 'high'
        },
        headers={
            'Authorization': f'Bearer {os.environ["WHATSTASK_API_KEY"]}',
            'Content-Type': 'application/json'
        }
    )

    return response.json()

# Usage
send_notification('123456789', 'Payment received!')`}
                  </code>
                </pre>
              </div>

              {/* Go */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-xs">GO</span>
                  </div>
                  <span className="font-semibold text-white">Go</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-black">
                  <code className="text-neutral-300">
{`package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "os"
)

func sendNotification(telegramID, message string) error {
    payload := map[string]string{
        "telegram_id": telegramID,
        "message":     message,
        "title":       "My App Alert",
        "priority":    "high",
    }

    body, _ := json.Marshal(payload)

    req, _ := http.NewRequest("POST",
        "https://whatstask.com/api/v1/notify",
        bytes.NewBuffer(body))

    req.Header.Set("Authorization", "Bearer "+os.Getenv("WHATSTASK_API_KEY"))
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    _, err := client.Do(req)

    return err
}`}
                  </code>
                </pre>
              </div>

              {/* GitHub Actions */}
              <div className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold text-xs">GH</span>
                  </div>
                  <span className="font-semibold text-white">GitHub Actions</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-black">
                  <code className="text-neutral-300">
{`- name: Notify on Telegram
  run: |
    curl -X POST https://whatstask.com/api/v1/notify \\
      -H "Authorization: Bearer \${{ secrets.WHATSTASK_API_KEY }}" \\
      -H "Content-Type: application/json" \\
      -d '{
        "telegram_id": "\${{ secrets.TELEGRAM_ID }}",
        "title": "Build Complete",
        "message": "Build #\${{ github.run_number }} finished successfully",
        "priority": "high",
        "link": "\${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}"
      }'`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* Webhooks */}
          <section id="webhooks" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Webhooks</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Receive events from any service</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                Create a webhook URL and paste it into GitHub, Stripe, Vercel, or any service. We auto-parse the payload and send it to Telegram.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* How it works */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">How it works</h3>
                <div className="space-y-4">
                  {[
                    "Create a webhook in WhatsTask (Profile → Developer API → Webhooks)",
                    "Copy your unique webhook URL",
                    "Paste it into GitHub, Stripe, Vercel, etc.",
                    "Events are auto-parsed and sent to your Telegram",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-emerald-400 text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-neutral-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Services */}
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-6">Supported services</h3>
                <p className="text-neutral-400 mb-6 text-sm">We auto-parse webhooks from these services:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "GitHub", desc: "PRs, Issues, Pushes" },
                    { name: "Stripe", desc: "Payments, Subscriptions" },
                    { name: "Vercel", desc: "Deployments" },
                    { name: "Linear", desc: "Issues, Comments" },
                    { name: "Sentry", desc: "Errors, Alerts" },
                    { name: "Any JSON", desc: "Custom webhooks" },
                  ].map((service, index) => (
                    <div key={index} className="bg-black/50 rounded-xl p-4 border border-white/5">
                      <p className="font-medium text-white text-sm">{service.name}</p>
                      <p className="text-xs text-neutral-500">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Webhook Actions */}
            <div className="mt-8 border border-white/10 rounded-2xl p-8 bg-white/5">
              <h3 className="text-lg font-semibold text-white mb-6">Webhook actions</h3>
              <p className="text-neutral-400 mb-6">Choose what happens when a webhook is received:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { action: "notification", desc: "Send a Telegram notification with the event details" },
                  { action: "task", desc: "Create a task in a specific project automatically" },
                  { action: "both", desc: "Send notification AND create a task" },
                ].map((item, index) => (
                  <div key={index} className="bg-black/50 rounded-xl p-6 border border-white/5">
                    <code className="text-sm font-semibold text-emerald-400">{item.action}</code>
                    <p className="text-neutral-400 text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rate Limits & Pricing */}
          <section id="pricing" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, predictable pricing</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { tier: "Free", price: "$0", notifications: "1,000/mo", rate: "60/min", features: ["API access", "Webhooks", "Basic support"] },
                { tier: "Starter", price: "$19", notifications: "10,000/mo", rate: "120/min", features: ["Everything in Free", "Priority support", "Usage analytics"] },
                { tier: "Pro", price: "$49", notifications: "100,000/mo", rate: "300/min", features: ["Everything in Starter", "Custom rate limits", "Dedicated support"], highlight: true },
                { tier: "Enterprise", price: "Custom", notifications: "Unlimited", rate: "Custom", features: ["Everything in Pro", "SLA", "Custom integrations"] },
              ].map((plan, index) => (
                <div key={index} className={`border rounded-2xl p-6 ${plan.highlight ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-white/10 bg-white/5'}`}>
                  <p className="text-sm font-medium text-neutral-400 mb-1">{plan.tier}</p>
                  <p className="text-3xl font-bold text-white mb-4">{plan.price}<span className="text-sm font-normal text-neutral-500">/mo</span></p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-neutral-300"><strong className="text-white">{plan.notifications}</strong> notifications</p>
                    <p className="text-sm text-neutral-300"><strong className="text-white">{plan.rate}</strong> rate limit</p>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-neutral-400">
                        <Check className="w-4 h-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Error Handling */}
          <section id="errors" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Error Handling</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Common errors</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">Status</th>
                    <th className="text-left p-4 font-semibold text-white">Error</th>
                    <th className="text-left p-4 font-semibold text-white">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { status: "401", error: "Invalid API key", solution: "Check your API key is correct and not revoked" },
                    { status: "403", error: "Permission denied", solution: "Ensure your key has 'notify' permission" },
                    { status: "403", error: "User not in company", solution: "Target user must be in your WhatsTask company" },
                    { status: "429", error: "Rate limit exceeded", solution: "Wait 1 minute or upgrade your plan" },
                    { status: "500", error: "Failed to send", solution: "Telegram API issue - retry with exponential backoff" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-4"><code className="text-red-400 bg-red-500/20 px-2 py-1 rounded text-sm">{row.status}</code></td>
                      <td className="p-4 text-neutral-300">{row.error}</td>
                      <td className="p-4 text-neutral-500 text-sm">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-emerald-400 mb-4 font-medium">Best Practices</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Recommendations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Store keys securely", desc: "Use environment variables, never commit keys to code repositories." },
                { title: "Handle rate limits", desc: "Implement exponential backoff when you receive 429 errors." },
                { title: "Validate responses", desc: "Always check the 'success' field before assuming the message was sent." },
                { title: "Use specific permissions", desc: "Only request the permissions your application actually needs." },
                { title: "Rotate keys periodically", desc: "Create new keys and revoke old ones regularly for security." },
                { title: "Batch when possible", desc: "If sending multiple notifications, consider spacing them to avoid rate limits." },
              ].map((item, index) => (
                <div key={index} className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/5 transition-colors">
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
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
