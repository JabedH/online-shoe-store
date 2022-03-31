import React from "react";
import { Link } from "react-router-dom";
import { removeFromDb } from "../AddToLocal/LocalStore";
import Cart from "../Cart/Cart";
import useCart from "../hooks/useCart";
import UseProduct from "../hooks/UseProduct";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Order = () => {
  const [products, setProducts] = UseProduct();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="products">
      <div className="review-Item-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveProduct={handleRemoveProduct}
            key={product.id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="main-cart">
        <Cart cart={cart}>
          <Link to="/Inventory">
            <button> Proceed Checkout </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
