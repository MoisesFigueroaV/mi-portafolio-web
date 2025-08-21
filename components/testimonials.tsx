"use client"

const testimonials = [
  {
    quote: "Trabajo excepcional en el diseño y desarrollo. Atención al detalle impresionante.",
    author: "María González",
    role: "Product Manager",
    company: "TechCorp",
  },
  {
    quote: "Interfaces limpias y funcionales. Siempre cumple con los plazos establecidos.",
    author: "Carlos Ruiz",
    role: "CEO",
    company: "StartupXYZ",
  },
  {
    quote: "Su enfoque en accesibilidad y performance marca la diferencia en cada proyecto.",
    author: "Ana López",
    role: "UX Director",
    company: "DesignStudio",
  },
]

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <div key={i} className="rounded-md p-4 ring-1 ring-gray-300/80 bg-white dark:ring-[#4d4d4d] dark:bg-[#1a1a1a]">
          <blockquote className="text-sm text-gray-600 dark:text-[#cccccc] mb-3">"{testimonial.quote}"</blockquote>
          <footer>
            <div className="font-medium text-sm">{testimonial.author}</div>
            <div className="text-xs text-gray-500 dark:text-[#4d4d4d]">
              {testimonial.role} • {testimonial.company}
            </div>
          </footer>
        </div>
      ))}
    </div>
  )
}
