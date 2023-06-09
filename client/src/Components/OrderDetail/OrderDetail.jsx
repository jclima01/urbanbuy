import styles from "./OrderDetail.module.css";

const OrderDetail = ({ orderDetail }) => {
  const order = { ...orderDetail };
  return (
    <>
      <div className={styles.orderDetailContainer}>
        <h2 className={styles.title}>Order Detail</h2>
        <div className={styles.item}>
          <strong>Address:</strong>{" "}
          <ul>
            {console.log(order)}
            <div>
              {orderDetail.adress.city && <h6>{orderDetail.adress.city}</h6>}
              {orderDetail.adress.country && (
                <h6>{orderDetail.adress.country}</h6>
              )}
              {orderDetail.adress.line1 && <h6>{orderDetail.adress.line1}</h6>}
              {orderDetail.adress.line2 && <h6>{orderDetail.adress.line2}</h6>}
              {orderDetail.adress.postal_code && (
                <h6>{orderDetail.adress.postal_code}</h6>
              )}
              {orderDetail.adress.state && <h6>{orderDetail.adress.state}</h6>}
            </div>
          </ul>
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
            {order?.cart?.map((item, index) => (
              <li key={index}>
                <h6>{item.productName}</h6>
                <h6>{item.quantity}</h6>
                <h6>{item.productName}</h6>
                <h6>{item.productName}</h6>
                <h6>{item.productName}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
