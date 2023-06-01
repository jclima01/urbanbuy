import { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router";
import styles from "./CartWidget.module.css"
import { useSelector } from "react-redux";
const CartWidget = () => {
      const cart =  useSelector(state => state.cart)
//   const cart = JSON.parse(localStorage.getItem("cart")) ? useSelector(state => state.cart) : []
  const navigate = useNavigate()


  const calculateTotalQuantity = () => {
    console.log(cart);
    const totalQuantity = cart.reduce(
      (count, product) => (count += product.quantity),
      0
    );
    return totalQuantity;
  };
  return (
    <div  className={styles.cartWidgetContainer} onClick={()=>navigate("/cart")}>
      <p>
        {calculateTotalQuantity() > 0 && <div>{calculateTotalQuantity()}</div>}
      </p>
        <BsCart/>
    </div>
  );
};

export default CartWidget;
