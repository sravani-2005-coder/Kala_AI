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
    <div className="bg-white rounded-2xl shadow-xl p-6 min-h-[650px] flex flex-col">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Generated Content
      </h2>

      {loading && (
        <div className="flex flex-col justify-center items-center flex-1">

          <Loader />

          <p className="mt-6 text-gray-500 animate-pulse">
            AI is crafting the perfect product description...
          </p>

        </div>
      )}

      {!loading && !result && (
        <div className="flex flex-col justify-center items-center flex-1 text-center">

          <div className="text-7xl mb-6">
            ✨
          </div>

          <h3 className="text-2xl font-semibold mb-2">
            Ready to Generate
          </h3>

          <p className="text-gray-500 max-w-sm">
            Fill in the product details on the left and click
            <strong> Generate with AI </strong>
            to receive a professional product description.
          </p>

        </div>
      )}

      {!loading && result && (
        <>

          <AIOutputCard content={result} />

          <button
            onClick={handleCopy}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
          >
            {copied ? "✅ Copied" : "📋 Copy Output"}
          </button>

        </>
      )}

    </div>
  );
}