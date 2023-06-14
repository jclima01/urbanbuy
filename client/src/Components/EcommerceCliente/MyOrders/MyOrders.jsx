import React, { useState, useEffect } from "react";
import style from './MyOrders.module.css';
import { getOrdersByUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MyOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user._id) {
      setLoading(true);
      dispatch(getOrdersByUser(user._id))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
  }, [dispatch, user]);

  if (!user) {
    return <div>Please log in to view your orders.</div>;
  }

  if (loading) {
    return <div>Loading orders...</div>;
  }

  const userOrders = orders?.filter((order) => order.userId === user._id);
console.log("ema", orders)
  return (
    <div>
      <h5>My Orders</h5>
      {userOrders?.length > 0 ? (
        <ul>
          {userOrders.map((order) => (
            <li key={order.id}>{order.title}</li>
          ))}
        </ul>
      ) : (
        <div>No orders found.</div>
      )}
    </div>
  );
};

export default MyOrders;