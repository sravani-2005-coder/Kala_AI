import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Card({ product, onDelete }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);

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

      setShowDeleteModal(false);

      if (onDelete) {
        onDelete(product._id);
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to delete product."
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">

        <img
          src={product.image || "https://via.placeholder.com/400x400?text=No+Image"}
          alt={product.name}
          loading="lazy"
          className="w-full h-72 sm:h-80 md:h-96 object-contain bg-gray-100"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {product.name}
          </h2>

          <p className="text-2xl font-bold text-orange-600 mt-2">
            ₹{product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-3 leading-6 min-h-[72px]">
            {product.description
              ? product.description.length > 80
                ? product.description.substring(0, 80) + "..."
                : product.description
              : "No description available."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <Link
              to={`/products/${product._id}`}
              className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg font-medium transition"
            >
              View Details
            </Link>

            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-medium transition"
            >
              Delete
            </button>

          </div>

        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">

          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl w-full max-w-md p-6">

            <h2 className="text-2xl font-bold text-red-600 mb-3">
              Delete Product
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete{" "}
              <span className="font-semibold">{product.name}</span>?
              <br />
              <br />
              This action cannot be undone.
            </p>

            <div className="flex gap-4">

              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={deleting}
                className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Card;