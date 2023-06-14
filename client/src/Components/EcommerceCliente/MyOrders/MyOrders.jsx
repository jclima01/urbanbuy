import React, { useState, useEffect } from "react";
import './MyOrders.module.css';
import { getOrdersByUser } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MyOrders = () => {

  const dispatch = useDispatch();
  const userOrders = useSelector((state)=> state.ordersByUser);
  const user = useSelector((state) => state.user);
  

  useEffect(() => {
    
   
    dispatch(getOrdersByUser(user._id))
  
  }, [dispatch]);

  


  return (
    <div>
     
      <h5>My Orders</h5>
      {userOrders?.length > 0 ? (
        <table className="datosUser">
        <thead>
          <tr>
            <th>Status</th>
            <th>Full Name</th>
            <th>Email</th>
           
            <th>Total</th>
            <th>Cart</th>
            <th>Date</th>
            <th>Payment</th>
          
          </tr>
        </thead>
        <tbody>
          
          {userOrders?.map((order) => (
            <>
              <tr>
                <td>{order?.status}</td>
                <td>{order?.fullName}</td>
                <td>{order?.email}</td>
                {/* <td>{order?.adress}</td> */}
                <td>{order?.total}</td>
                <td className="carrito">
                  {order?.cart?.map((prod) => (
                    <React.Fragment>
                      {prod.productName}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
                <td>{order?.createdAt.slice(0, 10)}</td>
                <td>{order?.payment === true ? "yes" : "no"}</td>
               
              </tr>
            </>
          ))}
        </tbody>
      </table>
      
      ) : (
        <div>No orders found.</div>
      )}
    </div>
    
  );
  
};

export default MyOrders;