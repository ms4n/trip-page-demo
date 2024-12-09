import cloudsLeft from "../../assets/clouds-left.png";
import cloudsRight from "../../assets/clouds-right.png";
import trolley from "../../assets/trolley.png";
import bgNoise from "../../assets/bg-noise.png";
import "./styles/RefundPolicy.css";

export const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <div className="clouds-container">
        <div className="cloud-left" />
        <div className="cloud-right" />
      </div>
      <div className="trolley-image" />
      <div className="noise-overlay" />
      <div className="content">
        <div className="text-primary">100% refundable,</div>
        <div className="text-secondary">Until 30 days to trip</div>
      </div>
    </div>
  );
}; 