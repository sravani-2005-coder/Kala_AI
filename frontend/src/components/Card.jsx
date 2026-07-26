import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Card({ product }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:5000/api/products/${product._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product deleted successfully!");

      // Refresh products after deletion
      navigate(0);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product.");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-contain bg-gray-100"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mt-4">
          {product.name}
        </h2>

        <p className="text-2xl font-semibold text-orange-600 dark:text-slate-300 mt-2">
          ₹{product.price}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mt-3">
          {product.description.length > 80
            ? product.description.substring(0, 80) + "..."
            : product.description}
        </p>

        <div className="flex gap-3 mt-5">
          <Link
            to={`/products/${product._id}`}
            className="flex-1 text-center bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
          >
            View Details
          </Link>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;