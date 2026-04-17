import "./Banner.css";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">

        {/*  BUTTON */}
        <div className="banner-text">
          <h2>Friends to keep close in your life</h2>
          <p>
            Your personal area of meaningful connections. Browse, tend, and nurture
            the relationships that matter most.
          </p>

          <Link to="/add" className="add-btn">
            <FaUserPlus /> Add a Friend
          </Link>
        </div>

        {/* SUMMARY CARDS */}
        <div className="summary-cards">
          <div className="card">
            <h3>10</h3>
            <p>Total Friends</p>
          </div>

          <div className="card">
              <h3>3</h3>
             <p>On Track</p>
          </div>

          <div className="card">
            <h3>6</h3>
             <p>Need Attention</p>
          </div>

          <div className="card">
              <h3>12</h3>
            <p>Interactions This Month</p>
           </div>
        </div>

      </div>
    </section>
  );
}
