import React from "react";
import { useDispatch } from "react-redux";
import { RemoveProductFromCart } from "../../../redux/actions";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./RemoveFromCartButton.module.css"
const RemoveFromCartButton = ({ product }) => {
  const dispatch = useDispatch();

  const handleButton = (product) => {
    dispatch(RemoveProductFromCart(product));
  };
  return (
    <div className={styles.trashIcon}>
      <FaRegTrashAlt onClick={()=>handleButton(product)}/>
    </div>
  );
};

export default RemoveFromCartButton;
