
import styles from "./OrderDetail.module.css";

const OrderDetail = (props) => {
    const order = props.orderDetail;
    return (<>
    <div className={styles.orderDetailContainer}>
      <h2 className={styles.title}>Order Detail</h2>
      <div className={styles.item}>
        <strong>Address:</strong> {order.adress}
      </div>
      <div className={styles.item}>
        <strong>Status:</strong> {order.status}
      </div>
      <div className={styles.item}>
        <strong>Created At:</strong> {order.createdAt}
      </div>
      <div className={styles.item}>
        <strong>Email:</strong> {order.email}
      </div>
      <div className={styles.item}>
        <strong>Full Name:</strong> {order.fullName}
      </div>
      <div className={styles.item}>
        <strong>Payment:</strong> {order.payment ? "Paid" : "Unpaid"}
      </div>
      <div className={styles.item}>
        <strong>Total:</strong> {order.total}
      </div>
      <div className={styles.item}>
        <strong>Cart Items:</strong>
        <ul className={styles.cartItems}>
          {order.cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
      
      </>
    )
  }
  
  export default OrderDetail