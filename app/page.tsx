"use client";
import Link from "next/link";
import { Space_Mono } from "next/font/google";
import {
  BookOpen,
  Code,
  ExternalLink,
  Github,
  Mail,
  Terminal,
  Camera,
  User,
} from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionRow from "@/components/section-row";
import {
  EnhancedProjectCard,
  EnhancedBlogCard,
} from "@/components/enhanced-cards";
import MediaMosaic from "@/components/media-mosaic";
import { ViewerProvider } from "@/components/viewer-provider";
import { getFeaturedProjects, getLatestPosts, photos } from "@/lib/data";
import TechStack from "@/components/tech-stack";
import ScrollProgress from "@/components/scroll-progress";
import SkipLinks from "@/components/skip-links";
import Timeline from "@/components/timeline";
import { useLanguage } from "@/components/language-provider";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export default function Page() {
  const { t } = useLanguage();
  const featuredProjects = getFeaturedProjects(4);
  const latestPosts = getLatestPosts(4);
  const photosPreview = photos.slice(0, 6);

  return (
    <main
      id="main-content"
      className={[
        spaceMono.variable,
        "font-mono min-h-screen antialiased selection:bg-[#4d4d4d] selection:text-white",
        "bg-gray-100 text-gray-700 dark:bg-[#000000] dark:text-[#cccccc]",
        "transition-colors duration-700",
      ].join(" ")}
    >
      <Style />
      <SkipLinks />
      <ScrollProgress />

      <ViewerProvider>
        <PageShell>
          {/* Etiqueta pequeña */}
          <div className="reveal mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs uppercase text-gray-500 dark:text-[#4d4d4d]">
            <Terminal className="h-4 w-4" />
            <span>{t("portfolio")}</span>
          </div>

          {/* Título grande - mejorado para móvil */}
          <h1
            className={[
              "reveal text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
              "bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent",
              "dark:from-[#ffffff] dark:to-[#cccccc]",
            ].join(" ")}
            style={{ animationDelay: "120ms" }}
            id="intro"
          >
            {t("designer_developer")}
          </h1>

          {/* Intro en columnas - mejorado para móvil */}
          <div
            className="reveal mt-6 sm:mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animationDelay: "180ms" }}
          >
            <p className="text-sm leading-relaxed text-gray-600 dark:text-[#cccccc]">
              {t("intro_1")}
            </p>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-[#cccccc]">
              {t("intro_2")}
            </p>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-[#cccccc]">
              {t("intro_3")}
            </p>
          </div>

          {/* Datos laterales (address, contacto, social) solo en mobile, antes de proyectos */}
          <div className="block sm:hidden px-3 pb-4 mt-4 max-w-3xl mx-auto">
            {/* Address */}
            <section className="mb-4">
              <h3 className="mb-1 font-bold uppercase tracking-wide text-xs text-gray-700 dark:text-[#cccccc]">
                {t("address")}
              </h3>
              <p className="whitespace-pre-line text-xs text-gray-500 dark:text-[#4d4d4d]">
                {t("location")}
              </p>
            </section>
            {/* Contacto */}
            <section className="mb-4">
              <h3 className="mb-1 font-bold uppercase tracking-wide text-xs text-gray-700 dark:text-[#cccccc]">
                {t("contact")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=moises.figueroavalenzuela@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80 text-xs text-gray-500 dark:text-[#4d4d4d]"
                  >
                    {t("email")}
                  </a>
                </li>
                <li>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:opacity-80 text-xs text-gray-500 dark:text-[#4d4d4d]"
                  >
                    {t("cv")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MoisesFigueroaV"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:opacity-80 text-xs text-gray-500 dark:text-[#4d4d4d]"
                  >
                    {t("github_link")}
                  </a>
                </li>
              </ul>
            </section>
            {/* Social */}
            <section className="mb-2">
              <h3 className="mb-1 font-bold uppercase tracking-wide text-xs text-gray-700 dark:text-[#cccccc]">
                {t("social")}
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://github.com/MoisesFigueroaV"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:opacity-80 text-xs text-gray-500 dark:text-[#4d4d4d]"
                  >
                    {t("github_link")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/tu_usuario"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:opacity-80 text-xs text-gray-500 dark:text-[#4d4d4d]"
                  >
                    {t("twitter_link")}
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* PROYECTOS - espaciado mejorado para móvil */}
          <SectionRow
            id="projects"
            label={t("projects")}
            hint={t("selection")}
            spacing="xl"
            icon={<Code className="h-4 w-4" />}
          >
            <div className="grid gap-4 sm:gap-4 sm:grid-cols-2">
              {featuredProjects.map((p, i) => (
                <EnhancedProjectCard
                  key={p.title}
                  project={p}
                  delay={60 + i * 40}
                />
              ))}
            </div>
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 ring-1 ring-gray-300/80 px-3 py-2 text-xs text-gray-700 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:active:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                {t("see_all_projects")}
              </Link>
            </div>
          </SectionRow>

          {/* BLOG - espaciado mejorado para móvil */}
          <SectionRow
            id="blog"
            label={t("blog")}
            hint={t("latest")}
            spacing="xl"
            icon={<BookOpen className="h-4 w-4" />}
          >
            <div className="grid gap-4 sm:gap-3 sm:grid-cols-2">
              {latestPosts.map((p, i) => (
                <EnhancedBlogCard key={p.title} post={p} delay={60 + i * 40} />
              ))}
            </div>
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:active:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                {t("see_more_blog")}
              </Link>
            </div>
          </SectionRow>

          {/* FOTOS */}
          <SectionRow
            id="photos"
            label={t("photos")}
            hint={t("personal_mosaic")}
            spacing="xl"
            icon={<Camera className="h-4 w-4" />}
          >
            <MediaMosaic photos={photosPreview} />
            <div className="mt-6 flex justify-center sm:justify-start">
              <Link
                href="/photos"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:active:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                {t("see_all_photos")}
              </Link>
            </div>
          </SectionRow>

          {/* EXPERIENCIA - Timeline */}
          <SectionRow
            id="experience"
            label={t("experience")}
            hint={t("trajectory")}
            spacing="xl"
            icon={<User className="h-4 w-4" />}
          >
            <Timeline />
          </SectionRow>

          {/* STACK TECNOLÓGICO */}
          <SectionRow
            id="stack"
            label={t("stack")}
            hint={t("technologies_used")}
            spacing="xl"
          >
            <TechStack
              items={[
                {
                  name: "Astro",
                  description: t("astro_description"),
                  tags: ["Islands", "MDX", "SSR"],
                  role: "frontend",
                },
                {
                  name: "Next.js",
                  description: t("nextjs_description"),
                  tags: ["RSC", "App Router"],
                  role: "frontend",
                },
                {
                  name: "React + TypeScript",
                  description: t("react_description"),
                  tags: ["A11y", "Patterns"],
                  role: "frontend",
                },
                {
                  name: "Tailwind CSS",
                  description: t("tailwind_description"),
                  tags: ["Design System", "Tokens"],
                  role: "tools",
                },
                {
                  name: "MDX/Markdown",
                  description: t("mdx_description"),
                  tags: ["Content"],
                  role: "content",
                },
              ]}
            />
          </SectionRow>

          {/* CONTACTO */}
          <SectionRow
            id="contact"
            label={t("contact")}
            hint={t("lets_work_together")}
            spacing="xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&to=moises.figueroavalenzuela@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 ring-1 ring-gray-300/80 bg-white px-3 py-2 text-xs text-gray-700 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:hover:bg-[#000000] dark:active:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{t("email")}</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="https://github.com/MoisesFigueroaV"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 ring-1 ring-gray-300/80 bg-white px-3 py-2 text-xs text-gray-700 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:hover:bg-[#000000] dark:active:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">{t("github_link")}</span>
                <span className="sm:hidden">GitHub</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1 ring-1 ring-gray-300/80 bg-gray-900 px-3 py-2 text-xs text-white hover:bg-gray-800 active:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:ring-[#4d4d4d] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#cccccc] dark:active:bg-[#aaaaaa] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                {t("cv")} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </SectionRow>
        </PageShell>
        {/* Elemento final alternativo en mobile (mensaje de cierre) */}
        <div className="block sm:hidden px-3 py-8 max-w-3xl mx-auto text-center text-xs text-gray-400">
          <span>Gracias por visitar mi portafolio ✨</span>
        </div>
      </ViewerProvider>
    </main>
  );
}

function Style() {
  return (
    <style jsx global>{`
      .font-mono {
        font-family:
          var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco,
          Consolas, "Liberation Mono", "Courier New", monospace !important;
      }
      .theme-transition *,
      .theme-transition *::before,
      .theme-transition *::after {
        transition:
          background-color 400ms ease,
          color 400ms ease,
          border-color 400ms ease,
          fill 400ms ease,
          stroke 400ms ease,
          opacity 300ms ease,
          transform 300ms ease !important;
      }
      @keyframes fade-up {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .reveal {
        opacity: 0;
        animation: fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      /* Respeta prefers-reduced-motion */
      @media (prefers-reduced-motion: reduce) {
        .reveal {
          animation: none;
          opacity: 1;
        }
        .theme-transition * {
          transition: none !important;
        }
      }
    `}</style>
  );
}
