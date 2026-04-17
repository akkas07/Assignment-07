import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">
        <span className="keen">Keen</span>Keeper
      </h1>

      <div className="nav-links">
        <Link
          to="/"
          className={pathname === "/" ? "active nav-btn" : "nav-btn"}
        >
          <span className="icon">🏠</span> Home
        </Link>

        <Link
          to="/timeline"
          className={pathname === "/timeline" ? "active" : ""}
        >
          <span className="icon">⏱</span> Timeline
        </Link>

        <Link
          to="/stats"
          className={pathname === "/stats" ? "active" : ""}
        >
          <span className="icon">📊</span> Stats
        </Link>
      </div>
    </nav>
  );
}
