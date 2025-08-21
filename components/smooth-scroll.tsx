"use client"

import { useEffect } from "react"

export default function SmoothScroll({ duration = 800 }: { duration?: number }) {
  useEffect(() => {
    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    function animateScroll(targetY: number, ms: number) {
      const startY = window.scrollY
      const diff = targetY - startY
      const start = performance.now()

      function step(now: number) {
        const elapsed = now - start
        const t = Math.min(1, elapsed / ms)
        const eased = easeInOutQuad(t)
        window.scrollTo(0, startY + diff * eased)
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null
      if (!el) return
      // Busca el <a> más cercano
      const anchor = el.closest("a") as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute("href") || ""
      if (!href.startsWith("#")) return
      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return

      e.preventDefault()

      // Respeta scroll margin-top definido en Tailwind (scroll-mt-24 en secciones)
      const styles = window.getComputedStyle(target)
      const scrollMt = Number.parseInt(styles.scrollMarginTop || "0", 10) || 0
      const rect = target.getBoundingClientRect()
      const targetY = window.scrollY + rect.top - scrollMt

      animateScroll(targetY, duration)

      // Actualiza el hash al final de la animación
      window.setTimeout(() => {
        try {
          history.pushState(null, "", `#${id}`)
        } catch {}
      }, duration)
    }

    document.addEventListener("click", onClick, { passive: false })
    return () => document.removeEventListener("click", onClick)
  }, [duration])

  return null
}
