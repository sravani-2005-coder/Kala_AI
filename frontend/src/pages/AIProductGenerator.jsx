import { useState } from "react";
import toast from "react-hot-toast";

import AIForm from "../components/AIForm";
import AIOutput from "../components/AIOutput";

import { generateProductDescription } from "../services/aiService";

export default function AIProductGenerator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (formData) => {
    try {
      setLoading(true);

      const response = await generateProductDescription(formData);

console.log(response);

setResult(response.data);

      toast.success("AI content generated successfully!");
    } catch (error) {
  console.error("Full Error:", error);

  if (error.response) {
    console.log("Backend Response:", error.response.data);
  }

  toast.error("Failed to generate AI content.");
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-8">

      <h1 className="text-4xl font-bold text-center text-orange-700 mb-2">
        ✨ Kala AI Product Studio
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Generate premium AI-powered content for artisan products.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">

        <AIForm
          onGenerate={handleGenerate}
          loading={loading}
        />

        <AIOutput
          loading={loading}
          result={result}
        />

      </div>

    </div>
  );
}