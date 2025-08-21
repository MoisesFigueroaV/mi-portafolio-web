"use client"

import { useViewer } from "@/components/viewer-provider"
import type { Project } from "@/lib/data"

export default function ProjectsShowcase({ projects = [] as Project[] }) {
  const { openProject } = useViewer()
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <button
          key={p.title}
          onClick={() => openProject(p)}
          className={[
            "group w-full overflow-hidden rounded-lg text-left",
            "ring-1 ring-gray-300/80 bg-white transition-all",
            "hover:-translate-y-0.5 hover:ring-gray-400",
            "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:hover:ring-[#cccccc]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
          ].join(" ")}
          style={{ animationDelay: `${60 + i * 40}ms` }}
          aria-label={`Ver proyecto: ${p.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image || "/placeholder.svg"}
            alt={p.title}
            className="h-40 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
          <div className="space-y-1 p-3">
            <h3 className="text-sm font-bold">{p.title}</h3>
            {p.subtitle && <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{p.subtitle}</p>}
            {p.description && <p className="line-clamp-2 text-xs text-gray-500 dark:text-[#4d4d4d]">{p.description}</p>}
          </div>
        </button>
      ))}
    </div>
  )
}
