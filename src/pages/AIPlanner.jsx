import { useState } from "react";
import Navbar from "../components/Navbar";
import PlannerHero from "../components/planner/PlannerHero";
import PlannerForm from "../components/planner/PlannerForm";
import TripHeader from "../components/planner/TripHeader";
import BudgetCard from "../components/planner/BudgetCard";
import Timeline from "../components/planner/Timeline";
import StayCards from "../components/planner/StayCards";
import FoodCards from "../components/planner/FoodCards";
import TipsCard from "../components/planner/TipsCard";

function AIPlanner() {
  const [form, setForm] = useState({
    destination: "",
    budget: "",
    days: "",
    interests: "",
  });

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const generatePlan = async (e) => {
    e.preventDefault();

    setLoading(true);
    setPlan(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/ai/planner",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

console.log("AI Response:", data.plan);

if (data.success) {
  setPlan(data.plan);
} else {
  alert(data.message);
}
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#EAFBF2] via-[#F8FFFC] to-[#DDF7E8] pt-40 pb-20 px-6">
    {/* Background Effects */}

<div className="absolute top-20 -left-24 w-80 h-80 bg-green-300/30 rounded-full blur-3xl"></div>

<div className="absolute bottom-20 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100/20 rounded-full blur-3xl"></div>
     <div className="relative z-10 max-w-7xl mx-auto">

          <PlannerHero />

          <PlannerForm
  form={form}
  handleChange={handleChange}
  generatePlan={generatePlan}
  loading={loading}
/>

          {loading && (
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-12 mt-10 text-center">

  <div className="flex justify-center">

    <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-600 border-t-transparent"></div>

  </div>

  <h2 className="text-2xl font-bold mt-8">
    🌿 Creating your Eco Journey...
  </h2>

  <p className="text-gray-500 mt-3">
    Finding eco stays • Planning itinerary • Calculating budget
  </p>

</div>
          )}

          {plan && (
  <>
    <TripHeader
      destination={form.destination}
      budget={form.budget}
      days={form.days}
    />
    <div className="bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-3xl p-6 mt-6 shadow-xl">

  <h2 className="text-2xl font-bold">
    ✨ AI Recommendation
  </h2>

  <p className="mt-3 text-green-100">
    This itinerary is optimized for sustainable travel,
    local experiences and balanced budget planning.
  </p>

</div>

    <div className="grid lg:grid-cols-3 gap-8 mt-8">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2">

        <Timeline
  itinerary={plan.itinerary}
/>

      </div>

      {/* RIGHT SIDE */}

      <BudgetCard budget={plan.budget} />

    </div>
    {/* NEW SECTION */}
    <div className="grid lg:grid-cols-2 gap-8 mt-8">

      <StayCards
        stays={plan.stays}
      />

      <TipsCard
        tips={plan.tips}
      />

    </div>

    {/* NEW SECTION */}
    <div className="mt-8">

      <FoodCards
        foods={plan.foods}
      />

    </div>

  </>
)}
</div>
      </div>

    </>
  );
}

export default AIPlanner;