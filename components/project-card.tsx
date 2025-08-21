"use client"

import type React from "react"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ProjectCardProps = {
  title?: string
  subtitle?: string
  description?: string
  tags?: string[]
  siteUrl?: string
  repoUrl?: string
  delay?: number
  children?: React.ReactNode
}

export default function ProjectCard({
  title = "Proyecto",
  subtitle = "Subtítulo",
  description = "Descripción breve del proyecto.",
  tags = ["Tag"],
  siteUrl = "#",
  repoUrl = "#",
  delay = 0,
  children,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={[
            "reveal group w-full rounded-md p-4 text-left",
            "ring-1 ring-gray-300/80 bg-white text-gray-700 transition-all",
            "hover:bg-gray-200 hover:-translate-y-0.5 motion-safe:duration-300",
            "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:hover:bg-[#000000]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
          ].join(" ")}
          style={{ animationDelay: `${delay}ms` }}
          aria-label={`Abrir detalles de ${title}`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold">{title}</h3>
              <p className="truncate text-xs text-gray-500 dark:text-[#4d4d4d]">{subtitle}</p>
            </div>
            <span
              className="inline-flex shrink-0 items-center rounded-md px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 transition-colors group-hover:bg-gray-900 group-hover:text-white dark:text-[#4d4d4d] dark:ring-[#4d4d4d] dark:group-hover:bg-[#ffffff] dark:group-hover:text-[#000000]"
              aria-hidden
            >
              Ver
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-xs text-gray-500 dark:text-[#4d4d4d]">{description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
              >
                {t}
              </span>
            ))}
          </div>
        </button>
      </DialogTrigger>

      <DialogContent
        className={[
          "w-[92vw] max-w-none sm:max-w-xl md:max-w-2xl",
          "max-h-[80vh] overflow-y-auto rounded-md",
          "ring-1 ring-gray-300/80 bg-white text-gray-700",
          "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc]",
        ].join(" ")}
      >
        <DialogHeader>
          <DialogTitle className="text-base">{title}</DialogTitle>
          <DialogDescription className="text-xs text-gray-500 dark:text-[#4d4d4d]">{subtitle}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">{children}</div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
          >
            <ExternalLink className="h-4 w-4" />
            Sitio
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
          >
            <Github className="h-4 w-4" />
            Código
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
