import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const NavBar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar">
      <h1>Online Shoe Store</h1>
      <div className="navbar-item">
        <Link to="/">Shop</Link>
        <Link to="Order">Order</Link>
        <Link to="Inventory">Inventory</Link>
        <Link to="About">About</Link>
        <Link to="/">
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </Link>
        {user ? (
          <button onClick={handleSignOut}>Log Out</button>
        ) : (
          <Link to="Login"> Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
