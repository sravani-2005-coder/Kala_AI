function About() {
  return (
    <div className="bg-orange-50 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-orange-700">
          About KALA AI
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          KALA AI is a platform dedicated to preserving India's rich handloom
          and handicraft heritage by connecting talented artisans with customers
          through technology.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-10">

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            🌿 Our Mission
          </h2>

          <p className="text-gray-700 leading-7">
            Our mission is to empower artisans by giving them a digital platform
            where they can showcase and sell their handmade creations while
            preserving traditional craftsmanship.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            🎯 Our Vision
          </h2>

          <p className="text-gray-700 leading-7">
            We envision a future where every artisan can reach customers
            worldwide, ensuring sustainable livelihoods while promoting India's
            cultural heritage.
          </p>
        </div>

      </section>

      {/* Features */}
      <section className="py-14 px-6">

        <h2 className="text-4xl font-bold text-center text-orange-700 mb-10">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl mb-3">🧵</h3>
            <h4 className="font-bold text-lg">Handloom Products</h4>
            <p className="text-gray-600 mt-2">
              Authentic handmade textiles crafted by skilled artisans.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl mb-3">🏺</h3>
            <h4 className="font-bold text-lg">Handicrafts</h4>
            <p className="text-gray-600 mt-2">
              Traditional wooden, clay and artistic handmade products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl mb-3">🤖</h3>
            <h4 className="font-bold text-lg">AI Assistance</h4>
            <p className="text-gray-600 mt-2">
              Smart recommendations to help customers discover unique products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl mb-3">❤️</h3>
            <h4 className="font-bold text-lg">Support Artisans</h4>
            <p className="text-gray-600 mt-2">
              Every purchase directly contributes to artisan livelihoods.
            </p>
          </div>

        </div>

      </section>

      {/* Closing Section */}
      <section className="bg-orange-600 text-white text-center py-16 px-6">

        <h2 className="text-4xl font-bold mb-4">
          Preserve Tradition, Empower Artisans
        </h2>

        <p className="max-w-3xl mx-auto text-lg">
          Every handcrafted product tells a story. By choosing KALA AI,
          you celebrate India's craftsmanship while helping artisans build
          a sustainable future.
        </p>

      </section>

    </div>
  );
}

export default About;