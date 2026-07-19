import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-orange-50 dark:bg-slate-900 transition-colors duration-200">
      <h1 className="text-5xl font-bold text-orange-800 mb-4 dark:text-blue-400 mb-4">
        KALA – Empowering Artisans Through Technology
      </h1>

      <p className="text-lg text-gray-700 dark:text-slate-300  max-w-3xl mx-auto mb-6">
        KALA connects handloom and handicraft artisans with digital tools,
        helping them showcase products, reach customers, and grow their
        businesses through technology.
      </p>

      <Link
        to="/products"
        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition"
      >
        Explore Products
      </Link>
    </section>
  );
}

export default Hero;