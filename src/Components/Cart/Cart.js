import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  //   const { price, tax, shipping } = props.cart;
  let total = 0;
  let shipping = 0;
  for (const item of cart) {
    console.log(item);
    total = total + item.price;
    shipping = shipping + item.shipping;
  }
  const tex = Number(parseFloat(total * 0.1).toFixed(2));
  console.log(tex);
  const GrandTotal = total + shipping + tex;
  console.log(props);
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <div className="text">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $ {total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: $ {tex}</p>
        <h3>Grand Total: $ {GrandTotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
