"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

interface ToolPageProps {
  toolName: string
  toolSlug: string
  shortDescription: string
  fullDescription: string
  features: string[]
  steps: Array<{
    number: number
    title: string
    description: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedTools: Array<{
    name: string
    slug: string
    description: string
  }>
  iframeSource?: string
}

export default function ToolPageTemplate({
  toolName,
  toolSlug,
  shortDescription,
  fullDescription,
  features,
  steps,
  faqs,
  relatedTools,
  iframeSource,
}: ToolPageProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${toolName}`,
    description: shortDescription,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      name: step.title,
      text: step.description,
      position: step.number,
    })),
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolName,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: shortDescription,
    featureList: features,
  }

  return (
    <>
      <PageLoader />

      <Script
        id={`schema-howto-${toolSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id={`schema-faq-${toolSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`schema-software-${toolSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-black/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Whatstask
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="/" className="hover:text-slate-600 transition-colors">
                Home
              </Link>
              <Link href="/tools" className="hover:text-slate-600 transition-colors">
                All Tools
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-balance">Free {toolName}</h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">{shortDescription}</p>
          </motion.div>

          {/* Tool Embed Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 backdrop-blur-lg"
            id="tool-embed"
          >
            {iframeSource ? (
              <iframe
                src={iframeSource}
                className="w-full h-[600px] md:h-[700px] border-0"
                title={toolName}
                allow="fullscreen"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-[600px] md:h-[700px] flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-slate-500" />
                  <p className="text-xl text-slate-600 font-light">{toolName} loads here</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tight">About this tool</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">{fullDescription}</p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 backdrop-blur rounded-xl p-6 border border-slate-200"
                >
                  <CheckCircle className="w-6 h-6 mb-4 text-green-500" />
                  <p className="text-slate-700 font-light leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Use Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 tracking-tight">How to use {toolName}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step number */}
                  <div className="absolute -left-0 -top-0 text-6xl font-bold text-white/5">{step.number}</div>
                  <div className="relative z-10 pl-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-300">
                        <span className="font-bold text-sm">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 tracking-tight">Frequently asked questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-slate-200 rounded-xl px-6 bg-slate-50 backdrop-blur"
                >
                  <AccordionTrigger className="text-lg font-semibold py-4 hover:text-slate-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-light leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Related Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-12 tracking-tight">You might also like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-slate-50 backdrop-blur rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-slate-700 transition-colors">{tool.name}</h3>
                  <p className="text-slate-600 font-light text-sm mb-4 leading-relaxed">{tool.description}</p>
                  <Link
                    href={`/${tool.slug}`}
                    className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center py-24 border-t border-slate-200"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to get started?</h2>
            <p className="text-lg text-slate-700 mb-8 font-light">
              {toolName} is completely free. No signups, no watermarks, no hidden fees.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold"
            >
              <a href={`#tool-embed`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Use {toolName} Now <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-black/50 backdrop-blur">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold mb-4">Whatstask</h3>
                <p className="text-slate-600 font-light text-sm">Free online tools and task management for 2025.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">PDF Tools</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="/pdf-merger" className="hover:text-slate-900 transition">
                      PDF Merger
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-compressor" className="hover:text-slate-900 transition">
                      PDF Compressor
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-to-jpg" className="hover:text-slate-900 transition">
                      PDF to JPG
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">More Tools</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="/jpg-to-pdf" className="hover:text-slate-900 transition">
                      JPG to PDF
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-splitter" className="hover:text-slate-900 transition">
                      PDF Splitter
                    </Link>
                  </li>
                  <li>
                    <Link href="/qr-code-generator" className="hover:text-slate-900 transition">
                      QR Code Gen
                    </Link>
                  </li>
                  <li>
                    <Link href="/geoanalyzer" className="hover:text-violet-400 transition text-violet-400/80">
                      GEO Analyzer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="#" className="hover:text-slate-900 transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-slate-900 transition">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-8 text-center text-slate-500 font-light text-sm">
              <p>&copy; 2025 Whatstask. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
