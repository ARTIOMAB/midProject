import React, { useContext } from "react";
import { UserContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./profile.css";
function Profile() {
  const navigatePayment = useNavigate();
  const { userData } = useContext(UserContext);

  if (!userData) {
    return <div>Error: userData is missing.</div>;
  }
  const { username, email } = userData;
  console.log(userData);
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
          <div>Credit Card number:</div>
          <button onClick={handleClick}>Go to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
