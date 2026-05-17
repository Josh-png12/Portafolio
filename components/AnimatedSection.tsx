"use client"

import { motion, type Variants } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variants?: Variants
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variants = fadeInUp,
  once = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
