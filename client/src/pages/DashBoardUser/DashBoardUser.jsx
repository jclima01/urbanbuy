import { useState } from "react";
import "../DashBoardUser/DashBoardUser.css";
import PaginadoUser from "./PaginadoUser";
import DashBoardUserDetail from "./DashBoardUserDetail";
import DashBoardUsersConteiner from "./DashBoardUsersConteiner";

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


  const [activeTab, setActiveTab] = useState(true);
  const handleView = () => {
    setActiveTab(!activeTab);
  };

  return (
    <>
      <div className="contieneTodoDashboardUsers">
        <div className="navegateUser">
          <div style={navTab}>
            <div style={tabActive} onClick={handleView}>
              All Users
            </div>
            <div style={tab} onClick={handleView}>
              User Detail
            </div>
          </div>
          <div className="paginationUsers">
            <PaginadoUser />
          </div>
        </div>

        <div className="contentDashboardUsers">
          {activeTab ? (
            <>
              <DashBoardUsersConteiner/>
              
            </>
          ) : (
            <DashBoardUserDetail />
          )}
        </div>
      </div>
    </>
  );
};

export default DashBoardUser;
