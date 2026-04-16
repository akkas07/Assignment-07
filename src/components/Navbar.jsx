// src/components/Navbar.jsx
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaStream, FaChartPie } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">KeenKeeper</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? "active" : ""}>
            <FaStream /> Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : ""}>
            <FaChartPie /> Stats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
