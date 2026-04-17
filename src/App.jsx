import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Friends from "./components/Friends";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendDetails from "./components/FriendDetails";
import Timeline from "./components/Timeline";
import Stats from "./components/Stats";
import AddFriend from "./components/AddFriend";

import { FriendsProvider } from "./context/FriendsContext";
import { TimelineProvider } from "./context/TimelineContext";

export default function App() {
  return (
    <FriendsProvider>
      <TimelineProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Friends />
                </>
              }
            />

            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="/add" element={<AddFriend />} />

            <Route path="*" element={<h2>404 Page Not Found</h2>} />
          </Routes>
        </BrowserRouter>
      </TimelineProvider>
    </FriendsProvider>
  );
}
