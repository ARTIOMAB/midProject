import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleProfileNavigate = () => {
    navigate("/profile");
  };

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
      <button onClick={handleLoginNavigate} className="Log-in btn">
        Log-in
      </button>

      <button onClick={handleProfileNavigate} className="profile btn">
        Profile
      </button>
    </header>
  );
}

export default NavBar;
