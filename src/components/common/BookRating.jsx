import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const BookRating = ({ rating = 0, onRate, interactive = false, starStyle, starGap }) => {
  const [hoverRating, setHoverRating] = useState(0);

  // Handle click when user rates the book
  const handleRating = (newRating) => {
    if (interactive && onRate) {
      onRate(newRating); // Send new rating to parent
    }
  };

  return (
    <div className={`flex mt-6 gap-${starGap | 1}`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = (hoverRating || rating) >= star;
        const isHalf = !isFull && (hoverRating || rating) > star - 0.5;

        return (
          <div
            key={star}
            className={`w-6 aspect-square cursor-${interactive ? "pointer" : "default"}`}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            onClick={() => handleRating(star)}
          >
            <FontAwesomeIcon
              icon={isFull ? faStarSolid : isHalf ? faStarHalfStroke : faStar}
              className={`text-white ${starStyle}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BookRating;