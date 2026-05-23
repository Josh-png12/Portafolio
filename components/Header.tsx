"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="#inicio"
          className="font-heading font-black text-xl text-white hover:text-blue-400 transition-colors duration-200"
        >
          Joshua<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm text-neutral-400 hover:text-white transition-colors duration-200 group py-1"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px bg-blue-500 w-0 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <Link
          href="#contacto"
          className="hidden sm:inline-flex items-center px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors duration-200"
        >
          Hablemos
        </Link>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[5px] items-center justify-center w-11 h-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-5 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-px w-5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-px w-5 bg-white origin-center"
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 sm:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#111111] border-l border-white/[0.08] z-50 flex flex-col sm:hidden"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.08]">
                <span className="font-heading font-bold text-white">Menú</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                  aria-label="Cerrar menú"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 px-4 py-6">
                <ul className="flex flex-col gap-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center py-3 px-4 text-neutral-300 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-200 text-base font-medium"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="px-4 pb-8 pt-4 border-t border-white/[0.08]">
                <Link
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors duration-200"
                >
                  Hablemos
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
