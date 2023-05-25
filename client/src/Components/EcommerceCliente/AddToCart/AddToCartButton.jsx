import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/actions";

const AddToCartButton = ({ product}) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };
  return (
    <div>
      {/* <div>
        <button onClick={() => handleQuantityChange("increment")}>+</button>
        <button onClick={() => handleQuantityChange("decrement")}>-</button>
      </div> */}

      <div>
        <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default AddToCartButton;
