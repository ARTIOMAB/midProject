import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useContext, useState, useEffect } from "react";
import { LoginContext, UserContext } from "../Context";
import "./payment.css";
=======
>>>>>>> 28814a5eef9ef16f1793540046514f1f60cde545

function Payment({ paymentData, setPaymentData }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

    console.log(data);
    setPaymentData((prev) => [...prev, data]);
    navigate("/");
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

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
