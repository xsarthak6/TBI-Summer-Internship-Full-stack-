import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


function Stays() {
  const token = localStorage.getItem("token");
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
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this stay?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `http://localhost:5000/api/stays/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Stay deleted successfully.");

      fetchStays();
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchStays();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-28 px-8 pb-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold">
            Discover Eco-Friendly Stays
          </h1>

          <p className="text-gray-600 mt-3 mb-10">
            Find sustainable accommodations directly from our database.
          </p>

          {loading ? (
            <h2 className="text-2xl font-semibold">
              Loading...
            </h2>
          ) : stays.length === 0 ? (
            <h2 className="text-2xl font-semibold">
              No stays found.
            </h2>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">

              {stays.map((stay) => (

                <Card
                key={stay._id}
                _id={stay._id}
                title={stay.title}
                location={stay.location}
                price={stay.price}
                image={stay.image}
                owner={stay.owner}
                onDelete={handleDelete}
              />

              ))}

            </div>
          )}

        </div>

      </div>

    </>
  );
}

export default Stays;