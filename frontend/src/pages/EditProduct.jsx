import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/ui/Loader";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    artisan: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load product");
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}api/products/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product updated successfully");

      navigate(`/products/${id}`);

    } catch (error) {
      toast.error("Update failed");
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-3xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-5"
      >

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          placeholder="Product Name"
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          placeholder="Category"
        />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          placeholder="Price"
        />

        <input
          name="artisan"
          value={formData.artisan}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          placeholder="Artisan"
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          placeholder="Image URL"
        />

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Save Changes
        </button>

      </form>

    </div>
  );
}

export default EditProduct;