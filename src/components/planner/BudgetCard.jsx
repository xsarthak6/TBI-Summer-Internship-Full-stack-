import {
  Wallet,
  Hotel,
  Utensils,
  Bus,
  Trees,
} from "lucide-react";

function BudgetCard({ budget = {} }) {

  return (
    <div className="bg-white rounded-3xl shadow-xl p-7">

      <div className="flex items-center gap-3 mb-6">

        <Wallet className="text-green-700" />

        <h3 className="text-2xl font-bold">
          Budget Breakdown
        </h3>

      </div>

      <div className="space-y-5">

        <BudgetRow
  icon={<Hotel size={18} />}
  title="Stay"
  value={budget.stay || 0}
/>

<BudgetRow
  icon={<Utensils size={18} />}
  title="Food"
  value={budget.food || 0}
/>

<BudgetRow
  icon={<Bus size={18} />}
  title="Transport"
  value={budget.transport || 0}
/>

<BudgetRow
  icon={<Trees size={18} />}
  title="Activities"
  value={budget.activities || 0}
/>

      </div>
      <div className="mt-8">

  <div className="flex justify-between mb-2">
    <span className="font-semibold text-gray-700">
      Budget Usage
    </span>

    <span className="text-green-700 font-bold">
      100%
    </span>
  </div>

  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

    <div
      className="h-full bg-green-600 rounded-full"
      style={{ width: "100%" }}
    ></div>

  </div>

  <p className="text-sm text-gray-500 mt-2">
    Estimated budget distribution
  </p>

</div>

    </div>
  );
}

function BudgetRow({
  icon,
  title,
  value,
}) {
  return (
    <div className="flex justify-between items-center">

      <div className="flex gap-3 items-center">
        {icon}
        {title}
      </div>

      <div className="font-bold text-green-700">
        ₹{value}
      </div>

    </div>
  );
}

export default BudgetCard;