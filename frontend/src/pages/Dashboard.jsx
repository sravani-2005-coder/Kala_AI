import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);

      // Fetch user profile
      const profile = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Fetch products
      const productRes = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products`
      );

      setUser(profile.data.user);
      setProducts(productRes.data.slice(0, 3));
    } catch (error) {
      console.error(error);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-slate-950 px-6 py-10 transition-colors duration-300">
      
      {/* Welcome */}
      <h1 className="text-3xl md:text-4xl font-bold text-orange-700 dark:text-orange-400 mb-8">
        Welcome back, {user?.name} 👋
      </h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

        {/* Products */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-gray-500 dark:text-slate-400">
            Products
          </h3>

          <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mt-3">
            {products.length}
          </p>
        </div>

        {/* AI Generator */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-gray-500 dark:text-slate-400">
            AI Generator
          </h3>

          <p className="text-4xl font-bold text-orange-600 dark:text-orange-400 mt-3">
            Ready
          </p>
        </div>

        {/* Email */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-gray-500 dark:text-slate-400">
            Email
          </h3>

          <p className="mt-3 break-all text-gray-700 dark:text-slate-200">
            {user?.email}
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-10 transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-slate-100">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <Link
            to="/products"
            className="bg-orange-600 text-white text-center py-3 rounded-lg hover:bg-orange-700 transition"
          >
            View Products
          </Link>

          <Link
            to="/add-product"
            className="bg-purple-600 text-white text-center py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Add Product
          </Link>

          <Link
            to="/ai-generator"
            className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition"
          >
            AI Generator
          </Link>

          <Link
            to="/about"
            className="bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition"
          >
            About Kala
          </Link>

        </div>

      </div>

      {/* Recent Products */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-slate-100">
          Recently Added Products
        </h2>

        {products.length === 0 ? (
          <EmptyState
            title="No Products Added"
            message="Start by adding your first artisan product."
            buttonText="Add Product"
            buttonLink="/add-product"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {products.map((product) => (
              <div
                key={product._id}
                className="border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-56 md:h-64 object-contain rounded-lg bg-amber-50 dark:bg-slate-600"
                />

                {/* Product Name */}
                <h3 className="font-bold text-lg mt-4 text-gray-900 dark:text-slate-100">
                  {product.name}
                </h3>

                {/* Price */}
                <p className="text-orange-600 dark:text-orange-400 font-bold text-xl mt-2">
                  ₹{product.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">

                  <Link
                    to={`/products/${product._id}`}
                    className="flex-1 text-center bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/edit-product/${product._id}`}
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Edit
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;