import thankYou from "../assets/illustration-thank-you.svg";
import "./AppreciationCard.css";

export function AppreciationCard({ rating }: { rating: number }) {
  return (
    <section className="AppreciationCard">
      <div className="IconThankYouWrapper">
        <img className="IconThankYou" src={thankYou} alt="Icon Thank You" />
      </div>
      <p className="Selection">You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p className="Appreciation">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}
