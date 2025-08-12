// components/ui/ServiceCard.tsx
interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: string;
    features?: string[];
  };
  delay?: number;
  detailed?: boolean;
}

export function ServiceCard({ service, delay = 0, detailed = false }: ServiceCardProps) {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-yellow-500 h-full"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      {detailed && service.features && (
        <ul className="space-y-2 mt-4">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {detailed && (
        <button className="mt-6 text-yellow-600 hover:text-yellow-700 font-medium transition-colors flex items-center">
          En savoir plus
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}