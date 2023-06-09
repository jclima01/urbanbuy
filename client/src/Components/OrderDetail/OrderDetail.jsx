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
              {order.adress?.city && <h6>{"city: " + order.adress?.city}</h6>}
              {order.adress?.country && <h6>{"country: " +order.adress?.country}</h6>}
              {order.adress?.line1 && <h6>{"line1: " +order?.adress?.line1}</h6>}
              {order.adress?.line2 && <h6>{"line2: " +order?.adress?.line2}</h6>}
              {order.adress?.postal_code && (
                <h6>{"postal code: " +order.adress?.postal_code}</h6>
              )}
              {order.adress?.state && <h6>{"state: " +order?.adress?.state}</h6>}
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
                <h6>{item.productName + " * " + item.quantity}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
