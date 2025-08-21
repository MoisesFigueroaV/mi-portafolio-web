"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Clock, X } from "lucide-react"
import MdxContent from "./mdx-content"
import { useLanguage } from "@/components/language-provider"

type Project = {
  title: string
  subtitle?: string
  image?: string
  tags?: string[]
  description?: string
  body?: string
  siteUrl?: string
  repoUrl?: string
}

type Post = {
  title: string
  readingTime?: string
  excerpt?: string
  content: string
}

type ViewerState = { type: "project"; data: Project } | { type: "post"; data: Post } | null

type Ctx = {
  openProject: (p: Project) => void
  openPost: (p: Post) => void
  close: () => void
  isOpen: boolean
  state: ViewerState
}

const ViewerCtx = createContext<Ctx | null>(null)
export function useViewer() {
  const ctx = useContext(ViewerCtx)
  if (!ctx) throw new Error("useViewer must be used within ViewerProvider")
  return ctx
}

export function ViewerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ViewerState>(null)
  const backBtnRef = useRef<HTMLButtonElement | null>(null)
  const { t } = useLanguage()

  const openProject = useCallback((p: Project) => {
    setState({ type: "project", data: p })
    try {
      history.pushState({ viewer: true }, "", "#view")
    } catch {}
  }, [])

  const openPost = useCallback((p: Post) => {
    setState({ type: "post", data: p })
    try {
      history.pushState({ viewer: true }, "", "#view")
    } catch {}
  }, [])

  const close = useCallback(() => {
    setState(null)
    if (typeof window !== "undefined" && location.hash === "#view") {
      history.back()
    }
  }, [])

  useEffect(() => {
    function onPop() {
      if (state) setState(null)
    }
    window.addEventListener("popstate", onPop)
    return () => window.removeEventListener("popstate", onPop)
  }, [state])

  useEffect(() => {
    if (state) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      setTimeout(() => backBtnRef.current?.focus(), 0)
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [state])

  const value = useMemo<Ctx>(
    () => ({ openProject, openPost, close, isOpen: !!state, state }),
    [openProject, openPost, close, state],
  )

  return (
    <ViewerCtx.Provider value={value}>
      {children}
      <AnimatePresence>
        {state && (
          <motion.div
            key="viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-100 text-gray-700 dark:bg-[#000000] dark:text-[#cccccc]"
            aria-modal="true"
            role="dialog"
          >
            {/* Header mejorado para móvil */}
            <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">
              <button
                ref={backBtnRef}
                onClick={close}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] dark:focus-visible:ring-[#4d4d4d] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{t("back")}</span>
              </button>

              <div className="text-[11px] text-gray-500 dark:text-[#4d4d4d]">{t("viewer")}</div>

              {/* Botón X para móvil */}
              
            </div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="h-[calc(100vh-60px)] sm:h-[calc(100vh-64px)] overflow-y-auto px-3 py-4 sm:px-6 sm:py-6"
            >
              <div className="mx-auto max-w-4xl">
                {state.type === "project" ? <ProjectContent {...state.data} /> : <PostContent {...state.data} />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ViewerCtx.Provider>
  )
}

function ProjectContent(p: Project) {
  const { t } = useLanguage()

  return (
    <article>
      <header className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold leading-tight">{p.title}</h2>
        {p.subtitle && <p className="text-xs text-gray-500 dark:text-[#4d4d4d] mt-1">{p.subtitle}</p>}
      </header>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.image || "/placeholder.svg"}
        alt={`Vista de ${p.title}`}
  className="mb-4 sm:mb-5 w-full ring-1 ring-gray-300/80 dark:ring-[#4d4d4d]"
      />

      {p.body ? (
        <MdxContent>{p.body}</MdxContent>
      ) : p.description ? (
        <p className="text-sm leading-relaxed">{p.description}</p>
      ) : null}

      {p.tags && p.tags.length > 0 && (
        <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-3">
        {p.siteUrl && (
          <a
            href={p.siteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] dark:focus-visible:ring-[#4d4d4d] transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            {t("site")}
          </a>
        )}
        {p.repoUrl && (
          <a
            href={p.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] dark:focus-visible:ring-[#4d4d4d] transition-colors"
          >
            <Github className="h-4 w-4" />
            {t("code")}
          </a>
        )}
      </div>
    </article>
  )
}

function PostContent(p: Post) {
  return (
    <article>
      <header className="mb-3 sm:mb-4">
        <h2 className="text-xl sm:text-2xl font-bold leading-tight">{p.title}</h2>
        <div className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-[#4d4d4d]">
          <Clock className="h-4 w-4" />
          <span>{p.readingTime}</span>
        </div>
        {p.excerpt && <p className="mt-2 text-xs leading-relaxed text-gray-500 dark:text-[#4d4d4d]">{p.excerpt}</p>}
      </header>
      <MdxContent>{p.content}</MdxContent>
    </article>
  )
}
