import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componetns/ui/Navbar";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <div className="bg-[#F7F7F7]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
