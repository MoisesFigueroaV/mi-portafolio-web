"use client"

import type React from "react"
import ThemeToggle from "@/components/theme-toggle"
import LanguageToggle from "@/components/language-toggle"
import SiteAside from "@/components/site-aside"
import SmoothScroll from "@/components/smooth-scroll"
import ThemeTransitions from "@/components/theme-transitions"

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeTransitions />
      <SmoothScroll />


      {/* Botones fijos solo en desktop, en mobile van dentro del flujo */}
      <div>
        {/* Desktop: fixed, Mobile: hidden */}
        <div className="hidden sm:fixed sm:right-4 sm:top-4 sm:z-50 sm:flex sm:flex-row sm:items-center sm:gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        {/* Mobile: visibles al inicio del contenido, Desktop: hidden */}
        <div className="flex flex-row items-center gap-2 sm:hidden mb-0 pr-3 pt-3 justify-end">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>

      {/* Layout principal con mejor responsive */}
      <div className="mx-auto max-w-7xl px-3 pb-20 pt-12 sm:px-4 md:px-8 sm:pb-28 sm:pt-16">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10">
          {/* Aside - solo visible en desktop */}
          <aside className="relative col-span-3 hidden lg:block">
            <SiteAside />
          </aside>

          {/* Contenido principal */}
          <section className="col-span-12 lg:col-span-9">
            <div className="mx-auto max-w-3xl">{children}</div>
          </section>
        </div>
      </div>
    </>
  )
}
