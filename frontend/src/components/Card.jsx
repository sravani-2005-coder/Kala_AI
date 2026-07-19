import { Link } from "react-router-dom";
function Card({ product }) {
  return (
    <div className="bg-white shadow-lg  dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-contain bg-gray-100"
      />

      <div className="p-5">
       <h2 className="text-xl font-bold mt-4">
  {product.name}
</h2>

<p className="text-2xl font-semibold text-orange-600 mt-2 dark:text-slate-300 mt-2">
  ₹{product.price}
</p>

<p className="text-gray-600 mt-3">
  {product.description.length > 80
    ? product.description.substring(0, 80) + "..."
    : product.description}
</p>

<Link
  to={`/products/${product._id}`}
  className="inline-block mt-5 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700  transition dark:bg-slate-800 "
>
  View Details
</Link>
      </div>
    </div>
  );
}

export default Card;