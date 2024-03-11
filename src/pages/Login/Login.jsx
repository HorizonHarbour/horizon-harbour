import { Link } from "react-router-dom";

import authManImage from "../../assets/images/auth-page-man.png";

import "./Login.css";

const Login = () => {
  return (
    <div className="container vh-100">
      <div className="row vh-100">
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
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control p-3"
                  id="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control  p-3"
                  id="password"
                  placeholder="Enter password"
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
                <Link to="/forgot-password" className="text-decoration-none">
                  Forgot Password?
                </Link>
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
