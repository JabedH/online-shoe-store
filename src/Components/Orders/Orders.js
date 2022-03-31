import React from "react";
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
