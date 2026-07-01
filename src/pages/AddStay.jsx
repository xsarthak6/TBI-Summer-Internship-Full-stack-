import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStay() {
  const navigate = useNavigate();

  const [stay, setStay] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setStay({
      ...stay,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/stays", stay);

      alert("Stay Added Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] flex justify-center items-center py-20">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl">

        <h2 className="text-4xl font-bold mb-8 text-center">
          Add New Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            placeholder="Stay Title"
            value={stay.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={stay.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={stay.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={stay.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
          >
            Add Stay
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddStay;