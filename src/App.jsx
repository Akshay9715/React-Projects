import "./App.css";
import { Routes, Route } from "react-router-dom";

import Accordian from "./components/accordian";
import Home from "./components/Home";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/random-color-generator" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating />} />
      </Routes>
    </>
  );
}

export default App;
