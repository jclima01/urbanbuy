
import styles from "./ShoppingCart.module.css";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  
const cartItems = useSelector((state) => state.cartItems);

const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }
    return total;
  };

  return (
    <div className={`${styles["shopping-cart"]} ${styles["mercado-libre"]}`}>
      <div>
        <h2>Tu compra ({cartItems.length})</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <p>Total: {calculateTotal()}</p>
      </div>
    </div>
  );
}

