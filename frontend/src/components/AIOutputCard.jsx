import { Copy} from "lucide-react";
import toast from "react-hot-toast";

export default function AIOutputCard({ content }) {

  const copyText = () => {
    navigator.clipboard.writeText(content);
    toast.success("Copied!");
  };

  return (
    <div className="space-y-6">

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-sm">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-2xl font-bold text-orange-700">
            AI Generated Content
          </h2>

          <button
            onClick={copyText}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
          >
            <Copy size={18} />
            Copy
          </button>

        </div>

        <div className="whitespace-pre-wrap leading-8 text-gray-700">
          {content}
        </div>

      </div>

    </div>
  );
}