import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
<<<<<<< HEAD:src/components/NavBar/NavBar.jsx
import { LoginContext } from "../../Context";
import "./NavBar.css";
=======
>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545:src/components/NavBar.jsx

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
<<<<<<< HEAD:src/components/NavBar/NavBar.jsx
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="Log-out btn"
          style={{ marginLeft: "400px" }}
        >
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
=======
      <button onClick={handleLoginNavigate} className="Log-in btn">
        Log-in
      </button>

      <button onClick={handleProfileNavigate} className="profile btn">
        Profile
      </button>
>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545:src/components/NavBar.jsx
    </header>
  );
}

export default NavBar;
