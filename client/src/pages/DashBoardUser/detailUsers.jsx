import React, { useState } from 'react';
import './detailUsers.css';

const DetailUsers = (props) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  return (
    <div>
      <button onClick={toggleDetalles}>View User</button>
      {mostrarDetalles && (
        <div className="overlay">
          <div className="detalles">
            {/* Contenido de los detalles del cliente */}
            <p>Nombre: {props.user.fullName}</p>
            <p>Email: {props.user.email}</p>
            <p>Orders: {props.user.order}2</p>
            <img src={props.user.avatar} alt={props.user.fullName} width="50px" className='imgAvatar' />

            <button onClick={toggleDetalles}>Cerrar</button>
          </div>


        </div>
      )}
    </div>
  );
};

export default DetailUsers;