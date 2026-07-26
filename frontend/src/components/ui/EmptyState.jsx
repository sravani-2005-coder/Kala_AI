import { Link } from "react-router-dom";

function EmptyState({
  title = "No Data Found",
  message = "Nothing to display.",
  buttonText,
  buttonLink,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">

      <div className="text-7xl mb-4">
        📦
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        {title}
      </h2>

      <p className="text-gray-500 max-w-md mb-6">
        {message}
      </p>

      {buttonText && buttonLink && (
        <Link
          to={buttonLink}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition"
        >
          {buttonText}
        </Link>
      )}

    </div>
  );
}

export default EmptyState;