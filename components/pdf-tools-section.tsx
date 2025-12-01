"use client"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const pdfTools = [
  {
    name: "PDF Merger",
    description:
      "Merge multiple PDF files into one document in seconds. Drag and drop, reorder pages and download your combined PDF. Free online PDF merger for 2025.",
    seoTitle: "Free Online PDF Merger 2025 – Combine PDFs Quickly | Whatstask",
    link: "https://pdfmerger.whatstask.com",
    buttonLabel: "Open PDF Merger",
  },
  {
    name: "PDF Compressor",
    description:
      "Reduce PDF file size without losing important quality. Compress PDFs online for email, uploads and storage. Free PDF compressor with up to 70% size reduction.",
    seoTitle: "Free PDF Compressor Online – Reduce File Size 70% | Whatstask",
    link: "https://pdfcompressor.whatstask.com",
    buttonLabel: "Open PDF Compressor",
  },
  {
    name: "PDF to JPG Converter",
    description:
      "Convert PDF pages into high-quality JPG images instantly. Download individual pages or all pages as a ZIP. Convert PDF to JPG online for free – no software needed.",
    seoTitle: "Convert PDF to JPG Online Free – High Quality Images | Whatstask",
    link: "https://pdftojpg.whatstask.com",
    buttonLabel: "Open PDF to JPG",
  },
  {
    name: "JPG to PDF Converter",
    description:
      "Turn one or many JPG images into a single PDF file. Upload, arrange order and generate a clean PDF in one click. Free JPG to PDF converter online for 2025.",
    seoTitle: "Free JPG to PDF Converter Online 2025 | Whatstask",
    link: "https://jpgtopdf.whatstask.com",
    buttonLabel: "Open JPG to PDF",
  },
  {
    name: "PDF Splitter",
    description:
      "Split a PDF into separate files or extract only the pages you need. Quick, free PDF splitter you can use directly in your browser.",
    seoTitle: "Split PDF Online Free – Extract Pages Easily | Whatstask",
    link: "https://pdfsplitter.whatstask.com",
    buttonLabel: "Open PDF Splitter",
  },
  {
    name: "QR Code Generator",
    description:
      "Create custom QR codes instantly and download as PNG or SVG. Perfect for marketing, business cards, product packaging and campaigns. Free QR code generator with full customization.",
    seoTitle: "Free QR Code Generator Online 2025 – Custom QR Codes | Whatstask",
    link: "https://freeqrcodegenerator.whatstask.com",
    buttonLabel: "Open QR Code Generator",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PDFToolsSection() {
  return (
    <section id="pdf-tools" className="relative py-24 md:py-32 px-4 border-t border-white/5">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Free Online PDF Tools by Whatstask
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            Alongside our Telegram task management tools, Whatstask also offers free online PDF utilities. Merge,
            compress, convert and split PDFs directly in your browser – no signups, just upload and download. These
            tools are fast, secure and designed to help you work smarter in 2025.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pdfTools.map((tool, index) => (
            <motion.div key={index} variants={fadeInUp} custom={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{tool.name}</h3>
                <p className="text-gray-400 font-light tracking-wide leading-relaxed mb-6 flex-grow">
                  {tool.description}
                </p>
                <p className="text-xs text-gray-500 mb-6 pb-4 border-t border-white/5 font-light">{tool.seoTitle}</p>
                <Button
                  asChild
                  className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full w-full relative overflow-hidden group/btn"
                >
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-6 text-base"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/10"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="font-medium tracking-wide relative z-10">{tool.buttonLabel}</span>
                    <ExternalLink className="h-4 w-4 relative z-10" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
