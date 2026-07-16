import { Star, Hotel } from "lucide-react";

function StayCards({ stays = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <Hotel className="text-green-700" />

        <h2 className="text-2xl font-bold">
          Eco-Friendly Stays
        </h2>

      </div>

      <div className="space-y-5">

        {stays.map((stay, index) => (

       <div
  key={index}
  className="rounded-2xl border border-gray-200 p-5 hover:shadow-xl transition-all duration-300"
>

  <div className="flex justify-between items-start">

    <div>

      <h3 className="text-xl font-bold">
        🏨 {stay.name}
      </h3>

      <p className="text-gray-500 mt-2">
        {stay.price}
      </p>

      <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Eco Certified
      </span>

    </div>

    <div className="text-yellow-500 font-semibold">
      ⭐ {stay.rating}
    </div>

  </div>

</div>

        ))}

      </div>

    </div>
  );
}

export default StayCards;