import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditStay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stay, setStay] = useState({
    title: "",
    location: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stays/${id}`)
      .then((res) => setStay(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setStay({
      ...stay,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/stays/${id}`,
        stay
      );

      alert("Stay Updated Successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] flex justify-center items-center py-20">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl">

        <h2 className="text-4xl font-bold mb-8 text-center">
          Edit Stay
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="title"
            value={stay.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="location"
            value={stay.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="price"
            value={stay.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <input
            name="image"
            value={stay.image}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />

          <button
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-xl"
          >
            Update Stay
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditStay;