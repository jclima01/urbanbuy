
import "../DashBoardUser/ListUsers.css";
import { useEffect, useState } from "react";
// import DetailUsers from "../DashBoardUser/detailUsers";
import { getClientAdminUsers, getUserById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/avatar.jpg";
//props que estan desestructuradas
//eslint-disable-next-line
const DashBoardListUsers = ({setActiveTab,activeTab,setActualPage,users}) => {
  //eslint-disable-next-line 
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const clientAdmin = useSelector((state) => state.clientAdmin);

  

  const handleClick = (user) => {
    setSelectedUser(user);
    dispatch(getUserById(user._id));
    setActiveTab("userDetail");
    setActualPage(1)
  };

  useEffect(() => {
    dispatch(getClientAdminUsers(clientAdmin._id));
    //eslint-disable-next-line 
  }, []);


  
 
  return (
    <div className="contentAllUser">

            <div>            
                <ul className='listUl'>
                  <li>Avatar </li><li>FullName </li><li>Email </li><li>Permision </li><li>Options</li>
                </ul>
            
               <ul className='datosUser'>
                 {users.map(user => <li className='liUsers' key={user._id}>
                  <h6><img src={avatar} alt={user.fullName} width="50px" className='imgAvatar' /></h6>
                  <h6>{user.fullName}</h6>
                  <h6>{user.email}</h6>
                  <h6>{user.permissions}</h6>
                  <button className='buttonView' onClick={() => handleClick(user)}>View User</button>
                  
                  </li>)}
                  
                  </ul>
                  
             </div>
          
        
     
    </div>
  );
};

export default DashBoardListUsers;
