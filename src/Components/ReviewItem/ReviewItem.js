import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  const { handleRemoveProduct, product } = props;
  const { name, img, price, shipping, quantity } = props.product;
  return (
    <div className="review-Item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) : name + "..."}
          </p>
          <p>Price: ${price}</p>
          <p>Shipping Charge : ${shipping}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className="delete-container">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="delete-btn"
          >
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
