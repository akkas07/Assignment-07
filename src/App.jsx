import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Friends from "./components/Friends";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendDetails from "./components/FriendDetails";


export default function App() {
  return (
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

        <Route path="/timeline" element={<h2>Timeline Page</h2>} />
        <Route path="/stats" element={<h2>Stats Page</h2>} />
        <Route path="/friend/:id" element={<FriendDetails />} />

        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
