import "./Stats.css";
import friendsData from "../data/friends.json";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const total = friendsData.length;
  const onTrack = friendsData.filter(f => f.status === "on-track").length;
  const almostDue = friendsData.filter(f => f.status === "almost-due").length;
  const overdue = friendsData.filter(f => f.status === "overdue").length;

  const interactionsThisMonth = timeline.length;

  return (
    <div className="stats-container">
      <h2>Stats Overview</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>{total}</h3>
          <p>Total Friends</p>
        </div>

        <div className="stat-box">
          <h3>{onTrack}</h3>
          <p>On Track</p>
        </div>

        <div className="stat-box">
          <h3>{almostDue}</h3>
          <p>Need Attention</p>
        </div>

        <div className="stat-box">
          <h3>{overdue}</h3>
          <p>Overdue</p>
        </div>

        <div className="stat-box">
          <h3>{interactionsThisMonth}</h3>
          <p>Interactions This Month</p>
        </div>
      </div>

      <h3>Status Breakdown</h3>
      <div className="pie-chart">
        <div className="slice ontrack" style={{ "--value": onTrack }}></div>
        <div className="slice almostdue" style={{ "--value": almostDue }}></div>
        <div className="slice overdue" style={{ "--value": overdue }}></div>
      </div>
    </div>
  );
}
