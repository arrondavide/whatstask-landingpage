"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Check, Zap, Shield, Terminal, Webhook,
  Copy, CheckCheck, ChevronRight, Search, Menu, X,
  GitBranch, CreditCard, Globe, Code2, Users, Clock,
  AlertCircle, ExternalLink, BookOpen, Rocket, Key
} from "lucide-react"

// Code examples for different languages
const codeExamples = {
  curl: `curl -X POST "https://app.whatstask.com/api/v1/webhook/YOUR_HOOK_ID" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Server Alert",
    "message": "CPU usage exceeded 90%",
    "priority": "high"
  }'`,
  javascript: `const response = await fetch(
  "https://app.whatstask.com/api/v1/webhook/YOUR_HOOK_ID",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Server Alert",
      message: "CPU usage exceeded 90%",
      priority: "high"
    })
  }
);

const result = await response.json();
console.log(result);`,
  python: `import requests

response = requests.post(
    "https://app.whatstask.com/api/v1/webhook/YOUR_HOOK_ID",
    json={
        "title": "Server Alert",
        "message": "CPU usage exceeded 90%",
        "priority": "high"
    }
)

print(response.json())`,
  php: `<?php
$ch = curl_init("https://app.whatstask.com/api/v1/webhook/YOUR_HOOK_ID");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "title" => "Server Alert",
    "message" => "CPU usage exceeded 90%",
    "priority" => "high"
]));

$response = curl_exec($ch);
curl_close($ch);
echo $response;`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    payload := map[string]string{
        "title":    "Server Alert",
        "message":  "CPU usage exceeded 90%",
        "priority": "high",
    }
    body, _ := json.Marshal(payload)

    resp, _ := http.Post(
        "https://app.whatstask.com/api/v1/webhook/YOUR_HOOK_ID",
        "application/json",
        bytes.NewBuffer(body),
    )
    defer resp.Body.Close()
}`,
}

// Navigation sections
const navSections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "quickstart", label: "Quick Start", icon: Rocket },
  { id: "authentication", label: "Authentication", icon: Key },
  { id: "webhooks", label: "Webhooks", icon: Webhook },
  { id: "integrations", label: "Integrations", icon: GitBranch },
  { id: "api-reference", label: "API Reference", icon: Code2 },
  { id: "recipients", label: "Recipients", icon: Users },
  { id: "rate-limits", label: "Rate Limits", icon: Clock },
  { id: "errors", label: "Error Handling", icon: AlertCircle },
]

// Copy button component
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
      title="Copy to clipboard"
    >
      {copied ? (
        <CheckCheck className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
      )}
    </button>
  )
}

// Code block with copy button
function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="relative group">
      <pre className="bg-[#0d0d0d] rounded-xl border border-white/[0.06] p-4 overflow-x-auto text-sm">
        <code className="text-neutral-300 font-mono">{code}</code>
      </pre>
      <CopyButton text={code} />
    </div>
  )
}

// Language tabs component
function LanguageTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("curl")

  const tabs = [
    { key: "curl", label: "cURL" },
    { key: "javascript", label: "JavaScript" },
    { key: "python", label: "Python" },
    { key: "php", label: "PHP" },
    { key: "go", label: "Go" },
  ] as const

  return (
    <div className="rounded-xl border border-white/[0.06] overflow-hidden bg-[#0d0d0d]">
      <div className="flex border-b border-white/[0.06] bg-white/[0.02]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 text-sm font-medium transition-colors relative ${
              activeTab === tab.key
                ? "text-white"
                : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
            )}
          </button>
        ))}
      </div>
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="text-neutral-300 font-mono">{codeExamples[activeTab]}</code>
        </pre>
        <CopyButton text={codeExamples[activeTab]} />
      </div>
    </div>
  )
}

export default function DeveloperDocsClient() {
  const [activeSection, setActiveSection] = useState("overview")
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Track scroll position for active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -60% 0%" }
    )

    navSections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-8 pl-6 pr-4">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-semibold">Developer API</span>
              </div>
              <p className="text-xs text-neutral-500">v1.0</p>
            </div>

            <nav className="space-y-1">
              {navSections.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === id
                      ? "bg-emerald-500/10 text-emerald-400 font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <a
                href="https://t.me/whatstaskbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Get API Key
              </a>
            </div>
          </div>
        </aside>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg shadow-emerald-500/20"
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Panel */}
        {mobileNavOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm" onClick={() => setMobileNavOpen(false)}>
            <nav className="absolute bottom-24 right-6 w-64 bg-[#141414] rounded-2xl border border-white/10 p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
              {navSections.map(({ id, label, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMobileNavOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === id
                      ? "bg-emerald-500/10 text-emerald-400 font-medium"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-6 lg:px-12 py-12 lg:py-16 max-w-4xl">
          {/* Overview */}
          <section id="overview" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Overview
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              WhatsTask Developer API
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10">
              Send Telegram notifications from any application. Connect GitHub, Stripe, Vercel,
              or any webhook-capable service. No bot management required.
            </p>

            {/* Quick cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Zap, title: "Simple", desc: "One endpoint, one API key" },
                { icon: Webhook, title: "Webhooks", desc: "Auto-parse from any service" },
                { icon: Shield, title: "Secure", desc: "No bot tokens to manage" },
              ].map((card, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <card.icon className="w-5 h-5 text-emerald-400 mb-3" />
                  <h3 className="font-medium text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-neutral-500">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400 rounded-lg px-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Get API Key <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-6 border-white/10 text-white hover:bg-white/5 bg-transparent">
                <a href="#quickstart">Quick Start</a>
              </Button>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quickstart" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Quick Start
            </div>
            <h2 className="text-3xl font-bold mb-4">Get started in 2 minutes</h2>
            <p className="text-neutral-400 mb-8">
              Follow these steps to send your first notification.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-sm">1</div>
                  <div className="w-px flex-1 bg-white/[0.06] my-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-white mb-2">Get your webhook URL</h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    Open WhatsTask in Telegram → Profile → Developer API → Create Webhook
                  </p>
                  <CodeBlock code="https://app.whatstask.com/api/v1/webhook/abc123def456" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-sm">2</div>
                  <div className="w-px flex-1 bg-white/[0.06] my-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-white mb-2">Send a test notification</h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    Make a POST request to your webhook URL with any JSON payload.
                  </p>
                  <LanguageTabs />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Done!</h3>
                  <p className="text-sm text-neutral-400">
                    You&apos;ll receive the notification in Telegram instantly.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication */}
          <section id="authentication" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Authentication
            </div>
            <h2 className="text-3xl font-bold mb-4">API Keys</h2>
            <p className="text-neutral-400 mb-8">
              Your API key authenticates requests to the WhatsTask API.
            </p>

            <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-200 mb-1">Keep your API key secure</p>
                  <p className="text-sm text-amber-200/70">
                    Never expose your API key in client-side code or commit it to version control.
                    Use environment variables instead.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-white mb-3">Using the API key in headers</h3>
            <CodeBlock code={`curl -X GET "https://app.whatstask.com/api/developer/webhooks" \\
  -H "x-api-key: wt_your_api_key_here"`} />
          </section>

          {/* Webhooks */}
          <section id="webhooks" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Webhooks
            </div>
            <h2 className="text-3xl font-bold mb-4">How webhooks work</h2>
            <p className="text-neutral-400 mb-8">
              Webhooks let you receive notifications from external services like GitHub, Stripe, and Vercel.
            </p>

            {/* Flow visualization */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] mb-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center mb-2 mx-auto">
                  <GitBranch className="w-6 h-6 text-neutral-400" />
                </div>
                <p className="text-sm font-medium">Your Service</p>
                <p className="text-xs text-neutral-500">GitHub, Stripe, etc.</p>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-2 mx-auto">
                  <Webhook className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="text-sm font-medium">WhatsTask</p>
                <p className="text-xs text-neutral-500">Processes webhook</p>
              </div>
              <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90 sm:rotate-0" />
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-2 mx-auto">
                  <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Telegram</p>
                <p className="text-xs text-neutral-500">You receive it</p>
              </div>
            </div>

            {/* Webhook target types */}
            <h3 className="font-semibold text-white mb-4">Webhook target types</h3>
            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {[
                { type: "notification", desc: "Send Telegram notification only" },
                { type: "task", desc: "Create a task in your project" },
                { type: "both", desc: "Send notification AND create task" },
              ].map((item) => (
                <div key={item.type} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <code className="text-sm text-emerald-400 font-mono">{item.type}</code>
                  <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Payload format */}
            <h3 className="font-semibold text-white mb-4">Payload format</h3>
            <CodeBlock code={`{
  "title": "Notification Title",    // Required
  "message": "Body content",        // Optional
  "priority": "high",               // Optional: low, medium, high, urgent
  "url": "https://example.com",     // Optional: link to details
  "source": "Your App Name",        // Optional
  "recipients": ["123456789"]       // Optional: Telegram user IDs
}`} />
          </section>

          {/* Integrations */}
          <section id="integrations" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Integrations
            </div>
            <h2 className="text-3xl font-bold mb-4">Connect your services</h2>
            <p className="text-neutral-400 mb-8">
              Step-by-step guides for popular services. We auto-detect and format these webhooks.
            </p>

            {/* GitHub */}
            <div className="mb-8 rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-4 p-5 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-sm text-neutral-500">Pull requests, issues, pushes</p>
                </div>
              </div>
              <div className="p-5">
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">1.</span>
                    <span className="text-neutral-300">Go to your repo → Settings → Webhooks → Add webhook</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">2.</span>
                    <span className="text-neutral-300">Paste your WhatsTask webhook URL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">3.</span>
                    <span className="text-neutral-300">Set Content type to <code className="px-1.5 py-0.5 rounded bg-white/5 text-emerald-400 font-mono text-xs">application/json</code></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">4.</span>
                    <span className="text-neutral-300">Select events: Pull requests, Issues, Pushes</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Stripe */}
            <div className="mb-8 rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-4 p-5 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Stripe</h3>
                  <p className="text-sm text-neutral-500">Payments, invoices, subscriptions</p>
                </div>
              </div>
              <div className="p-5">
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">1.</span>
                    <span className="text-neutral-300">Go to Stripe Dashboard → Developers → Webhooks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">2.</span>
                    <span className="text-neutral-300">Click &quot;Add endpoint&quot; and paste your webhook URL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">3.</span>
                    <span className="text-neutral-300">Select events: <code className="px-1.5 py-0.5 rounded bg-white/5 text-purple-400 font-mono text-xs">payment_intent.succeeded</code></span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Vercel */}
            <div className="mb-8 rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-4 p-5 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Vercel</h3>
                  <p className="text-sm text-neutral-500">Deployment notifications</p>
                </div>
              </div>
              <div className="p-5">
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">1.</span>
                    <span className="text-neutral-300">Go to Project Settings → Webhooks</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">2.</span>
                    <span className="text-neutral-300">Add your WhatsTask webhook URL</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400 font-mono">3.</span>
                    <span className="text-neutral-300">Select events: <code className="px-1.5 py-0.5 rounded bg-white/5 text-neutral-400 font-mono text-xs">deployment.succeeded</code></span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Other services */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <h3 className="font-semibold text-white mb-3">Other services</h3>
              <p className="text-sm text-neutral-400 mb-4">
                Any service that sends JSON webhooks will work. We automatically detect these common fields:
              </p>
              <div className="flex flex-wrap gap-2">
                {["title", "message", "description", "text", "status", "url", "priority", "source"].map((field) => (
                  <code key={field} className="px-2 py-1 rounded-md bg-white/5 text-emerald-400 text-xs font-mono">{field}</code>
                ))}
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              API Reference
            </div>
            <h2 className="text-3xl font-bold mb-8">Endpoints</h2>

            {/* POST webhook */}
            <div className="mb-8 rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                <span className="px-2 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400">POST</span>
                <code className="text-white font-mono text-sm">/api/v1/webhook/{"{hookId}"}</code>
              </div>
              <div className="p-5">
                <p className="text-sm text-neutral-400 mb-4">Send a notification or trigger a task creation.</p>

                <h4 className="text-sm font-semibold text-white mb-3">Request body</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left py-2 pr-4 text-neutral-400 font-medium">Parameter</th>
                        <th className="text-left py-2 pr-4 text-neutral-400 font-medium">Type</th>
                        <th className="text-left py-2 text-neutral-400 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { param: "title", type: "string", desc: "Notification title (required)", required: true },
                        { param: "message", type: "string", desc: "Notification body content" },
                        { param: "priority", type: "string", desc: "low | medium | high | urgent" },
                        { param: "url", type: "string", desc: "Link to include in notification" },
                        { param: "recipients", type: "string[]", desc: "Telegram user IDs to notify" },
                      ].map((row) => (
                        <tr key={row.param} className="border-b border-white/[0.04]">
                          <td className="py-2.5 pr-4">
                            <code className="text-emerald-400 font-mono">{row.param}</code>
                            {row.required && <span className="ml-2 text-xs text-red-400">required</span>}
                          </td>
                          <td className="py-2.5 pr-4 text-neutral-500 font-mono">{row.type}</td>
                          <td className="py-2.5 text-neutral-400">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="text-sm font-semibold text-white mt-6 mb-3">Response</h4>
                <CodeBlock code={`{
  "success": true,
  "message": "Webhook processed successfully",
  "data": {
    "type": "notification",
    "recipientCount": 1
  }
}`} />
              </div>
            </div>

            {/* GET webhook */}
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                <span className="px-2 py-1 rounded text-xs font-bold bg-blue-500/20 text-blue-400">GET</span>
                <code className="text-white font-mono text-sm">/api/v1/webhook/{"{hookId}"}</code>
              </div>
              <div className="p-5">
                <p className="text-sm text-neutral-400 mb-4">Check if a webhook is active and get its details.</p>
                <CodeBlock code={`{
  "success": true,
  "data": {
    "name": "My Webhook",
    "isActive": true,
    "targetType": "notification",
    "usageCount": 42
  }
}`} />
              </div>
            </div>
          </section>

          {/* Recipients */}
          <section id="recipients" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Recipients
            </div>
            <h2 className="text-3xl font-bold mb-4">Specifying recipients</h2>
            <p className="text-neutral-400 mb-8">
              There are 3 ways to specify who receives notifications, in order of priority:
            </p>

            <div className="space-y-4">
              {[
                { num: "1", title: "In the webhook payload", desc: "Send recipients array in each request", code: '"recipients": ["123456789", "987654321"]' },
                { num: "2", title: "Default recipients on webhook", desc: "Set when creating the webhook" },
                { num: "3", title: "Webhook creator", desc: "Falls back to the person who created the webhook" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{item.desc}</p>
                    {item.code && (
                      <code className="inline-block mt-2 px-2 py-1 rounded bg-black/30 text-emerald-400 text-xs font-mono">{item.code}</code>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rate Limits */}
          <section id="rate-limits" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Rate Limits
            </div>
            <h2 className="text-3xl font-bold mb-8">Usage limits</h2>

            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/[0.06]">
                    <th className="text-left p-4 font-medium text-neutral-400">Limit</th>
                    <th className="text-left p-4 font-medium text-neutral-400">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { limit: "Requests per minute", value: "60" },
                    { limit: "API keys per user", value: "10" },
                    { limit: "Webhooks per user", value: "20" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04] last:border-0">
                      <td className="p-4 text-neutral-300">{row.limit}</td>
                      <td className="p-4">
                        <code className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-mono">{row.value}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-neutral-500 mt-4">
              Exceeding rate limits returns <code className="text-red-400">429 Too Many Requests</code>.
              Implement exponential backoff in your retry logic.
            </p>
          </section>

          {/* Errors */}
          <section id="errors" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Error Handling
            </div>
            <h2 className="text-3xl font-bold mb-8">Troubleshooting</h2>

            <div className="space-y-4">
              {[
                {
                  error: "Webhook not found",
                  cause: "Invalid webhook URL or webhook was deleted",
                  fix: "Double-check the webhook URL. Create a new webhook if needed.",
                },
                {
                  error: "Not receiving notifications",
                  cause: "Haven't started WhatsTask bot on Telegram",
                  fix: "Open @whatstaskbot on Telegram and press Start.",
                },
                {
                  error: "500 Internal Server Error",
                  cause: "Invalid JSON payload or server issue",
                  fix: "Validate your JSON. Try a simple test payload first.",
                },
                {
                  error: "429 Too Many Requests",
                  cause: "Rate limit exceeded",
                  fix: "Wait 1 minute. Implement exponential backoff.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">{item.error}</h3>
                      <p className="text-sm text-neutral-500 mt-1"><strong className="text-neutral-400">Cause:</strong> {item.cause}</p>
                      <p className="text-sm text-emerald-400 mt-2"><strong className="text-emerald-500">Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Get your free API key and start sending Telegram notifications in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400 rounded-lg px-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Get API Key Free <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-6 border-white/10 text-white hover:bg-white/5 bg-transparent">
                <a href="mailto:charlesaarondavid@gmail.com">Contact Support</a>
              </Button>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] mt-12 py-8">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} WhatsTask. All rights reserved.</p>
          <p className="mt-1 text-xs">Last updated: February 2026</p>
        </div>
      </footer>
    </div>
  )
}
