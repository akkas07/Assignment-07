import { FriendsProvider } from "./context/FriendsContext";
import { TimelineProvider } from "./context/TimelineContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FriendsProvider>
      <TimelineProvider>
        <App />
      </TimelineProvider>
    </FriendsProvider>
  </React.StrictMode>
);
