"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Zap, ImageIcon, QrCode, Brain, SplitSquareHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"

const tools = [
  {
    name: "PDF Merger",
    description: "Combine multiple PDFs into one",
    fullDescription:
      "Merge multiple PDF files into one document in seconds. Drag and drop, reorder pages and download your combined PDF. Free online PDF merger for 2025.",
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
      "Convert PDF pages into high-quality JPG images instantly. Download individual pages or all pages as a ZIP. Convert PDF to JPG online for free – no software needed.",
    link: "/pdf-to-jpg",
    icon: ImageIcon,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "JPG to PDF",
    description: "Turn images into PDF documents",
    fullDescription:
      "Turn one or many JPG images into a single PDF file. Upload, arrange order and generate a clean PDF in one click. Free JPG to PDF converter online for 2025.",
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
      "Create custom QR codes instantly and download as PNG or SVG. Perfect for marketing, business cards, product packaging and campaigns. Free QR code generator with full customization.",
    link: "/qr-code-generator",
    icon: QrCode,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    name: "SEO Analyzer",
    description: "Analyze your website SEO",
    fullDescription:
      "Optimize your content for AI-powered search experiences like Google SGE. Analyze and structure your content for large language models (LLMs) with clarity and context. Free Generative Engine Optimization analyzer for AI visibility.",
    link: "/seo-analyzer",
    icon: Brain,
    color: "from-teal-500/20 to-cyan-500/20",
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
      <main className="min-h-screen bg-black text-white">
        {/* Header Section */}
        <section className="relative py-20 md:py-32 px-4 border-b border-white/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-balance">Free Online Tools</h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
                No signups, no watermarks, no hassle.
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
                      className={`bg-gradient-to-br ${tool.color} backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-white/5`}
                    >
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Tool Name */}
                      <h3 className="text-2xl font-bold mb-2 tracking-tight">{tool.name}</h3>

                      {/* Description */}
                      <p className="text-gray-300 font-light tracking-wide mb-4 line-clamp-2">{tool.description}</p>

                      {/* Full Description */}
                      <p className="text-sm text-gray-500 font-light tracking-wide mb-8 flex-grow">
                        {tool.fullDescription}
                      </p>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full w-full relative overflow-hidden group/btn"
                      >
                        <a
                          href={tool.link}
                          className="flex items-center justify-center gap-2 py-6 text-base font-medium tracking-wide"
                        >
                          <motion.span
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
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
      </main>
    </>
  )
}
