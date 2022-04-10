import React, { useState } from "react";
import "./Shipment.css";

const Shipment = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPss] = useState("");
  const [error, setError] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event) => {
    setPassword(event.target.value);
  };
  const handleNumber = (event) => {
    setConfirmPss(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
  };
  return (
    <div className="full-form">
      <div className="form-container">
        <div>
          <h4 className="form-title">Shipping information</h4>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Your name</label>
              <input
                onBlur={handleName}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
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
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddress}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="number">Phone Number</label>
              <input
                onBlur={handleNumber}
                type="number"
                name="number"
                id=""
                required
              />
              <p style={{ color: "red" }}> {error} </p>
            </div>
            <input type="submit" className="form-submit" value="Signup" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
