import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      <div className="flex justify-center gap-2 m-5">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`font-bold text-5xl text-center ${index <= (hover || rating) ? "text-yellow-300" : ""}`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
