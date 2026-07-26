import { useState } from "react";
import toast from "react-hot-toast";

export default function AIForm({ onGenerate, loading }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    material: "",
    features: "",
    tone: "Professional",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.material ||
      !formData.features
    ) {
      toast.error("Please fill all the fields.");
      return;
    }

    onGenerate(formData);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      category: "",
      material: "",
      features: "",
      tone: "Professional",
    });

    toast.success("Form cleared.");
  };

  const tones = [
    "Professional",
    "Luxury",
    "Friendly",
    "Traditional",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        🧶 Product Information
      </h2>

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
      >
        <option value="">Select Category</option>
        <option>Saree</option>
        <option>Shawl</option>
        <option>Jewelry</option>
        <option>Handicrafts</option>
      </select>

      <select
        name="material"
        value={formData.material}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-orange-500 outline-none"
      >
        <option value="">Select Material</option>
        <option>Silk</option>
        <option>Cotton</option>
        <option>Jute</option>
        <option>Wood</option>
      </select>

      <textarea
        rows={5}
        name="features"
        placeholder="Example: Handwoven, Eco-friendly, Natural Dyes..."
        value={formData.features}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 mb-6 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
      />

      <h3 className="font-semibold mb-3">
        Select Tone
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {tones.map((tone) => (
          <button
            key={tone}
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                tone,
              })
            }
            className={`rounded-lg py-3 transition ${
              formData.tone === tone
                ? "bg-orange-600 text-white"
                : "border hover:bg-orange-100"
            }`}
          >
            {tone}
          </button>
        ))}
      </div>

      <button
        disabled={loading}
        onClick={handleSubmit}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white py-4 rounded-xl font-semibold transition"
      >
        {loading
          ? "Generating AI Content..."
          : "🚀 Generate with AI"}
      </button>

      <button
        type="button"
        onClick={clearForm}
        className="mt-3 w-full border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-xl transition"
      >
        Clear Form
      </button>

    </div>
  );
}