"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { Photo } from "@/lib/data"

export default function MediaMosaic({ photos = [] as Photo[] }: { photos?: Photo[] }) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<Photo | null>(null)

  function openPhoto(p: Photo) {
    setCurrent(p)
    setOpen(true)
  }

  return (
    <>
      <div className="columns-1 gap-2 sm:gap-3 sm:columns-2 md:columns-3">
        {photos.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.src + i}
            src={p.src || "/placeholder.svg"}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            className="mb-2 sm:mb-3 inline-block w-full cursor-zoom-in break-inside-avoid rounded-md ring-1 ring-gray-300/80 transition-all hover:opacity-90 active:opacity-95 dark:ring-[#4d4d4d]"
            onClick={() => openPhoto(p)}
          />
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={[
            "max-w-[95vw] sm:max-w-4xl",
            "bg-white p-1 sm:p-2 ring-1 ring-gray-300/80",
            "dark:bg-[#000000] dark:ring-[#4d4d4d]",
          ].join(" ")}
        >
          {/* DialogTitle oculto para accesibilidad */}
          <DialogTitle className="sr-only">{current?.alt || "Foto ampliada"}</DialogTitle>
          {current && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={current.src || "/placeholder.svg"}
              alt={current.alt}
              className="mx-auto max-h-[85vh] w-auto rounded-md object-contain"
            />
          )}
          <p className="sr-only">{current?.alt || "Foto"}</p>
        </DialogContent>
      </Dialog>
    </>
  )
}
