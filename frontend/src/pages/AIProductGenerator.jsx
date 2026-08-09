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
    <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100 px-6 py-12 transition-colors duration-300">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-700 dark:text-orange-400 mb-3">
          ✨ Kala AI Product Studio
        </h1>

        <p className="text-center text-gray-600 dark:text-slate-300 mb-10 text-lg">
          Generate premium AI-powered content for artisan products.
        </p>


        {/* AI Form + Output */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* AI Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
            <AIForm
              onGenerate={handleGenerate}
              loading={loading}
            />
          </div>


          {/* AI Output */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
            <AIOutput
              loading={loading}
              result={result}
            />
          </div>

        </div>

      </div>

    </div>
  );
}