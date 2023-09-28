import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext, UserContext } from "../../Context";
import "./payment.css";

function Payment() {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(LoginContext);
  const { setUserData } = useContext(UserContext);

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

    const payment = {
      creditCardNumber: data.creditCardNumber,
      cvv: data.cvv,
      expiryDate: data.expiryDate,
    };

    const updatedLoginData = {
      ...loginData,
      payment: [...loginData.payment, payment],
    };

    setLoginData(updatedLoginData);
    setUserData(updatedLoginData);

    navigate("/");
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Payment</h2>
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
