'use client'
import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    let cx = window.innerWidth / 2
    let cy = window.innerHeight / 2
    let tx = cx
    let ty = cy

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    let raf: number
    const animate = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      blob.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed top-0 left-0 z-0 hidden md:block"
      aria-hidden="true"
      style={{
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}
