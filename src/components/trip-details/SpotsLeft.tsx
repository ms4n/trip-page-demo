import grid from "../../assets/24px-grid.png";
import ellipse from "../../assets/ellipse-25.svg";
import "./styles/SpotsLeft.css";

interface SpotsLeftProps {
  spotsLeft: number;
}

export const SpotsLeft: React.FC<SpotsLeftProps> = ({ spotsLeft }) => {
  return (
    <div className="spots-left-container relative z-0">
      <img src={ellipse} alt="" className="corner-ellipse top-left" />
      <img src={ellipse} alt="" className="corner-ellipse top-right" />
      <img src={ellipse} alt="" className="corner-ellipse bottom-left" />
      <img src={ellipse} alt="" className="corner-ellipse bottom-right" />

      <div className="spots-number">{spotsLeft}</div>
      <div className="spots-text">spots left for</div>
      <div className="spots-text underlined">early bird tickets</div>
      <div className="price-container">
        <span className="current-price">₹23,999</span>
        <span className="original-price">₹29,999</span>
      </div>
      <button className="reserve-button">
        <span>Reserve a spot</span>
      </button>
    </div>
  );
};
