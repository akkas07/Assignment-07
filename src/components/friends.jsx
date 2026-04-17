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
            className="friend-card"
          >
            <div className="friend-header">
               <img src={f.picture} alt={f.name} className="friend-img" />
              <span className="days">{f.days_since_contact}d ago</span>
            </div>

            <h3>{f.name}</h3>

            <div className="tags">
              {f.tags.map((tag, i) => (
                 <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <span className={`status ${f.status}`}>
              {f.status.replace("-", " ")}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
