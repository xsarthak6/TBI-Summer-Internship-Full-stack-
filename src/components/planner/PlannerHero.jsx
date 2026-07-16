import { Sparkles } from "lucide-react";

function PlannerHero() {
  return (
    <section className="mb-12 text-center">

      <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
        <Sparkles size={18} />
        AI Powered Sustainable Planning
      </div>

      <h1 className="text-6xl font-extrabold text-gray-900">
        AI Eco Trip Planner
      </h1>

      <p className="mt-5 text-xl text-gray-500 max-w-3xl mx-auto leading-8">
        Generate personalized eco-friendly itineraries,
        discover sustainable stays, estimate travel budgets
        and explore local experiences powered by AI.
      </p>

    </section>
  );
}

export default PlannerHero;