import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">GLOBAL</span> TRADE
            </h3>
            <p className="text-white/80">
              Bringing Mediterranean quality to the world since 2010
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/products" className="hover:text-accent transition">Products</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/products/olive-oil" className="hover:text-accent transition">Olive Oil</Link></li>
              <li><Link href="/products/wool" className="hover:text-accent transition">Sheep Wool</Link></li>
              <li><Link href="/products/handicrafts" className="hover:text-accent transition">Handicrafts</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <address className="not-italic">
              <p>123 Trade Street</p>
              <p>Mediterranean Business Park</p>
              <p>contact@globaltrade.com</p>
              <p>+1 (234) 567-8900</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
          <p>© {new Date().getFullYear()} Global Trade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}