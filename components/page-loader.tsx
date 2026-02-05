"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.45, 0, 0.55, 1],
            },
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Logo container with glow */}
            <motion.div
              className="relative w-24 h-24 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-violet-200 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              {/* Logo */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-full bg-white border border-slate-300"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Image src="/logo-black.png" alt="Whatstask Logo" width={48} height={48} className="w-12 h-12" />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-slate-900 text-sm font-medium tracking-wider">WHATSTASK</span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-[2px] bg-slate-200 mt-4 rounded-full overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-violet-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
