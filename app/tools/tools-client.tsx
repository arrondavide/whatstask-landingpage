"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Zap, ImageIcon, QrCode, SplitSquareHorizontal, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Link from "next/link"
import Image from "next/image"

const tools = [
  {
    name: "PDF Merger",
    description: "Combine multiple PDFs into one",
    fullDescription:
      "Merge multiple PDF files into one document in seconds. Drag and drop, reorder pages and download your combined PDF. Free online PDF merger.",
    link: "/pdf-merger",
    icon: FileText,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "PDF Compressor",
    description: "Reduce PDF file size",
    fullDescription:
      "Reduce PDF file size without losing important quality. Compress PDFs online for email, uploads and storage. Free PDF compressor with up to 70% size reduction.",
    link: "/pdf-compressor",
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "PDF to JPG",
    description: "Convert PDF pages to images",
    fullDescription:
      "Convert PDF pages into high-quality JPG images instantly. Download individual pages or all pages as a ZIP. Convert PDF to JPG online for free.",
    link: "/pdf-to-jpg",
    icon: ImageIcon,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "JPG to PDF",
    description: "Turn images into PDF documents",
    fullDescription:
      "Turn one or many JPG images into a single PDF file. Upload, arrange order and generate a clean PDF in one click. Free JPG to PDF converter.",
    link: "/jpg-to-pdf",
    icon: FileText,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "PDF Splitter",
    description: "Extract pages from PDF",
    fullDescription:
      "Split a PDF into separate files or extract only the pages you need. Quick, free PDF splitter you can use directly in your browser.",
    link: "/pdf-splitter",
    icon: SplitSquareHorizontal,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "QR Code Generator",
    description: "Create QR codes instantly",
    fullDescription:
      "Create custom QR codes instantly and download as PNG or SVG. Perfect for marketing, business cards, product packaging and campaigns.",
    link: "/qr-code-generator",
    icon: QrCode,
    color: "from-indigo-500/20 to-blue-500/20",
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
      ease: "easeOut",
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
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/project-management" className="text-slate-600 hover:text-slate-900 transition-colors">
                Project Management
              </Link>
              <Link href="/geoanalyzer" className="text-slate-600 hover:text-slate-900 transition-colors">
                GEO Analyzer
              </Link>
              <Link href="/tools" className="text-violet-600 font-medium">
                Free Tools
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                Pricing
              </Link>
            </nav>
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4 mr-2" />
                Try Free
              </a>
            </Button>
          </div>
        </header>

        <main>
          {/* Header Section */}
          <section className="relative py-20 md:py-32 px-4 border-b border-slate-100">
            <div className="container mx-auto max-w-6xl">
              <Breadcrumbs items={[{ label: "Free Tools", href: "/tools" }]} />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">Free Online Tools</h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
                  No signups, no watermarks, no hassle. Just tools that work.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tools Grid Section */}
          <section className="relative py-24 md:py-32 px-4">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {tools.map((tool, index) => {
                  const IconComponent = tool.icon
                  return (
                    <motion.div key={index} variants={fadeInUp} custom={index} className="group relative h-full">
                      <div
                        className={`bg-gradient-to-br ${tool.color} backdrop-blur-lg rounded-2xl p-8 h-full border border-slate-200 hover:border-slate-300 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-white/5`}
                      >
                        {/* Icon */}
                        <div className="mb-6">
                          <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-6 h-6 text-violet-600" />
                          </div>
                        </div>

                        {/* Tool Name */}
                        <h3 className="text-2xl font-bold mb-2 tracking-tight">{tool.name}</h3>

                        {/* Description */}
                        <p className="text-slate-700 font-light tracking-wide mb-4 line-clamp-2">{tool.description}</p>

                        {/* Full Description */}
                        <p className="text-sm text-slate-500 font-light tracking-wide mb-8 flex-grow">
                          {tool.fullDescription}
                        </p>

                        {/* CTA Button */}
                        <Button
                          asChild
                          className="bg-violet-500 text-white hover:bg-violet-600 border border-violet-500 rounded-full w-full relative overflow-hidden group/btn"
                        >
                          <a
                            href={tool.link}
                            className="flex items-center justify-center gap-2 py-6 text-base font-medium tracking-wide"
                          >
                            <span className="relative z-10">Open Tool</span>
                            <ExternalLink className="h-4 w-4 relative z-10" />
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </section>

          {/* GEO Analyzer Callout */}
          <section className="py-16 px-4 border-t border-slate-100">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-violet-500/20 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Looking for GEO Analyzer?</h2>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Optimize your content for AI-powered search. Rank in ChatGPT, Google SGE, Perplexity, and more.
                </p>
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                  <Link href="/geoanalyzer">
                    Try GEO Analyzer Free
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Whatstask Promo */}
          <section className="py-16 px-4 border-t border-slate-100">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">Need Project Management?</h2>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Simple project management with free AI features. List, Kanban, Calendar, and Timeline views.
                  Start in 30 seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                    <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                      <Send className="h-5 w-5 mr-2" />
                      Start Free
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                    <Link href="/project-management">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo-black.png" alt="Whatstask" width={24} height={24} className="h-6 w-6" />
                  <span className="font-bold">Whatstask</span>
                </Link>
                <p className="text-sm text-slate-500">Simple scales.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href="/project-management" className="hover:text-slate-900 transition">Project Management</Link></li>
                  <li><Link href="/geoanalyzer" className="hover:text-slate-900 transition">GEO Analyzer</Link></li>
                  <li><Link href="/pricing" className="hover:text-slate-900 transition">Pricing</Link></li>
                  <li><Link href="/enterprise" className="hover:text-slate-900 transition">Enterprise</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Free Tools</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href="/pdf-merger" className="hover:text-slate-900 transition">PDF Merger</Link></li>
                  <li><Link href="/pdf-compressor" className="hover:text-slate-900 transition">PDF Compressor</Link></li>
                  <li><Link href="/qr-code-generator" className="hover:text-slate-900 transition">QR Generator</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><Link href="/about" className="hover:text-slate-900 transition">About</Link></li>
                  <li><Link href="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-slate-900 transition">Privacy</Link></li>
                  <li><Link href="/terms" className="hover:text-slate-900 transition">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
