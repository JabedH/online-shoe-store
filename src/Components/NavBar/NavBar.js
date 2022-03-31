import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Online Shoe Store</h1>
      <div className="navbar-item">
        <Link to="/">Shop</Link>
        <Link to="Order">Order</Link>
        <Link to="Inventory">Inventory</Link>
        <Link to="About">About</Link>
        <Link to="/">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
