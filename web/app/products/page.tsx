// app/products/page.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { ProductCard } from '@/app/components/ui/ProductCard';
import { Breadcrumb } from '@/app/components/ui/Breadcrumb';

const products = [
  {
    id: 1,
    name: "Huile d'Olive Vierge Extra",
    description: "Produite en Crète selon des méthodes traditionnelles",
    category: "Huiles",
    image: "/olive-oil.jpg"
  },
  {
    id: 2,
    name: "Laine de Mouton Naturelle",
    description: "Laine 100% biologique, non traitée",
    category: "Fibres",
    image: "/wool.jpg"
  },
  {
    id: 3,
    name: "Miel de Lavande",
    description: "Récolté manuellement en Provence",
    category: "Produits apicoles",
    image: "/honey.jpg"
  },
  {
    id: 4,
    name: "Amandes Bio",
    description: "Cultivées en Espagne sans pesticides",
    category: "Fruits secs",
    image: "/almonds.jpg"
  }
];

export default function ProductsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { name: 'Accueil', href: '/' },
            { name: 'Produits', href: '/products' }
          ]} 
        />
        
        <SectionTitle 
          title="Nos Produits" 
          subtitle="Qualité Exceptionnelle" 
        />
        
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-full">Tous</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">Huiles</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">Fibres</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">Produits apicoles</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">Fruits secs</button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}