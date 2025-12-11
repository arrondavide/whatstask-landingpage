"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"

const orbitingPlanets = [
  { size: 12, orbitRadius: 90, duration: 12, delay: 0, color: "bg-white" },
  { size: 8, orbitRadius: 120, duration: 18, delay: 2, color: "bg-white/80" },
  { size: 6, orbitRadius: 150, duration: 25, delay: 4, color: "bg-white/60" },
  { size: 10, orbitRadius: 180, duration: 30, delay: 1, color: "bg-white/70" },
]

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
      <motion.div
        className="absolute inset-0 rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {orbitingPlanets.map((planet, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 5 }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: planet.duration,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: planet.delay,
          }}
        >
          {/* Planet */}
          <motion.div
            className={`absolute rounded-full ${planet.color}`}
            style={{
              width: planet.size,
              height: planet.size,
              top: `calc(50% - ${planet.orbitRadius}px)`,
              left: "50%",
              marginLeft: -planet.size / 2,
              boxShadow: `0 0 ${planet.size}px rgba(255, 255, 255, 0.3)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.5,
            }}
          />
        </motion.div>
      ))}

      {/* Orbit path */}
      <motion.div ref={orbitRef} animate={controls} className="absolute inset-0 rounded-full border border-white/10">
        {/* Orbit particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 30}deg) translateX(${Math.random() * 30 + 120}px) translateY(-50%)`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
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
          <motion.div
            className="absolute inset-0 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0, -5, 0],
              transition: {
                scale: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
                rotate: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              },
            }}
            className="relative z-10 w-24 h-24 rounded-full bg-black flex items-center justify-center border border-white/20"
          >
            <Image src="/logo.png" alt="Whatstask Logo" width={64} height={64} className="w-16 h-16" />
          </motion.div>
        </div>
      </div>

      {/* Mockup of the app interface - Redesigned to be less cluttered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full max-w-sm"
      >
        <motion.div
          className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
          whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="p-4 border-b border-white/10 flex items-center">
            <div className="w-8 h-8 rounded-full bg-white/10 mr-3 flex items-center justify-center">
              <Image src="/logo.png" alt="Whatstask Logo" width={20} height={20} className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Whatstask</div>
              <div className="text-xs text-gray-400">Your personal task assistant</div>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                <span className="text-xs">You</span>
              </div>
              <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm">
                Create a new task: Meeting with design team tomorrow at 2pm
              </div>
            </motion.div>
            <motion.div
              className="flex items-start gap-3 justify-end"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="bg-white/10 rounded-2xl rounded-tr-none p-3 text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-sm bg-green-500 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Task created:</span>
                </div>
                <div className="ml-6 mb-1">"Meeting with design team"</div>
                <div className="flex items-center gap-2 ml-6 mb-1">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="2" />
                      <path d="M3 10H21" stroke="white" strokeWidth="2" />
                      <path d="M8 2L8 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <path d="M16 2L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span>Tomorrow at 2:00 PM</span>
                </div>
                <div className="flex items-center gap-2 ml-6">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4 9H20L19.2929 18.7071C19.1363 20.5919 17.5919 22 15.7059 22H8.29408C6.40812 22 4.86371 20.5919 4.70711 18.7071L4 9Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 9V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V9"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span>Category: Work</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                <Image src="/logo.png" alt="Whatstask Logo" width={20} height={20} className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
