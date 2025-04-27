"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Hide cursor initially until it moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Check for link hovers
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button]").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    // Only add cursor on non-touch devices
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: coarse)").matches) {
      // Add cursor styles to body
      document.body.classList.add("custom-cursor")

      addEventListeners()
      handleLinkHoverEvents()

      return () => {
        document.body.classList.remove("custom-cursor")
        removeEventListeners()
      }
    }
  }, [])

  // Don't render on touch devices or server
  if (
    typeof window === "undefined" ||
    (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)
  ) {
    return null
  }

  return (
    <>
      <motion.div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.5 : linkHovered ? 2 : 1,
          opacity: hidden ? 0 : 1,
          backgroundColor: linkHovered ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className={`cursor-ring ${hidden ? "opacity-0" : "opacity-100"}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : linkHovered ? 0.4 : 0.2,
          borderColor: linkHovered ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 22,
          mass: 0.8,
        }}
      />
    </>
  )
}
