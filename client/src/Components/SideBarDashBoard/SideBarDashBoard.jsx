import { BsGraphUpArrow } from "react-icons/bs";
import { CiEdit, CiHome, CiPenpot, CiSettings, CiUser } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../assets/urbenbuy.png";
import containerlogo from "../../assets/formalogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logOutClientAdmin } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SideBarDashBoard = () => {
  const [isActive, setisActive] = useState("Home");
  const dispatch = useDispatch()
  const handleIsActiveHover = (value) => {
    setisActive(value);
  };

const logout = () => {
  dispatch(logOutClientAdmin())
}

  return (
    <div>
      <div className="sidebarMenu  ">
        <img
          src={containerlogo}
          alt="caontainer logo"
          className="contianerlogo"
        />

        <div className="d-flex h-100  flex-column justify-content-between align-items-center p-3">
          <div className="logo">
            <Link to={"dashboard"} onClick={() => handleIsActiveHover("Home")}>
              <img src={logo} alt="" className="imagenlogo" />
            </Link>
          </div>
          <div className=" h-50  ">
            <ul className="d-flex flex-column justify-content-evenly list-unstyled align-items-center gap-4 h-75">
              <Link to={"dashboard"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("Home")}
                  className={isActive === "Home" ? "isActive" : "btn"}
                >
                  <CiHome size={30} />
                </li>
              </Link>
              <Link to={"dashboard/User"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("User")}
                  className={isActive === "User" ? "isActive" : " btn"}
                >
                  <CiUser size={30} />
                </li>
              </Link>
              {/* <Link to={"dashboard/Edit"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("Edit")}
                  className={isActive === "Edit" ? "isActive" : " btn"}
                >
                  <CiEdit size={30} />
                </li>
              </Link> */}
              <Link to={"dashboard/products"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("Products")}
                  className={isActive === "Products" ? "isActive" : " btn"}
                >
                  <CiPenpot size={30} />
                </li>
              </Link>
              {/* <Link to={"dashboard/Shipping"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("Shipping")}
                  className={isActive === "Shipping" ? "isActive" : "btn"}
                >
                  <BsGraphUpArrow size={25} />
                </li>
              </Link> */}
              {/* <Link to={"dashboard/settings"} className="custom-link">
                <li
                  onClick={() => handleIsActiveHover("Settings")}
                  className={isActive === "Settings" ? "isActive" : "btn"}
                >
                  <CiSettings size={30} />
                </li>
              </Link> */}
            </ul>
          </div>
          <div onClick={logout}>
            <div className="mb-5 btn cursor-pointer ">
              <RiLogoutCircleRLine size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashBoard;
