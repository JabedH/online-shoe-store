import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Online Shoe Store</h1>
      <div className="navbar-item">
        <a href="/">Shop</a>
        <a href="Order">Order</a>
        <a href="Inventory">Inventory</a>
        <a href="About">About</a>
        <a href="/">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
