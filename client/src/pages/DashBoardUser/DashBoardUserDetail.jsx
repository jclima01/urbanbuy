import { useState } from "react";

const DashBoardUserDetail = () => {

  return (<>
    <div>DashBoardUserDetail</div>
    <div className="detalles">
            {/* Contenido de los detalles del cliente */}
            <p>Nombre: {props.user.fullName}</p>
            <p>Email: {props.user.email}</p>
            <p>Orders: {props.user.order}2</p>
            <img src={props.user.avatar} alt={props.user.fullName} width="50px" className='imgAvatar' />

            <button onClick={toggleDetalles}>Cerrar</button>
          </div>
          </>
  )
}

export default DashBoardUserDetail