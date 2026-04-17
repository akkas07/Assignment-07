import "./Timeline.css";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="timeline-container">
      <h2>Timeline</h2>

      <div className="timeline-list">
        {timeline.length === 0 && <p>No interactions yet.</p>}

        {timeline.map((item) => (
          <div key={item.id} className="timeline-card">
            <h3>{item.name}</h3>
            <p>{item.action}</p>
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
