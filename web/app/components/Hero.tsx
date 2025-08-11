import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10 px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
          Premium <span className="text-accent">Mediterranean</span> Goods
        </h1>
        <p className="text-xl mb-8 max-w-xl">
          Directly sourced from sustainable farms in the Mediterranean region
        </p>
        <div className="flex space-x-4">
          <Link href="/products" className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
            Shop Now
          </Link>
          <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}