"use client"

export default function ThemeTransitions() {
  return (
    <style jsx global>{`
      /* Transiciones de tema en todo el sitio, activadas por .theme-transition en <html> */
      .theme-transition *,
      .theme-transition *::before,
      .theme-transition *::after {
        transition: background-color 400ms ease, color 400ms ease, border-color 400ms ease, fill 400ms ease,
          stroke 400ms ease, opacity 300ms ease, transform 300ms ease !important;
      }

      @keyframes fade-up {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .reveal { opacity: 0; animation: fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards; }
    `}</style>
  )
}
