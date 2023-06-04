import React, { useEffect, useState } from "react";
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
  
const estadosOrden=[
  "Pending","In Progress","In Transition","Dispatched","Cancelled","Received","Reembold","Proccess"];


  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };
  const handleUpdateOrder= (orderId,e) => {
    
    console.log(e.target.value)
    
 
     //dispatch(updateOrder(orderId, status, adress));
    };
  
  
  

   useEffect(() => {
    dispatch(orderClient(clientAdminId));
    
  }, [dispatch]);
  
console.log(status,adress)
  
return <>
<div className="containerTodoDashboarShipping">
<h1>Ordenes de - {clientAdminStorage.fullName}</h1>
<div className="containerOrders">
    <table className="datosUser">
  <thead>
    <tr>
      {/* <th>Id</th> */}
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
        {/* <td>{order._id}</td> */}
        <td>
            <select name={"status-"+order._id} className="seleccion" onChange={(e)=>setStatus(e.target.value)}>
              {estadosOrden.map((estado,index) => (
              <option value={estado} key={index}  selected={order.status.toLowerCase()===estado.toLocaleLowerCase()}>{estado}</option>
              ))}
           </select>
        </td>
        <td>{order.fullName}</td>
        <td>{order.email.toLowerCase()}</td>
        <td><input className="direccion" name={"address-"+order._id} type="text" defaultValue={order.adress} onChange={(e) => setAdress(e.target.value)}/></td>
        <td>${order.total}</td>
        <td className="carrito">{order.cart?.map(prod=>(
          <React.Fragment>
          {prod}
          <br/>
          </React.Fragment>
          ))}
          </td>
        <td>{order.createdAt.slice(0,10)}</td>
        <td>{order.payment === true ? "Yes" : "No"}</td>
        <td>
          <button className="btn-boton" onClick={(e) => handleUpdateOrder(order._id)}>Update</button>
          <button className="btn-boton" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
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