// components/sections/HeroSection.tsx
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Produits naturels"
          fill
          className="object-cover opacity-70"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
          BRM Company
        </h1>
        <p className="text-xl md:text-2xl text-yellow-300 animate-fade-in delay-100">
          Des produits naturels d'exception, une qualité sans frontières
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
          Découvrir nos produits
        </button>
      </div>
    </section>
  )
}