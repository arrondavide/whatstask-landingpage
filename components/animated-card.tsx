"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  index?: number
}

export default function AnimatedCard({ icon, title, description, delay = 0, index = 0 }: AnimatedCardProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  }

  return (
    <motion.div
      variants={variants}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 h-full border border-slate-200 hover:border-slate-300 transition-all duration-300 relative overflow-hidden">
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon with glow */}
        <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-slate-200 group-hover:border-slate-300 transition-all duration-300">
          <div className="text-white group-hover:text-slate-900 transition-colors duration-300">{icon}</div>
          <motion.div
            className="absolute inset-0 bg-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.2)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 0px rgba(255,255,255,0.2)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 group-hover:text-slate-900 transition-colors duration-300 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 font-light tracking-wide leading-relaxed">
            {description}
          </p>
        </div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100"
          initial={{ rotate: 45, x: 20, y: 20 }}
          whileHover={{ rotate: 0, x: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full border-b border-r border-slate-300" />
        </motion.div>
      </div>
    </motion.div>
  )
}
