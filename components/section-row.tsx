"use client"

import type React from "react"

export default function SectionRow({
  id,
  label,
  hint,
  icon,
  spacing = "lg",
  children,
}: {
  id?: string
  label: string
  hint?: string
  icon?: React.ReactNode
  spacing?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}) {
  // Espaciado vertical más compacto en mobile, amplio en desktop
  const pt =
    spacing === "xl"
      ? "pt-8 sm:pt-20 lg:pt-24"
      : spacing === "lg"
        ? "pt-6 sm:pt-16 lg:pt-20"
        : spacing === "md"
          ? "pt-4 sm:pt-12 lg:pt-16"
          : "pt-2 sm:pt-10"

  return (
    <section id={id} className={`reveal scroll-mt-20 sm:scroll-mt-24 ${pt}`} style={{ animationDelay: "120ms" }}>
      <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        {/* Header móvil */}
        <div className="mb-4 lg:hidden">
          <div className="flex items-center gap-2">
            {icon && <div className="text-gray-500 dark:text-[#4d4d4d]">{icon}</div>}
            <div className="text-sm font-bold uppercase text-gray-700 dark:text-[#cccccc]">{label}</div>
            {hint && <div className="text-xs text-gray-500 dark:text-[#4d4d4d]">— {hint}</div>}
          </div>
        </div>

        {/* Header desktop */}
        <div className="mb-4 hidden lg:block">
          <div className="text-xs uppercase text-gray-500 dark:text-[#4d4d4d]">{label}</div>
          {hint && <div className="mt-1 text-xs text-gray-500 dark:text-[#4d4d4d]">{hint}</div>}
          {icon && <div className="mt-3 text-gray-500 dark:text-[#4d4d4d]">{icon}</div>}
        </div>

        <div>{children}</div>
      </div>
    </section>
  )
}
