import { Container } from '@/components/layout/Container'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { CatalogView } from '@/components/catalog/CatalogView'

export default function CatalogPage() {
return (
<section className="section-padding">
<Container>
<SectionHeader
eyebrow="Catálogo"
title="Catálogo claro, útil y listo para crecer"
description="Explora gel semipermanente, acrílico, tips, decoración y herramientas con una navegación más limpia y una lectura más útil para compra y envío."
/>
<CatalogView />
  </Container>
</section>
)
}