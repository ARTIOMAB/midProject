import React from "react";
import { useNavigate } from "react-router-dom";

function PricingCard(props) {
  const navigate = useNavigate();
  const handeLBuyClick = () => {
    navigate("/payment");
  };
  return (
    <div className="pricing-card">
      <h2 className="card-heading">{props.heading}</h2>
      <div className="card-contant">{props.content}</div>
      <div className="price">{props.price}</div>
      <div className="description">{props.description}</div>
      <div className="include">Include:</div>
      <ul className="includes-list">
        <li>{props.includes1}</li>
        <li>{props.includes2}</li>
        <li>{props.includes3}</li>
      </ul>
      <button onClick={handeLBuyClick} className="pricingCard-buy-btn">
        buy
      </button>
    </div>
  );
}

export default PricingCard;
