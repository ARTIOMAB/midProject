import React, { useContext } from "react";
import { LoginContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./profile.css";
function Profile() {
  const { loginData } = useContext(LoginContext);
  const navigatePayment = useNavigate();

  if (!loginData) {
    return <div>Error: userData is missing.</div>;
  }
  const { username, email, birthday } = loginData;
  console.log(loginData);
  const handleClick = () => {
    navigatePayment("/payment");
  };

  return (
    <div className="profile-container">
      <h2>Hello, {username}</h2>
      <div className="profile-card">
        <div className="profile-card-userData">
          <div>Username: {username}</div>
          <div>Email: {email}</div>
          <div>Birthday : {birthday}</div>
          <div>Credit Card number:</div>
          <button onClick={handleClick}>Go to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
