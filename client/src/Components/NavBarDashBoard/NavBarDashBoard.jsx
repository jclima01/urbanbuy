import { CiSearch } from "react-icons/ci"
import { IoIosNotificationsOutline } from "react-icons/io"
import { MdKeyboardArrowDown } from "react-icons/md"
import avatar from "../../assets/avatar.jpg";

const NavBarDashBoard = () => {
  return (
    <div>
        <div className="contianer-navBar">
          <div className="navbar ">
            <h1>
              Today <strong>DashBoard</strong>
            </h1>

            {/* <div className=" input-container-navbar">
              <input
                type="text"
                placeholder="Search..."
                className="inputsearch-navbar"
              />
              <hr />
              <CiSearch size={25} cursor={"pointer"} />
            </div> */}

            {/* <div className="d-flex  w-25  justify-content-evenly align-items-center ">
              <div className="notifications">
                <IoIosNotificationsOutline
                  size={30}
                  className="position-relative w-100 h-100"
                />
                <p className="p-notification ">1</p>
              </div>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <div className="avatar">
                  <img src={avatar} alt="" className="w-100 h-100" />
                </div>
                <div className="d-flex justify-content-center align-items-center ">
                  <div className="user-config">
                    <h3>UrbanBuy</h3>
                    <h4>User</h4>
                  </div>
                  <div className="btn cursor-pointer">
                    <MdKeyboardArrowDown size={20} />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default NavBarDashBoard
