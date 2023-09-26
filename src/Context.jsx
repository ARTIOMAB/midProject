import React, { createContext, useState } from "react";

export const PricingContext = createContext();

export function PricingProvider({ children }) {
  const [pricingData] = useState({
    heading: ["free", "advance", "pro"],
    content: [
      "For individuals getting started with seamless scheduling",
      "For teams who need increased productivity and collaboration",
      "For professionals who want an automated scheduling solution",
    ],
    description: ["free for 1 week", "per user per month", "per user per year"],
    price: ["0$", "65$", "76$"],
    includes1: ["1 user", "3 user", "6 user"],
    includes2: ["save data", "no ads", "no ads"],
    includes3: ["One booking page", "activity reports", "team share data"],
    buy: ["Sign up", "buy", "buy"],
  });

  return (
    <PricingContext.Provider value={pricingData}>
      {children}
    </PricingContext.Provider>
  );
}

export const UserContext = createContext({ users: [] });
export const LoginContext = createContext({ logins: {} });

