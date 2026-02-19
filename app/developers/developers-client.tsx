"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Check, Zap, Shield, Terminal,
  Copy, CheckCheck, Menu, X,
  Code2, Users, Clock, MessageSquare,
  AlertCircle, ExternalLink, BookOpen, Rocket, Send
} from "lucide-react"

// Code examples for different languages
const codeExamples = {
  curl: `curl -X POST "https://pm.whatstask.com/api/notifications/send" \\
  -H "Content-Type: application/json" \\
  -d '{
    "telegramId": "YOUR_TELEGRAM_ID",
    "message": "<b>Alert</b>\\n\\nSomething happened!",
    "type": "general"
  }'`,
  javascript: `async function sendTelegramNotification(message) {
  const response = await fetch('https://pm.whatstask.com/api/notifications/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      telegramId: process.env.WHATSTASK_TELEGRAM_ID,
      message,
      type: 'general'
    })
  })
  return response.ok
}

// Usage
await sendTelegramNotification('<b>New Order</b>\\n\\nOrder #12345 - $99.00')`,
  python: `import requests
import os

def send_telegram_notification(message):
    response = requests.post(
        'https://pm.whatstask.com/api/notifications/send',
        json={
            'telegramId': os.environ['WHATSTASK_TELEGRAM_ID'],
            'message': message,
            'type': 'general'
        }
    )
    return response.ok

# Usage
send_telegram_notification('<b>Server Alert</b>\\n\\nCPU usage at 90%')`,
  php: `<?php
function sendTelegramNotification($message) {
    $ch = curl_init('https://pm.whatstask.com/api/notifications/send');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'telegramId' => getenv('WHATSTASK_TELEGRAM_ID'),
        'message' => $message,
        'type' => 'general'
    ]));

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    return $httpCode === 200;
}

// Usage
sendTelegramNotification('<b>Form Submission</b>\\nNew contact from john@example.com');
?>`,
  go: `package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "os"
)

type NotificationPayload struct {
    TelegramID string \`json:"telegramId"\`
    Message    string \`json:"message"\`
    Type       string \`json:"type"\`
}

func sendTelegramNotification(message string) error {
    payload := NotificationPayload{
        TelegramID: os.Getenv("WHATSTASK_TELEGRAM_ID"),
        Message:    message,
        Type:       "general",
    }
    body, _ := json.Marshal(payload)

    resp, err := http.Post(
        "https://pm.whatstask.com/api/notifications/send",
        "application/json",
        bytes.NewBuffer(body),
    )
    if err != nil {
        return err
    }
    defer resp.Body.Close()
    return nil
}`,
}

