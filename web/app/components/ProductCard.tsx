import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-4">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="text-lg font-bold mt-1 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mt-4">
            <span className="text-accent font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <button 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-black transition"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality would go here
                console.log(`Added ${product.name} to cart`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}