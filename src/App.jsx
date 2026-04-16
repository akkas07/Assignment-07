import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Friends from "./components/Friends";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
