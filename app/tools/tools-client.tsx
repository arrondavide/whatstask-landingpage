"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Link from "next/link"

const tools = [
  {
    name: "PDF Merger",
    description: "Combine multiple PDFs into one document",
    fullDescription:
      "Merge multiple PDF files into one document in seconds. Drag and drop, reorder pages and download your combined PDF.",
    link: "/pdf-merger",
  },
  {
    name: "PDF Compressor",
    description: "Reduce PDF file size",
    fullDescription:
      "Reduce PDF file size without losing important quality. Compress PDFs for email, uploads and storage with up to 70% size reduction.",
    link: "/pdf-compressor",
  },
  {
    name: "PDF to JPG",
    description: "Convert PDF pages to images",
    fullDescription:
      "Convert PDF pages into high-quality JPG images instantly. Download individual pages or all pages as a ZIP.",
    link: "/pdf-to-jpg",
  },
  {
    name: "JPG to PDF",
    description: "Turn images into PDF documents",
    fullDescription:
      "Turn one or many JPG images into a single PDF file. Upload, arrange order and generate a clean PDF in one click.",
    link: "/jpg-to-pdf",
  },
  {
    name: "PDF Splitter",
    description: "Extract pages from PDF",
    fullDescription:
      "Split a PDF into separate files or extract only the pages you need. Quick PDF splitter you can use directly in your browser.",
    link: "/pdf-splitter",
  },
  {
    name: "QR Code Generator",
    description: "Create QR codes instantly",
    fullDescription:
      "Create custom QR codes instantly and download as PNG or SVG. Perfect for marketing, business cards and product packaging.",
    link: "/qr-code-generator",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function ToolsClient() {
  return (
    <>
      <PageLoader />
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Free Tools</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
                Online tools that just work
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                No signups, no watermarks, no hassle. Simple, fast, and free.
              </p>
            </motion.div>
          </section>

          {/* Tools Grid */}
          <section className="mb-24">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {tools.map((tool, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Link href={tool.link} className="block h-full">
                    <div className="border border-slate-200 rounded-2xl p-8 h-full hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{tool.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{tool.description}</p>
                      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                        {tool.fullDescription}
                      </p>
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <span className="text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors">
                          Open Tool →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* GEO Analyzer Callout */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-slate-200 rounded-2xl p-10 md:p-12 text-center"
            >
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">AI-Powered</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">GEO Analyzer</h2>
              <p className="text-slate-500 mb-8 max-w-2xl mx-auto font-light">
                Optimize your content for AI-powered search. Rank in ChatGPT, Google SGE, Perplexity, and more.
              </p>
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                <Link href="/geoanalyzer">
                  Try GEO Analyzer
                </Link>
              </Button>
            </motion.div>
          </section>

          {/* Whatstask Promo */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Need project management?</h2>
              <p className="text-slate-500 mb-10 text-lg font-light max-w-2xl mx-auto">
                Simple project management with AI features. List, Kanban, Calendar, and Timeline views.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                  <Link href="/project-management">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </section>
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
