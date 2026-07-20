import logo from "../assets/logo.jpeg";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

   <NavLink
  to="/"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="EcoStay Logo"
    className="h-14 w-14 rounded-xl object-cover"
  />

  <div>
    <h1 className="text-3xl font-bold leading-none">
      <span className="text-white">Eco</span>
      <span className="text-green-400">Stay</span>
    </h1>

    <p className="text-xs text-green-100 tracking-wide">
      Sustainable Travel
    </p>
  </div>
</NavLink>

        <div className="hidden md:flex gap-8 text-white font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/stays"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400 transition"
            }
          >
            Stays
          </NavLink>

          <NavLink
            to="/planner"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400 transition"
            }
          >
            AI Planner
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold"
                : "text-white hover:text-green-400 transition"
            }
          >
            About Us
          </NavLink>

        </div>

        <div className="hidden md:flex gap-3">

  {user?.role !== "traveler" && (
  <button
  onClick={() => {
    console.log("Add Stay clicked");
    navigate("/add-stay");
  }}
  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
>
  + Add Stay
</button>
  )}

  {token ? (

<div className="flex items-center gap-4">

 <span className="hidden xl:block text-white font-medium">
  👋 Welcome, {user?.name || "Traveler"}
</span>

  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
  >
    Logout
  </button>

</div>

) : (
            
            
            <div className="flex gap-3">

  <NavLink to="/register">
    <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg">
      Register
    </button>
  </NavLink>

  <NavLink to="/login">
    <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg">
      Sign In
    </button>
  </NavLink>

</div>
          )}

        </div>

        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
>
  {menuOpen ? "✕" : "☰"}
</button>

      </div>
      {menuOpen && (
  <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">

    <div className="flex flex-col px-6 py-5 space-y-4 text-white">

      <NavLink to="/" onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>

      <NavLink to="/stays" onClick={() => setMenuOpen(false)}>
        Stays
      </NavLink>

      <NavLink to="/planner" onClick={() => setMenuOpen(false)}>
        AI Planner
      </NavLink>

      <NavLink to="/about" onClick={() => setMenuOpen(false)}>
        About Us
      </NavLink>

      {user?.role !== "traveler" && (
        <button
          onClick={() => {
            navigate("/add-stay");
            setMenuOpen(false);
          }}
          className="bg-green-700 hover:bg-green-800 rounded-lg py-3 text-white"
        >
          + Add Stay
        </button>
      )}

      {token ? (
        <>
          <div className="text-gray-300">
            👋 {user?.name}
          </div>

          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="bg-red-600 hover:bg-red-700 rounded-lg py-3 text-white"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-green-700 text-center py-3 rounded-lg"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="border border-white text-center py-3 rounded-lg"
          >
            Register
          </NavLink>
        </>
      )}

    </div>

  </div>
)}
    </nav>
  );
}

export default Navbar;