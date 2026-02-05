"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className = "", priority = false }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] md:w-[320px]">
        {/* Outer bezel */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-[0_0_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]">
          {/* Inner bezel highlight */}
          <div className="absolute inset-[2px] rounded-[2.8rem] bg-gradient-to-b from-slate-700 to-slate-800 pointer-events-none" />

          {/* Screen container */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-24 h-7 bg-black rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-3 h-3 rounded-full bg-slate-800 ring-1 ring-slate-700" />
              </div>
            </div>

            {/* Screen content */}
            <div className="relative aspect-[9/19.5] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-top"
                priority={priority}
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-3px] top-28 w-1 h-12 bg-slate-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-24 w-1 h-8 bg-slate-700 rounded-r-sm" />
        <div className="absolute left-[-3px] top-36 w-1 h-16 bg-slate-700 rounded-r-sm" />
      </div>
    </div>
  )
}

interface AppShowcaseProps {
  screenshots: {
    src: string
    alt: string
    title: string
    description: string
  }[]
}

export function AppShowcase({ screenshots }: AppShowcaseProps) {
  return (
    <div className="relative">
      {/* Scrolling container */}
      <div className="flex gap-8 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide">
        {screenshots.map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 snap-center"
          >
            <div className="text-center">
              <PhoneMockup
                src={screenshot.src}
                alt={screenshot.alt}
                priority={index < 3}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="mt-6 max-w-[280px] mx-auto"
              >
                <h4 className="font-semibold text-lg mb-1">{screenshot.title}</h4>
                <p className="text-sm text-slate-500">{screenshot.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-slate-300"
          />
        ))}
      </div>
    </div>
  )
}

interface FloatingPhonesProps {
  phones: {
    src: string
    alt: string
  }[]
}

export function FloatingPhones({ phones }: FloatingPhonesProps) {
  return (
    <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Center phone - main focus */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <PhoneMockup src={phones[0]?.src || ""} alt={phones[0]?.alt || ""} priority />
      </motion.div>

      {/* Left phone */}
      {phones[1] && (
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          whileInView={{ opacity: 1, x: 0, rotate: -15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-[5%] md:left-[15%] top-1/2 -translate-y-1/2 z-10 scale-90 opacity-70"
        >
          <PhoneMockup src={phones[1].src} alt={phones[1].alt} />
        </motion.div>
      )}

      {/* Right phone */}
      {phones[2] && (
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, rotate: 15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute right-[5%] md:right-[15%] top-1/2 -translate-y-1/2 z-10 scale-90 opacity-70"
        >
          <PhoneMockup src={phones[2].src} alt={phones[2].alt} />
        </motion.div>
      )}

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
