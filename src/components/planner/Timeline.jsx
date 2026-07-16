import { Clock3 } from "lucide-react";

function Timeline({ itinerary = [] }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        🗓️ Day-wise Itinerary
      </h2>

      <div className="space-y-8">

        {itinerary.map((day) => (

          <div
            key={day.day}
            className="border-l-4 border-green-600 pl-6"
          >

            <h3 className="text-2xl font-bold mb-5">
              Day {day.day} • {day.title}
            </h3>

            <div className="space-y-4">

              {day.activities.map((activity, index) => (

<div
  key={index}
  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5"
>

  <div className="flex gap-4">

    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">

      <Clock3
        className="text-green-700"
        size={20}
      />

    </div>

    <div>

      <p className="text-green-700 font-semibold text-sm">
        {activity.time}
      </p>

      <h4 className="text-lg font-bold mt-1">
        {activity.activity}
      </h4>

      <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
        Eco Activity
      </span>

    </div>

  </div>

</div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Timeline;