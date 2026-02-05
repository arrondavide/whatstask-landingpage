"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Send, MapPin, MessageSquare, Building2, User, ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "general",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(`[Whatstask ${formData.type}] Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nType: ${formData.type}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:charlesaarondavid@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const contactReasons = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our products or services",
      value: "general",
    },
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Custom development, white-label, integrations",
      value: "enterprise",
    },
    {
      icon: User,
      title: "Partnership",
      description: "Integration partners, resellers, affiliates",
      value: "partnership",
    },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Let's talk
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Questions, feedback, or interested in working together? We'd love to hear from you.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>

              {/* Direct Email */}
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-2xl p-6 border border-violet-500/20 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-6 w-6 text-violet-400" />
                  <h3 className="font-bold">Email us directly</h3>
                </div>
                <a
                  href="mailto:charlesaarondavid@gmail.com"
                  className="text-violet-400 hover:text-violet-300 text-lg font-medium"
                >
                  charlesaarondavid@gmail.com
                </a>
                <p className="text-slate-500 text-sm mt-2">We typically respond within 24 hours</p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 mb-8">
                <h3 className="font-bold mb-4">Quick links</h3>
                {[
                  { title: "Try Project Management", href: "https://t.me/whatstaskbot", icon: Send },
                  { title: "Enterprise Solutions", href: "/enterprise", icon: Building2 },
                  { title: "See Pricing", href: "/pricing", icon: ArrowRight },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all group"
                  >
                    <link.icon className="h-5 w-5 text-slate-600 group-hover:text-violet-400" />
                    <span className="group-hover:text-slate-900 transition-colors">{link.title}</span>
                  </a>
                ))}
              </div>

              {/* Contact Reasons */}
              <div>
                <h3 className="font-bold mb-4">How can we help?</h3>
                <div className="space-y-3">
                  {contactReasons.map((reason, index) => (
                    <button
                      key={index}
                      onClick={() => setFormData({ ...formData, type: reason.value })}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        formData.type === reason.value
                          ? "bg-violet-500/10 border-violet-500/30"
                          : "bg-slate-50 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <reason.icon
                          className={`h-5 w-5 ${
                            formData.type === reason.value ? "text-violet-400" : "text-slate-600"
                          }`}
                        />
                        <div>
                          <p className="font-medium">{reason.title}</p>
                          <p className="text-sm text-slate-500">{reason.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a message</h2>

              {submitted ? (
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email client opened!</h3>
                  <p className="text-slate-600 mb-4">
                    Complete sending the email in your email client. We'll get back to you soon.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full border-slate-300"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-violet-500 focus:outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-violet-500 text-white hover:bg-violet-600 rounded-full py-6 text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    This will open your email client with the message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
