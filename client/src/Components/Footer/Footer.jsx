import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="container-footer">
      <p className="contacto">Datos de contacto :</p>
      <ul className="lista">
        <li>email</li>
        <li>Telefono</li>
        <li>Horarios de atencion</li>
      </ul>
      <p className="copy">copyright@2023 UrbanBuy </p>
    </div>
  );
}

export default Footer;
