"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "Are these PDF tools free to use?",
    answer:
      "Yes. All PDF tools provided by Whatstask are free for basic use. You can merge, compress, convert and split PDFs online without creating an account.",
  },
  {
    question: "Do I need to install any software to use the PDF tools?",
    answer:
      "No. Whatstask PDF tools run directly in your browser. Just open the tool, upload your files, process them and download the result – no installs needed.",
  },
  {
    question: "Is it safe to upload my PDFs to Whatstask?",
    answer:
      "Files are processed online and intended to be used for everyday work tasks. Avoid using highly confidential documents and always download and store your results securely.",
  },
  {
    question: "What can I do with the Whatstask PDF tools?",
    answer:
      "You can merge multiple PDFs, compress large files, convert PDF to JPG, convert JPG images to PDF and split PDFs into separate documents. These tools support everyday workflows for students, professionals and small teams.",
  },
]

export default function PDFFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 md:py-32 px-4 border-t border-slate-100">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 font-light tracking-wide leading-relaxed">
            Everything you need to know about our free PDF tools
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300 flex items-start justify-between gap-4"
              >
                <span className="text-lg font-semibold tracking-wide pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 mt-1"
                >
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white/[0.02] border border-t-0 border-slate-200 rounded-b-xl"
                  >
                    <p className="p-6 text-slate-600 font-light tracking-wide leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
