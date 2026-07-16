import { Leaf } from "lucide-react";

function TipsCard({ tips=[] }) {
  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex items-center gap-3 mb-6">

        <Leaf className="text-green-700"/>

        <h2 className="text-2xl font-bold">

          Sustainable Tips

        </h2>

      </div>

      <div className="space-y-4">

        {tips.map((tip,index)=>(

          <div
            key={index}
            className="bg-green-50 rounded-xl p-4"
          >

            ✅ {tip}

          </div>

        ))}

      </div>

    </div>
  );
}

export default TipsCard;