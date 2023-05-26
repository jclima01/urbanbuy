import { Link } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import { useSelector } from "react-redux";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import RemoveFromCartButton from "../RemoveFromCartButton/RemoveFromCartButton";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = cartItems.reduce(
      (count, product) => (count += product.quantity * product.price),
      0
    );
    return total;
  };

  const calculateTotalQuantity = () => {
    const totalQuantity = cartItems.reduce(
      (count, product) => (count += product.quantity),
      0
    );
    return totalQuantity;
  };
  console.log(cartItems);

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
        <h4>You have {calculateTotalQuantity()} items in your cart</h4>
      </div>

      <div className={styles.listContainer}>
        {cartItems?.map((product) => (
          <div key={product._id} className={styles.cardProduct}>
            <img
              src={product.imageUrl}
              alt={product.productName}
              className={styles.productImg}
            />
            <h5>{product.productName}</h5>
            <h5>${product.price}</h5>
            <h5>Qty: {product.quantity}</h5>

            <h4>$ {product.price * product.quantity}</h4>
            <RemoveFromCartButton product={product} />
          </div>
        ))}
        <div className={styles.total}>Total: ${calculateTotal()}</div>
      </div>
    </div>
  );
}
