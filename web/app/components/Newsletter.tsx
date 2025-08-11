export default function Newsletter() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers and product updates
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button 
              type="submit" 
              className="bg-accent text-primary px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }