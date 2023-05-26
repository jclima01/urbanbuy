import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/actions";

const AddToCart = ({ product, stock}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleQuantityChange = (operation) => {
    if (operation === "increment" && quantity < stock) {
      setQuantity(quantity + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (productId, quantity) => {
    
  };
  return (
    <div>
      <p>Counter: {quantity}</p>
      <div>
        <button onClick={() => handleQuantityChange("increment")}>+</button>
        <button onClick={() => handleQuantityChange("decrement")}>-</button>
      </div>

      <div>
        <button onClick={() => dispatch(addProductToCart(product._id, quantity))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
