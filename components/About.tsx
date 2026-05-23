"use client"

import { motion } from "framer-motion"
import { aboutParagraphs, skills, personalInfo } from "@/data/portfolio"

export default function About() {
  return (
    <section
      id="sobre-mi"
      aria-label="Sobre mí"
      className="relative py-20 lg:py-28"
    >
      {/* Top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-blue-500/25 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ─── Left: Text ─── */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 text-sm font-mono font-medium mb-4 block"
            >
              // sobre mí
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-white mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Sobre Mí
            </motion.h2>

            <div className="space-y-5">
              {aboutParagraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-neutral-300 leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm text-neutral-300">
                <svg
                  className="w-4 h-4 text-blue-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {personalInfo.location}
              </span>

              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm text-neutral-300">
                <svg
                  className="w-4 h-4 text-blue-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {personalInfo.experience} de experiencia
              </span>

              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/[0.2] text-sm text-emerald-400">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                {personalInfo.availability}
              </span>
            </motion.div>
          </div>

          {/* ─── Right: Skills ─── */}
          <div className="space-y-8">
            {/* Core */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
                Especialización
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.core.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-600/[0.12] border border-blue-500/[0.22] text-blue-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-3">
                Especialidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.specialties.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-neutral-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Competent */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                Competente en
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.competent.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-neutral-400 text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-neutral-400 text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
