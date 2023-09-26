import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context";

function NavBar() {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleProfileNavigate = () => {
    navigate("/profile");
  };
  const handleWorkZoneNavigate = () => {
    navigate("/workzone");
  };
  const handleLogout = () => {
    setLoginData({});
    navigate("/");
  };
  const isLoggedIn = !!loginData.username;

  return (
    <header>
      <h1>ScheduPro</h1>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Home page</li>
          </NavLink>
          <NavLink to={"/pricing"}>
            <li>Pricing</li>
          </NavLink>
          <NavLink to={"/Contact"}>
            <li>Contact us</li>
          </NavLink>
        </ul>
      </nav>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="Log-in btn">
          Log-Out
        </button>
      ) : (
        <button onClick={handleLoginNavigate} className="Log-in btn">
          Log-In
        </button>
      )}
      {isLoggedIn && (
        <button onClick={handleProfileNavigate} className="profile btn">
          Profile
        </button>
      )}
      {isLoggedIn && (
        <button onClick={handleWorkZoneNavigate} className="profile btn">
          WorkZone
        </button>
      )}
    </header>
  );
}

export default NavBar;
