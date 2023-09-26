import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register({ setUserData, userData }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userExists = userData.find((user) => user.username === data.username);
    if (userExists) {
      return alert("Username already taken. Please try again");
    }
    const emailExists = userData.find((user) => user.email === data.email);
    if (emailExists) {
      return alert("Email has already been used. Please try again");
    }
    if (!emailExists && !userExists) {
      data.tasks = [];
      data.payment = [];
      console.log(data);
      setUserData((prev) => [...prev, data]);

      navigate("/LogIn");
    }
  };

  return (
    <main id="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="UserName"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username && <span>UserName is required</span>}
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>email is required</span>}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && <span>password is required</span>}
        <input
          type="date"
          placeholder="BirthDay"
          {...register("birthday", { required: true })}
        />
        {errors.birthday && <span>birthday is required</span>}

        <br />

        <button>
          <input type="submit" />
        </button>
      </form>
      <Link to={"/login"}>Already registered?</Link>
    </main>
  );
}
