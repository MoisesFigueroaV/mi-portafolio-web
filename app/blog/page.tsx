"use client"

import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import { EnhancedBlogCard } from "@/components/enhanced-cards"
import { ViewerProvider } from "@/components/viewer-provider"
import { posts } from "@/lib/data"
import { BookOpen } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"

export default function BlogPage() {
  const all = posts.slice().sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))

  return (
    <main
      id="main-content"
      className="font-mono min-h-screen bg-gray-100 text-gray-700 antialiased dark:bg-[#000000] dark:text-[#cccccc]"
    >
      <SkipLinks />
      <ScrollProgress />
      <ViewerProvider>
        <PageShell>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <SectionRow label="Blog" hint="Todas las notas" icon={<BookOpen className="h-4 w-4" />}>
            <h1 className="mb-6 text-3xl font-bold">Blog</h1>
            <div className="grid gap-4 sm:gap-3 sm:grid-cols-2">
              {all.map((p, i) => (
                <EnhancedBlogCard key={p.title} post={p} delay={60 + i * 40} />
              ))}
            </div>
          </SectionRow>
        </PageShell>
      </ViewerProvider>
    </main>
  )
}
