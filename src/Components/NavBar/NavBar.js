import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Online Shoe Store</h1>
      <div className="navbar-item">
        <a href="">Order</a>
        <a href="">Manage Inventory</a>
        <a href="#">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </a>
      </div>
    </div>
  );
};

export default NavBar;
