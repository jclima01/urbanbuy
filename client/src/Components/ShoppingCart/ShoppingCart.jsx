import styles from "./ShoppingCart.module.css";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }
    return total;
  };
  console.log(cartItems);
  return (
    <div className={styles.shoppingCart}>
      <div>
        <h2>Tu compra ({cartItems.length})</h2>
        <ul>
          {cartItems?.map((product) => (
            <li key={product._id}>
              <h5>{product.productName}</h5>
              <img src={product.imageUrl} alt={product.productName} />
              <h5>{product.price}</h5>
              <h5>X {product.quantity}</h5>
              <h5>$ {product.price * product.quantity}</h5>
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotal()}</p>
      </div>
    </div>
  );
}
