import React from "react";
import { useDispatch } from "react-redux";
import { RemoveProductFromCart } from "../../../redux/actions";

const RemoveFromCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleButton = (product) => {
    dispatch(RemoveProductFromCart(product));
  };
  return (
    <div>
      <button onClick={()=>handleButton(product)}> remove from cart</button>
    </div>
  );
};

export default RemoveFromCartButton;
