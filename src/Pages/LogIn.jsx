import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext, LoginContext } from "../Context";
import { useContext } from "react";
import "./login.css";
export default function LogIn() {
  const { userData } = useContext(UserContext);
  const { setLoginData } = useContext(LoginContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ username, password }) => {
    console.log(userData);
    console.log(userData.find((user) => user.username === username));
    const userExists = userData.find((user) => user.username === username);
    if (!userExists) {
      return alert("Wrong credentials!");
    }
    const passwordMatch = userExists.password === password;
    if (!passwordMatch) {
      return alert("Wrong credentials!");
    }
    if (passwordMatch && userExists) {
      setLoginData(userData.find((user) => user.username === username));
      navigate("/workzone");
      return alert("Logged in!");
    }
  };
  return (
    <div className="login-container">
      <div id="login">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="UserName"
            {...register("username", { required: true, maxLength: 20 })}
          />
          {errors.username && <span>User Name is required</span>}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && <span>Password Is Required</span>}
          <br />

          <button>
            <input type="submit" />
          </button>
        </form>
        <Link to={"Register"}>Not Registered Yet?</Link>
      </div>
    </div>
  );
}
