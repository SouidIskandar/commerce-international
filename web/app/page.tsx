// app/page.tsx
import { HeroSection } from '@/app/components/sections/HeroSection'
import { AboutSection } from '@/app/components/sections/AboutSection'
import { ProductsSection } from '@/app/components/sections/ProductsSection'
import { ServicesSection } from '@/app/components/sections/ServicesSection'
import { ContactSection } from '@/app/components/sections/ContactSection'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}