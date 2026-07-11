import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function StayDetails() {
  const { id } = useParams();

  const [stay, setStay] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/stays/${id}`)
      .then((res) => res.json())
      .then((data) => setStay(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!stay) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold">Loading Stay...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen pt-28 pb-12">

        <div className="max-w-6xl mx-auto px-6">

          <img
            src={stay.image}
            alt={stay.title}
            className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
          />

          <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center">

              <div>
                <h1 className="text-5xl font-bold">
                  {stay.title}
                </h1>

                <p className="text-gray-500 text-xl mt-3">
                  📍 {stay.location}
                </p>
              </div>

              <div className="text-right">

                <p className="text-4xl font-bold text-green-700">
                  ₹{stay.price}
                </p>

                <p className="text-gray-500">
                  per night
                </p>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                🌿 Eco Certified
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                ⭐ 4.8 Rating
              </span>

            </div>

            <div className="mt-10">

              <h2 className="text-2xl font-bold mb-4">
                About this Stay
              </h2>

              <p className="text-gray-600 leading-8">
                Experience sustainable travel while enjoying premium
                comfort. This eco-friendly stay supports local
                communities, minimizes environmental impact, and offers
                modern amenities for an unforgettable vacation.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">

              <div className="bg-gray-50 rounded-2xl p-6">

                <h3 className="text-xl font-bold mb-4">
                  Host Information
                </h3>

                <p>
                  👤 {stay.owner?.name || "Unknown Host"}
                </p>

                <p className="mt-2">
                  📧 {stay.owner?.email || "Not Available"}
                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl p-6">

                <h3 className="text-xl font-bold mb-4">
                  Eco Features
                </h3>

                <ul className="space-y-2">
                  <li>✅ Solar Energy</li>
                  <li>✅ Rainwater Harvesting</li>
                  <li>✅ Organic Food</li>
                  <li>✅ Local Community Support</li>
                </ul>

              </div>

            </div>

            <button className="mt-12 w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-semibold">
              Book This Stay
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default StayDetails;