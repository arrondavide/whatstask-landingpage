"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  tiltAmount?: number
}

export function InteractiveCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.15)",
  tiltAmount = 10,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })

  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(600px circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />

      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${spotlightColor}, transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  magneticStrength?: number
}

export function MagneticButton({
  children,
  className = "",
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 20 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * magneticStrength
    const deltaY = (e.clientY - centerY) * magneticStrength

    x.set(deltaX)
    y.set(deltaY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface GlowingBorderCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowingBorderCard({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.5)",
}: GlowingBorderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${isHovered ? glowColor : "transparent"}, transparent 40%)`,
      }}
    >
      <div className="relative z-10 m-[1px] rounded-[inherit] bg-white/90 backdrop-blur-sm">
        {children}
      </div>
    </div>
  )
}

interface ShimmerButtonProps {
  children: React.ReactNode
  className?: string
  shimmerColor?: string
}

export function ShimmerButton({
  children,
  className = "",
  shimmerColor = "rgba(255, 255, 255, 0.4)",
}: ShimmerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 -translate-x-full"
        animate={{
          translateX: ["100%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
        }}
      />
    </motion.button>
  )
}
