# Portafolio – Joshua

Portafolio web personal construido con Next.js 15, TypeScript y Tailwind CSS.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** Tailwind CSS v3
- **Deployment:** Vercel

## Inicio rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en localhost:3000 |
| `npm run build` | Build de producción |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## Estructura del proyecto

```
mi-portafolio/
├── app/
│   ├── layout.tsx       # Root layout + metadatos SEO
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales + Tailwind
├── components/
│   ├── Header.tsx       # Navegación sticky
│   ├── Hero.tsx         # Sección de introducción
│   ├── About.tsx        # Sobre mí + experiencia + skills
│   ├── Projects.tsx     # Proyectos destacados
│   ├── Contact.tsx      # Formulario + datos de contacto
│   └── Footer.tsx       # Pie de página
├── data/
│   └── portfolio.ts     # Todos los datos centralizados
└── public/              # Assets estáticos
```

## Personalización

Todos los datos del portafolio se centralizan en `data/portfolio.ts`:

- `personalInfo` – nombre, título, email, redes sociales
- `experiences` – experiencia laboral y académica
- `skills` – tecnologías por categoría
- `projects` – proyectos con links y highlights

Solo edita ese archivo para actualizar el contenido sin tocar los componentes.

## Deployment en Vercel

### Opción 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: GitHub + Vercel (recomendado)

1. Sube el proyecto a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/mi-portafolio.git
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) e importa el repositorio.

3. Vercel detecta automáticamente Next.js y despliega sin configuración adicional.

4. Cada `git push` a `main` activa un deploy automático.

### Dominio personalizado (opcional)

En el dashboard de Vercel → Settings → Domains → añade tu dominio.

## Dark mode

El dark mode es automático y responde a la preferencia del sistema operativo del usuario (`prefers-color-scheme: dark`). No requiere toggle manual.

## Licencia

MIT
