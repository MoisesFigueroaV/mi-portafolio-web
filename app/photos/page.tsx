"use client"

import PageShell from "@/components/page-shell"
import SectionRow from "@/components/section-row"
import MediaMosaic from "@/components/media-mosaic"
import { photos } from "@/lib/data"
import { Camera } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import ScrollProgress from "@/components/scroll-progress"
import SkipLinks from "@/components/skip-links"

export default function PhotosPage() {
  return (
    <main
      id="main-content"
      className="font-mono min-h-screen bg-gray-100 text-gray-700 antialiased dark:bg-[#000000] dark:text-[#cccccc]"
    >
      <SkipLinks />
      <ScrollProgress />
      <PageShell>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fotos" }]} />
        <SectionRow label="Fotos" hint="Mosaico personal" icon={<Camera className="h-4 w-4" />}>
          <h1 className="mb-6 text-3xl font-bold">Fotos</h1>
          <MediaMosaic photos={photos} />
        </SectionRow>
      </PageShell>
    </main>
  )
}
