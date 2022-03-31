import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./Shop.css";
import "../Shop/Shop";
import Product from "../Product/Product";
import { addToDb, getStoreCart } from "../AddToLocal/LocalStore";
import UseProduct from "../hooks/UseProduct";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = UseProduct();
  const [cart, setCart] = useState([]);

  // we change below the code we create our new code

  // useEffect(() => {
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);
  // local storage

  useEffect(() => {
    const StoredOrder = getStoreCart();
    const saveOrder = [];
    for (const id in StoredOrder) {
      const addedProduct = products.find((pro) => pro.id === id);
      if (addedProduct) {
        const quantity = StoredOrder[id];
        addedProduct.quantity = quantity;
        saveOrder.push(addedProduct);
      }
    }
    setCart(saveOrder);
  }, [products]);

  const addToCart = (SelectedProduct) => {
    // below the code is last part of this project
    let newCart = [];
    const exists = cart.find((product) => product.id === SelectedProduct.id);
    if (!exists) {
      SelectedProduct.quantity = 1;
      newCart = [...cart, SelectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== SelectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    // ---------------//
    setCart(newCart);
    addToDb(SelectedProduct.id);
  };
  return (
    <div className="products">
      <div className="product">
        {products.map((pro) => (
          <Product product={pro} key={pro.id} addToCart={addToCart} />
        ))}
      </div>
      <div className="main-cart">
        <Cart cart={cart}>
          <Link to="Order">
            <button> Review Orders </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
