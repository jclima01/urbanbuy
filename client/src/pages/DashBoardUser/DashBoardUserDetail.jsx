import { useSelector } from "react-redux";
import avatar from "../../assets/avatar.jpg";
import styles from "./DashBoardUserDetail.module.css";
const DashBoardUserDetail = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.userDetailContainer}>
      <div className={styles.header }>
          <div className={styles.userAvatar}>
          <img
            src={avatar}
            alt={user.fullName}
            width="50px"
            className="imgAvatar"
          />
          </div>

          <h2>{user.fullName}</h2>
          <h4>{user.email}</h4>
      </div>

            <div className={styles.contentAllOrders}>
              <h2 className={styles.titleOrder}>User orders:</h2>
              <ul className={styles.listUl}>
              <li>status:</li><li>date:</li><li>created:</li><li>prod:</li><li>price:</li><li>payment</li>
              </ul>
              <ul>
              {user?.orders?.map((order) => {console.log(order);
                return (
                  <li className={styles.liUsers} key={order._id}>
                    <h5> {order.status}</h5>
                    <h5>{order.createdAt.slice(0,10)}</h5>
                    <h5>{order.adress}</h5>
                    <h5>{order.cart.length}</h5>
                    <h5 className={styles.orderPrice}> {order.total}</h5>
                    <h5 className={order.payment==true?styles.orderStatusT:styles.orderStatusF}>{order.payment==true?'YES':'NO'}</h5>
                  </li>
                );
              })}
            </ul>
            </div>
    </div>
    
  );
};


export default DashBoardUserDetail;