import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClientAdminUsers, orderClient } from "../../redux/actions";

const DashBoardShipping =() => {
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const orders = useSelector((state) => state.orders);
 
  

  const clientAdmin = useSelector((state) => state.clientAdmin);
  

  // const handleClick = (user) => {
  //   setSelectedUser(user);
  //   //dispatch(getUserById(user._id));
  //   setActiveTab("userDetail");
  //   setActualPage(1)
  // };

   //Get All Users of 
   useEffect(() => {
    dispatch(orderClient(clientAdminId));
    
  }, [dispatch,orderClient]);
  
console.log("response", orders);
  
return <>

<h1>Actualizando</h1>
<div>
      <h2>User List Cliente Administrador - Vendedor</h2>
      <ul >
              <li>Id:</li><li>FullName:</li><li>Status:</li><li>Payment:</li><li>Email:</li><li>Cart:</li><li>Total: $</li><li>Adress:</li>
              <li>User:</li><li>CreatedAt:</li><li>UpdateAt:</li>
              </ul>
              <ul>
                
              <h2>Order List</h2>
        <ul>
          {orders.data && orders.data.map((order) => (
            <li key={order._id}>
              {order._id} - {order.fullName} - {order.status} - {order.payment === true ? "yes" : "no"} - {order.email} - {order.cart} - {order.total} - {order.adress} - {order.user} - {order.createdAt} - {order.updatedAt}
              {/* Otros campos de la orden de compra */}
              <button onClick={() => handleUpdateOrder(order.id)}>Update</button>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
            </ul>
    </div>
</>

};

export default DashBoardShipping;