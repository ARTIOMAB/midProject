import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoginContext, UserContext } from "../Context";

function Payment() {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);
  const { userData, setUserData } = useContext(UserContext);
  const [paymentData, setPaymentData] = useState(loginData.tasks || []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userIndex = userData.findIndex(
    (user) => user.username === loginData.username
  );

  useEffect(() => {
    localStorage.setItem("logins", JSON.stringify(loginData));
    localStorage.setItem("users", JSON.stringify(userData));
  }, [loginData, userData]);

  const onSubmit = (data) => {
    if (!/^\d{2}$/.test(data.creditCardNumber)) {
      alert("Credit Card number must be exactly 16 digits");
      return;
    }

    if (!/^\d{1}$/.test(data.cvv)) {
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
    const setPayment = (element) => {
      const updatePayment = paymentData.filter((item) => item !== element);
      setPaymentData(updatePayment);
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        payment: updatePayment,
      }));
      const updateUserData = [...userData];
      updateUserData[userIndex] = { ...loginData, payment: updatePayment };
      setUserData(updateUserData);
      console.log(updateUserData);
    };
    console.log(data);
    setPaymentData((prev) => [...prev, data]);
    navigate("/workzone");
  };

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
