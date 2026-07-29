import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSearch = () => {
    navigate(
      `/stays?destination=${encodeURIComponent(destination)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto -mt-8 md:-mt-12 relative z-30 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">

          <div>
            <p className="text-sm text-gray-500 mb-1">Where To?</p>
            <input
              type="text"
              placeholder="Search destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Check In</p>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Check Out</p>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">Guests</p>
            <input
              type="number"
              placeholder="2 Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full outline-none"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-green-700 hover:bg-green-800 text-white h-14 rounded-full font-semibold"
          >
            Search
          </button>

        </div>
      </div>
    </div>
  );
}

export default SearchBar;