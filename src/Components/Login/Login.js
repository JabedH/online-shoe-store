import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="full-form">
      <div className="form-container">
        <div>
          <h4 className="form-title">Login</h4>
          <form onSubmit={handleForm}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                id=""
                required
              />
            </div>
            <p>{error?.message}</p>
            <input type="submit" className="form-submit" value="Login" />
            <p>
              New to Online Shop?{" "}
              <Link className="form-link" to="/Signup">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
