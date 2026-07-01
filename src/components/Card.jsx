import { Link } from "react-router-dom";
function Card({ _id, title, location, price, image, onDelete }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02] transition duration-300">

      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500
  hover:scale-110"
        />

        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          ❤️
        </div>

        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          ⭐ 4.8
        </div>

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          📍 {location}
        </p>

        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mt-3">
          🌿 Eco Certified
        </span>

        <p className="text-green-700 font-bold text-xl mt-4">
          ₹{price}/night
        </p>

        <div className="flex gap-3 mt-5">

        <Link
          to={`/edit-stay/${_id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(_id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
        >
          Delete
        </button>

      </div>

      </div>

    </div>
  );
}

export default Card;