// Navigation sections
const navSections = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "quickstart", label: "Quick Start", icon: Rocket },
  { id: "api-reference", label: "API Reference", icon: Code2 },
  { id: "code-examples", label: "Code Examples", icon: Terminal },
  { id: "formatting", label: "HTML Formatting", icon: MessageSquare },
  { id: "use-cases", label: "Use Cases", icon: Send },
  { id: "multiple-recipients", label: "Multiple Recipients", icon: Users },
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
      <div className="flex border-b border-white/[0.06] bg-white/[0.02] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
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
                <span className="text-sm font-semibold">Notifications API</span>
              </div>
              <p className="text-xs text-neutral-500">Direct API</p>
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
                href="https://t.me/whatstask_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Get Telegram ID
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
              WhatsTask Direct<br />Notifications API
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-10">
              Send Telegram notifications from your app with a single API call.
              No authentication tokens. No webhooks to configure. Just POST and go.
            </p>

            {/* Quick cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Zap, title: "One Endpoint", desc: "Single POST request" },
                { icon: Shield, title: "No Auth Needed", desc: "Just your Telegram ID" },
                { icon: MessageSquare, title: "HTML Support", desc: "Rich text formatting" },
              ].map((card, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <card.icon className="w-5 h-5 text-emerald-400 mb-3" />
                  <h3 className="font-medium text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-neutral-500">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Endpoint highlight */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-10">
              <p className="text-sm text-emerald-400 font-medium mb-2">API Endpoint</p>
              <code className="text-white font-mono">POST https://pm.whatstask.com/api/notifications/send</code>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400 rounded-lg px-6">
                <a href="https://t.me/whatstask_bot" target="_blank" rel="noopener noreferrer">
                  Get Your Telegram ID <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl font-bold mb-4">Get started in 2 steps</h2>
            <p className="text-neutral-400 mb-8">
              Send your first notification in under a minute.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-sm">1</div>
                  <div className="w-px flex-1 bg-white/[0.06] my-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-white mb-2">Get your Telegram ID</h3>
                  <div className="space-y-3 text-sm text-neutral-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-neutral-500">1</span>
                      <span>Open Telegram</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-neutral-500">2</span>
                      <span>Start a chat with <a href="https://t.me/whatstask_bot" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">@whatstask_bot</a></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-neutral-500">3</span>
                      <span>Send <code className="px-1.5 py-0.5 rounded bg-white/5 text-emerald-400">/start</code></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-neutral-500">4</span>
                      <span>Your Telegram ID will be shown (e.g., <code className="px-1.5 py-0.5 rounded bg-white/5 text-white">7955910963</code>)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-sm">2</div>
                  <div className="w-px flex-1 bg-white/[0.06] my-2" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-semibold text-white mb-2">Send a notification</h3>
                  <p className="text-sm text-neutral-400 mb-4">
                    Make a POST request with your Telegram ID and message.
                  </p>
                  <CodeBlock code={`curl -X POST "https://pm.whatstask.com/api/notifications/send" \\
  -H "Content-Type: application/json" \\
  -d '{
    "telegramId": "YOUR_TELEGRAM_ID",
    "message": "<b>Hello!</b>\\n\\nThis is my first notification.",
    "type": "general"
  }'`} />
                </div>
              </div>

              {/* Done */}
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

          {/* API Reference */}
          <section id="api-reference" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              API Reference
            </div>
            <h2 className="text-3xl font-bold mb-8">Endpoint</h2>

            {/* POST endpoint */}
            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                <span className="px-2 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400">POST</span>
                <code className="text-white font-mono text-sm">/api/notifications/send</code>
              </div>
              <div className="p-5">
                <p className="text-sm text-neutral-400 mb-6">Base URL: <code className="text-emerald-400">https://pm.whatstask.com</code></p>

                <h4 className="text-sm font-semibold text-white mb-3">Request body</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/[0.06]">
                        <th className="text-left py-2 pr-4 text-neutral-400 font-medium">Field</th>
                        <th className="text-left py-2 pr-4 text-neutral-400 font-medium">Required</th>
                        <th className="text-left py-2 text-neutral-400 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/[0.04]">
                        <td className="py-2.5 pr-4">
                          <code className="text-emerald-400 font-mono">telegramId</code>
                        </td>
                        <td className="py-2.5 pr-4"><span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded">Yes</span></td>
                        <td className="py-2.5 text-neutral-400">Your Telegram ID (from @whatstask_bot)</td>
                      </tr>
                      <tr className="border-b border-white/[0.04]">
                        <td className="py-2.5 pr-4">
                          <code className="text-emerald-400 font-mono">message</code>
                        </td>
                        <td className="py-2.5 pr-4"><span className="text-xs text-red-400 bg-red-500/10 px-2 py-0.5 rounded">Yes</span></td>
                        <td className="py-2.5 text-neutral-400">Notification text (supports HTML)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4">
                          <code className="text-emerald-400 font-mono">type</code>
                        </td>
                        <td className="py-2.5 pr-4"><span className="text-xs text-neutral-500 bg-white/5 px-2 py-0.5 rounded">No</span></td>
                        <td className="py-2.5 text-neutral-400">Notification type (default: <code className="text-white">general</code>)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-sm font-semibold text-white mb-3">Response</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-emerald-400 mb-2">Success (200)</p>
                    <CodeBlock code={`{
  "success": true
}`} />
                  </div>
                  <div>
                    <p className="text-xs text-red-400 mb-2">Error (400/500)</p>
                    <CodeBlock code={`{
  "error": "telegramId and message required"
}`} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section id="code-examples" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Code Examples
            </div>
            <h2 className="text-3xl font-bold mb-4">In your language</h2>
            <p className="text-neutral-400 mb-8">
              Copy-paste examples for popular languages.
            </p>

            <LanguageTabs />
          </section>

          {/* HTML Formatting */}
          <section id="formatting" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              HTML Formatting
            </div>
            <h2 className="text-3xl font-bold mb-4">Supported tags</h2>
            <p className="text-neutral-400 mb-8">
              Messages support Telegram HTML formatting for rich text.
            </p>

            <div className="rounded-xl border border-white/[0.06] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/[0.06]">
                    <th className="text-left p-4 font-medium text-neutral-400">Tag</th>
                    <th className="text-left p-4 font-medium text-neutral-400">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tag: "<b>text</b>", result: "bold" },
                    { tag: "<i>text</i>", result: "italic" },
                    { tag: "<code>text</code>", result: "monospace" },
                    { tag: "<pre>text</pre>", result: "code block" },
                    { tag: '<a href="url">text</a>', result: "link" },
                    { tag: "\\n", result: "newline" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04] last:border-0">
                      <td className="p-4">
                        <code className="text-emerald-400 font-mono text-xs">{row.tag}</code>
                      </td>
                      <td className="p-4 text-neutral-300">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <p className="text-xs text-neutral-500 mb-3">Example with formatting:</p>
              <CodeBlock code={`{
  "telegramId": "7955910963",
  "message": "<b>🛒 New Order</b>\\n\\nOrder #12345\\nCustomer: John Doe\\nTotal: <b>$99.00</b>\\n\\n<a href=\\"https://example.com\\">View Order</a>",
  "type": "general"
}`} />
            </div>
          </section>

          {/* Use Cases */}
          <section id="use-cases" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Use Cases
            </div>
            <h2 className="text-3xl font-bold mb-4">Example templates</h2>
            <p className="text-neutral-400 mb-8">
              Ready-to-use message templates for common scenarios.
            </p>

            <div className="space-y-6">
              {/* E-commerce */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                  <span className="text-2xl">🛒</span>
                  <div>
                    <h3 className="font-semibold text-white">E-commerce Order</h3>
                    <p className="text-xs text-neutral-500">New order notifications</p>
                  </div>
                </div>
                <div className="p-4">
                  <CodeBlock code={`const message = \`<b>🛒 New Order</b>

Order #\${orderId}
Customer: \${customerName}
Total: <b>$\${total}</b>

<a href="https://dashboard.example.com/orders/\${orderId}">View Order</a>\``} />
                </div>
              </div>

              {/* Server Monitoring */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-white">Server Monitoring</h3>
                    <p className="text-xs text-neutral-500">System alerts</p>
                  </div>
                </div>
                <div className="p-4">
                  <CodeBlock code={`const message = \`<b>⚠️ Server Alert</b>

Server: \${serverName}
Issue: \${alertType}
Time: \${timestamp}

CPU: \${cpuUsage}%
Memory: \${memUsage}%\``} />
                </div>
              </div>

              {/* Form Submission */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                  <span className="text-2xl">📬</span>
                  <div>
                    <h3 className="font-semibold text-white">Form Submission</h3>
                    <p className="text-xs text-neutral-500">Contact form alerts</p>
                  </div>
                </div>
                <div className="p-4">
                  <CodeBlock code={`const message = \`<b>📬 New Contact</b>

From: \${name}
Email: \${email}

<i>"\${messageText.slice(0, 200)}"</i>\``} />
                </div>
              </div>

              {/* Deployment */}
              <div className="rounded-xl border border-white/[0.06] overflow-hidden">
                <div className="flex items-center gap-3 p-4 bg-white/[0.02] border-b border-white/[0.06]">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="font-semibold text-white">Deployment Status</h3>
                    <p className="text-xs text-neutral-500">CI/CD notifications</p>
                  </div>
                </div>
                <div className="p-4">
                  <CodeBlock code={`const message = \`<b>🚀 Deployment \${status}</b>

Project: \${projectName}
Branch: \${branch}
Commit: <code>\${commitHash.slice(0, 7)}</code>

\${status === 'success' ? '✅ Live now' : '❌ Check logs'}\``} />
                </div>
              </div>
            </div>
          </section>

          {/* Multiple Recipients */}
          <section id="multiple-recipients" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Multiple Recipients
            </div>
            <h2 className="text-3xl font-bold mb-4">Notify your team</h2>
            <p className="text-neutral-400 mb-8">
              Store Telegram IDs and call the endpoint for each recipient.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-neutral-400 mb-3">Environment variable:</p>
                <CodeBlock code={`WHATSTASK_TELEGRAM_ID=7955910963`} />
              </div>

              <div>
                <p className="text-sm text-neutral-400 mb-3">Notify multiple team members:</p>
                <CodeBlock code={`const TEAM_IDS = ['111111111', '222222222', '333333333']

async function notifyTeam(message) {
  await Promise.all(
    TEAM_IDS.map(id =>
      fetch('https://pm.whatstask.com/api/notifications/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ telegramId: id, message, type: 'general' })
      })
    )
  )
}

// Usage
await notifyTeam('<b>Team Alert</b>\\n\\nNew deployment ready for review')`} />
              </div>
            </div>
          </section>

          {/* Errors */}
          <section id="errors" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Error Handling
            </div>
            <h2 className="text-3xl font-bold mb-8">Response codes</h2>

            <div className="rounded-xl border border-white/[0.06] overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/[0.06]">
                    <th className="text-left p-4 font-medium text-neutral-400">Status</th>
                    <th className="text-left p-4 font-medium text-neutral-400">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { status: "200", meaning: "Notification sent successfully" },
                    { status: "400", meaning: "Missing required fields (telegramId or message)" },
                    { status: "500", meaning: "Bot not configured or Telegram API error" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/[0.04] last:border-0">
                      <td className="p-4">
                        <code className={`px-2 py-1 rounded font-mono text-xs ${
                          row.status === "200"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-red-500/10 text-red-400"
                        }`}>{row.status}</code>
                      </td>
                      <td className="p-4 text-neutral-300">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              {[
                {
                  error: "telegramId and message required",
                  fix: "Ensure both fields are included in your request body.",
                },
                {
                  error: "Bot not configured",
                  fix: "The notification service is not available. Contact support.",
                },
                {
                  error: "Telegram API error",
                  fix: "Check that your Telegram ID is correct and you've started @whatstask_bot.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <code className="text-sm text-red-400 font-mono">{item.error}</code>
                      <p className="text-sm text-emerald-400 mt-2"><strong className="text-emerald-500">Fix:</strong> {item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-20">
            <div className="rounded-xl border border-emerald-500/20 bg-[#0d0d0d] p-6 font-mono text-sm overflow-x-auto">
              <div className="text-neutral-500 mb-4">{"┌─────────────────────────────────────────────────────────────────────┐"}</div>
              <div className="text-neutral-500 mb-2">{"│"}              <span className="text-white">WHATSTASK NOTIFICATIONS QUICK REFERENCE</span>                {"│"}</div>
              <div className="text-neutral-500 mb-4">{"├─────────────────────────────────────────────────────────────────────┤"}</div>

              <div className="space-y-4 text-neutral-400 pl-2">
                <div>
                  <p className="text-neutral-500">ENDPOINT:</p>
                  <p className="text-emerald-400">POST https://pm.whatstask.com/api/notifications/send</p>
                </div>

                <div>
                  <p className="text-neutral-500">PAYLOAD:</p>
                  <p className="text-white">{"{"}</p>
                  <p className="pl-4"><span className="text-emerald-400">&quot;telegramId&quot;</span>: <span className="text-amber-400">&quot;YOUR_ID&quot;</span>,    <span className="text-neutral-600">// Required</span></p>
                  <p className="pl-4"><span className="text-emerald-400">&quot;message&quot;</span>: <span className="text-amber-400">&quot;Your text&quot;</span>,     <span className="text-neutral-600">// Required (HTML supported)</span></p>
                  <p className="pl-4"><span className="text-emerald-400">&quot;type&quot;</span>: <span className="text-amber-400">&quot;general&quot;</span>           <span className="text-neutral-600">// Optional</span></p>
                  <p className="text-white">{"}"}</p>
                </div>

                <div>
                  <p className="text-neutral-500">SETUP:</p>
                  <p>1. Message @whatstask_bot on Telegram</p>
                  <p>2. Send /start to get your Telegram ID</p>
                  <p>3. Use that ID in your API calls</p>
                </div>

                <div>
                  <p className="text-neutral-500">HTML TAGS:</p>
                  <p><span className="text-emerald-400">&lt;b&gt;</span>bold<span className="text-emerald-400">&lt;/b&gt;</span>  <span className="text-emerald-400">&lt;i&gt;</span>italic<span className="text-emerald-400">&lt;/i&gt;</span>  <span className="text-emerald-400">&lt;code&gt;</span>mono<span className="text-emerald-400">&lt;/code&gt;</span></p>
                  <p><span className="text-emerald-400">&lt;a href=&quot;url&quot;&gt;</span>link<span className="text-emerald-400">&lt;/a&gt;</span>  <span className="text-emerald-400">\n</span> for newlines</p>
                </div>
              </div>

              <div className="text-neutral-500 mt-4">{"└─────────────────────────────────────────────────────────────────────┘"}</div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to send notifications?</h2>
            <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
              Get your Telegram ID and start sending notifications in under a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-emerald-500 text-black hover:bg-emerald-400 rounded-lg px-6">
                <a href="https://t.me/whatstask_bot" target="_blank" rel="noopener noreferrer">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
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
