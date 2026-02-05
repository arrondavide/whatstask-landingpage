"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export default function AnimatedText({ text, className = "", once = false, delay = 0 }: AnimatedTextProps) {
  const [scope, animate] = useState(false)

  useEffect(() => {
    if (!once) return
    animate(true)
  }, [once])

  const words = text.split(" ")

  // Variants for container of words
  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={scope ? "visible" : "hidden"}
      whileInView={!once ? "visible" : undefined}
      viewport={!once ? { once: true, amount: 0.4 } : undefined}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Blur reveal text effect
interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

export function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  const words = text.split(" ")

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </span>
  )
}

// Gradient animated text
interface GradientTextProps {
  text: string
  className?: string
  from?: string
  via?: string
  to?: string
  animate?: boolean
}

export function GradientText({
  text,
  className = "",
  from = "#8B5CF6",
  via = "#A78BFA",
  to = "#C4B5FD",
  animate: shouldAnimate = true,
}: GradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${from}, ${via}, ${to})`,
        backgroundSize: shouldAnimate ? "200% auto" : "100% auto",
      }}
      animate={
        shouldAnimate
          ? {
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }
          : undefined
      }
      transition={
        shouldAnimate
          ? {
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }
          : undefined
      }
    >
      {text}
    </motion.span>
  )
}
