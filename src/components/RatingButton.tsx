import "./RatingButton.css";

export function RatingButton({
  rating,
  onClick,
  isSelected,
}: {
  rating: number;
  onClick: (rating: number) => void;
  isSelected: boolean;
}) {
  function handleClick() {
    onClick(rating);
  }

  let classes = "RatingButton";

  if (isSelected) {
    classes += " selected";
  }

  return (
    <button className={classes} onClick={handleClick}>
      {rating}
    </button>
  );
}
