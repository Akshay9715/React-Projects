import "./App.css";
import { Routes, Route } from "react-router-dom";

import Accordian from "./components/accordian";
import Home from "./components/Home";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/random-color-generator" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating />} />
        <Route
          path="/image-slider"
          element={
            <ImageSlider
              url={"https://picsum.photos/v2/list"}
              limit={"10"}
              page={"1"}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
