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
    <div className="text-gray-900 dark:text-slate-100 transition-colors duration-300">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-slate-100">
        🧶 Product Information
      </h2>

      {/* Product Name */}
      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-slate-600 rounded-lg p-3 mb-4
        bg-white dark:bg-slate-900
        text-gray-900 dark:text-slate-100
        placeholder-gray-400 dark:placeholder-slate-500
        focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        outline-none transition-colors duration-300"
      />

      {/* Category */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-slate-600 rounded-lg p-3 mb-4
        bg-white dark:bg-slate-900
        text-gray-900 dark:text-slate-100
        focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        outline-none transition-colors duration-300"
      >
        <option value="">Select Category</option>
        <option>Saree</option>
        <option>Shawl</option>
        <option>Jewelry</option>
        <option>Handicrafts</option>
      </select>

      {/* Material */}
      <select
        name="material"
        value={formData.material}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-slate-600 rounded-lg p-3 mb-4
        bg-white dark:bg-slate-900
        text-gray-900 dark:text-slate-100
        focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        outline-none transition-colors duration-300"
      >
        <option value="">Select Material</option>
        <option>Silk</option>
        <option>Cotton</option>
        <option>Jute</option>
        <option>Wood</option>
      </select>

      {/* Features */}
      <textarea
        rows={5}
        name="features"
        placeholder="Example: Handwoven, Eco-friendly, Natural Dyes..."
        value={formData.features}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-slate-600 rounded-lg p-3 mb-6
        bg-white dark:bg-slate-900
        text-gray-900 dark:text-slate-100
        placeholder-gray-400 dark:placeholder-slate-500
        resize-none
        focus:ring-2 focus:ring-orange-500 focus:border-orange-500
        outline-none transition-colors duration-300"
      />

      {/* Tone Heading */}
      <h3 className="font-semibold mb-3 text-gray-900 dark:text-slate-100">
        Select Tone
      </h3>

      {/* Tone Buttons */}
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
            className={`rounded-lg py-3 transition duration-300 ${
              formData.tone === tone
                ? "bg-orange-600 text-white hover:bg-orange-700"
                : "border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-orange-100 dark:hover:bg-slate-700"
            }`}
          >
            {tone}
          </button>
        ))}
      </div>

      {/* Generate Button */}
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300
        text-white py-4 rounded-xl font-semibold transition duration-300"
      >
        {loading
          ? "Generating AI Content..."
          : "🚀 Generate with AI"}
      </button>

      {/* Clear Button */}
      <button
        type="button"
        onClick={clearForm}
        className="mt-3 w-full
        border border-orange-600
        text-orange-600 dark:text-orange-400
        hover:bg-orange-50 dark:hover:bg-slate-700
        py-3 rounded-xl transition duration-300"
      >
        Clear Form
      </button>

    </div>
  );
}