import { Dispatch, SetStateAction, useState } from "react";
import iconStar from "../assets/icon-star.svg";
import { AppreciationCard } from "./AppreciationCard";
import "./Card.css";
import { RatingSection } from "./RatingSection";

function InputCard({
  rating,
  setRating,
  onSubmit,
}: {
  rating: number;
  onSubmit: () => void;
  setRating: Dispatch<SetStateAction<number>>;
}) {
  function handleRatingClick(rate: number) {
    setRating(rate);
  }

  return (
    <>
      <div className="IconStarWrapper">
        <img className="IconStar" src={iconStar} alt="Icon Star" />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <RatingSection handleRatingClick={handleRatingClick} rating={rating} />
      <button className="SubmitButton" onClick={onSubmit}>
        SUBMIT
      </button>
    </>
  );
}

export function Card() {
  const [rating, setRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <div className="Card">
      {submitted ? (
        <AppreciationCard rating={rating} />
      ) : (
        <InputCard
          setRating={setRating}
          onSubmit={handleSubmit}
          rating={rating}
        />
      )}
    </div>
  );
}
