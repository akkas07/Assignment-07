import "./Friends.css";
import friendsData from "../data/friends.json";
import { Link } from "react-router-dom";

export default function Friends() {
  return (
    <section className="friends">
      <h2>Your Friends</h2>

      <div className="friend-grid">
        {friendsData.map((f) => (
          <Link
            to={`/friend/${f.id}`}
            key={f.id}
            className={`friend-card ${f.status}`}
          >
            <img src={f.picture} alt={f.name} />
            <h3>{f.name}</h3>
            <p><strong>Email:</strong> {f.email}</p>
            <p><strong>Days Since Contact:</strong> {f.days_since_contact}</p>
            <p><strong>Tags:</strong> {f.tags.join(", ")}</p>
            <p><strong>Status:</strong> {f.status}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
