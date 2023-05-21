import '../DashBoardUser/ListUsers.css'
import { User } from '../../data.js';


const DashBoardListUsers = () => {

//   const listaUser = {};
//   datos.forEach(User => {
//     if (!listaUser[User.id]) {
//       const li = document.createElement('li');
//       li.textContent = `${User.avatar} - ${User.email}`;
//       ul.appendChild(li);
// }})
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
                </ul>
            </div> 
              <div >
               <ul className='datosUser'>
                 {User.map(user => <li>
                  <img src={user.avatar} alt={user.fullName} width="50px" />
                  <h6>{user.fullName}</h6>
                  <h6>{user.email}</h6>
                  <h6>{user.permissions}</h6>
                  <button>View User</button>
                 </li>)}
                  
                  </ul>

             </div>
            <span>
              
            </span>
    </div>
  );
};






export default DashBoardListUsers;