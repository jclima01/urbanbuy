import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  orderClient, deleteOrder, updateOrder } from "../../redux/actions";
import "./DashBoardShipping.css";



const DashBoardShipping =() => {
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const orders = useSelector((state) => state.orders);
 const [status, setStatus] = useState("")
  const [adress, setAdress] = useState("")

  const clientAdmin = useSelector((state) => state.clientAdmin);
  
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  const handleUpdateOrder = (orderId) => {
    
     setStatus("Nuevo estado")
    setAdress("nueva direccion")
     
     dispatch(updateOrder(orderId, status, adress));
    };
  
  
  

   useEffect(() => {
    dispatch(orderClient(clientAdminId));
    
  }, [dispatch,updateOrder]);
  
console.log(adress)
  
return <>
<div className="containerTodoDashboarShipping">
<h1>Ordenes de - {clientAdminStorage.fullName}</h1>
<div className="containerOrders">
    <table className="datosUser">
  <thead>
    <tr>
      <th>Id</th>
      <th>Status</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Total</th>
      <th>Cart</th>
      <th>Date</th>
      <th>Payment</th>
      <th>Options</th>
    </tr>
  </thead>
   <tbody>
   {orders?.data?.map((order) => (
      <tr key={order._id}>
        <td>{order._id}</td>
        <td>{order.status}</td>
        <td>{order.fullName}</td>
        <td>{order.email}</td>
        <td><input name="address" type="text" defaultValue={order.adress} onChange={(e) => setAdress(e.target.value)}/></td>
        <td>{order.total}</td>
        <td>{order.cart?.map(prod=>prod)}</td>
        <td>{order.createdAt}</td>
        <td>{order.payment === true ? "Yes" : "No"}</td>
        <td>
          <button onClick={() => handleUpdateOrder(order._id)}>Update</button>
          <button onClick={() => handleDeleteOrder(order._id)}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
</div>
</>

};

export default DashBoardShipping;