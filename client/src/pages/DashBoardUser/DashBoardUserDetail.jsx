import React from "react";
import { useSelector } from "react-redux";
import avatar from "../../assets/avatar.jpg";
import styles from "./DashBoardUserDetail.module.css";
const DashBoardUserDetail = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.userDetailContainer}>
      <div className={styles.header}>
        <img
          src={avatar}
          alt={user.fullName}
          width="50px"
          className="imgAvatar"
        />
        <h2>{user.fullName}</h2>
        <h4>{user.email}</h4>
      </div>

      <ul>
        <h2>User orders:</h2>
        {user?.orders?.map((order) => {
          return (
            <li className={styles.liUsers}>
              <h5>status: {order.status}</h5>
              <h5>Price: {order.total}</h5>
              <h5>payment: {order.payment.toString()}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashBoardUserDetail;
