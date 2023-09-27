import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoginContext, UserContext } from "../Context";
import "./payment.css";

function Payment() {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);
  const { userData, setUserData } = useContext(UserContext);
  const [paymentData, setPaymentData] = useState(loginData.payment || []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userIndex = userData.findIndex(
    (user) => user.username === loginData.username
  );

  const onSubmit = (data) => {
    if (!/^\d{16}$/.test(data.creditCardNumber)) {
      alert("Credit Card number must be exactly 16 digits");
      return;
    }

    if (!/^\d{3}$/.test(data.cvv)) {
      alert("CVV must be exactly 3 digits");
      return;
    }

    const today = new Date();
    const [year, month] = data.expiryDate.split("-");
    const expiryDate = new Date(Number(year), Number(month) - 1);
    if (expiryDate <= today) {
      alert("Expiry Date must be greater than today");
      return;
    }

    const updatedPayment = [...paymentData, data];
    setPaymentData(updatedPayment);

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      payment: updatedPayment,
    }));

    const updatedUserData = [...userData];
    updatedUserData[userIndex] = { ...loginData, payment: updatedPayment };
    setUserData(updatedUserData);
    console.log(updatedUserData);
    navigate("/workzone");
  };

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(loginData));
    localStorage.setItem("users", JSON.stringify(userData));
  }, [loginData, userData]);

  return (
    <div id="payment-card">
      <h2>Payment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Credit Card Number</label>
        <input
          placeholder="Credit Card Number"
          type="text"
          name="creditCardNumber"
          {...register("creditCardNumber", { required: true })}
        />
        {errors.creditCardNumber && <span>Credit Card number required</span>}

        <label>Expiry Date</label>
        <input
          type="month"
          name="expiryDate"
          {...register("expiryDate", { required: true })}
        />
        {errors.expiryDate && <span>Expiry Date is required</span>}

        <label>Security Code (CVV)</label>
        <input
          placeholder="CVV"
          type="text"
          name="cvv"
          {...register("cvv", { required: true })}
        />
        {errors.cvv && <span>CVV is required</span>}

        <button className="pay-button" type="submit">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
