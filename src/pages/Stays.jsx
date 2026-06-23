import { useState } from "react";

function Stays() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Homestays",
    "Hotels",
    "Resorts",
    "Villas",
    "Eco Retreats",
  ];

  const stays = [
    {
      id: 1,
      name: "Green Valley Homestay",
      location: "Meghalaya",
      price: "₹2200/night",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 2,
      name: "Forest Retreat",
      location: "Coorg",
      price: "₹2800/night",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },
    {
      id: 3,
      name: "Eco Lake Resort",
      location: "Uttarakhand",
      price: "₹3200/night",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739"
    },
  ];

  return (
  <div className="min-h-screen bg-gray-50">

    <nav className="bg-green-950 text-white px-8 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        AI EcoStay
      </h2>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/stays">Stays</a>
        <a href="/planner">Planner</a>
      </div>

    </nav>

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Discover Eco-Friendly Stays
      </h1>
      <p className="text-gray-600 mt-2 mb-8">
      Find sustainable accommodations that support local communities.
     </p>

      <div className="flex flex-wrap gap-3 mb-8">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border ${
              activeFilter === filter
                ? "bg-green-700 text-white"
                : "bg-white"
            }`}
          >
            {filter}
          </button>
        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {stays.map((stay) => (
          <div
            key={stay.id}
            className="bg-white rounded-xl shadow p-4"
          >

            <img
                src={stay.image}
                alt={stay.name}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />

            <h2 className="text-xl font-semibold">
              {stay.name}
            </h2>

            <p className="text-gray-500">
              📍 {stay.location}
            </p>
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mt-2">
              🌿 Eco Certified
            </span>

            <p className="mt-2">
              ⭐ {stay.rating}
            </p>

            <p className="font-bold text-green-700 mt-2">
              {stay.price}
            </p>

            <button
              className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg"
            >
              View Details
            </button>

          </div>
        ))}

      </div>
      </div>

    </div>
  );
}

export default Stays;