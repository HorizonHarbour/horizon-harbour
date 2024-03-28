import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import authManImage from "../../assets/images/auth-page-man.png";
import { Link, Navigate } from "react-router-dom";

import { GoogleLogin } from "@react-oauth/google";

import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signin",
        data
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      setLoginSuccess("Login successful! Reloading to home page...");
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
      window.location.reload();
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setLoginError(error.response.data.message);
    }
  };

  return (
    <div className="container min-vh-100">
      <div className="row min-vh-100">
        {/* Left side with random man image */}
        <div className="col-md-6 p-0 d-flex justify-content-center align-items-center d-none d-md-flex position-relative">
          <img
            src={authManImage}
            alt="Random Man"
            className="img-fluid position-absolute bottom-0"
          />
        </div>
        {/* Right side with login form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center custom-bg-login">
          <div className="login-form-container">
            <h2 className="text-center mb-4 fw-bold">
              Welcome Back! Good to see you!
            </h2>
            {loginError && (
              <p className="text-danger fw-bolder text-center">{loginError}</p>
            )}
            {loginSuccess && (
              <p className="text-success fw-bolder text-center">
                {loginSuccess}
              </p>
            )}
            {/* GOOGLE LOGIN */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            {/* GOOGLE LOGIN */}
            <p className="stripe-line text-center mb-4 mt-4">
              Or login with Email & Password
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="email"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {/* remember me */}
              <div className="mb-4 form-check d-flex justify-content-between">
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="custom-bg-login-btn w-100 p-3 border-0 text-white fw-bold"
              >
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have an account?
              <Link to="/signup" className="text-decoration-none ms-2">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
