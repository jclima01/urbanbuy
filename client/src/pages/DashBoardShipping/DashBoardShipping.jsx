import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  orderClient } from "../../redux/actions";
import "./DashBoardShipping.css";



const DashBoardShipping =() => {
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const orders = useSelector((state) => state.orders);
 
  

  const clientAdmin = useSelector((state) => state.clientAdmin);
  

   //Get All Users of 
   useEffect(() => {
    dispatch(orderClient(clientAdminId));
    
  }, [dispatch]);
  
console.log("response", orders);
  
return <>

<h1>Ordenes de - {clientAdminStorage.fullName}</h1>
    <table className="datosUser">
  <thead>
    <tr>
      <th>Id</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Total</th>
      <th>Cart</th>
      <th>Permissions</th>
      <th>Payment</th>
      <th>Options</th>
    </tr>
  </thead>
   <tbody>
   {orders?.data?.map((order) => (
      <tr key={order._id}>
        <td>
          {order._id}
        </td>
        <td>{order.fullName}</td>
        <td>{order.email}</td>
        <td>{order.adress}</td>
        <td>{order.total}</td>
        <td>{order.Cart}</td>
        <td>{order.permissions}</td>
        <td>{order.payment}</td>
        <td>
          <button onClick={() => handleUpdateOrder(order._id)}>Update</button>
          <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
                  
  
</>

};

export default DashBoardShipping