import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerschema } from "../../../schemas/RegisterSchema";

const Register = () => {
  let baseUrl = "http://localhost:3000/users";
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLogined:false,
    },
    onSubmit: async (values) => {
      let { data } = await axios.get(baseUrl);

      let existUser = data.find(
        (user) => user.username === username || user.email === email
      );

      if (!existUser) {
        await axios.post(baseUrl, values);
        resetForm();
        toast.success("Registered successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error("User already exist!");
      }
    },
    validationSchema: registerschema,
  });
  const { name, username, email, password, confirmpassword } = values;
  return (
    <div className="register">
      <div className="register-form">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

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
            <label htmlFor="email" className="form-label">
              Email
            </label>
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={email}
              onChange={handleChange}
              placeholder="Your Email"
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

          <div className="form-group">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            {errors.confirmpassword && (
              <span className="error">{errors.confirmpassword}</span>
            )}

            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              className="form-input"
              value={confirmpassword}
              onChange={handleChange}
              placeholder="Your confirm password"
            ></input>
          </div>
          <p style={{marginBottom:"8px"}}>
            Already have an account?{" "}
            <Link style={{ color: "blue" }} to={"/login"}>
              Sign In
            </Link>
          </p>
          <button type="submit" className="form-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
