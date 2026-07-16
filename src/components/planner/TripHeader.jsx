import { MapPin, Calendar, Wallet } from "lucide-react";

function TripHeader({ destination, budget, days }) {
  return (
    <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-3xl p-8 shadow-xl mb-8">

      <h2 className="text-4xl font-bold">
        🌿 Eco Trip to {destination}
      </h2>
      <div className="flex flex-wrap gap-3 mt-6">

  <span className="bg-white/20 px-4 py-2 rounded-full">
    📍 {destination}
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full">
    📅 {days} Days
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full">
    💰 ₹{budget}
  </span>

</div>

      <div className="flex flex-wrap gap-6 mt-5 text-lg">

        <div className="flex items-center gap-2">
          <Calendar size={20} />
          {days} Days
        </div>

        <div className="flex items-center gap-2">
          <Wallet size={20} />
          ₹{budget}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={20} />
          Sustainable Journey
        </div>

      </div>

    </div>
  );
}

export default TripHeader;