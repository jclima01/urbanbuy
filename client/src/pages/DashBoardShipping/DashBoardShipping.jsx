import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderClient, deleteOrder } from "../../redux/actions";
import OrderView from "./OrderView";
import { CiSearch } from "react-icons/ci";

import "./DashBoardShipping.css";

const DashBoardShipping = () => {
  const dispatch = useDispatch();
  const clientAdminStorage =
    JSON.parse(localStorage.getItem("clientAdmin")) ?? false;
  const clientAdminId = clientAdminStorage._id;
  const orders = useSelector((state) => state.orders);

  const [show, setShow] = useState(false);
  //eslint-disable-next-line
  const handleShow = () => setShow(true);

  const [orderSelected, setOrderSelected] = useState("");

  const estadosOrden = [
    "Pending",
    "In Progress",
    "In Transition",
    "Dispatched",
    "Cancelled",
    "Received",
    "Reembold",
    "Proccess",
  ];

  const handlerClick = (orderId) => {
    const orderElegida = orders.find((order) => order._id === orderId);
    setOrderSelected(orderElegida);
    setShow(!show);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value !== "") {
      //dispatch(searchOrders(e.target.value));
      orders.filter((order) =>
        order.fullName.tolowerCase().includes(searchTerm)
      );
    } else {
      // dispatch(getClientAdminUsers(clientAdmin._id))
    }
  };

  const OrdenamientoOrders = (e) => {
    //(e)=>dispatch(orderClientUsers(e.target.value))
    //status - date -
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(orderClient(clientAdminId));
  }, [dispatch, clientAdminId]);

  return (
    <>
      <div className="containerTodoDashboarShipping">
        <OrderView
          show={show}
          setShow={setShow}
          orderSelected={orderSelected}
          clientId={clientAdminId}
        />
        <h1>{clientAdminStorage.fullName} Orders</h1>

        <div className="containerOrders">
          <div className="contentOrderSearchAndFilters">
            <div className="contentOrdenamiento">
              <select
                className="ordenamientoUsers"
                ref={orders}
                onChange={OrdenamientoOrders}
              >
                <option value="default">Ordenamiento</option>
                <option value="total_min">Total Min </option>
                <option value="total_max">Total Max </option>
                <option value="date_asc">Date Asc</option>
                <option value="date_des">Date Des</option>

                {/* test */}
              </select>
            </div>

            <div className="contentSearchUsers">
              <div className=" input-container-navbar inputSearchUser">
                <input
                  type="text"
                  placeholder="Search Users..."
                  className="inputsearch-navbar"
                  onChange={handleInputChange}
                />
                <hr />
                <CiSearch size={25} cursor={"pointer"} />
              </div>
            </div>

            <div className="filter">
              <select className="filters">
              {estadosOrden.map((estado, index) => (
                        <option
                          value={estado}
                          key={index}
                    
                        >
                          {estado}
                        </option>
                      ))}
              </select>
            </div>
          </div>
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
              {orders?.map((order) => (
                <tr key={order._id}>
                  {/* <td>{order._id}</td> */}
                  <td>
                    <select
                      disabled
                      name={"status-" + order._id}
                      className="seleccion"
                    >
                      {estadosOrden.map((estado, index) => (
                        <option
                          value={estado}
                          key={index}
                          selected={order?.status === estado}
                        >
                          {estado}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{order?.fullName}</td>
                  <td>{order?.email}</td>
                  <td>{order?.adress}</td>
                  <td>${order?.total}</td>
                  <td className="carrito">
                    {order?.cart?.map((prod) => (
                      <React.Fragment>
                        {prod}
                        {/* //hace falta ver el tema de como vienen el producto desde la base de datos */}
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                  <td>{order?.createdAt.slice(0, 10)}</td>
                  <td>{order?.payment === true ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn-boton"
                      onClick={() => handlerClick(order._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-boton"
                      onClick={() => dispatch(deleteOrder(order._id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoardShipping;
