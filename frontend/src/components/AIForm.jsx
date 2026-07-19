import { useState } from "react";

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

  const tones = [
    "Professional",
    "Luxury",
    "Friendly",
    "Traditional",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🧶 Product Information
      </h2>

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="">Category</option>

        <option>Saree</option>
        <option>Shawl</option>
        <option>Jewelry</option>
        <option>Handicrafts</option>
      </select>

      <select
        name="material"
        value={formData.material}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-4"
      >
        <option value="">Material</option>

        <option>Silk</option>
        <option>Cotton</option>
        <option>Jute</option>
        <option>Wood</option>
      </select>

      <textarea
        rows="4"
        name="features"
        placeholder="Handwoven, Natural Dyes..."
        value={formData.features}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mb-6"
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
            className={`rounded-lg p-3 border ${
              formData.tone === tone
                ? "bg-orange-600 text-white"
                : "bg-white"
            }`}
          >
            {tone}
          </button>

        ))}

      </div>

      <button
        disabled={loading}
        onClick={() => onGenerate(formData)}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl"
      >
        {loading ? "Generating..." : "🚀 Generate with AI"}
      </button>
      <button
  type="button"
  onClick={() =>
    setFormData({
      name: "",
      category: "",
      material: "",
      features: "",
      tone: "Professional",
    })
  }
  className="mt-3 w-full border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-xl"
>
  Clear Form
</button>

    </div>
  );
}