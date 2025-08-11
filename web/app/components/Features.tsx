const features = [
    {
      icon: "🌿",
      title: "100% Organic",
      description: "Certified organic products with no additives"
    },
    {
      icon: "🌍",
      title: "Worldwide Shipping",
      description: "Fast delivery to over 50 countries"
    },
    {
      icon: "💰",
      title: "Fair Prices",
      description: "Direct from producers with no middlemen"
    }
  ];
  
  export default function Features() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }