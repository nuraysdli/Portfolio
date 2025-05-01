import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import "./Register.css";
import { registerschema } from "../../../schemas/RegisterSchema";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let baseUrl = "http://localhost:3000/users";
  const navigate = useNavigate();

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLogined: false,
    },
    validationSchema: registerschema,
    onSubmit: async (values) => {
      try {
        let { data } = await axios.get(baseUrl);
        let existUser = data.find(
          (user) =>
            user.username === values.username || user.email === values.email
        );

        if (!existUser) {
          await axios.post(baseUrl, values);
          resetForm();
          toast.success("User registered successfully");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("User already exists");
        }
      } catch (error) {
        toast.error("Server error");
      }
    },
  });

  const { name, surname, username, email, password, confirmpassword } = values;

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div>
          <div className="label-container">
            <label htmlFor="name">Name</label>
            {touched.name && errors.name && (
              <span className="error">{errors.name}</span>
            )}
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="surname">Surname</label>
            {touched.surname && errors.surname && (
              <span className="error">{errors.surname}</span>
            )}
          </div>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="username">Username</label>
            {touched.username && errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="email">Email</label>
            {touched.email && errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="password">Password</label>
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div>
          <div className="label-container">
            <label htmlFor="confirmpassword">Confirm Password</label>
            {touched.confirmpassword && errors.confirmpassword && (
              <span className="error">{errors.confirmpassword}</span>
            )}
          </div>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <p>
          Already have an account?{" "}
          <Link style={{ color: "blue" }} to={"/login"}>
            Sign In
          </Link>
        </p>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
