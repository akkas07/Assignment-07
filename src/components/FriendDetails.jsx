import { useParams } from "react-router-dom";
import "./FriendDetails.css";
import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";

export default function FriendDetails() {
  const { id } = useParams();
  const { friends } = useContext(FriendsContext);

  const friend = friends.find((f) => f.id === Number(id));

  if (!friend) return <h2>Friend Not Found</h2>;

  return (
    <div className="details-container">

      {/* LEFT SIDE */}
      <div className="left-card">
        <img src={friend.picture} alt={friend.name} className="profile-pic" />

        <h2>{friend.name}</h2>
        <p className={`status ${friend.status}`}>{friend.status}</p>

        <div className="tags">
          {friend.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>

        <p className="bio">{friend.bio}</p>
        <p><strong>Email:</strong> {friend.email}</p>

        <div className="actions">
          <button>⏰ Snooze 2 Weeks</button>
          <button>📦 Archive</button>
          <button>🗑️ Delete</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-column">

        <div className="stats-cards">
          <div className="stat-card">
            <h3>{friend.days_since_contact}</h3>
            <p>Days Since Contact</p>
          </div>

          <div className="stat-card">
            <h3>{friend.goal}</h3>
            <p>Goal (days)</p>
          </div>

          <div className="stat-card">
            <h3>{friend.next_due_date}</h3>
            <p>Next Due Date</p>
          </div>
        </div>

        <div className="goal-card">
          <h3>Relationship Goal</h3>
          <p>Contact every {friend.goal} days</p>
          <button>Edit</button>
        </div>

        <div className="checkin-card">
          <h3>Quick Check-In</h3>

          <div className="checkin-buttons">
            <button>📞 Call</button>
            <button>💬 Text</button>
            <button>🎥 Video</button>
          </div>
        </div>

      </div>
    </div>
  );
}
