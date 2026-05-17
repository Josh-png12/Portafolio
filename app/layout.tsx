import type { Metadata } from 'next'
import './globals.css'
import CursorFollower from '@/components/CursorFollower'

export const metadata: Metadata = {
  title: 'Joshua | Fullstack SaaS Engineer — La Guajira, Colombia',
  description:
    'Fullstack Engineer con 2 años de experiencia en SaaS, PWAs offline-first e integración de IA. React, Next.js, Node.js, PostgreSQL. Disponible para proyectos.',
  keywords: [
    'fullstack developer colombia',
    'SaaS developer',
    'React developer',
    'Next.js developer',
    'Node.js developer',
    'La Guajira Colombia',
    'PWA offline-first',
    'automatización web',
    'integración IA',
    'desarrollador web colombia',
    'freelance developer colombia',
  ],
  authors: [{ name: 'Joshua' }],
  openGraph: {
    title: 'Joshua | Fullstack SaaS Engineer',
    description: 'Fullstack Engineer especializado en SaaS, automatización y PWAs offline-first.',
    url: 'https://tu-dominio.com',
    siteName: 'Joshua Dev',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua | Fullstack SaaS Engineer',
    description: 'Fullstack Engineer especializado en SaaS, automatización y PWAs offline-first.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tu-dominio.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua',
  jobTitle: 'Fullstack SaaS Engineer',
  url: 'https://tu-dominio.com',
  sameAs: ['https://github.com/Josh-png12'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'La Guajira',
    addressCountry: 'CO',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased overflow-x-hidden font-sans">
        <CursorFollower />
        {children}
      </body>
    </html>
  )
}
