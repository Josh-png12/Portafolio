'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { useTextScramble } from '@/hooks/useTextScramble'
import { MagneticButton } from '@/lib/MagneticButton'

const titleWords = personalInfo.title.split(' ')

const wordVariants = {
  hidden: { y: 60, clipPath: 'inset(100% 0 0 0)' },
  visible: (i: number) => ({
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      delay: 0.8 + i * 0.12,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  }),
}

const heroStats = [
  { value: '2+', label: 'Años de experiencia' },
  { value: '4', label: 'Proyectos entregados' },
  { value: 'SaaS', label: 'Especialidad' },
  { value: 'Full', label: 'Stack completo' },
]

export default function Hero() {
  const displayName = useTextScramble('Joshua', 2000)

  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,rgba(59,130,246,0.1),transparent)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/[0.07] rounded-full blur-3xl animate-float pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-[10%] w-56 h-56 bg-blue-500/[0.05] rounded-full blur-3xl animate-float-slow pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 py-20 sm:py-24 lg:py-28 w-full">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-600/[0.1] border border-blue-500/[0.2] text-blue-400 text-sm font-medium">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {personalInfo.availability}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-neutral-500 text-lg sm:text-xl font-mono mb-3 tracking-wide"
        >
          Hola, soy
        </motion.p>

        {/* Name — text scramble animation */}
        <h1
          className="font-heading font-black leading-none mb-5"
          style={{ fontSize: 'clamp(48px, 10vw, 96px)' }}
        >
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: 80, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ y: 0, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="block text-white font-mono tracking-tight"
              aria-label="Joshua"
            >
              {displayName}
            </motion.span>
          </div>
        </h1>

        {/* Title — word-by-word clip reveal */}
        <h2
          className="font-heading font-bold flex flex-wrap gap-x-[0.3em] gap-y-0 mb-7"
          style={{ fontSize: 'clamp(26px, 4.5vw, 52px)' }}
          aria-label={personalInfo.title}
        >
          {titleWords.map((word, i) => (
            <div key={`${word}-${i}`} className="overflow-hidden">
              <motion.span
                className="block"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                style={{ color: i === 1 ? '#3b82f6' : '#d1d5db' }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-neutral-400 text-base sm:text-lg font-mono mb-10 max-w-xl"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* CTA Buttons — magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 sm:mb-20"
        >
          <MagneticButton
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-colors duration-200 hover:shadow-glow-blue-sm text-sm min-h-[44px]"
          >
            Ver proyectos
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </MagneticButton>

          <MagneticButton
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-white font-semibold rounded-2xl transition-all duration-200 text-sm min-h-[44px]"
          >
            Contactar
          </MagneticButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-heading font-bold text-2xl sm:text-3xl text-white">
                {stat.value}
              </span>
              <span className="text-neutral-500 text-xs sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-700"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.15em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-neutral-700 to-transparent"
        />
      </motion.div>
    </section>
  )
}
