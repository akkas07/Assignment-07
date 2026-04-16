import { createContext, useState } from "react";

export const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (name, action) => {
    const newEntry = {
      id: Date.now(),
      name,
      action,
      date: new Date().toISOString().split("T")[0]
    };

    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}
