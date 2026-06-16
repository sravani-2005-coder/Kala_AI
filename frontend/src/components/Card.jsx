function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <button className="bg-orange-600 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}

export default Card;