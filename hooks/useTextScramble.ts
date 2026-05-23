'use client'
import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'

export function useTextScramble(finalText: string, duration = 1800) {
  const [display, setDisplay] = useState(finalText)

  useEffect(() => {
    let frame = 0
    const totalFrames = 60
    const interval = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const resolved = Math.floor(progress * finalText.length)

      setDisplay(
        finalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < resolved) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join(''),
      )

      if (frame >= totalFrames) clearInterval(interval)
    }, duration / totalFrames)

    return () => clearInterval(interval)
  }, [finalText, duration])

  return display
}
