import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentDemo from "./pages/ComponentDemo";
import Stays from "./pages/Stays";
import AddStay from "./pages/AddStay";
import EditStay from "./pages/EditStay";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/component-demo" element={<ComponentDemo />} />
      <Route path="/stays" element={<Stays />} />
      <Route
  path="/add-stay"
  element={
    <ProtectedRoute>
      <AddStay />
    </ProtectedRoute>
  }
/>
      <Route path="/edit-stay/:id" element={<EditStay />} />
    </Routes>
  );
}

export default App;