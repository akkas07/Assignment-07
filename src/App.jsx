// src/App.jsx
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/timeline" element={<h2>Timeline Page</h2>} />
        <Route path="/stats" element={<h2>Stats Page</h2>} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
