import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import "./Login.css";
import { loginschema } from "../../../schemas/LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  let baseUrl = "http://localhost:3000/users";
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      const { data } = await axios(baseUrl);

      let existUser = data.find(
        (user) => user.username == username && user.password === password
      );

      if (existUser) {
        await axios.put(`${baseUrl}/${existUser.id}`, {
          ...existUser,
          isLogined: true,
        });
        resetForm();
        toast.success("User register successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error("User not found");
      }

      validationSchema: loginschema;
    },
  });

  const { username, password } = values;

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <div className="label-container">
            <label htmlFor="username">Username</label>
            {errors ? <span className="error">{errors.username}</span> : null}
          </div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="password">Password</label>
            {errors ? <span className="error">{errors.password}</span> : null}
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <p>
          Don't have an account?
          <Link style={{ color: "blue" }} to={"/register"}>
            Sign Up
          </Link>
        </p>
        <button className="login-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
