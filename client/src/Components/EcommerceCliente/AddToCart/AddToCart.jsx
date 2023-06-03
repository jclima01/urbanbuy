import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, createOrder } from "../../../redux/actions";
import styles from "./AddToCart.module.css";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import Swal from "sweetalert2";
import axios from "axios";
import {getUserById} from "../../../redux/actions";
const AddToCart = ({ product, stock }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order);
  console.log(cart);
  console.log(order);
  const total = cart.reduce(
    (count, product) => (count += product.quantity * product.price),
    0
  );

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleQuantityChange = (operation) => {
    if (operation === "increment" && quantity < stock) {
      setQuantity(quantity + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDispatch = (productId, quantity) => {
    dispatch(getUserById("6476854188cbebbefc19ba22"))
      .then(dispatch(addProductToCart(productId, quantity)))
      .then(
        dispatch(createOrder(user.fullName, user.email, cart, total, user._id))
      );

    Swal.fire({
      title: "Product added to Cart",
      // text: 'Do you want to continue',
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className={styles.addToCartContainer}>
      <p className={styles.quantity}>Quantity: {quantity}</p>

      <div className={styles.counterButtons}>
        <GrAddCircle
          onClick={() => handleQuantityChange("increment")}
          className={styles.btn}
        >
          {" "}
        </GrAddCircle>
        <GrSubtractCircle
          onClick={() => handleQuantityChange("decrement")}
          className={styles.btn}
        >
          {" "}
        </GrSubtractCircle>
      </div>

      <div>
        <button
          onClick={() => handleDispatch(product._id, quantity)}
          className={styles.addToCartBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
