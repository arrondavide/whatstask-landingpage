"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

export default function ContactClient() {
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
    const subject = encodeURIComponent(`[Whatstask ${formData.type}] Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nType: ${formData.type}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:charlesaarondavid@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const contactReasons = [
    { title: "General Inquiry", description: "Questions about our products", value: "general" },
    { title: "Enterprise Solutions", description: "Custom development, white-label", value: "enterprise" },
    { title: "Partnership", description: "Integration partners, affiliates", value: "partnership" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Let's talk
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Questions, feedback, or interested in working together?
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get in touch</h2>

              {/* Direct Email */}
              <div className="border border-white/10 rounded-2xl p-8 mb-8 bg-white/5">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Email</p>
                <a
                  href="mailto:charlesaarondavid@gmail.com"
                  className="text-xl font-medium text-white hover:text-neutral-300 transition-colors"
                >
                  charlesaarondavid@gmail.com
                </a>
                <p className="text-neutral-500 text-sm mt-2">We typically respond within 24 hours</p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4 mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Quick links</p>
                {[
                  { title: "Try Project Management", href: "https://t.me/whatstaskbot" },
                  { title: "Enterprise Solutions", href: "/enterprise" },
                  { title: "See Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between p-4 border border-white/10 rounded-xl hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="text-neutral-300 group-hover:text-white transition-colors">{link.title}</span>
                    <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                  </a>
                ))}
              </div>

              {/* Contact Reasons */}
              <div>
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">How can we help?</p>
                <div className="space-y-3">
                  {contactReasons.map((reason, index) => (
                    <button
                      key={index}
                      onClick={() => setFormData({ ...formData, type: reason.value })}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                        formData.type === reason.value
                          ? "border-violet-500/50 bg-violet-500/10"
                          : "border-white/10 hover:border-white/20 hover:bg-white/5"
                      }`}
                    >
                      <p className="font-medium text-white">{reason.title}</p>
                      <p className="text-sm text-neutral-500">{reason.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send a message</h2>

              {submitted ? (
                <div className="border border-white/10 rounded-2xl p-10 text-center bg-white/5">
                  <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Success</p>
                  <h3 className="text-xl font-bold text-white mb-3">Email client opened</h3>
                  <p className="text-neutral-400 mb-6">
                    Complete sending the email in your email client.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors text-white placeholder-neutral-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors text-white placeholder-neutral-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors text-white placeholder-neutral-500"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:outline-none transition-colors resize-none text-white placeholder-neutral-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-neutral-200 rounded-full py-6 text-lg"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    This will open your email client with the message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>

        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
