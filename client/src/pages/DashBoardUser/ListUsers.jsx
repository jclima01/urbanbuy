import '../DashBoardUser/ListUsers.css'
import { User } from '../../data.js';
import { useEffect, useState } from 'react';



const DashBoardListUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
    mostrarDetalles(user);
  };
  function mostrarDetalles() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('detalles').style.display = 'block';
  }
  
 
  useEffect(() => {
   
  },[selectedUser]);
console.log(selectedUser);
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
                 {User.map(user => <li className='liUsers'>
                  <img src={user.avatar} alt={user.fullName} width="50px" className='imgAvatar' />
                  <h6>{user.fullName}</h6>
                  <h6>{user.email}</h6>
                  <h6>{user.permissions}</h6>
                  <button className='buttonView' onClick={() => handleClick(user)}>View User</button>
                  <h6 className='puntosUser'>···</h6>
                  </li>)}
                  
                  </ul>

             </div>
            <span>
              
            </span>
    </div>
  );
};






export default DashBoardListUsers;