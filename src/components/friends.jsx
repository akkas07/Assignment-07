import "./Friends.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";

export default function Friends() {
  const { friends } = useContext(FriendsContext);

  return (
    <section className="friends">
      <h2>Your Friends</h2>

      <div className="friend-grid">
        {friends.map((f) => (
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
