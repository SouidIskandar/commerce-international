// components/sections/ServicesSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { ServiceCard } from '@/app/components/ui/ServiceCard'

const services = [
  {
    title: "Import/Export",
    description: "Gestion complète des formalités douanières",
    icon: "🌍"
  },
  {
    title: "Logistique",
    description: "Transport et stockage optimisés",
    icon: "🚚"
  },
  {
    title: "Distribution",
    description: "Réseau de distribution international",
    icon: "📦"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos Services" 
          subtitle="Solutions sur mesure" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}