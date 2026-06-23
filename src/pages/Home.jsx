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
            <Card
              title="Mountain Eco Lodge"
              location="Manali, Himachal Pradesh"
              price="2500"
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            />

            <Card
              title="Forest Retreat"
              location="Rishikesh, Uttarakhand"
              price="3200"  
              image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            />
            <Card
              title="Lake View Cottage"
              location="Nainital"
              price="2800"
              image="https://images.unsplash.com/photo-1510798831971-661eb04b3739"
            />

            <Card
              title="Village Homestay"
              location="Coorg"
              price="2200"
              image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            />
          </div>
        </div>
      </section>
      <Experiences />

      <Footer />
    </>
  );
}

export default Home;