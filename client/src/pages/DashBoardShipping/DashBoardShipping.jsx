import { useEffect, useState } from "react";


// import DashBoardUsersConteiner from "./DashBoardUsersConteiner";


// import Pagination from "./Pagination/Pagination";
// import DashBoardUserDetail from "./DashBoardUserDetail";
// import OrderDetailCrud from "./OrderDetailCrud/OrderDetailCrud";
import { useDispatch, useSelector } from "react-redux";
 import { getClientAdminUsers, getOrdersByUser } from "../../redux/actions";
import OrderView from "./OrderView";



const DashBoardShipping =() => {
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const users = useSelector((state) => state.clientAdminUsers);
 
  
  const [selectedUser, setSelectedUser] = useState(null);

  const clientAdmin = useSelector((state) => state.clientAdmin);
  

  // const handleClick = (user) => {
  //   setSelectedUser(user);
  //   //dispatch(getUserById(user._id));
  //   setActiveTab("userDetail");
  //   setActualPage(1)
  // };

   //Get All Users of 
   useEffect(() => {
    dispatch(getClientAdminUsers(clientAdminId));
    
  }, [dispatch,getOrdersByUser]);
  

  const ordenes =users.filter((usuario) => usuario.orders.length > 0).map((usuario)=>usuario.orders);
console.log(ordenes);

   
  

return <>

<h1>Actualizando</h1>
<div>
      <h2>User List Cliente Administrador - Vendedor</h2>
      <ul >
              <li>status:</li><li>date:</li><li>created:</li><li>prod:</li><li>price:</li><li>payment</li><li>option</li>
              </ul>
              <ul>
                
              <h2>Order List</h2>
        <ul>
          {/* {ordenes?.map((order) => (
            <OrderView key={order._id} order={order}/>
          ))} */}
        </ul>
            </ul>
    </div>
</>

};

export default DashBoardShipping