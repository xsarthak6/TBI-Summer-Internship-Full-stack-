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
    axios
      .get("http://localhost:5000/api/stays")
      .then((response) => {
        setStays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
            {stays.map((stay) => (
          <Card
            key={stay.id}
            title={stay.title}
            location={stay.location}
            price={stay.price}
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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