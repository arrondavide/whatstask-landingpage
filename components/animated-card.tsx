"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function AnimatedCard({ icon, title, description, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
        {/* Glassmorphism effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Icon with glow */}
        <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-black flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
          <div className="text-white group-hover:text-white transition-colors duration-300">{icon}</div>
          <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
