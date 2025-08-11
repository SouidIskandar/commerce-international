import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import ProductsSection from "@/app/components/ProductsSection";
import Testimonials from "@/app/components/Testimonials";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
 
      <Navbar />
      <Hero />
      <Features />
      <ProductsSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}