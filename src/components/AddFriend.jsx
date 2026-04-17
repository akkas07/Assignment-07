import { useState, useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";
import "./AddFriend.css";

export default function AddFriend() {
  const { addFriend } = useContext(FriendsContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name,
      email,
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
      days_since_contact: 0,
      status: "on-track",
      tags: tags.split(",").map((t) => t.trim()),
      bio: "New friend added.",
      goal: 14,
      next_due_date: "2025-07-20"
    };

    addFriend(newFriend);

       setName("");
       setEmail("");
    setTags("");

    alert("Friend added successfully!");
  };

  return (
    <div className="add-container">
      <h2>Add a New Friend</h2>

      <form onSubmit={handleSubmit} className="add-form">
        <label>Name</label>
        <input 
            type="text" 
             value={name}
           onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input 
            type="email" 
           value={email}
             onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Tags (comma separated)</label>
        <input 
             type="text" 
          value={tags}
            onChange={(e) => setTags(e.target.value)}
          required
        />

        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}
