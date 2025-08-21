"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Clock } from "lucide-react"
import ProjectTile from "./project-tile"
import BlogTile from "./blog-tile"

type Project = {
  title: string
  subtitle?: string
  image: string
  tags?: string[]
  description?: string
  siteUrl?: string
  repoUrl?: string
}

type Post = {
  title: string
  readingTime?: string
  excerpt?: string
  content: string
}

export default function ShowcaseSwitcher({
  projects = [],
  posts = [],
}: {
  projects?: Project[]
  posts?: Post[]
}) {
  const [tab, setTab] = useState<"projects" | "blog">("projects")
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activePost, setActivePost] = useState<Post | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const isViewer = !!activeProject || !!activePost

  function backToList() {
    setActiveProject(null)
    setActivePost(null)
    // scroll suave al contenedor del switcher
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Accesibilidad: tecla Escape para volver
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isViewer) backToList()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isViewer])

  return (
    <div ref={containerRef} className="w-full">
      {/* Segmentado con thumb animado */}
      {!isViewer && (
        <div
          role="tablist"
          aria-label="Showcase"
          className="relative mb-5 inline-flex rounded-md ring-1 ring-gray-300/80 p-1 text-xs dark:ring-[#4d4d4d]"
        >
          {(["projects", "blog"] as const).map((t) => {
            const active = tab === t
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className={[
                  "relative z-10 px-3 py-1.5 transition-colors",
                  active
                    ? "text-gray-900 dark:text-[#000000]"
                    : "text-gray-600 hover:text-gray-900 dark:text-[#cccccc] dark:hover:text-[#ffffff]",
                ].join(" ")}
              >
                {t === "projects" ? "Proyectos" : "Blog"}
              </button>
            )
          })}
          <motion.span
            layout
            layoutId="thumb"
            className="absolute inset-y-1 rounded bg-gray-900 dark:bg-[#ffffff]"
            style={{
              width: "calc(50% - 0.5rem)",
              left: tab === "projects" ? "0.5rem" : "calc(50% + 0rem)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
        </div>
      )}

      <div className="relative">
        <AnimatePresence mode="popLayout">
          {/* LISTADOS */}
          {!isViewer && tab === "projects" && (
            <motion.div
              key="projects-list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {projects.map((p, i) => (
                <ProjectTile
                  key={p.title}
                  title={p.title}
                  subtitle={p.subtitle}
                  image={p.image}
                  tags={p.tags}
                  description={p.description}
                  siteUrl={p.siteUrl}
                  repoUrl={p.repoUrl}
                  delay={60 + i * 40}
                  onSelect={() => setActiveProject(p)}
                />
              ))}
            </motion.div>
          )}

          {!isViewer && tab === "blog" && (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {posts.map((p, i) => (
                <BlogTile
                  key={p.title}
                  title={p.title}
                  readingTime={p.readingTime}
                  excerpt={p.excerpt}
                  content={p.content}
                  delay={60 + i * 40}
                  onSelect={() => setActivePost(p)}
                />
              ))}
            </motion.div>
          )}

          {/* VISOR EN PÁGINA: PROYECTO */}
          {activeProject && (
            <motion.article
              key="project-viewer"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className={[
                "rounded-md p-4 sm:p-6",
                "ring-1 ring-gray-300/80 bg-white text-gray-700",
                "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc]",
              ].join(" ")}
              aria-live="polite"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={backToList}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.siteUrl && (
                    <a
                      href={activeProject.siteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Sitio
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  )}
                </div>
              </div>

              <header className="mb-4">
                <h3 className="text-lg font-bold">{activeProject.title}</h3>
                {activeProject.subtitle && (
                  <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{activeProject.subtitle}</p>
                )}
              </header>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeProject.image || "/placeholder.svg"}
                alt={`Vista de ${activeProject.title}`}
                className="mb-4 w-full rounded-md ring-1 ring-gray-300/80 dark:ring-[#4d4d4d]"
              />

              {activeProject.description && <p className="text-sm">{activeProject.description}</p>}

              {activeProject.tags && activeProject.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          )}

          {/* VISOR EN PÁGINA: POST */}
          {activePost && (
            <motion.article
              key="post-viewer"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className={[
                "rounded-md p-4 sm:p-6",
                "ring-1 ring-gray-300/80 bg-white text-gray-700",
                "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc]",
              ].join(" ")}
              aria-live="polite"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={backToList}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Volver
                </button>
                {/* Solo mostrar el tiempo de lectura, sin botón de cerrar/X */}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-[#4d4d4d]">
                  <Clock className="h-4 w-4" />
                  {activePost.readingTime || "—"}
                </div>
              </div>

              <header className="mb-3">
                <h3 className="text-lg font-bold">{activePost.title}</h3>
                {activePost.excerpt && (
                  <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{activePost.excerpt}</p>
                )}
              </header>

              <article className="prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-[#cccccc]">
                <pre className="whitespace-pre-wrap text-sm">{activePost.content}</pre>
              </article>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
