// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Notre équipe', href: '#team' },
        { name: 'Carrières', href: '#careers' },
      ],
    },
    {
      title: 'Produits',
      links: [
        { name: 'Huile d\'olive', href: '#olive-oil' },
        { name: 'Laine de mouton', href: '#wool' },
        { name: 'Produits naturels', href: '#natural' },
        { name: 'Nouveautés', href: '#new' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '#faq' },
        { name: 'Contact', href: '#contact' },
        { name: 'Politique de confidentialité', href: '#privacy' },
        { name: 'CGV', href: '#terms' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-yellow-500">TerraNova</span>
              <span className="text-2xl font-bold text-white">Trading</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Spécialistes en import/export de produits naturels de qualité supérieure depuis 2010.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} TerraNova Trading. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Confidentialité
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Conditions
            </Link>
            <Link href="#cookies" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}