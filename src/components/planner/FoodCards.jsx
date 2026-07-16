import { UtensilsCrossed } from "lucide-react";

function FoodCards({ foods = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <UtensilsCrossed className="text-green-700"/>

        <h2 className="text-2xl font-bold">
          Local Foods
        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {foods.map((food, index)=>(

          <div
            key={index}
            className="bg-green-50 rounded-xl p-5 text-lg font-semibold"
          >

            🍽️ {food}

          </div>

        ))}

      </div>

    </div>
  );
}

export default FoodCards;