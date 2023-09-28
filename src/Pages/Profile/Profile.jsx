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

  const handleClick = () => {
    navigatePayment("/payment");
  };

  const getLastFourDigits = (creditCardNumber) => {
    return creditCardNumber.slice(-4);
  };

  const renderCreditCardInfo = () => {
    let creditCardDisplay = "**** **** **** ";
    if (payment && payment.length > 0) {
      const lastPayment = payment[payment.length - 1];
      const lastFourDigits = getLastFourDigits(lastPayment.creditCardNumber);
      creditCardDisplay += lastFourDigits;
    } else {
      creditCardDisplay += "Add Payment Details";
    }
    return (
      <div className="profile-card-field-label">
        <b>Credit Card : {creditCardDisplay}</b>
      </div>
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-heading">Hello "{username}"</h2>
        <div className="profile-card-userData">
          <div className="profile-card-field">
            <b>
              <span className="profile-card-field-label">Username:</span>
            </b>{" "}
            {username}
          </div>
          <div className="profile-card-field">
            <b>
              <span className="profile-card-field-label">Email:</span>
            </b>{" "}
            {email}
          </div>
          <div className="profile-card-field">
            <b>
              <span className="profile-card-field-label">Birthday:</span>
            </b>{" "}
            {birthday}
          </div>
          <div className="profile-card-field">
            {payment && payment.length > 0 ? (
              <div className="profile-card-field">
                <b>
                  <span className="profile-card-field-label"></span>
                  {renderCreditCardInfo()}
                </b>
              </div>
            ) : (
              <div className="profile-card-field">
                <b>
                  <span className="profile-card-field-label"></span> Add Payment
                  Details!
                </b>
              </div>
            )}
          </div>
          <button className="go-to-payment-btn" onClick={handleClick}>
            Go to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
