import { Link } from "react-router-dom";

import authManImage from "../../assets/images/auth-page-man.png";

import "./Signup.css";

const Signup = () => {
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
        {/* Right side with Signup form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center custom-bg-signup">
          <div className="signup-form-container">
            <h2 className="text-center mb-4 fw-bold">
              Join us & get more opportunities!
            </h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control p-3"
                  id="name"
                  placeholder="Enter your full name"
                />
              </div>
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

              <button
                type="submit"
                className="custom-bg-signup-btn w-100 p-3 border-0 text-white fw-bold"
              >
                Signup
              </button>
            </form>
            <p className="text-center mt-3">
              Already have an account?
              <Link to="/login" className="text-decoration-none ms-2">
                Login
              </Link>
            </p>
            <p className="mt-4">
              By clicking 'Signup', you acknowledge that you have read and
              accept the
              <Link to="/terms" className="text-decoration-none ms-2">
                Terms of Service
              </Link>{" "}
              and
              <Link to="/privacy" className="text-decoration-none ms-2">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
