import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen p-10">
        <h1 className="text-4xl font-bold mb-4">
          About AI EcoStay
        </h1>

        <p>
          AI EcoStay connects travelers with eco-friendly stays,
          local communities, and AI-powered travel planning.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;