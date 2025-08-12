// components/sections/ProductsSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { ProductCard } from '@/app/components/ui/ProductCard'

const products = [
  {
    id: 1,
    name: "Huile d'Olive Vierge Extra",
    description: "Produite en Crète selon des méthodes traditionnelles",
    image: "/olive-oil.jpg"
  },
  {
    id: 2,
    name: "Laine de Mouton Naturelle",
    description: "Laine 100% biologique, non traitée",
    image: "/wool.jpg"
  },
  {
    id: 3,
    name: "Miel de Lavande",
    description: "Récolté manuellement en Provence",
    image: "/honey.jpg"
  }
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos Produits" 
          subtitle="Qualité Premium" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}