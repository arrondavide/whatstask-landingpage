"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
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
    url: `https://www.whatstask.com/${toolSlug}`,
    provider: {
      "@type": "Organization",
      name: "Whatstask",
      url: "https://www.whatstask.com"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "512",
      bestRating: "5",
      worstRating: "1"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.whatstask.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://www.whatstask.com/tools"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: toolName,
        item: `https://www.whatstask.com/${toolSlug}`
      }
    ]
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
      <Script
        id={`schema-breadcrumb-${toolSlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-balance">Free {toolName}</h1>
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">{shortDescription}</p>
          </motion.div>

          {/* Tool Embed Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-24 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg"
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
                  <FileText className="w-16 h-16 mx-auto mb-4 text-neutral-400" />
                  <p className="text-xl text-neutral-300 font-light">{toolName} loads here</p>
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
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">{fullDescription}</p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
                >
                  <CheckCircle className="w-6 h-6 mb-4 text-green-500" />
                  <p className="text-neutral-300 font-light leading-relaxed">{feature}</p>
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
                  <div className="absolute -left-0 -top-0 text-6xl font-bold text-white/10">{step.number}</div>
                  <div className="relative z-10 pl-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <span className="font-bold text-sm">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-neutral-300 font-light leading-relaxed">{step.description}</p>
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
                  className="border border-white/10 rounded-xl px-6 bg-white/5 backdrop-blur"
                >
                  <AccordionTrigger className="text-lg font-semibold py-4 hover:text-neutral-300 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-300 font-light leading-relaxed pb-4">
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
                  className="group bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neutral-300 transition-colors">{tool.name}</h3>
                  <p className="text-neutral-300 font-light text-sm mb-4 leading-relaxed">{tool.description}</p>
                  <Link
                    href={`/${tool.slug}`}
                    className="inline-flex items-center gap-2 text-violet-400 font-medium group-hover:gap-3 transition-all"
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
            className="max-w-3xl mx-auto text-center py-24 border-t border-white/10"
          >
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to get started?</h2>
            <p className="text-lg text-neutral-300 mb-8 font-light">
              {toolName} is completely free. No signups, no watermarks, no hidden fees.
            </p>
            <Button
              asChild
              className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg font-semibold"
            >
              <a href={`#tool-embed`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Use {toolName} Now <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/5">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold text-white mb-4">Whatstask</h3>
                <p className="text-neutral-300 font-light text-sm">Free online tools and task management for 2025.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">PDF Tools</h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-light">
                  <li>
                    <Link href="/pdf-merger" className="hover:text-white transition">
                      PDF Merger
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-compressor" className="hover:text-white transition">
                      PDF Compressor
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-to-jpg" className="hover:text-white transition">
                      PDF to JPG
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">More Tools</h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-light">
                  <li>
                    <Link href="/jpg-to-pdf" className="hover:text-white transition">
                      JPG to PDF
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-splitter" className="hover:text-white transition">
                      PDF Splitter
                    </Link>
                  </li>
                  <li>
                    <Link href="/qr-code-generator" className="hover:text-white transition">
                      QR Code Gen
                    </Link>
                  </li>
                  <li>
                    <Link href="/geoanalyzer" className="hover:text-violet-400 transition text-violet-500">
                      GEO Analyzer
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-light">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center text-neutral-400 font-light text-sm">
              <p>&copy; 2025 Whatstask. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
