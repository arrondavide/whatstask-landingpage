"use client"
import { motion } from "framer-motion"

interface MobileMenuButtonProps {
  isOpen: boolean
  onClick: () => void
}

export default function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      className={`mobile-menu-button ${isOpen ? "mobile-menu-open" : ""}`}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle menu"
    >
      <div className="mobile-menu-icon">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.span
          animate={isOpen ? { width: 0, opacity: 0 } : { width: "70%", opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.button>
  )
}
