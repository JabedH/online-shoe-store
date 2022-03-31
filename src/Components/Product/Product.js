import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  const { addToCart } = props;
  const { id, name, img, price } = props.product;
  //   console.log(props);
  return (
    <div className="singleProduct">
      <div className="details">
        <img src={img} alt="" />
        <h5>{name}</h5>
        <p> ${price}</p>
        <button onClick={() => addToCart(props.product)} className="addtocart">
          <p>Add To Cart</p> <FontAwesomeIcon icon={faShoppingCart} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
