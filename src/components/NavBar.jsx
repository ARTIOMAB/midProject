import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <h1>ScheduPro</h1>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Home page</li>
          </NavLink>
          <NavLink to={"pricing"}>
            <li>Pricing</li>
          </NavLink>
          <NavLink to={"Contact"}>
            <li>contact us</li>
          </NavLink>
        </ul>
      </nav>
      <NavLink to={"LogIn"} className="Log-in btn">
        Log-in
      </NavLink>
    </header>
  );
}

export default NavBar;
