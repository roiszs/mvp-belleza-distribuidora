import { Hero } from '@/components/home/Hero'
import { CategoryGrid } from '@/components/home/CategoryGrid'
import { NewArrivals } from '@/components/home/NewArrivals'
import { PromoBanner } from '@/components/home/PromoBanner'
import { BrandSection } from '@/components/home/BrandSection'
import { TrustBadges } from '@/components/home/TrustBadges'
import { B2BPreview } from '@/components/home/B2BPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <NewArrivals />
      <PromoBanner />
      <BrandSection />
      <TrustBadges />
      <B2BPreview />
    </>
  )
}