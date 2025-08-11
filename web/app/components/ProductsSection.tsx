"use client"
import ProductCard from "@/app/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Extra Virgin Olive Oil",
    price: 24.99,
    image: "/olive-oil.jpg",
    category: "Premium"
  },
  {
    id: "2",
    name: "Organic Sheep Wool",
    price: 39.99,
    image: "/wool.jpg",
    category: "Textiles"
  },
  {
    id: "3",
    name: "Olive Wood Cutting Board",
    price: 29.99,
    image: "/cutting-board.jpg",
    category: "Accessories"
  }
];

export default function ProductsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Carefully selected goods from Mediterranean producers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/products" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}