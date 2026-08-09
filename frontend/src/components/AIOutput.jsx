import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./ui/Loader";
import AIOutputCard from "./AIOutputCard";

export default function AIOutput({ loading, result }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);

      setCopied(true);

      toast.success("Copied to clipboard!");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Copy failed.");
    }
  };

  return (
    <div className="flex flex-col h-full text-gray-900 dark:text-slate-100 transition-colors duration-300">

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-slate-100">
        🤖 AI Generated Content
      </h2>


      {/* Loading State */}
      {loading && (
        <div className="flex flex-col justify-center items-center flex-1 text-center">

          <Loader />

          <p className="mt-6 text-gray-500 dark:text-slate-400 animate-pulse">
            AI is crafting the perfect product description...
          </p>

        </div>
      )}


      {/* Empty State */}
      {!loading && !result && (
        <div className="flex flex-col justify-center items-center flex-1 text-center">

          <div className="text-7xl mb-6">
            ✨
          </div>

          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-slate-100">
            Ready to Generate
          </h3>

          <p className="text-gray-500 dark:text-slate-400 max-w-sm leading-6">
            Fill in the product details on the left and click{" "}
            <strong className="text-gray-700 dark:text-slate-200">
              Generate with AI
            </strong>{" "}
            to receive a professional product description.
          </p>

        </div>
      )}


      {/* Generated Result */}
      {!loading && result && (
        <div className="flex flex-col flex-1">

          <AIOutputCard content={result} />

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="mt-6 bg-blue-600 hover:bg-blue-700
            text-white py-3 rounded-lg
            transition duration-300 font-semibold"
          >
            {copied ? "✅ Copied" : "📋 Copy Output"}
          </button>

        </div>
      )}

    </div>
  );
}