// components/sections/AboutSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre Histoire" 
          subtitle="Depuis 2010" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <Image
              src="/about-image.jpg"
              alt="Notre équipe"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Notre Mission</h3>
            <p className="text-gray-600 mb-6">
              Connecter les producteurs locaux de qualité avec les marchés internationaux en offrant 
              des solutions logistiques sur mesure pour les produits naturels.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Plus de 12 ans d'expérience</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Réseau international de partenaires</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>Engagement pour le commerce équitable</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}