export const personalInfo = {
  name: "Joshua",
  title: "Fullstack SaaS Engineer",
  subtitle: "React • Next.js • Node.js • PostgreSQL • Automatización",
  location: "La Guajira, Colombia",
  experience: "2 años",
  availability: "Disponible para proyectos",
  social: {
    github: "https://github.com/Josh-png12",
    email: "joshuanavarro933@gmail.com",
    whatsapp: "+57 3197149647",
    whatsappUrl: "https://wa.me/573197149647",
  },
}

export const aboutParagraphs = [
  "Soy desarrollador fullstack con 2 años de experiencia enfocado en construir productos completos: plataformas SaaS, automatizaciones, PWAs offline-first e integración de inteligencia artificial.",
  "No me limito al frontend ni al backend. Trabajo en todo el stack porque me interesa entender el producto completo, desde cómo se ve hasta cómo escala. Escribo código limpio, pienso en arquitectura desde el inicio y construyo soluciones que crecen con el negocio.",
  "Basado en La Guajira, Colombia 🇨🇴.",
]

export const skills = {
  core: ["React.js", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  specialties: [
    "PWAs Offline-first",
    "Integración de IA",
    "Desarrollo SaaS",
    "Automatización de procesos",
  ],
  competent: [
    "Python",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Docker",
    "APIs REST",
    "JWT",
    "Tailwind CSS",
  ],
  tools: ["Git & GitHub", "Vercel", "Postman", "Linux", "npm", "Figma (implementación)"],
}

export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  metrics: string[]
  demo: string | null
  github: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SIEPA — Plataforma de Gestión Educativa",
    description:
      "Sistema web que automatiza la evaluación y gestión académica. Integra reconocimiento inteligente para procesar respuestas automáticamente, genera reportes de rendimiento y centraliza la administración de contenido.",
    tech: ["React.js", "Node.js", "PostgreSQL", "TypeScript", "AWS", "Docker", "JWT"],
    metrics: [
      "100+ usuarios activos",
      "95% de precisión en evaluación automática",
      "Reduce corrección manual de 4 horas a 5 minutos",
    ],
    demo: "https://siepa-demo.vercel.app",
    github: "https://github.com/Josh-png12",
  },
  {
    id: 2,
    title: "Sistema de Ventas con Lectura QR y Código de Barras",
    description:
      "Aplicación PWA offline-first para gestión de ventas e inventario. Integra lectura de QR y códigos de barras directamente desde el navegador del celular, sin hardware adicional. Funciona completamente sin internet y sincroniza los datos automáticamente al recuperar conexión.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "PWA", "Service Workers"],
    metrics: [
      "Funciona 100% sin conexión a internet",
      "1000+ transacciones diarias procesadas",
      "Cero dependencia de hardware especializado",
      "Checkout de 3 minutos reducido a 30 segundos",
    ],
    demo: null,
    github: "https://github.com/Josh-png12",
  },
  {
    id: 3,
    title: "Premios La Cima — Plataforma Web para Evento de Premiaciones",
    description:
      "Plataforma web diseñada para una experiencia de premiaciones. Incluye diseño visual avanzado, animaciones, interacción dinámica y optimización para alto tráfico durante el evento.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Node.js", "PostgreSQL"],
    metrics: [
      "10,000+ visitantes durante el evento",
      "Score 98/100 en Lighthouse performance",
      "Experiencia completamente animada y optimizada",
    ],
    demo: null,
    github: "https://github.com/Josh-png12",
  },
  {
    id: 4,
    title: "Fundación Vida, Amor y Salud — Sitio Web Institucional",
    description:
      "Sitio web oficial de la fundación. Enfoque en transmitir confianza, identidad visual clara y accesibilidad. Prioriza velocidad de carga, presencia digital profesional y experiencia de usuario.",
    tech: ["WordPress", "Gutenberg", "PHP", "CSS personalizado"],
    metrics: [
      "5000+ visitantes mensuales",
      "Tiempo de carga menor a 1 segundo",
      "Score 98/100 en Lighthouse",
    ],
    demo: "https://fundacionivn.org",
    github: "https://github.com/Josh-png12",
  },
]
