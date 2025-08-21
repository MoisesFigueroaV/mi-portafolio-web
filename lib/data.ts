export type Project = {
  title: string
  subtitle?: string
  image: string
  tags?: string[]
  description?: string
  body?: string
  siteUrl?: string
  repoUrl?: string
  updatedAt: string // ISO
  featured?: boolean
}

export type Post = {
  title: string
  readingTime?: string
  excerpt?: string
  content: string
  updatedAt: string // ISO
}

export type Photo = { src: string; alt: string }

export const projects: Project[] = [
  
  // Portafolio Web Personal
  {
    title: "Portafolio Web Moisés Figueroa",
    subtitle: "Mi sitio personal como desarrollador web",
    image: "/specular-ui-preview.png",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "UI"],
    description: "Portafolio web moderno para mostrar mis proyectos, artículos y fotografías. Responsive, accesible y optimizado para SEO.",
    body: `Este portafolio fue desarrollado con Next.js 14, React 19 y Tailwind CSS, siguiendo buenas prácticas de accesibilidad y diseño responsivo. Incluye:

  - + Sección de proyectos destacados y recientes.
  - + Blog técnico con artículos sobre frontend y accesibilidad.
  - + Galería de fotografías personales.
  - + Temas claro/oscuro y soporte multilenguaje.
  - + Componentes UI reutilizables y animaciones suaves.

El código está estructurado en componentes y hooks personalizados, y aprovecha las capacidades de Server Components y rutas app/ de Next.js.

\`\`\`tsx
// Ejemplo de uso de un componente reutilizable
<ProjectCard title="Portafolio Web" description="Mi sitio personal" />
\`\`\`

El diseño prioriza la legibilidad, la velocidad de carga y la experiencia de usuario tanto en desktop como en móvil.
`,
    siteUrl: "https://moisesfigueroa.dev", // Cambia por tu dominio real si aplica
    repoUrl: "https://github.com/moisesfig/mi-portafolio-web",
    updatedAt: "2025-08-19",
    featured: true,
  },
]


export const posts: Post[] = [
  {
    title: "Interfaces sin ruido visual",
    readingTime: "3 min",
    excerpt: "Equilibra jerarquías: color, peso, ritmo.",
    content: `Reducir el ruido visual no es quitar todo.

\`\`\`css
:focus-visible { outline: 2px solid #4d4d4d; }
\`\`\`

- Un color por rol.
- Un peso por nivel.
- Un ritmo por sección.`,
    updatedAt: "2025-07-28",
  },
  
]

export const photos: Photo[] = [
  { src: "/photos/p1.png", alt: "Calle en blanco y negro" },
  { src: "/photos/p2.png", alt: "Arquitectura minimal" },
  { src: "/photos/p3.png", alt: "Sombra y luz" },
  { src: "/photos/p4.png", alt: "Texturas urbanas" },
  { src: "/photos/p5.png", alt: "Retrato monocromo" },
  { src: "/photos/p6.png", alt: "Horizonte" },
]

export function getFeaturedProjects(limit = 4): Project[] {
  const featured = projects.filter((p) => p.featured)
  const base = (featured.length ? featured : projects).slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
  return base.slice(0, limit)
}

export function getLatestPosts(limit = 4): Post[] {
  return posts
    .slice()
    .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
    .slice(0, limit)
}
