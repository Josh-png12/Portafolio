"use client";

import React, { createContext, useContext, useState } from "react";
import type { Lang } from "@/data/portfolio";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.available": "Available for opportunities",
    "hero.title": "Full Stack Software Engineer",
    "hero.subtitle": "Systems & Automation Developer",
    "hero.description":
      "I design and build production-ready software systems, APIs, automation tools, and interactive web applications.",
    "hero.tagline":
      "I don't just build interfaces — I build complete systems that solve real-world problems.",
    "hero.cta.projects": "View Projects",
    "hero.cta.github": "GitHub Profile",
    "hero.scroll": "Scroll to explore",
    "hero.badge.systems": "Full Stack Systems",
    "hero.badge.apis": "Backend APIs",
    "hero.badge.automation": "Automation Tools",
    "hero.badge.clients": "Real Client Work",

    "about.tag": "About",
    "about.title": "Building systems, not just interfaces.",
    "about.p1":
      "I'm a Full Stack Software Engineer focused on building real systems — from backend APIs and automation tools to complete web applications. My work spans multiple domains: administrative platforms used in real institutions, backend microservices for scalable architectures, automation tools that eliminate manual work, and commercial websites for real clients.",
    "about.p2":
      "I approach every project as an engineering problem first — architecture before aesthetics, performance before polish.",
    "about.stat.projects": "Projects Built",
    "about.stat.clients": "Real Clients",
    "about.stat.years": "Years Building",
    "about.stat.tech": "Technologies",

    "projects.tag": "Selected Work",
    "projects.title": "Systems built for real-world impact.",
    "projects.subtitle":
      "Not toy projects. Not tutorials. Systems that solve actual problems.",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.impact": "Impact",
    "projects.features": "Key Features",
    "projects.tech": "Tech Stack",
    "projects.code": "View Code",
    "projects.demo": "Live Demo",
    "projects.more": "More Projects",
    "projects.featured": "Featured",

    "experience.tag": "Experience",
    "experience.title": "Real work. Real clients. Real systems.",
    "experience.freelance": "Freelance",
    "experience.contract": "Contract",
    "experience.personal": "Personal",

    "skills.tag": "Technical Stack",
    "skills.title": "Tools I use to build systems.",

    "contact.tag": "Contact",
    "contact.title": "Let's build something.",
    "contact.subtitle":
      "Have a project in mind? Looking for a developer who thinks in systems? I'm available for freelance work and full-time opportunities.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.message.placeholder":
      "Tell me about your project or opportunity...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent. I'll get back to you shortly.",
    "contact.form.error": "Something went wrong. Please try again.",

    "footer.built": "Built with Next.js + Tailwind",
    "footer.rights": "All rights reserved.",
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    "hero.available": "Disponible para oportunidades",
    "hero.title": "Ingeniero de Software Full Stack",
    "hero.subtitle": "Desarrollador de Sistemas & Automatización",
    "hero.description":
      "Diseño y construyo sistemas de software listos para producción, APIs, herramientas de automatización y aplicaciones web interactivas.",
    "hero.tagline":
      "No solo construyo interfaces — construyo sistemas completos que resuelven problemas reales.",
    "hero.cta.projects": "Ver Proyectos",
    "hero.cta.github": "Perfil en GitHub",
    "hero.scroll": "Explorar",
    "hero.badge.systems": "Sistemas Full Stack",
    "hero.badge.apis": "APIs Backend",
    "hero.badge.automation": "Automatización",
    "hero.badge.clients": "Clientes Reales",

    "about.tag": "Sobre mí",
    "about.title": "Construyendo sistemas, no solo interfaces.",
    "about.p1":
      "Soy un Ingeniero de Software Full Stack enfocado en construir sistemas reales — desde APIs backend y herramientas de automatización hasta aplicaciones web completas. Mi trabajo abarca múltiples dominios: plataformas administrativas usadas en instituciones reales, microservicios backend para arquitecturas escalables, herramientas de automatización que eliminan trabajo manual y sitios web comerciales para clientes reales.",
    "about.p2":
      "Abordo cada proyecto como un problema de ingeniería primero — arquitectura antes que estética, rendimiento antes que presentación.",
    "about.stat.projects": "Proyectos Construidos",
    "about.stat.clients": "Clientes Reales",
    "about.stat.years": "Años Construyendo",
    "about.stat.tech": "Tecnologías",

    "projects.tag": "Trabajo Seleccionado",
    "projects.title": "Sistemas construidos para impacto real.",
    "projects.subtitle":
      "No son proyectos de juguete. No son tutoriales. Son sistemas que resuelven problemas reales.",
    "projects.problem": "Problema",
    "projects.solution": "Solución",
    "projects.impact": "Impacto",
    "projects.features": "Características Clave",
    "projects.tech": "Stack Tecnológico",
    "projects.code": "Ver Código",
    "projects.demo": "Demo en Vivo",
    "projects.more": "Más Proyectos",
    "projects.featured": "Destacado",

    "experience.tag": "Experiencia",
    "experience.title": "Trabajo real. Clientes reales. Sistemas reales.",
    "experience.freelance": "Freelance",
    "experience.contract": "Contrato",
    "experience.personal": "Personal",

    "skills.tag": "Stack Técnico",
    "skills.title": "Herramientas que uso para construir sistemas.",

    "contact.tag": "Contacto",
    "contact.title": "Construyamos algo.",
    "contact.subtitle":
      "¿Tienes un proyecto en mente? ¿Buscas un desarrollador que piense en sistemas? Estoy disponible para trabajo freelance y oportunidades a tiempo completo.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo",
    "contact.form.message": "Mensaje",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email.placeholder": "tu@correo.com",
    "contact.form.message.placeholder":
      "Cuéntame sobre tu proyecto u oportunidad...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "Mensaje enviado. Te responderé pronto.",
    "contact.form.error": "Algo salió mal. Inténtalo de nuevo.",

    "footer.built": "Construido con Next.js + Tailwind",
    "footer.rights": "Todos los derechos reservados.",
  },
};

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[lang][key] ?? key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  return useContext(I18nContext);
}
