import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import style from "./Faq.module.css";

function Faq() {
  return (
    <div className={style.container}>
      <div>
        <h3>Preguntas frecuentes</h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h5 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{ fontSize: "18px", color: "rgb(214, 137, 16)" }}
              >
                Es seguro que mis clientes compren desde mi e-commerce?
              </button>
            </h5>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              UrbanBuy nos preocupamos por tu seguridad al comprar en línea. Nuestra plataforma está diseñada para garantizar que tus datos estén protegidos, tus transacciones sean seguras y puedas disfrutar de una experiencia de compra confiable. Estamos comprometidos en brindarte un entorno seguro y confiable para que puedas comprar con tranquilidad y confianza.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{ fontSize: "18px", color: "rgb(214, 137, 16)" }}
              >
                Cuento con asesores?
              </button>
            </h5>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
               Puedes comunicarte por correo electrónico, también puedes contactarnos a través de nuestra dirección de correo electrónico de soporte. Simplemente envíanos tu consulta o problema, y nuestro equipo de soporte responderá lo más pronto posible para brindarte la ayuda necesaria.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{ fontSize: "18px", color: "rgb(214, 137, 16)" }}
              >
               Puedo incrementar mis ventas?
              </button>
            </h5>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              UrbanBuy es una plataforma de ventas en línea establecida y confiable. Al unirse a nuestra plataforma, los clientes obtienen acceso a una base de usuarios existente y a una audiencia más amplia. Esto significa que sus productos y negocios tendrán una mayor visibilidad frente a potenciales compradores, lo que puede resultar en un aumento en las ventas y, por ende, en las ganancias.
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
          .accordion-header:not(.collapsed) {
            background-color: #f5f5f5;
          }
          `}
        </style>
      </div>
    </div>
  );
}

export default Faq;
