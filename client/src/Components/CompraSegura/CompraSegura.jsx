import React from 'react';
import compra1 from '../../Img/compra1.avif';
import compra2 from '../../Img/compra2.avif';
import compra3 from '../../Img/compra3.avif';
import '../CompraSegura/CompraSegura.css';

function CompraSegura() {
  return (
    <div className="image-container">
      <div className="cardA">
        <img src={compra1} className="card-img-top" alt="..."  />
        <div className="card-body">
          <p className="card-text">
            
En UrbanBuy, entendemos que la seguridad es fundamental al comprar en línea. Por eso, hemos implementado una serie de medidas para garantizar que tu experiencia de compra sea segura y protegida en todo momento.
          </p>
        </div>
      </div>
      <div className="cardA">
        <img src={compra2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          En UrbanBuy, comprendemos la importancia de brindar un soporte eficiente y oportuno a nuestros usuarios. Por eso, hemos implementado un sistema de soporte en línea que te permite obtener ayuda y solucionar tus consultas de manera rápida y conveniente.
          </p>
        </div>
      </div>
      <div className="cardA">
        <img src={compra3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
          UrbanBuy es una plataforma de ventas en línea establecida y confiable. Al unirse a nuestra plataforma, los clientes obtienen acceso a una base de usuarios existente y a una audiencia más amplia. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompraSegura;
