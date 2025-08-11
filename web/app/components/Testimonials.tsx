const testimonials = [
    {
      quote: "The olive oil is exceptional quality. Will definitely order again!",
      author: "Maria K., Restaurant Owner"
    },
    {
      quote: "The wool is perfect for my textile business. Very consistent quality.",
      author: "Thomas R., Fashion Designer"
    }
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-lg">
                <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-accent">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }