import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          🌿 AI <span className="text-yellow-400">EcoStay</span>
        </h1>

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

  <NavLink
    to="/add-stay"
    className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
  >
    + Add Stay
  </NavLink>

  <button className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg transition">
    Sign In
  </button>

</div>
        <button className="md:hidden text-white text-3xl">
          ☰
        </button>

      </div>
    </nav>
  );
}

export default Navbar;