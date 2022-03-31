import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.children);
  const { cart } = props;
  //   const { price, tax, shipping } = props.cart;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tex = Number(parseFloat(total * 0.1).toFixed(2));

  const GrandTotal = total + shipping + tex;

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <div className="text">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: $ {tex}</p>
        <h3>Grand Total: $ {GrandTotal}</h3>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
