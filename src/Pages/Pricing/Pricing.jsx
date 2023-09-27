import React, { useContext } from "react";
import PricingCard from "../../components/PricingCard/PricingCard";
import { PricingContext } from "../../Context";
import "./pricing.css";

function Pricing() {
  const pricingData = useContext(PricingContext);

  if (!pricingData) {
    return console.log("hello");
  }

  const {
    heading,
    content,
    description,
    price,
    includes1,
    includes2,
    includes3,
    buy,
  } = pricingData;

  return (
    <div className="pricing-container">
      <h2 className="deals-heading">Make the most of your day</h2>
      <div className="pricing-box">
        {heading.map((item, index) => (
          <PricingCard
            key={index}
            heading={item}
            content={content[index]}
            description={description[index]}
            price={price[index]}
            includes1={includes1[index]}
            includes2={includes2[index]}
            includes3={includes3[index]}
            buy={buy[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
