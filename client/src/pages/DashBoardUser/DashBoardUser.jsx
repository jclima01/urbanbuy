import { useEffect, useState } from "react";
import "../DashBoardUser/DashBoardUser.css";

import DashBoardUsersConteiner from "./DashBoardUsersConteiner";

import DashBoardListUsers from "../DashBoardUser/ListUsers";
import DashBoardNavUsers from "./NavUsers";
import Pagination from "./Pagination/Pagination";
import DashBoardUserDetail from "./DashBoardUserDetail";
import { useDispatch, useSelector } from "react-redux";
import { getClientAdminUsers } from "../../redux/actions";
import OrderDetail from "../../Components/OrderDetail/OrderDetail";

const DashBoardUser = () => {
  const navTab = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    overflow: "hidden",
    paddingTop: "7px",
    height: "50px",
  };

  const tab = {
    backgroundColor: "#ff7f2a",
    width: "max-content",
    padding: "11px 20px 11px 20px",
    borderRadius: "10px",
    color: "white",
    marginRight: "8px",
    cursor: "pointer",
  };
  const tabActive = {
    backgroundColor: "white",
    width: "max-content",
    padding: "11px 20px 11px 20px",
    borderRadius: "10px",
    color: "black",
    border: "2px solid #ff7f2a",
    marginRight: "8px",
  };

  const [activeTab, setActiveTab] = useState("allUsers");

  const users = useSelector((state) => state.clientAdminUsers);

  const [actualPage, setActualPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

  const handleView = (pestanea) => {
    setActiveTab(pestanea);
  };

  const dispatch = useDispatch();
  const lastUserIndex = actualPage * usersPerPage;

  const firstUserIndex = lastUserIndex - usersPerPage;

  const usersSlice = users.slice(firstUserIndex, lastUserIndex);

  const clientAdmin = useSelector((state) => state.clientAdmin);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderSelect = (order) => {
    setSelectedOrder({ ...order });
    setActiveTab("orderDetail");
  };

  useEffect(() => {
    dispatch(getClientAdminUsers(clientAdmin._id));
  }, []);
console.log("ema", activeTab)
  return (
    <>
      <div className="contieneTodoDashboardUsers">
        <div className="navegateUser">
          <div style={navTab}>
            <button
              style={activeTab === "allUsers" ? tabActive : tab}
              onClick={() => handleView("allUsers")}
            >
              All Users
            </button>
            <button
              disabled={!selectedOrder}
              style={activeTab === "userDetail" ? tabActive : tab}
              onClick={() => handleView("userDetail")}
            >
              User Detail
            </button>
            <button
              disabled={!selectedOrder}
              style={activeTab === "orderDetail" ? tabActive : tab}
              onClick={() => handleView("orderDetail")}
            >
              Order Detail
            </button>
          </div>

          <div className="paginationUsers">
            {activeTab ? (
              <Pagination
                usersPerPage={usersPerPage}
                numberOfUsers={users.length}
                setActualPage={setActualPage}
              />
            ) : null}
          </div>
        </div>

        <div className="contentDashboardUsers">
          {activeTab === "allUsers" && (
            <>
              <DashBoardUsersConteiner
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                users={usersSlice}
                setActualPage={setActualPage}
              />
            </>
          )}

          {activeTab === "userDetail" && (
            <>
              <DashBoardUserDetail
                onOrderSelect={handleOrderSelect}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </>
          )}

          {activeTab === "orderDetail" && (
            <>
              <OrderDetail
                orderDetail={selectedOrder}
                setActiveTab={setActiveTab}
                activeTab={activeTab}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoardUser;
