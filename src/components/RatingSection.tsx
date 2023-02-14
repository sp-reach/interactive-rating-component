import { RatingButton } from "./RatingButton";
import "./RatingSection.css";

export function RatingSection({
  rating,
  handleRatingClick,
}: {
  rating: number;
  handleRatingClick: (rating: number) => void;
}) {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <section className="RatingSection">
      {ratings.map((rate) => (
        <RatingButton
          key={rate}
          rating={rate}
          onClick={handleRatingClick}
          isSelected={rate === rating}
        />
      ))}
    </section>
  );
}
