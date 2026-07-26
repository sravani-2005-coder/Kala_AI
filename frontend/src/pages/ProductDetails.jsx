import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import Loader from "../components/ui/Loader";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setProduct(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-red-500">
        Product not found.
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8">

      <Link
        to="/products"
        className="text-orange-600 font-semibold"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full max-h-[500px] object-contain rounded-xl shadow-lg bg-amber-50 p-4"
        />

        <div>

          <h1 className="text-4xl font-bold text-orange-700 dark:text-orange-400 mb-4">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-orange-600 mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-7 mb-6">
            {product.description}
          </p>

          <p className="text-gray-800 dark:text-gray-300">
            <strong>Category:</strong> {product.category}
          </p>

          <p className="text-gray-800 dark:text-gray-300 mb-6">
            <strong>Artisan:</strong> {product.artisan}
          </p>

          <div className="flex gap-4 mt-6">

  <Link
    to={`/edit-product/${product._id}`}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
  >
    ✏️ Edit Product
  </Link>

  <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700">
    Contact Artisan
  </button>

</div>


        </div>

      </div>

    </div>
  );
}

export default ProductDetails;