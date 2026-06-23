import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentDemo from "./pages/ComponentDemo";
import Stays from "./pages/Stays";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/component-demo" element={<ComponentDemo />} />
      <Route path="/stays" element={<Stays />} />
    </Routes>
  );
}

export default App;