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
  const { username, email, birthday, payment } = loginData;
  const lastPayment = payment[payment.length - 1];
  const getLastFourDigits = (creditCardNumber) => {
    return creditCardNumber.slice(-4);
  };

  console.log(loginData);
  const handleClick = () => {
    navigatePayment("/payment");
  };

  return (
    <div className="profile-container">
      <h2>Hello, {username}</h2>
      <div className="profile-card">
        <div className="profile-card-userData">
          <div>
            <b>Username:</b> {username}
          </div>
          <div>
            <b>Email:</b> {email}
          </div>
          <div>
            <b>Birthday :</b> {birthday}
          </div>
          <div>
            <b>Credit Card : **** **** **** </b>
            {getLastFourDigits(lastPayment.creditCardNumber)}
          </div>
          <button onClick={handleClick}>Go to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
