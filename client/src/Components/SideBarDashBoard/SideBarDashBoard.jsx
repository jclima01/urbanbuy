import { BsGraphUpArrow } from "react-icons/bs";
import { CiEdit, CiHome, CiPenpot, CiSettings, CiUser } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../assets/urbenbuy.png";
import containerlogo from "../../assets/formalogo.png";
import { Link } from "react-router-dom";

const SideBarDashBoard = () => {
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
            <img src={logo} alt="" className="imagenlogo" />
          </div>
          <div className=" h-50  ">
            <ul className="d-flex flex-column justify-content-evenly list-unstyled align-items-center gap-4 h-75">
              <Link to={"dashboard"}>
                <li className="isActive">
                  <CiHome size={30} />
                </li>
              </Link>
              <Link to={"dashboard/user"}>
                <li className=" btn cursor-pointer">
                  <CiUser size={30} />
                </li>
              </Link>
              <Link to={"dashboard/Edit"}>
                <li className="btn cursor-pointer">
                  <CiEdit size={30} />
                </li>
              </Link>
              <Link to={"dashboard/products"}>
                <li className="btn cursor-pointer">
                  <CiPenpot size={30} />
                </li>
              </Link>
              <Link to={"dashboard/Shipping"}>
              <li className="btn cursor-pointer">
                <BsGraphUpArrow size={30} />
              </li>
              </Link>
              <Link to={"dashboard/settings"}>
              <li className="btn cursor-pointer">
                <CiSettings size={30} />
              </li>
              </Link>
            </ul>
          </div>
            <Link to={'/'}>
          <div className="mb-5 btn cursor-pointer ">
            <RiLogoutCircleRLine size={30} />
          </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashBoard;
