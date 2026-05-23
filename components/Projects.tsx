"use client"

import { motion } from "framer-motion"
import { projects, type Project } from "@/data/portfolio"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-blue-500/[0.3] transition-all duration-300 overflow-hidden shadow-card"
    >
      {/* Accent bar */}
      <div
        className="h-[3px] w-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="flex flex-col flex-1 p-6 lg:p-8">
        {/* Title */}
        <h3 className="font-heading font-bold text-white text-lg lg:text-xl mb-3 leading-snug group-hover:text-blue-100 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description.en}
        </p>

        {/* Features (top 3) */}
        <ul className="space-y-2 mb-6" aria-label="Métricas del proyecto">
          {project.features.en.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-blue-500 mt-0.5 flex-shrink-0" aria-hidden="true">
                ▸
              </span>
              <span className="text-neutral-300">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Tecnologías utilizadas">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 pt-4 border-t border-white/[0.07]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código de ${project.title} en GitHub`}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200 min-h-[44px]"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${project.title}`}
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200 min-h-[44px]"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Ver demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      aria-label="Proyectos"
      className="relative py-20 lg:py-28"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-500 text-sm font-mono font-medium mb-4 block"
          >
            // proyectos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Proyectos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-neutral-400 max-w-xl text-base sm:text-lg"
          >
            Productos completos — desde la arquitectura hasta el despliegue.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
