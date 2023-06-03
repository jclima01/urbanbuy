

  import React, { useState, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  //import { fetchOrders, createOrder, updateOrder, deleteOrder } from "../redux/actions/orderActions";
  
  const OrderCRUD = (props) => {
    console.log(props);
    const orders = props.ordersUser;
    const dispatch = useDispatch();
    //const orders = useSelector((state) => state.orders); // Asegúrate de tener definido el estado 'orders' en tu Redux store
  
    // Estados locales para los campos de la orden de compra
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    // Otros campos de la orden de compra...
  
    // Función para cargar las órdenes de compra
    useEffect(() => {
     // dispatch(fetchOrders());
    }, [dispatch]);
  
    // Funciones para manipular las órdenes de compra
    const handleCreateOrder = () => {
      const newOrder = {
        address,
        status,
        email,
        // Otros campos de la orden de compra...
      };
      dispatch(createOrder(newOrder));
      // Reiniciar los campos de la orden de compra después de crearla
      setAddress("");
      setStatus("");
      setEmail("");
      // Otros campos de la orden de compra...
    };
  
    const handleUpdateOrder = (orderId) => {
      const updatedOrder = {
        id: orderId,
        address,
        status,
        email,
        // Otros campos de la orden de compra que desees actualizar...
      };
      dispatch(updateOrder(updatedOrder));
      // Reiniciar los campos de la orden de compra después de actualizarla
      setAddress("");
      setStatus("");
      setEmail("");
      // Otros campos de la orden de compra...
    };
  
    const handleDeleteOrder = (orderId) => {
      dispatch(deleteOrder(orderId));
    };
  
    return (
      <div>
        {/* Formulario para crear una nueva orden de compra */}
        <h2>Create Order</h2>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        {/* Otros campos del formulario de la orden de compra */}
        <button onClick={handleCreateOrder}>Create</button>
  
        {/* Listado de órdenes de compra */}
        <h2>Order List</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              {order.adress} - {order.status} - {order.email}
              {/* Otros campos de la orden de compra */}
              <button onClick={() => handleUpdateOrder(order.id)}>Update</button>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default OrderCRUD;
  