import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem(
  "user",
  JSON.stringify(data.user)
);
        alert("Login Successful");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-96"
        >

          <h2 className="text-3xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
          >
            Login
          </button>

          <div className="my-5 text-center text-gray-500">
            OR
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-3"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

        </form>

      </div>

      <Footer />
    </>
  );
}

export default Login;