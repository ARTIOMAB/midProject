import React from "react";
import { useContext } from "react";
import { UserContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigatePayment = useNavigate();

  const { userData } = useContext(UserContext);
  if (!userData || userData.length === 0) {
    return <div> error to import userData</div>;
  }
  const user = userData[userData.length - 1];
  const { username, password, email } = user;
  const handelClick = () => {
    navigatePayment("/payment");
  };

  return (
    <div className="profile-container">
      <h2>hello {username}</h2>
      <div className="profile-card">
        <div className="profile-card-userData">
          <div>userName: {username}</div>
          <div>Email: {email}</div>
          <div>Password: {password}</div>
          <div>Account type:</div>
          <button onClick={handelClick}>payment</button>
        </div>
      </div>
    </div>
  );
}
export default Profile;
