import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Faq() {
  return (
    <div style={{ marginTop: "150px" }}>
        <h3>Pregutas frecuentes</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample" >
        <div class="accordion-item" >
          <h5 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{fontSize: '18px', color:'rgb(214, 137, 16)'}}
            >
              Puedo empezar en Henry sin conocimientos previos?
            </button>
          </h5>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
             Para iniciar en la carrera NO hace falta tener conocimientos previos, sera super importante que te apoyes en cada paso del proceso en tu comunidad. Ten en cuenta que tendras una vez por semana una clase especial, donde un/os TAs 'Teaching Assistant' estaran para asesorarte en toda tu instancia dentro de Henry.<br/>
             Tendras a tu disposicion los videos de cada clase para que puedas ver en el momento que sea necesario!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo "
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style={{fontSize: '18px', color:'rgb(214, 137, 16)'}}
            >
                Es un requicito la edad para comenzar?
            </button>
          </h5>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            Para comenzar a cursar en Henry tan solo  tienes que ser mayor de 18 años, es el unico requicito.
              <br />
              <br /> Si eres mayor de 18 años , ya puedes dar el primer paso sin miedo!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h5 class="accordion-header">
            <button
              class="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTree "
              aria-expanded="false"
              aria-controls="flush-collapseTree"
              style={{fontSize: '18px', color:'rgb(214, 137, 16)'}}
            >
                Que pasa si tengo algun dificultad  que no pueda continuar la cursada?
            </button>
          </h5>
          <div
            id="flush-collapseTree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
             En caso de que tengas algun tipo de inconveniente durnte la cursa que te impida seguir con la misma no te preocupes puedes comunicarte cualquier tipo de situacion a @Alumnos Henry  desde tu slack o bien mandando un mail. Ellos te daran las pautas de los pasos a seguir
              <br />
              <br /> Ten en cuenta que la comunicacion es una parte importante !
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .accordion-header:not(.collapsed) {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
}

export default Faq;
