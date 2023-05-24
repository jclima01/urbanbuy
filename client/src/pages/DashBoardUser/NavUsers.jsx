import { useEffect, useRef,useState } from "react";
import { CiSearch } from "react-icons/ci"
import { useDispatch,useSelector } from "react-redux";
import { getClientAdminUsers, orderClientUsers,searchUsers } from "../../redux/actions";
import "./NavUsers.css"
const DashBoardNavUsers = () => {
 
  const clientAdmin = useSelector(state => state.clientAdmin)
  const order=useRef(null);
  const dispatch=useDispatch();
  
  const [searchTerm, setSearchTerm] = useState('');

 
  const handleInputChange = (e) =>{
    setSearchTerm(e.target.value);
  
    if(e.target.value!==''){
      dispatch(searchUsers(e.target.value));
      //users.filter(user=>user.fullName.tolowerCase().includes(searchTerm))
    }else{
      dispatch(getClientAdminUsers(clientAdmin._id))
    }
  
 }
 

 useEffect(() =>{ 

  dispatch(getClientAdminUsers(clientAdmin._id))

},[dispatch, clientAdmin._id])
 



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
