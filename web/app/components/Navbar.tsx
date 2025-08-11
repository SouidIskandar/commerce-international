
import Link from "next/link";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Announcement Bar */}
        <div 
          className="bg-accent text-primary text-center py-1 text-sm font-medium animate-fade-in"
        >
          Free international shipping on orders over $100
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo with animation */}
          <div className="hover:scale-105 transition-transform duration-200">
            <Link href="/" className="text-3xl font-extrabold tracking-tight">
              <span className="text-primary">GLOBAL</span>
              <span className="text-accent">TRADE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-6 pl-6 border-l border-gray-200">
              <button className="p-2 rounded-full hover:bg-gray-50 transition">
                <FiSearch className="h-5 w-5" />
              </button>
              
              <button className="relative p-2 rounded-full hover:bg-gray-50 transition">
                <FiShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <button 
                className="bg-accent text-primary px-4 py-2 rounded-full font-bold flex items-center space-x-2 hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                <FiUser className="h-4 w-4" />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button (would need state for mobile menu) */}
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink component with animation
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="relative group font-medium">
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
  </Link>
);