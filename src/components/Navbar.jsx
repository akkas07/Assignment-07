import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">KeenKeeper</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/timeline">Timeline</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/add" className="add-btn">+ Add a Friend</Link>
      </div>
    </nav>
  );
}
