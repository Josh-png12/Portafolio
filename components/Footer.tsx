import Link from "next/link"
import { personalInfo } from "@/data/portfolio"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] pt-14 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-heading font-black text-xl text-white mb-2">
              Joshua<span className="text-blue-500">.</span>
            </p>
            <p className="text-neutral-500 text-sm mb-1">Fullstack SaaS Engineer</p>
            <p className="text-neutral-700 text-xs">{personalInfo.location}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navegación del footer">
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-4">
              Contacto
            </p>
            <div className="space-y-2.5">
              <a
                href={`mailto:${personalInfo.social.email}`}
                className="block text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {personalInfo.social.email}
              </a>
              <a
                href={personalInfo.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                {personalInfo.social.whatsapp}
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Joshua"
                className="block text-sm text-neutral-500 hover:text-white transition-colors duration-200"
              >
                GitHub / Josh-png12
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8"
          aria-hidden="true"
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-700 text-xs text-center sm:text-left">
            © {year} Joshua. Todos los derechos reservados.
          </p>
          <p className="text-neutral-800 text-xs">
            Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
