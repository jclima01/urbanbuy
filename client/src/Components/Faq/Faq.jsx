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
                Puedo empezar en Henry sin conocimientos previos?
              </button>
            </h5>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Para iniciar en la carrera NO hace falta tener conocimientos
                previos, será super importante que te apoyes en cada paso del
                proceso en tu comunidad. Ten en cuenta que tendrás una vez por
                semana una clase especial, donde un/os TAs 'Teaching Assistant'
                estarán para asesorarte en toda tu instancia dentro de Henry.
                <br />
                Tendrás a tu disposición los videos de cada clase para que
                puedas verlos en el momento que sea necesario.
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
                ¿Es un requisito la edad para comenzar?
              </button>
            </h5>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Para comenzar a cursar en Henry tan solo tienes que ser mayor de
                18 años, ese es el único requisito.
                <br />
                <br /> Si eres mayor de 18 años, ¡ya puedes dar el primer paso
                sin miedo!
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
                ¿Qué pasa si tengo alguna dificultad que no me permita continuar
                la cursada?
              </button>
            </h5>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                En caso de que tengas algún tipo de inconveniente durante la
                cursada que te impida seguir con la misma, no te preocupes, puedes
                comunicar cualquier tipo de situación a @AlumnosHenry desde
                tu slack o bien enviando un correo electrónico. Ellos te darán las pautas de
                los pasos a seguir.
                <br />
                <br /> ¡Ten en cuenta que la comunicación es una parte importante!
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
