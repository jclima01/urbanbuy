import React from 'react'

const OrderView = ({order}) => {
    console.log(order);
  return (
   
      <li key={order?._id}>
              {order?.adress} - {order?.status} - {order?.email}
              {/* Otros campos de la orden de compra */}
              {/* <button onClick={() => handleUpdateOrder(order._id)}>Update</button>
              <button onClick={() => handleDeleteOrder(order._id)}>Delete</button> */}
            </li>
   
  )
}

export default OrderView
