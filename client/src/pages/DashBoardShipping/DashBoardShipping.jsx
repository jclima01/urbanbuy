import React, { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  orderClient,
  sortOrdersByDate,
  filterOrders,
  searchOrders,
} from "../../redux/actions";
import OrderView from "./OrderView";
import { CiSearch } from "react-icons/ci";

import "./DashBoardShipping.css";

const DashBoardShipping = () => {
  const dispatch = useDispatch();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const clientAdminId = clientAdmin._id;
  const orders = useSelector((state) => state.orders);
  // console.log("response", clientAdmin)
  const filter = useRef(null);
  const order = useRef(null);

  const [show, setShow] = useState(false);
  //eslint-disable-next-line
  const handleShow = () => setShow(true);

  const [orderSelected, setOrderSelected] = useState("");
  const [filterSelected, setFilterSelected] = useState("All");

  const estadosOrden = [
    "Pending",
    "In Progress",
    "In Transition",
    "Dispatched",
    "Cancelled",
    "Received",
    "Refund",
    "Proccess",
  ];

  const handlerClick = (orderId) => {
    const orderElegida = orders.find((order) => order._id === orderId);
    setOrderSelected(orderElegida);
    setShow(!show);
  };

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      dispatch(searchOrders(e.target.value));
    } else {
      dispatch(orderClient(clientAdminId));
    }
  };

  const OrdenamientoOrders = (e) => {
    //(e)=>dispatch(orderClientUsers(e.target.value))
    //status - date -
    dispatch(sortOrdersByDate(e.target.value));
    console.log(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterSelected(e.target.value);
    if (e.target.value === "All") {
      dispatch(orderClient(clientAdminId));
    } else {
      dispatch(filterOrders(e.target.value));
    }
  };

  useEffect(() => {
    dispatch(orderClient(clientAdminId));
  }, [dispatch, clientAdminId]);

  console.log(clientAdminId);
  return (
    <>
      <div className="containerTodoDashboarShipping">
        <OrderView
          show={show}
          setShow={setShow}
          orderSelected={orderSelected}
          clientId={clientAdminId}
        />
        <h1>{clientAdmin.fullName} Orders</h1>

        <div className="containerOrders">
          <div className="contentOrderSearchAndFilters">
            <div className="contentOrdenamiento">
              <select
                className="ordenamientoUsers"
                ref={order}
                onChange={OrdenamientoOrders}
              >
                <option value="default">Ordering</option>
                <option value="total_min">Total Min </option>
                <option value="total_max">Total Max </option>
                <option value="date_asc">Date Asc</option>
                <option value="date_des">Date Des</option>
              </select>
            </div>

            <div className="contentSearchUsers">
              <div className=" input-container-navbar inputSearchUser">
                <input
                  type="text"
                  placeholder="Search Orders by fullname..."
                  className="inputsearch-navbar"
                  onChange={handleInputChange}
                />
                <hr />
                <CiSearch size={25} cursor={"pointer"} />
              </div>
            </div>

            <div className="filter">
              <select className="filters" ref={filter} onChange={handleFilter}>
                <option value="All">All</option>
                {estadosOrden.map((estado, index) => (
                  <option value={estado} key={index}>
                    {estado}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <table className="datosUser">
            <thead>
              <tr>
                <th>Status</th>
                <th>Full Name</th>
                <th>Email</th>
                {/* <th>Address</th> */}
                <th>Total</th>
                <th>Cart</th>
                <th>Date</th>
                <th>Payment</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {console.log("eze", orders)}
              {orders?.map((order) => (
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
                    <td>
                      <button
                        className="btn-boton"
                        onClick={() => handlerClick(order._id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoardShipping;
