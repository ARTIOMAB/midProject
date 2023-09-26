import React, { createContext } from "react";

const initialData = {
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
  buy: ["Sigh up", "buy", "buy"],
};

export const DataContext = createContext();

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={initialData}>{children}</DataContext.Provider>
  );
}
