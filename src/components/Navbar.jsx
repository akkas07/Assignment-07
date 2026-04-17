import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-wrapper">

      
        <h1 className="logo">
          <span className="keen">Keen</span>Keeper
        </h1>

       
        <div className="nav-links">

          <Link
            to="/"
            className={`nav-btn ${pathname === "/" ? "active" : ""}`}
          >
            <span className="icon">🏠</span> Home
          </Link>

          <Link
            to="/timeline"
            className={`nav-btn ${pathname === "/timeline" ? "active" : ""}`}
          >
            <span className="icon">⏱</span> Timeline
          </Link>

          <Link
            to="/stats"
            className={`nav-btn ${pathname === "/stats" ? "active" : ""}`}
          >
            <span className="icon">📊</span> Stats
          </Link>

        </div>

      </div>
    </nav>
  );
}
