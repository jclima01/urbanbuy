import React from "react";
import { useSelector } from "react-redux";
import styles from "./TestCart.module.css";
const TestCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className={styles.cartContainer}>
      <ul>
        {cart?.map((product) => (
          <li key={product._id}>
            <h2>{product.productName} </h2>
            <h2>{product.quantity} </h2>
            <h2> ${product.quantity * product.price} </h2>
          </li>
        ))}
      </ul>
      <h2>total:{}</h2>
    </div>
  );
};

export default TestCart;
