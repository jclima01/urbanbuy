import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="container-footer">
      <p className="contacto">Datos de contacto:</p>
      <ul className="contacto">
        <li>urbanbuy8@gmail.com</li>
        <li>+1 01-2345-6789</li>
        <li>Horarios de atencion
          8:00 a 20:00 (GMT-3)
        </li>
      </ul>
      <p className="copy">
    © 2023 UrbanBuy. Todos los derechos reservados.
    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
  </p>
    </div>
  );
}

export default Footer;
