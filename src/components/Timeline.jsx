import "./Timeline.css";

export default function Timeline() {
  // Dummy timeline data (later we will make it dynamic)
  const timeline = [
    {
      id: 1,
      name: "David Kim",
      action: "Called",
      date: "2025-07-10",
    },
    {
      id: 2,
      name: "Emma Wilson",
      action: "Texted",
      date: "2025-07-09",
    },
    {
      id: 3,
      name: "Lisa Nakamura",
      action: "Video Call",
      date: "2025-07-08",
    }
  ];

  return (
    <div className="timeline-container">
      <h2>Timeline</h2>

      <div className="timeline-list">
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
