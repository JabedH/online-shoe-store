import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Products.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (cartData) => {
    const newCart = [...cart, cartData];
    setCart(newCart);
    // console.log(newCart);
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="products">
      <div className="product">
        {product.map((pro) => (
          <SingleProduct product={pro} key={pro.id} addToCart={addToCart} />
        ))}
      </div>
      <div className="main-cart">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Products;
