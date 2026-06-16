import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-950 text-white px-8 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        🌿 AI EcoStay
      </h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;