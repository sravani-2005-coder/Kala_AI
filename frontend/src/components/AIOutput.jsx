import Loader from "./ui/Loader";
import AIOutputCard from "./AIOutputCard";

export default function AIOutput({ loading, result, onGenerateAgain }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[650px]">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Generated Content
      </h2>

      {loading && (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      )}

      {!loading && !result && (
        <div className="flex justify-center items-center h-96 text-gray-500 text-lg">

          Fill the form and click

          <br />

          <strong>Generate with AI</strong>

        </div>
      )}

      {!loading && result && (
        <AIOutputCard content={result} />
      )}

      <button
    onClick={onGenerateAgain}
    className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg"
>
    🔄 Generate Again
</button>

    </div>
  );
}