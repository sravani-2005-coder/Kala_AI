import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    artisan: "",
  });

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.price ||
      !formData.description ||
      !formData.image ||
      !formData.artisan
    ) {
      return toast.error("Please fill all fields.");
    }

    try {
      setLoading(true);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product added successfully!");

      navigate("/products");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to add product"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-slate-950 px-6 py-10 transition-colors duration-300">

      {/* Page Heading */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-700 dark:text-orange-400 mb-2">
          Add New Product
        </h1>

        <p className="text-gray-600 dark:text-slate-400 mb-8">
          Add a new handcrafted product to the KALA AI marketplace.
        </p>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-6 md:p-8 space-y-5 border border-gray-100 dark:border-slate-700 transition-colors duration-300"
        >

          {/* Product Name */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Category
            </label>

            <input
              type="text"
              name="category"
              placeholder="e.g. Saree, Shawl, Handicraft"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Price
            </label>

            <input
              type="number"
              name="price"
              placeholder="Enter price in ₹"
              value={formData.price}
              onChange={handleChange}
              min="0"
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              placeholder="Describe the product..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Image URL
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Artisan */}
          <div>
            <label className="block font-semibold text-gray-700 dark:text-slate-200 mb-2">
              Artisan Name
            </label>

            <input
              type="text"
              name="artisan"
              placeholder="Enter artisan name"
              value={formData.artisan}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-slate-600 p-3 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 dark:disabled:bg-orange-900 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Adding Product..." : "Add Product"}
          </button>

          {/* Cancel */}
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="w-full border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-700 py-3 rounded-lg font-semibold transition"
          >
            Cancel
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddProduct;