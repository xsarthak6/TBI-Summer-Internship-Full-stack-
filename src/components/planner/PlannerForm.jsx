import {
  MapPin,
  Wallet,
  CalendarDays,
  Leaf,
  Sparkles,
} from "lucide-react";

function PlannerForm({
  form,
  handleChange,
  generatePlan,
  loading,
}) {
  return (
    <form
      onSubmit={generatePlan}
      className="bg-white rounded-3xl shadow-xl p-8 mb-12"
    >

      <div className="grid lg:grid-cols-4 gap-5">

        <div>

          <label className="font-semibold mb-2 block">
            Destination
          </label>

          <div className="relative">

            <MapPin
              className="absolute left-4 top-4 text-green-700"
              size={20}
            />

            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Manali"
              className="w-full border rounded-xl pl-12 py-3"
              required
            />

          </div>

        </div>

        <div>

          <label className="font-semibold mb-2 block">
            Budget
          </label>

          <div className="relative">

            <Wallet
              className="absolute left-4 top-4 text-green-700"
              size={20}
            />

            <input
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="25000"
              className="w-full border rounded-xl pl-12 py-3"
              required
            />

          </div>

        </div>

        <div>

          <label className="font-semibold mb-2 block">
            Days
          </label>

          <div className="relative">

            <CalendarDays
              className="absolute left-4 top-4 text-green-700"
              size={20}
            />

            <input
              name="days"
              value={form.days}
              onChange={handleChange}
              placeholder="4"
              className="w-full border rounded-xl pl-12 py-3"
              required
            />

          </div>

        </div>

        <div>

          <label className="font-semibold mb-2 block">
            Interests
          </label>

          <div className="relative">

            <Leaf
              className="absolute left-4 top-4 text-green-700"
              size={20}
            />

            <input
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="Nature, Hiking"
              className="w-full border rounded-xl pl-12 py-3"
              required
            />

          </div>

        </div>

      </div>

      <button
        disabled={loading}
        className="mt-8 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl flex justify-center items-center gap-3 text-lg font-semibold"
      >

        <Sparkles size={20} />

        {loading
          ? "Generating your trip..."
          : "Generate Eco Trip"}

      </button>

    </form>
  );
}

export default PlannerForm;