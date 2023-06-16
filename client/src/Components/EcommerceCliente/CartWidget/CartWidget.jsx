import { useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router";
import styles from "./CartWidget.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLastOrderFromUser } from "../../../redux/actions";
const CartWidget = () => {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastOrderFromUser(user._id));
  }, [order.cart]);

  const calculateTotalQuantity = () => {
    const totalQuantity = order?.cart?.reduce(
      (count, product) => (count += product.quantity),
      0
    );
    return totalQuantity;
  };
  return (
    <div className={styles.cartWidgetContainer}>
      {order.cart.length > 0 && (
        <span className={styles.calculateTotal}>
          {calculateTotalQuantity() > 0 && (
            <div>{calculateTotalQuantity()}</div>
          )}
        </span>
      )}

      <div onClick={() => navigate("/cart")}>
        <BsCart />
      </div>
    </div>
  );
};

export default CartWidget;
