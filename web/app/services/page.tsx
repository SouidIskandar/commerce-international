// app/services/page.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { ServiceCard } from '@/app/components/ui/ServiceCard';
import { Breadcrumb } from '@/app/components/ui/Breadcrumb';

const services = [
  {
    title: "Import/Export",
    description: "Gestion complète des formalités douanières et des certifications internationales",
    icon: "🌍",
    features: [
      "Procédures douanières",
      "Certifications produits",
      "Conseil réglementaire"
    ]
  },
  {
    title: "Logistique",
    description: "Solutions de transport et de stockage optimisées pour vos produits",
    icon: "🚚",
    features: [
      "Transport réfrigéré",
      "Stockage sécurisé",
      "Gestion des stocks"
    ]
  },
  {
    title: "Distribution",
    description: "Réseau de distribution international pour vos produits",
    icon: "📦",
    features: [
      "Mise en relation avec distributeurs",
      "Gestion des commandes",
      "Suivi des livraisons"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { name: 'Accueil', href: '/' },
            { name: 'Services', href: '/services' }
          ]} 
        />
        
        <SectionTitle 
          title="Nos Services" 
          subtitle="Solutions sur Mesure" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              delay={index * 100} 
              detailed 
            />
          ))}
        </div>
        
        <div className="mt-20 bg-black text-white rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Un projet spécifique ?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Nous développons des solutions personnalisées pour répondre à vos besoins spécifiques en matière d'import/export.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition-all">
            Contactez notre équipe
          </button>
        </div>
      </div>
    </div>
  );
}