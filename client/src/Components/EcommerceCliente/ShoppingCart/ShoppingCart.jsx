import { Link, useNavigate } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import RemoveFromCartButton from "../RemoveFromCartButton/RemoveFromCartButton";
import {
  createCheckoutSession,
  deleteProductFromCart,
  getCartFromLS,
  getLastOrderFromUser,
  getUserById,
  increasePoductQuantityInCart,
  reducePoductQuantityInCart,
} from "../../../redux/actions";
import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import axios from "axios";
export default function ShoppingCart() {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    dispatch(getUserById("6476854188cbebbefc19ba22"));
    dispatch(getLastOrderFromUser("6476854188cbebbefc19ba22"));
    setCartList(order.cart);
  }, []);
  // setCartList(order.cart)
  const dispatch = useDispatch();

  const checkout = async (cartList, userId) => {
    const { data } = await axios.post(
      "orders/checkout/create-checkout-session",
      { cart: cartList, userId: userId }
    );

    const popupWindow = window.open(
      data.url,
      "Checkout Popup",
      "width=1200,height=600"
    );
  };

  const removeProductFromCart = (productId, orderId) => {
    dispatch(deleteProductFromCart(productId, orderId));
  };

  const reduceProductQuantity = (productId, orderId, reduce = true) => {
    dispatch(reducePoductQuantityInCart(productId, orderId, reduce));
  };

  const increaseProductQuantity = (productId, orderId, increase = true) => {
    dispatch(increasePoductQuantityInCart(productId, orderId, increase));
  };

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.continueShopping}>
        <Link to="/homeCliente">
          <BsArrowLeftSquareFill className={styles.icon} />
        </Link>
        <h2>Continue Shopping</h2>
      </div>

      <div className={styles.titlesContainer}>
        <h2>Shopping cart</h2>
        {/* <h4>You have {calculateTotalQuantity()} items in your cart</h4> */}
      </div>

      <div className={styles.listContainer}>
        {order.cart?.map((product) => (
          <div key={product._id} className={styles.cardProduct}>
            <img
              src={product.imageUrl}
              alt={product.productName}
              className={styles.productImg}
            />
            <h5>{product.productName}</h5>
            <h5>${product.price}</h5>
            <div className={styles.counterButtons}>
              <GrAddCircle
                onClick={() => increaseProductQuantity(product._id, order._id)}
                className={styles.btn}
              >
                {" "}
              </GrAddCircle>
              <GrSubtractCircle
                onClick={() => reduceProductQuantity(product._id, order._id)}
                className={styles.btn}
              >
                {" "}
              </GrSubtractCircle>
            </div>
            <h5>Qty: {product.quantity}</h5>
            <h4>$ {product.price * product.quantity}</h4>
            <div className={styles.trashIcon}>
              <FaRegTrashAlt
                onClick={() => removeProductFromCart(product._id, order._id)}
              />
            </div>
            {/* <RemoveFromCartButton product={product} /> */}
          </div>
        ))}
        <div className={styles.total}>Total: ${order.total}</div>
        <button onClick={() => checkout(cartList, user._id)}>COMPRAR</button>
      </div>
    </div>
  );
}
