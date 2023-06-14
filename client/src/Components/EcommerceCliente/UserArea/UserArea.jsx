import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../../redux/actions/index.js";
import { useNavigate, Link } from 'react-router-dom';
import UploadAvatar from '../UploadAvatar/UploadAvatar.jsx'; 
import style from './UserArea.module.css';


function UserArea() {
  const user = useSelector((state) => state.user);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const dispatch = useDispatch();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setNewAvatar(event.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(user._id, newUsername, newEmail, newPassword, newAvatar))
      .then(() => {
        setNewUsername("");
        setNewEmail("");
        setNewPassword("");
        setNewAvatar("");
      })
      .then(navigate(`/${clientAdmin.domain}`))
      .catch((error) => {
        console.error("Error al actualizar los datos del usuario:", error);
      });
  };
  console.log("newAvatar:", newAvatar)
  return (
   
    <div className={style.container} >
      <h1>Área de Usuario</h1>
      <img src={newAvatar || user?.avatarName} alt="Avatar" className={style.avatar} />
      <div className={style.data}> 
        <p style={{marginTop:'15px'}}>Email: {user?.email}</p>
        <p>Nombre de Usuario: {user?.fullName}</p>
        {/* <p>Contraseña: {user?.password}</p> */}
      </div>
      <h5>Actualiza tus datos</h5>
      <input
        type="text"
        value={newUsername}
        onChange={handleUsernameChange}
        placeholder="Nuevo nombre de usuario"
        className={style.user}
      />

      <input
        type="text"
        value={newEmail}
        onChange={handleEmailChange}
        placeholder="Nuevo correo electrónico"
        className={style.user}
      /> 

      <input
        type="password"
        value={newPassword}
        onChange={handlePasswordChange}
        placeholder="Nueva contraseña"
        className={style.user}
      />
      <div className={style.upload}>
        <UploadAvatar
          avatarName={newAvatar}
          setavatarName={setNewAvatar}
        />
      </div>
      <button onClick={handleUpdate} className={style.actualizar}>Actualizar datos</button>
      <Link to='/:domain'>
        <button className={style.go}>Go Back</button>
      </Link>
    </div>
    
  );
}

export default UserArea;
