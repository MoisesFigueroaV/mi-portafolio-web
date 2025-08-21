"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type PostCardProps = {
  title?: string
  readingTime?: string
  content?: string
  delay?: number
}

export default function PostCard({
  title = "Nota",
  readingTime = "3 min",
  content = "Contenido",
  delay = 0,
}: PostCardProps) {
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={[
            "reveal group w-full p-3 text-left",
            "bg-white text-sm text-gray-700 transition-all hover:bg-gray-200 hover:-translate-y-0.5 motion-safe:duration-300",
            "dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:hover:bg-[#000000]",
            "focus-visible:outline-none",
          ].join(" ")}
          style={{ animationDelay: `${delay}ms` }}
          aria-label={`Abrir nota: ${title}`}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="truncate">{title}</span>
            <span className="shrink-0 text-xs text-gray-500 group-hover:text-gray-700 dark:text-[#4d4d4d] dark:group-hover:text-[#cccccc]">
              {readingTime}
            </span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent
        className={[
          "w-[92vw] max-w-none sm:max-w-xl md:max-w-2xl",
          "max-h-[80vh] overflow-y-auto",
          "bg-white text-gray-700",
          "dark:bg-[#1a1a1a] dark:text-[#cccccc]",
        ].join(" ")}
      >
        <DialogHeader>
          <DialogTitle className="text-base">{title}</DialogTitle>
          <DialogDescription className="text-xs text-gray-500 dark:text-[#4d4d4d]">{readingTime}</DialogDescription>
        </DialogHeader>
        <article className="prose prose-sm max-w-none text-gray-700 dark:prose-invert dark:text-[#cccccc]">
          <pre className="whitespace-pre-wrap text-sm">{content}</pre>
        </article>
      </DialogContent>
    </Dialog>
  )
}
