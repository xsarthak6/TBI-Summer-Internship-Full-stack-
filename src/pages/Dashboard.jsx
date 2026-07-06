import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-32 px-10">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;