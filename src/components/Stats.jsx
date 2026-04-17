import "./Stats.css";
import { useContext } from "react";
import { FriendsContext } from "../context/FriendsContext";
import { TimelineContext } from "../context/TimelineContext";

export default function Stats() {
  const { friends } = useContext(FriendsContext);
  const { timeline } = useContext(TimelineContext);

  const total = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const almostDue = friends.filter(f => f.status === "almost-due").length;
  const overdue = friends.filter(f => f.status === "overdue").length;

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
