import { Routes, Route, Navigate } from "react-router-dom";

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
import LoginSuccess from "./pages/LoginSuccess";
import StayDetails from "./pages/StayDetails";
import AIPlanner from "./pages/AIPlanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<AIPlanner />} />
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
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/register" element={<Register />} />
      <Route path="/component-demo" element={<ComponentDemo />} />
      <Route
  path="/stays/:id"
  element={<StayDetails />}
/>
      <Route path="/stays" element={<Stays />} />
  <Route
  path="/add-stay"
  element={
    <ProtectedRoute>
      {JSON.parse(localStorage.getItem("user"))?.role === "host" ||
      JSON.parse(localStorage.getItem("user"))?.role === "admin" ? (
        <AddStay />
      ) : (
        <Navigate to="/" replace />
      )}
    </ProtectedRoute>
  }
/>
      <Route path="/edit-stay/:id" element={<EditStay />} />
    </Routes>
  );
}

export default App;