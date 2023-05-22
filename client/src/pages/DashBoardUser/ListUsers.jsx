import '../DashBoardUser/ListUsers.css'
import {useState } from 'react';
import DetailUsers from '../DashBoardUser/detailUsers';
import avatar from '../../assets/avatar.jpg'
import { useSelector } from 'react-redux';
const DashBoardListUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const users=useSelector(state=>state.clientAdminUsers)
 
  const handleClick = (user) => {
    setSelectedUser(user);
    console.log(user);
   };

  
 
  return (
  
    <div className="contentAllUser">
      {/* trabajas ema con los titulos de columnas
                  -------------------------------
                  lista de usuarios avatar ,
                  boton para entrar al detalle */}
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