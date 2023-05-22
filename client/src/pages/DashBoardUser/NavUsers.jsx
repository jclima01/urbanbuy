import { useRef } from "react";
import { CiSearch } from "react-icons/ci"
import { useDispatch } from "react-redux";
import { orderClientUsers,searchUsers } from "../../redux/actions";
import "./NavUsers.css"
const DashBoardNavUsers = () => {
 
  const order=useRef(null);
  
  const dispatch=useDispatch();


  const handleChange = (e)=>{
    dispatch(searchUsers(e.target.value));
 }

  {
    /* 
                    pestañas all users - user detail
                    ------------------------------
                    componente ordenamiento
                    --------------------------
                    componente search users
                    ----------------------------
                    componente paginado
                    ----------------------
                    componente filters
                    */
  }
  return (
    <>
      <div className="contentOrderSearchAndFilters">

        <div className="contentOrdenamiento">

          <select className="ordenamientoUsers" ref={order} onChange={(e)=>dispatch(orderClientUsers(e.target.value))} >
          <option  value="default">Ordenamiento</option>
            <option  value="fullName_az">FullName A-Z</option>
            <option value="fullName_za">FullName Z-A</option>
            <option  value="email_az">Mail A-Z</option>
            <option value="email_za">Mail Z-A</option>
          </select>
        </div>

        <div className="contentSearchUsers">

          <div className=" input-container-navbar inputSearchUser">
            <input
              type="text"
              placeholder="Search Users..."
              className="inputsearch-navbar"
              onChange={handleChange}
            />
            <hr />
            <CiSearch size={25} cursor={"pointer"} />
          </div>

        </div>

        <div className="filter">
          <select className="filters">
            <option value="Filters">Filters</option>
            <option value="Filters">Filter 1</option>
            <option value="Filters">Filter 2</option>
            <option value="Filters">Filter 3</option>
          </select>
        </div>
        
      </div>
    </>
  );
};

export default DashBoardNavUsers;
