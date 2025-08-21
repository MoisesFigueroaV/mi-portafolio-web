"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "intro", label: "Intro" },
  { id: "projects", label: "Proyectos" },
  { id: "blog", label: "Blog" },
  { id: "photos", label: "Fotos" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contacto" },
]

export default function ActiveSectionIndicator() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    function updateActiveSection() {
      const scrollY = window.scrollY + 100 // offset para activar antes

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    updateActiveSection()
    return () => window.removeEventListener("scroll", updateActiveSection)
  }, [])

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
            className={`group relative w-3 h-3 transition-all ${
              activeSection === section.id
                ? "bg-gray-900 dark:bg-[#ffffff]"
                : "bg-gray-300 dark:bg-[#4d4d4d] hover:bg-gray-400 dark:hover:bg-[#cccccc]"
            }`}
            aria-label={`Ir a ${section.label}`}
          >
            <span className="absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-gray-500 dark:text-[#4d4d4d] opacity-0 group-hover:opacity-100 transition-opacity">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
