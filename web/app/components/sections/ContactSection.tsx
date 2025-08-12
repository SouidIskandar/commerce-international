// components/sections/ContactSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { ContactForm } from '@/app/components/ui/ContactForm'

export function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contactez-nous" 
          subtitle="Parlons de votre projet" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">📍</span>
                <span>123 Rue du Commerce, 75001 Paris, France</span>
              </p>
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">📞</span>
                <span>+33 1 23 45 67 89</span>
              </p>
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">✉️</span>
                <span>contact@terranova-trading.com</span>
              </p>
            </div>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.99144060821!2d2.292292615509614!3d48.85837360866185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1623258139531!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}