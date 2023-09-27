import "./App.css";
import { PricingProvider, UserContext, LoginContext } from "./Context";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Register from "./Pages/Register";
import Login from "./Pages/LogIn";
import Profile from "./Pages/Profile";
import Payment from "./components/Payment";
import WorkZone from "./Pages/WorkZone";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("login")) || {}
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(loginData)),
      localStorage.setItem("users", JSON.stringify(userData));
  }, [loginData, userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <LoginContext.Provider value={{ loginData, setLoginData }}>
        <PricingProvider>
          <>
            <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="contact" element={<Contact />} />
                <Route
                  path="login"
                  element={
                    <Login userData={userData} setLoginData={setLoginData} />
                  }
                />
                <Route
                  path="login/register"
                  element={
                    <Register userData={userData} setUserData={setUserData} />
                  }
                />
                <Route path="profile" element={<Profile />} />
                <Route path="workzone" element={<WorkZone />} />
                <Route path="payment" element={<Payment />} />
              </Routes>
            </div>
          </>
        </PricingProvider>
      </LoginContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
