import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <SearchBar />
      <Features />


      <section className="bg-amber-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">
            Popular Eco Stays
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Mountain Eco Lodge"
              location="Manali, Himachal Pradesh"
              price="2500"
            />

            <Card
              title="Forest Retreat"
              location="Rishikesh, Uttarakhand"
              price="3200"  
            />
            <Card
              title="Lake View Cottage"
              location="Nainital"
              price="2800"
            />

            <Card
              title="Village Homestay"
              location="Coorg"
              price="2200"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;