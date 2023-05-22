import '../DashBoardUser/ListUsers.css'
import { useEffect, useState } from 'react';
import DetailUsers from '../DashBoardUser/detailUsers';
import { getClientAdminUsers } from '../../redux/actions';
import {useDispatch, useSelector} from "react-redux"
import avatar from '../../assets/avatar.jpg'
const DashBoardListUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch()
const clientAdmin = useSelector(state => state.clientAdmin)
const users = useSelector(state => state.clientAdminUsers)

  const handleClick = (user) => {
    setSelectedUser(user);
 
  };
  
  
  useEffect(() => {
   dispatch(getClientAdminUsers(clientAdmin._id))
  },[]);

  return (
  
    <div className="contentAllUser">
      {/* trabajas ema con los titulos de columnas
                  -------------------------------
                  lista de usuarios avatar ,
                  boton para entrar al detalle */}
            <div>            
                <ul className='listUl'>
                  <li>Avatar </li> 
                 
                  <li>FullName </li>
                 
                  <li>Email </li>
                  
                  <li>Permision </li>
                  
                  <li>Options</li>

                  <li></li>
                </ul>
            </div> 
              <div >
               <ul className='datosUser'>
                 {users.map(user => <li className='liUsers'>
                  <img src={avatar} alt={user.fullName} width="50px" className='imgAvatar' />
                  <h6>{user.fullName}</h6>
                  <h6>{user.email}</h6>
                  <h6>{user.permissions}</h6>
                  <button className='buttonView' onClick={() => handleClick(user)}>{selectedUser && <DetailUsers user={selectedUser} />}</button>
                  <h6 className='puntosUser'>···</h6>
                  </li>)}
                  
                  </ul>
                  
             </div>
             
    </div>
  );
};






export default DashBoardListUsers;