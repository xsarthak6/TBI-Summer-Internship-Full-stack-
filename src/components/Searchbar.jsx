function SearchBar() {
  return (
    <div className="max-w-6xl mx-auto -mt-12 relative z-20">
      <div className="bg-white shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4">

        <input
          type="text"
          placeholder="Destination"
          className="border rounded-lg p-3"
        />

        <div>
            <label className="block text-sm mb-1">Check In</label>
            <input
                type="date" 
                placeholder="Check In"
                className="border rounded-lg p-3 w-full"
            />
            </div>

        <input
          type="date"
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Guests"
          className="border rounded-lg p-3"
        />

        <button className="bg-green-800 text-white rounded-lg p-3">
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;