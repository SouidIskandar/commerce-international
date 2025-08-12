// components/ui/ProductCard.tsx
import Image from 'next/image'

interface Product {
  id: number
  name: string
  description: string
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="h-64 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium transition-colors">
          En savoir plus →
        </button>
      </div>
    </div>
  )
}