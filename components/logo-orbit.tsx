"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

export default function LogoOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const animateOrbit = async () => {
      while (true) {
        await controls.start({
          rotate: 360,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        })
      }
    }

    animateOrbit()
  }, [controls])

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Glowing background */}
      <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />

      {/* Orbit path */}
      <motion.div ref={orbitRef} animate={controls} className="absolute inset-0 rounded-full border border-white/10">
        {/* Orbit particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 30}deg) translateX(${Math.random() * 30 + 120}px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Inner orbit */}
      <motion.div
        animate={{
          rotate: -360,
          transition: {
            duration: 15,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        }}
        className="absolute inset-8 rounded-full border border-white/20"
      />

      {/* Logo container with glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl" />

          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 4,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
            className="relative z-10 w-24 h-24 rounded-full bg-black flex items-center justify-center border border-white/20"
          >
            <Image src="/logo.png" alt="Whatstask Logo" width={64} height={64} className="w-16 h-16" />
          </motion.div>
        </div>
      </div>

      {/* Mockup of the app interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-full max-w-sm"
      >
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/10 mr-3" />
            <div className="text-left">
              <div className="text-sm font-medium">Whatstask</div>
              <div className="text-xs text-gray-400">Your personal task assistant</div>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
              <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm">
                Create a new task: Meeting with design team tomorrow at 2pm
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-white/10 rounded-2xl rounded-tr-none p-3 text-sm">
                ✅ Task created: "Meeting with design team"
                <br />📅 Tomorrow at 2:00 PM
                <br />
                🏷️ Category: Work
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
