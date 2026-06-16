function Card({ title, location, price }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">
      <img
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000"
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <p className="text-green-700 font-bold mt-3">
          ₹{price}/night
        </p>

        <button className="mt-4 bg-green-800 text-white px-5 py-2 rounded-lg">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;