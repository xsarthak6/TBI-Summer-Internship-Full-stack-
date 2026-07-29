import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Experiences from "../components/Experiences";

function Home() {
  const [stays, setStays] = useState([]);

useEffect(() => {
  console.log("ENV:", import.meta.env);
  console.log("API URL:", import.meta.env.VITE_API_URL);

  axios.get(`${import.meta.env.VITE_API_URL}/api/stays`)
    .then((response) => {
      console.log(response.data);
      // Guard: only set stays if the API actually returned an array.
      // If the backend errors out it returns an object like
      // { message: "..." } instead of a list, which would break .map().
      if (Array.isArray(response.data)) {
        setStays(response.data);
      } else {
        console.error("Unexpected /api/stays response shape:", response.data);
        setStays([]);
      }
    })
    .catch((error) => {
      console.log(error);
      setStays([]);
    });
}, []);
  const handleDelete = async (id) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/stays/${id}`);

    setStays((prev) => prev.filter((stay) => stay._id !== id));

    alert("Stay deleted successfully!");
  } catch (error) {
    console.log(error);
  }
};

    return (
    <>
      <Navbar />

      <Hero />
      <div className="-mt-16 relative z-30">
        <SearchBar />
      </div>
      <Features />


      <section className="bg-[#F8F5EE] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              Featured Stays
            </span>
          </div>
          <h2 className="text-5xl font-bold text-center mb-4">
            Popular Eco Stays
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Handpicked sustainable accommodations across India
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            {(Array.isArray(stays) ? stays : []).map((stay) => (
          <Card
            key={stay._id}
            _id={stay._id}
            title={stay.title}
            location={stay.location}
            price={stay.price}
            image={stay.image}
            onDelete={handleDelete}
          />
        ))}
          </div>
        </div>
      </section>
      <Experiences />

      <Footer />
    </>
  );
}

export default Home;