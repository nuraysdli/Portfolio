import { useFormik } from "formik";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginschema } from "../../../schemas/LoginSchema";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:3000/users";
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async () => {
      const { data } = await axios(baseUrl);

      let existUser = data.find(
        (user) => user.username == username && user.password === password
      );

      if (existUser) {
        await axios.put(`${baseUrl}/${existUser.id}`, { ...existUser, isLogined: true });
        toast.success("Logined successfully!")
        resetForm();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else{
        toast.error("User not found")
      }
    },
    validationSchema: loginschema,
  });

  const { username, password } = values;

  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              value={username}
              onChange={handleChange}
              placeholder="Your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={password}
              onChange={handleChange}
              placeholder="Your password"
            />
          </div>
          <p style={{ marginBottom: "8px" }}>
            Don't have an account?{" "}
            <Link style={{ color: "blue" }} to={"/register"}>
              Sign Up
            </Link>
          </p>
          <button type="submit" className="form-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
