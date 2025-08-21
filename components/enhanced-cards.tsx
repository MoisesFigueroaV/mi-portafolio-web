"use client"

import { useState } from "react"
import { useViewer } from "@/components/viewer-provider"
import type { Project, Post } from "@/lib/data"

export function EnhancedProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { openProject } = useViewer()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className={[
        "group w-full overflow-hidden rounded-lg text-left",
        "ring-1 ring-gray-300/80 bg-white transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-lg hover:ring-gray-400",
        "active:translate-y-0 active:shadow-md", // Estados activos para móvil
        "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:hover:ring-[#cccccc] dark:hover:shadow-2xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
    >
      <figure className="relative overflow-hidden">
        {!imageLoaded && <div className="h-32 sm:h-40 w-full bg-gray-200 dark:bg-[#1a1a1a] animate-pulse" />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`h-32 sm:h-40 w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </figure>

      <button
        onClick={() => openProject(project)}
        className="w-full p-3 text-left"
        aria-label={`Ver proyecto: ${project.title}`}
      >
        <div className="space-y-1">
          <h3 className="text-sm font-bold group-hover:text-gray-900 dark:group-hover:text-[#ffffff] transition-colors">
            {project.title}
          </h3>
          {project.subtitle && <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{project.subtitle}</p>}
          {project.description && (
            <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-[#4d4d4d]">
              {project.description}
            </p>
          )}

          {/* Tags sin interactividad */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags?.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
              >
                {tag}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>
    </div>
  )
}

export function EnhancedBlogCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const { openPost } = useViewer()

  return (
    <button
      onClick={() => openPost(post)}
      className={[
        "group w-full rounded-lg p-3 text-left",
        "ring-1 ring-gray-300/80 bg-white transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-md hover:ring-gray-400",
        "active:translate-y-0 active:shadow-sm", // Estados activos para móvil
        "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:hover:ring-[#cccccc] dark:hover:shadow-xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Leer post: ${post.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold leading-tight group-hover:text-gray-900 dark:group-hover:text-[#ffffff] transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-[#4d4d4d]">
              {post.excerpt}
            </p>
          )}
        </div>
        {post.readingTime && (
          <span className="shrink-0 text-xs text-gray-500 dark:text-[#4d4d4d]">{post.readingTime}</span>
        )}
      </div>
    </button>
  )
}
