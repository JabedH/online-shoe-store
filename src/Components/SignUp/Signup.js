import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Signup.css";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPss] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPass = (event) => {
    setConfirmPss(event.target.value);
  };

  if (user) {
    navigate("/");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      setError("password did not match");
      return;
    }
    // if (password.length < 6) {
    //   setError("password must be 6 characters or longer");
    //   return;
    // }
    createUserWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };
  return (
    <div className="full-form">
      <div className="form-container">
        <div>
          <h4 className="form-title">Sign Up</h4>
          <form onSubmit={handleCreateUser}>
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
            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                onBlur={handleConfirmPass}
                type="password"
                name="confirm-password"
                id=""
                required
              />
              <p style={{ color: "red" }}> {error} </p>
            </div>
            <input type="submit" className="form-submit" value="Signup" />
            <p>
              Already have an account?{" "}
              <Link className="form-link" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
