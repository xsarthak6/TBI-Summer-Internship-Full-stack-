import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Dashboard() {
  const navigate = useNavigate();

  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStays = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/stays");
      const data = await response.json();

      setStays(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-28 pb-10 px-8">

        <div className="max-w-7xl mx-auto">

          {/* Welcome */}
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-gray-800">
              Welcome Back 👋
            </h1>

            <p className="text-gray-600 mt-2">
              Manage your AI EcoStay platform from one place.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-500">Total Stays</p>

              <h2 className="text-4xl font-bold text-green-700 mt-3">
                {stays.length}
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-500">Authentication</p>

              <h2 className="text-2xl font-bold text-blue-600 mt-3">
                Active ✅
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-500">Database</p>

              <h2 className="text-2xl font-bold text-purple-600 mt-3">
                MongoDB ✓
              </h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-gray-500">Google OAuth</p>

              <h2 className="text-2xl font-bold text-red-500 mt-3">
                Connected
              </h2>
            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">

            <h2 className="text-2xl font-bold mb-5">
              Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/add-stay")}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
              >
                + Add Stay
              </button>

              <button
                onClick={() => navigate("/stays")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Browse Stays
              </button>

            </div>

          </div>

          {/* Latest Stays */}
          <div className="mb-10">

            <h2 className="text-3xl font-bold mb-6">
              Latest Eco Stays
            </h2>

            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">

                {stays.slice(0, 3).map((stay) => (

                  <Card
                    key={stay._id}
                    title={stay.title}
                    location={stay.location}
                    price={stay.price}
                    image={stay.image}
                  />

                ))}

              </div>
            )}

          </div>

          {/* Project Status */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">

            <h2 className="text-2xl font-bold mb-4">
              Project Status
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <p>✅ MongoDB Connected</p>

              <p>✅ JWT Authentication</p>

              <p>✅ Google OAuth</p>

              <p>✅ Protected Routes</p>

              <p>✅ CRUD APIs</p>

              <p>✅ Express Validator</p>

              <p>✅ Rate Limiting</p>

            </div>

          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-2xl font-bold mb-4">
              Upcoming Features
            </h2>

            <ul className="space-y-3 text-gray-600">

              <li>📅 Booking Management (Coming Soon)</li>

              <li>❤️ Wishlist (Coming Soon)</li>

              <li>🤖 AI Trip Planner (Coming Soon)</li>

              <li>📊 Analytics Dashboard (Coming Soon)</li>

            </ul>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;