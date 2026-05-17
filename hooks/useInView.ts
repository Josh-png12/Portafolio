"use client"

import { useRef } from "react"
import { useInView as useFramerInView } from "framer-motion"

export function useInView(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, {
    once: options?.once ?? true,
    amount: options?.threshold ?? 0.15,
  })
  return { ref, isInView }
}
